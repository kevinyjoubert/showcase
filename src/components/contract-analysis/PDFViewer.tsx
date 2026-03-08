import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { FileText, Loader2 } from 'lucide-react';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
  fileName?: string;
  onTextExtracted: (text: string) => void;
}

export default function PDFViewer({ pdfUrl, fileName, onTextExtracted }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const onLoadSuccess = async (pdf: any) => {
    setNumPages(pdf.numPages);
    setIsLoading(false);
    const texts: string[] = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      texts.push(content.items.map((item: any) => item.str).join(' '));
    }
    onTextExtracted(texts.join('\n\n'));
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-background">

      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5 bg-background">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className="flex h-6 w-6 shrink-0 items-center justify-center rounded"
            style={{ backgroundColor: 'hsl(var(--primary) / 0.1)' }}
          >
            <FileText className="h-3.5 w-3.5" style={{ color: 'hsl(var(--primary))' }} strokeWidth={1.5} />
          </div>

          {fileName && (
            <span className="text-xs font-medium text-foreground truncate">
              {fileName}
            </span>
          )}
        </div>

        {/* Page count badge */}
        {numPages > 0 && (
          <span className="ml-auto shrink-0 rounded-full border border-border bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
            {numPages} {numPages > 1 ? 'páginas' : 'página'}
          </span>
        )}

        {/* Loading indicator */}
        {isLoading && (
          <div className="ml-auto flex items-center gap-1.5">
            <Loader2 className="h-3.5 w-3.5 animate-spin text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Carregando...</span>
          </div>
        )}
      </div>

      {/* PDF Content */}
      <div className="flex-1 overflow-y-auto p-4" style={{ backgroundColor: 'hsl(var(--muted) / 0.5)' }}>
        {error ? (
          <div className="flex h-full flex-col items-center justify-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-destructive/20 bg-destructive/5">
              <FileText className="h-6 w-6 text-destructive/60" strokeWidth={1.5} />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-foreground">Erro ao carregar PDF</p>
              <p className="mt-1 text-xs text-muted-foreground">{error}</p>
            </div>
          </div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onLoadSuccess}
            onLoadError={(err) => {
              setError(err.message);
              setIsLoading(false);
            }}
            loading={
              <div className="flex h-48 items-center justify-center">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            }
            className="flex flex-col items-center gap-3"
          >
            {Array.from({ length: numPages }, (_, i) => (
              <div
                key={i + 1}
                className="overflow-hidden rounded-lg border border-border/60 bg-white shadow-sm"
              >
                <Page
                  pageNumber={i + 1}
                  width={540}
                  renderTextLayer
                  renderAnnotationLayer
                />
              </div>
            ))}
          </Document>
        )}
      </div>
    </div>
  );
}