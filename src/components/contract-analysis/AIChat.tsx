import { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Bot } from 'lucide-react';
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

function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="flex items-center gap-3 max-w-[85%]">
        <div
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
        >
          <Bot className="h-3.5 w-3.5" style={{ color: 'hsl(var(--primary))' }} />
        </div>
        <div className="rounded-2xl rounded-tl-sm border border-border bg-muted/60 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-muted-foreground mr-1">Analisando</span>
            {[0, 150, 300].map((delay) => (
              <span
                key={delay}
                className="h-1.5 w-1.5 rounded-full animate-bounce"
                style={{
                  backgroundColor: 'hsl(var(--primary) / 0.6)',
                  animationDelay: `${delay}ms`,
                  animationDuration: '900ms',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
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
  }, [messages, isLoading]);

  // API key prompt
  if (!apiKey) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
        >
          <Sparkles className="h-6 w-6" style={{ color: 'hsl(var(--primary))' }} />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">Chave da API</p>
          <p className="mt-1 text-xs text-muted-foreground">Informe sua chave para iniciar a análise</p>
        </div>
        <input
          type="password"
          value={keyInput}
          onChange={(e) => setKeyInput(e.target.value)}
          placeholder="AIza..."
          className="w-full max-w-xs rounded-lg border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          onKeyDown={(e) => e.key === 'Enter' && keyInput.trim() && onSetApiKey(keyInput)}
        />
        <button
          onClick={() => onSetApiKey(keyInput)}
          disabled={!keyInput.trim()}
          className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white disabled:opacity-40 transition-opacity hover:opacity-90"
          style={{ backgroundColor: 'hsl(var(--primary))' }}
        >
          Confirmar
        </button>
      </div>
    );
  }

  // Troque a observation phase por:
  if (phase === 'observation') {
    return (
      <div className="flex h-full flex-col p-6 animate-in fade-in duration-200">
        <div className="flex flex-1 flex-col justify-center">
          <div className="space-y-5">

            {/* Header */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
              >
                <Sparkles className="h-4 w-4" style={{ color: 'hsl(var(--primary))' }} />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-foreground">Análise Inteligente</h2>
                <p className="text-xs text-muted-foreground">AI · Pronto para analisar</p>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/30 p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deseja adicionar alguma observação antes de iniciarmos? Escreva abaixo ou clique em{' '}
                <strong className="text-foreground font-medium">Prosseguir</strong>.
              </p>
            </div>

            <textarea
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              placeholder="Ex: Preste atenção especial nas cláusulas de rescisão..."
              rows={5}
              className="w-full resize-none rounded-lg border border-input bg-background px-3 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
            />

            <div className="flex gap-2">
              <button
                onClick={() => onStartAnalysis()}
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'hsl(var(--primary))' }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                Prosseguir
              </button>
              <button
                onClick={() => onStartAnalysis(observation)}
                disabled={!observation.trim()}
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground disabled:opacity-40 transition-colors hover:bg-muted"
              >
                Enviar observação
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
  // Chat / analyzing phase
  return (
    <div className="flex h-full flex-col bg-background">

      {/* Header */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div
          className="flex h-6 w-6 items-center justify-center rounded-full"
          style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
        >
          <Bot className="h-3.5 w-3.5" style={{ color: 'hsl(var(--primary))' }} />
        </div>
        <span className="text-xs font-medium text-foreground">AI</span>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
          <span className="text-[11px] text-muted-foreground">
            {isLoading ? 'Pensando...' : 'Online'}
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full mb-0.5"
                style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
              >
                <Bot className="h-3.5 w-3.5" style={{ color: 'hsl(var(--primary))' }} />
              </div>
            )}

            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm whitespace-pre-wrap leading-relaxed ${msg.role === 'user'
                  ? 'rounded-br-sm text-white'
                  : 'rounded-tl-sm border border-border bg-muted/60 text-foreground'
                }`}
              style={msg.role === 'user' ? { backgroundColor: 'hsl(var(--primary))' } : {}}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isLoading && <TypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
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
              placeholder={isLoading ? 'Aguarde a resposta...' : 'Faça uma pergunta sobre o contrato...'}
              disabled={isLoading}
              className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:opacity-50 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !chatInput.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white disabled:opacity-40 transition-opacity hover:opacity-90"
              style={{ backgroundColor: 'hsl(var(--primary))' }}
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}