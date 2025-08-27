import React, { useState, useEffect } from 'react';
import '../styles/intro-loader.css';

const IntroLoader = () => {
  const texts = ['Join', 'Connect', 'Deliver'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fadeState, setFadeState] = useState('hidden');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // First text fade-in
    const startTimer = setTimeout(() => setFadeState('fade-in'), 100);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (fadeState === 'fade-in') {
      // Show for 0.5s
      const timer = setTimeout(() => setFadeState('fade-out'), 500);
      return () => clearTimeout(timer);
    } else if (fadeState === 'fade-out') {
      // Wait 0.2s for fade-out, then switch
      const timer = setTimeout(() => {
        if (currentTextIndex < texts.length - 1) {
          setCurrentTextIndex((prev) => prev + 1);
          setFadeState('fade-in');
        } else {
          setIsAnimating(true);
          setTimeout(() => setIsVisible(false), 800); // slide up exit
        }
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [fadeState, currentTextIndex, texts.length]);

  if (!isVisible) return null;

  return (
    <div className={`intro-loader-overlay ${isAnimating ? 'sliding-up' : ''}`}>
      <div className="intro-loader-content">
        <div className="intro-loader-text-container">
          <div className={`intro-loader-text ${fadeState}`}>
            {texts[currentTextIndex]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroLoader;
