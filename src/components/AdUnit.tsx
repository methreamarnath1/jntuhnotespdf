import React, { useEffect } from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  isAmp?: boolean; // Added to differentiate between AMP and non-AMP ads
}

export const AdUnit: React.FC<AdUnitProps> = ({ slot, format = 'auto', isAmp = false }) => {
  useEffect(() => {
    if (!isAmp) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }, [isAmp]);

  if (isAmp) {
    return (
      <div className="w-full flex justify-center my-4">
        <amp-ad
          width="100vw"
          height="320"
          type="adsense"
          data-ad-client="ca-pub-7856551759997073"
          data-ad-slot={slot}
          data-auto-format="rspv"
          data-full-width=""
        >
          <div style={{ overflow: 'hidden' }}></div>
        </amp-ad>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center my-4">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7856551759997073"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
};