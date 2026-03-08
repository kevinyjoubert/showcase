import { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../../components/contract-analysis/ui/button';
import type { Message, Phase } from '../../hooks/useContractAnalysis';

interface AIChatProps {
  phase: Phase;
  messages: Message[];
  isLoading: boolean;
  apiKey: string;
  onSetApiKey: (key: string) => void;
  onStartAnalysis: (observation?: string) => void;
  onSendMessage: (content: string) => void;
}

function LoadingDots() {
  return (
    <span className="inline-flex gap-0.5">
      <span className="animate-bounce text-muted-foreground" style={{ animationDelay: '0ms' }}>.</span>
      <span className="animate-bounce text-muted-foreground" style={{ animationDelay: '150ms' }}>.</span>
      <span className="animate-bounce text-muted-foreground" style={{ animationDelay: '300ms' }}>.</span>
    </span>
  );
}

export default function AIChat({
  phase,
  messages,
  isLoading,
  apiKey,
  onSetApiKey,
  onStartAnalysis,
  onSendMessage,
}: AIChatProps) {
  const [observation, setObservation] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [keyInput, setKeyInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // API key prompt
  if (!apiKey) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
        <p className="text-sm text-muted-foreground text-center">
          Informe sua chave da API Gemini para continuar
        </p>
        <input
          type="password"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          placeholder="AIza..."
          className="w-full max-w-xs rounded-md border border-input bg-background px-3 py-2 text-sm"
        />
        <Button size="sm" onClick={() => onSetApiKey(keyInput)} disabled={!keyInput.trim()}>
          Confirmar
        </Button>
      </div>
    );
  }

  // Observation phase
  if (phase === 'observation') {
    return (
      <div className="flex h-full flex-col items-center justify-center p-8 animate-in fade-in duration-200">
        <div className="w-full max-w-md space-y-4">
          <h2 className="text-lg font-medium text-foreground">Análise Inteligente</h2>
          <p className="text-sm text-muted-foreground">
            Deseja adicionar alguma observação antes de iniciarmos a análise? Escreva abaixo ou clique em Prosseguir.
          </p>
          <textarea
            value={observation}
            onChange={(e) => setObservation(e.target.value)}
            placeholder="Ex: Preste atenção especial nas cláusulas de rescisão..."
            rows={3}
            className="w-full resize-y rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          />
          <div className="flex gap-2">
            <Button onClick={() => onStartAnalysis()}>
              Prosseguir
            </Button>
            <Button
              variant="outline"
              onClick={() => onStartAnalysis(observation)}
              disabled={!observation.trim()}
            >
              Enviar
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Chat / analyzing phase
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-lg px-4 py-3 text-sm whitespace-pre-wrap ${msg.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground'
                }`}
            >
              {msg.content}
              {msg.role === 'assistant' && isLoading && messages[messages.length - 1]?.id === msg.id && (
                <LoadingDots />
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {(phase === 'chat' || phase === 'analyzing') && (
        <div className="border-t border-border p-3">
          <form
            className="flex gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              if (chatInput.trim() && !isLoading) {
                onSendMessage(chatInput.trim());
                setChatInput('');
              }
            }}
          >
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              placeholder="Faça uma pergunta sobre o contrato..."
              disabled={isLoading}
              className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50"
            />
            <Button type="submit" size="icon" disabled={isLoading || !chatInput.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
