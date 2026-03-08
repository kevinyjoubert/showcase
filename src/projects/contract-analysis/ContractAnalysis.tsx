import { useContractAnalysis } from '../../hooks/useContractAnalysis';
import UploadScreen from '../../components/contract-analysis/UploadScreen';
import PDFViewer from '../../components/contract-analysis/PDFViewer';
import AIChat from '../../components/contract-analysis/AIChat';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function ContractAnalysis() {
  const {
    file,
    pdfUrl,
    messages,
    isLoading,
    phase,
    apiKey,
    setFile,
    setApiKey,
    setExtractedText,
    startAnalysis,
    sendMessage,
  } = useContractAnalysis();

  if (phase === 'upload') {
    return <UploadScreen onFileSelected={setFile} />;
  }

  return (
    <div className="flex h-screen flex-col bg-background animate-in fade-in duration-200">
      {/* Top bar */}
      <div className="flex items-center gap-3 border-b border-border px-4 py-2">
        <Link
          to="/home"
          className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-white/70 backdrop-blur text-sm font-medium text-muted-foreground hover:bg-muted hover:border-border/80 transition-colors shrink-0"
        >
          <ArrowLeft size={16} className="transition-transform duration-200 group-hover:-translate-x-1" />
          Início
        </Link>
      </div>

      {/* Split panels */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-border">
          {pdfUrl && (
            <PDFViewer
              pdfUrl={pdfUrl}
              fileName={file?.name}
              onTextExtracted={setExtractedText}
            />
          )}
        </div>
        <div className="w-1/2">
          <AIChat
            phase={phase}
            messages={messages}
            isLoading={isLoading}
            apiKey={apiKey}
            onSetApiKey={setApiKey}
            onStartAnalysis={startAnalysis}
            onSendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
}