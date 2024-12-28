import React, { useEffect, useState } from 'react';
import { X, Maximize2, Minimize2 } from 'lucide-react';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface PDFViewerProps {
  url: string;
  onClose: () => void;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ url, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe && !document.fullscreenElement) {
      iframe.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  if (hasError) {
    return (
      <div className="fixed inset-0 z-50 bg-gray-900 flex items-center justify-center">
        <p className="text-red-500">Error loading PDF. Please try again later.</p>
        <button onClick={onClose} className="text-white mt-4 px-4 py-2 bg-gray-700 rounded-lg">
          Close
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-gray-800 p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
          <h3 className="text-white font-medium">PDF Viewer</h3>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={toggleFullscreen} className="text-gray-400 hover:text-white">
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </button>
        </div>
      </div>

      <div className="h-full pt-16 flex flex-col">
        {isLoading ? (
          <div className="flex-1 flex items-center justify-center">
            <LoadingSpinner />
          </div>
        ) : (
          <iframe
            src={url}
            className="w-full h-full border-none bg-white"
            title="PDF Viewer"
            onLoad={() => setIsLoading(false)}
            onError={() => setHasError(true)}
          />
        )}
      </div>
    </div>
  );
};