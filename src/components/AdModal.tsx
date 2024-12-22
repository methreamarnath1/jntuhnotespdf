import React from 'react';
import { X } from 'lucide-react';
import { LoadingSpinner } from './ui/LoadingSpinner';

interface AdModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
}

export const AdModal: React.FC<AdModalProps> = ({ isOpen, onClose, onComplete }) => {
  const [adLoaded, setAdLoaded] = React.useState(false);
  const [timeLeft, setTimeLeft] = React.useState(3);

  React.useEffect(() => {
    if (isOpen && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setAdLoaded(true);
      onComplete();
    }
  }, [isOpen, timeLeft, onComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">Please Wait</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex flex-col items-center space-y-4">
          {!adLoaded ? (
            <>
              <LoadingSpinner />
              <p className="text-white">Your download will begin in {timeLeft} seconds...</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((3 - timeLeft) / 3) * 100}%` }}
                />
              </div>
            </>
          ) : (
            <p className="text-green-400">Starting download...</p>
          )}
        </div>
      </div>
    </div>
  );
};