import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react'; // Import an icon for the button

const InstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<Event | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      (deferredPrompt as any).prompt();
      (deferredPrompt as any).userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        setDeferredPrompt(null);
        setIsVisible(false);
      });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={handleInstallClick}
      className="text-gray-400 hover:text-white focus:outline-none p-2"
      aria-label="Install App"
    >
      <Download className="h-6 w-6" />
    </button>
  );
};

export default InstallButton;