import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export type Phase = 'upload' | 'observation' | 'analyzing' | 'chat';

interface ContractState {
  file: File | null;
  pdfUrl: string | null;
  messages: Message[];
  isLoading: boolean;
  phase: Phase;
  apiKey: string;
  extractedText: string;
}

const GEMINI_API_URL =
  'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';

function createMessage(role: 'user' | 'assistant', content: string): Message {
  return { id: crypto.randomUUID(), role, content, timestamp: new Date() };
}

export function useContractAnalysis() {
  const [state, setState] = useState<ContractState>({
    file: null,
    pdfUrl: null,
    messages: [],
    isLoading: false,
    phase: 'upload',
    apiKey: import.meta.env.VITE_GEMINI_API_KEY ?? '',
    extractedText: '',
  });

  const setApiKey = useCallback((key: string) => {
    setState((s) => ({ ...s, apiKey: key }));
  }, []);

  const setFile = useCallback((file: File) => {
    const url = URL.createObjectURL(file);
    setState((s) => ({ ...s, file, pdfUrl: url, phase: 'observation' }));
  }, []);

  const setExtractedText = useCallback((text: string) => {
    setState((s) => ({ ...s, extractedText: text }));
  }, []);

  const callGemini = useCallback(
    async (prompt: string): Promise<string> => {
      const res = await fetch(`${GEMINI_API_URL}?key=${state.apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      });
      if (!res.ok) {
        const err = await res.text();
        throw new Error(`Erro na API Gemini: ${res.status} — ${err}`);
      }
      const data = await res.json();
      return (
        data.candidates?.[0]?.content?.parts?.[0]?.text ??
        'Não foi possível gerar uma resposta.'
      );
    },
    [state.apiKey],
  );

  const buildAnalysisPrompt = useCallback(
    (observation?: string) => {
      let prompt = `Você é um especialista em análise jurídica de contratos. Analise o contrato fornecido e:

1. Identifique as cláusulas principais
2. Aponte riscos e pontos de atenção
3. Sugira melhorias
4. Destaque obrigações de cada parte



--- CONTRATO ---
${state.extractedText}
--- FIM DO CONTRATO ---`;

      if (observation?.trim()) {
        prompt += `\n\nObservação adicional do usuário: ${observation}`;
      }
      return prompt;
    },
    [state.extractedText],
  );

  const startAnalysis = useCallback(
    async (observation?: string) => {
      setState((s) => ({
        ...s,
        phase: 'analyzing',
        isLoading: true,
        messages: [createMessage('assistant', 'Analisando seu contrato...')],
      }));

      try {
        const prompt = buildAnalysisPrompt(observation);
        const response = await callGemini(prompt);
        setState((s) => ({
          ...s,
          isLoading: false,
          phase: 'chat',
          messages: [createMessage('assistant', response)],
        }));
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : 'Erro desconhecido';
        setState((s) => ({
          ...s,
          isLoading: false,
          phase: 'chat',
          messages: [createMessage('assistant', `❌ ${errorMsg}`)],
        }));
      }
    },
    [buildAnalysisPrompt, callGemini],
  );

  const sendMessage = useCallback(
    async (content: string) => {
      const userMsg = createMessage('user', content);
      setState((s) => ({
        ...s,
        isLoading: true,
        messages: [...s.messages, userMsg],
      }));

      try {
        const conversationContext = state.messages
          .map((m) => `${m.role === 'user' ? 'Usuário' : 'Assistente'}: ${m.content}`)
          .join('\n');

        const prompt = `Contexto do contrato:\n${state.extractedText}\n\nConversa anterior:\n${conversationContext}\n\nUsuário: ${content}\n\nResponda de forma objetiva e profissional sobre o contrato.`;
        const response = await callGemini(prompt);
        setState((s) => ({
          ...s,
          isLoading: false,
          messages: [...s.messages, createMessage('assistant', response)],
        }));
      } catch (err) {
        const errorMsg =
          err instanceof Error ? err.message : 'Erro desconhecido';
        setState((s) => ({
          ...s,
          isLoading: false,
          messages: [
            ...s.messages,
            createMessage('assistant', `❌ ${errorMsg}`),
          ],
        }));
      }
    },
    [state.messages, state.extractedText, callGemini],
  );

  return {
    ...state,
    setFile,
    setApiKey,
    setExtractedText,
    startAnalysis,
    sendMessage,
  };
}
