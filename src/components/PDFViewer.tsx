import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface PDFViewerProps {
  url: string;
  onClose: () => void;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ url, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-900/95">
      {/* Top Bar */}
      <div className="absolute top-0 left-0 right-0 bg-gray-800 p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-4">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <h3 className="text-white font-medium">PDF Viewer</h3>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          <button
            onClick={toggleFullscreen}
            className="text-gray-400 hover:text-white transition-colors"
          >
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
          <>
            {/* Ad Section */}
            <div className="bg-gradient-to-r from-blue-900/50 to-gray-900/50 p-4">
              <div className="max-w-screen-xl mx-auto">
                <div className="h-20 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400">
                  Advertisement
                </div>
              </div>
            </div>

            {/* PDF Content */}
            <div className="flex-1 relative">
              <iframe
                src={url}
                className="w-full h-full border-none bg-white"
                title="PDF Viewer"
              />
              
              {/* Navigation Buttons */}
              <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none">
                <button 
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  className="p-2 rounded-full bg-gray-800/90 text-white hover:bg-gray-700 pointer-events-auto transition-colors"
                  disabled={currentPage === 1}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  className="p-2 rounded-full bg-gray-800/90 text-white hover:bg-gray-700 pointer-events-auto transition-colors"
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            {/* Bottom Ad */}
            <div className="bg-gradient-to-r from-blue-900/50 to-gray-900/50 p-4">
              <div className="max-w-screen-xl mx-auto">
                <div className="h-20 bg-gray-800/50 rounded-xl flex items-center justify-center text-gray-400">
                  Advertisement
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};