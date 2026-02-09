import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleLinkHover = () => setIsHovering(true);
    const handleLinkLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);
    window.addEventListener('mouseover', handleMouseEnter);

    // Add listeners to all interactive elements
    const links = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    links.forEach(link => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    // Observer to attach listeners to dynamic content
    const observer = new MutationObserver(() => {
       const newLinks = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
       newLinks.forEach(link => {
        link.addEventListener('mouseenter', handleLinkHover);
        link.addEventListener('mouseleave', handleLinkLeave);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseEnter);
      observer.disconnect();
    };
  }, [isVisible]);

  // Smooth trailing animation loop
  useEffect(() => {
    let animationFrameId: number;

    const animateTrailingCursor = () => {
      setTrailingPosition(prev => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      animationFrameId = requestAnimationFrame(animateTrailingCursor);
    };

    animationFrameId = requestAnimationFrame(animateTrailingCursor);

    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  // Don't render on touch devices
  if (typeof navigator !== 'undefined' && typeof navigator.maxTouchPoints === 'number' && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      {/* Main Dot */}
      <div 
        className="fixed top-0 left-0 w-2 h-2 bg-brand-orange rounded-full pointer-events-none z-[100] transition-opacity duration-300 mix-blend-difference"
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0
        }}
      />
      {/* Trailing Ring */}
      <div 
        className={`fixed top-0 left-0 border border-brand-orange rounded-full pointer-events-none z-[99] transition-all duration-300 ease-out mix-blend-difference
          ${isHovering ? 'w-12 h-12 bg-white/20 backdrop-blur-[1px] border-white' : 'w-8 h-8 border-brand-orange/50'}
        `}
        style={{ 
          transform: `translate(${trailingPosition.x}px, ${trailingPosition.y}px) translate(-50%, -50%)`,
          opacity: isVisible ? 1 : 0
        }}
      />
    </>
  );
};

export default CustomCursor;