import { useEffect, useState } from "react";

export function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // Wait for animation to complete (2.3s as per original script)
    const slideTimer = setTimeout(() => {
      setSlideUp(true);
      // Hide loader after slide-up transition
      setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    }, 2300);

    return () => clearTimeout(slideTimer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`loader ${slideUp ? 'slide-up' : ''}`}>
      <div className="loader_container">
        <div className="liquid-text">
          {['M', 'a', 'h', 'i', 'r', 'a', 'g'].map((letter, index) => (
            <span key={index} style={{ '--i': index } as React.CSSProperties}>
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}