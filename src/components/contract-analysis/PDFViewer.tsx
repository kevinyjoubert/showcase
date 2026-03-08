import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  pdfUrl: string;
  fileName?: string;
  onTextExtracted: (text: string) => void;
}


export default function PDFViewer({ pdfUrl, fileName, onTextExtracted }: PDFViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const onLoadSuccess = async (pdf: any) => {
    setNumPages(pdf.numPages);
    // Extarir texto de todas as páginas
    const texts: string[] = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      texts.push(content.items.map((item: any) => item.str).join(' '));
    }
    onTextExtracted(texts.join('\n\n'));
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="text-xs text-muted-foreground shrink-0">
          {numPages > 0 ? `${numPages} página${numPages > 1 ? 's' : ''}` : 'Carregando...'}
        </span>
        {fileName && (
          <>
            <span className="text-xs text-muted-foreground/40">·</span>
            <span className="text-xs text-muted-foreground truncate">{fileName}</span>
          </>
        )}
      </div>
      <div className="flex-1 overflow-y-auto bg-muted/30 p-4">
        {error ? (
          <div className="flex h-full items-center justify-center">
            <p className="text-sm text-destructive">{error}</p>
          </div>
        ) : (
          <Document
            file={pdfUrl}
            onLoadSuccess={onLoadSuccess}
            onLoadError={(err) => setError(`Erro ao carregar PDF: ${err.message}`)}
            className="flex flex-col items-center gap-4"
          >
            {Array.from({ length: numPages }, (_, i) => (
              <Page
                key={i + 1}
                pageNumber={i + 1}
                width={560}
                className="shadow-sm"
                renderTextLayer
                renderAnnotationLayer
              />
            ))}
          </Document>
        )}
      </div>
    </div>
  );
}
