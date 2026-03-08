import { useRef, useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/contract-analysis/ui/button';

interface UploadScreenProps {
  onFileSelected: (file: File) => void;
}

export default function UploadScreen({ onFileSelected }: UploadScreenProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = (file: File) => {
    if (file.type === 'application/pdf') onFileSelected(file);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8 animate-in fade-in duration-200">
      <div
        className={`flex w-full max-w-lg flex-col items-center gap-6 rounded-lg border-2 border-dashed p-16 transition-colors ${
          isDragging ? 'border-primary bg-primary/5' : 'border-border'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          const file = e.dataTransfer.files[0];
          if (file) handleFile(file);
        }}
      >
        <FileText className="h-12 w-12 text-muted-foreground" strokeWidth={1.5} />
        <div className="text-center">
          <h1 className="text-2xl font-light tracking-tight text-foreground">
            Análise de Contrato
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Carregue um contrato em PDF para iniciar a análise com IA
          </p>
        </div>
        <Button onClick={() => inputRef.current?.click()}>
          Selecionar PDF
        </Button>
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
    </div>
  );
}
