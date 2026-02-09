import React, { useState, ImgHTMLAttributes, useEffect } from 'react';

interface ImageWithFallbackProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrcs?: string[];
}

// A diverse set of high-quality interior design images for fallbacks
const BACKUP_IMAGES = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop", // Living Room
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=1200&auto=format&fit=crop", // Modern Beige
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop", // Luxury Villa
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop", // Dark Loft
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop", // Greenery
  "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop", // Kitchen
  "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop", // Minimalist
  "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=1200&auto=format&fit=crop", // Bedroom
  "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1200&auto=format&fit=crop", // Details
  "https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=1200&auto=format&fit=crop"  // Office
];

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  fallbackSrcs = [], 
  className,
  ...props 
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    setImgSrc(src);
    setErrorCount(0);
  }, [src]);

  const handleError = () => {
    const currentAttempt = errorCount + 1;
    console.warn(`[Image Load Fail] Failed to load image: ${imgSrc}. Attempting fallback #${currentAttempt}.`);

    // Try provided fallbacks first
    if (errorCount < fallbackSrcs.length) {
      setImgSrc(fallbackSrcs[errorCount]);
      setErrorCount(currentAttempt);
    } 
    // Then try global backup images
    else if (errorCount < fallbackSrcs.length + BACKUP_IMAGES.length) {
      const backupIndex = errorCount - fallbackSrcs.length;
      setImgSrc(BACKUP_IMAGES[backupIndex]);
      setErrorCount(currentAttempt);
    } else {
      console.error(`[Image Load Fail] All fallbacks exhausted for image: ${src}`);
      // Optional: Set a placeholder purely color/SVG if even backups fail
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`${className} transition-opacity duration-500`}
      {...props}
    />
  );
};

export default ImageWithFallback;