import { useRef, useState } from 'react';
import { FileText, Upload, ArrowLeft, Shield, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UploadScreenProps {
  onFileSelected: (file: File) => void;
}

export default function UploadScreen({ onFileSelected }: UploadScreenProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (file.type === 'application/pdf') onFileSelected(file);
  };

  const steps = [
    { icon: Upload, step: '01', label: 'Envie o contrato', desc: 'Carregue qualquer PDF jurídico' },
    { icon: Sparkles, step: '02', label: 'IA analisa', desc: 'Lê e interpreta o documento' },
    { icon: Shield, step: '03', label: 'Receba insights', desc: 'Riscos, cláusulas e melhorias' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background animate-in fade-in duration-200">

      {/* Subtle background grid */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Top nav */}
      <div className="relative flex items-center px-6 py-4">
        <Link
          to="/home"
          className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-white/70 backdrop-blur text-sm font-medium text-muted-foreground hover:bg-muted hover:border-border/80 transition-colors"
        >
          <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
          Início
        </Link>
      </div>

      {/* Center content */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-6">
        <div className="w-full max-w-lg">

          {/* Header */}
          <div className="mb-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
              Powered by Gemini AI
            </div>
            <h1 className="text-3xl font-light tracking-tight text-foreground">
              Análise de Contratos
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Identifique cláusulas, riscos e oportunidades de melhoria em segundos
            </p>
          </div>

          {/* Drop zone */}
          <div
            className={`relative flex flex-col items-center gap-5 rounded-xl border-2 border-dashed p-10 transition-all duration-200 cursor-pointer ${
              isDragging
                ? 'border-primary bg-primary/5 scale-[1.01]'
                : 'border-border bg-card hover:border-primary/40 hover:bg-primary/[0.02]'
            }`}
            onClick={() => inputRef.current?.click()}
            onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              const file = e.dataTransfer.files[0];
              if (file) handleFile(file);
            }}
          >
            <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border transition-colors duration-200 ${
              isDragging ? 'border-primary/30 bg-primary/10' : 'border-border bg-muted/50'
            }`}>
              <FileText
                className={`h-7 w-7 transition-colors duration-200 ${isDragging ? 'text-primary' : 'text-muted-foreground'}`}
                strokeWidth={1.5}
              />
            </div>

            <div className="text-center">
              <p className="text-sm font-medium text-foreground">
                {isDragging ? 'Solte o arquivo aqui' : 'Arraste seu contrato aqui'}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                ou clique para selecionar · somente PDF
              </p>
            </div>

            <button
              className="inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90 active:opacity-80"
              style={{ backgroundColor: 'hsl(var(--primary))' }}
              onClick={(e) => { e.stopPropagation(); inputRef.current?.click(); }}
            >
              <Upload className="h-4 w-4" />
              Selecionar PDF
            </button>

            <input
              ref={inputRef}
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFile(file);
              }}
            />
          </div>

          {/* How it works */}
          <div className="mt-10">
            <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground/60 mb-6">
              Como funciona
            </p>

            <div className="flex items-start justify-between gap-2">
              {steps.map(({ icon: Icon, step, label, desc }, i) => (
                <div key={step} className="flex items-start gap-2 flex-1">
                  {/* Step card */}
                  <div className="flex flex-1 flex-col items-center text-center gap-3">
                    <div className="relative">
                      <div
                        className="flex h-11 w-11 items-center justify-center rounded-xl border"
                        style={{
                          backgroundColor: 'hsl(var(--primary) / 0.07)',
                          borderColor: 'hsl(var(--primary) / 0.15)',
                        }}
                      >
                        <Icon className="h-5 w-5" style={{ color: 'hsl(var(--primary))' }} strokeWidth={1.5} />
                      </div>
                      <span
                        className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold text-white"
                        style={{ backgroundColor: 'hsl(var(--primary))' }}
                      >
                        {i + 1}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-foreground">{label}</p>
                      <p className="mt-0.5 text-[11px] text-muted-foreground leading-tight">{desc}</p>
                    </div>
                  </div>

                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <div className="mt-5 shrink-0">
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}