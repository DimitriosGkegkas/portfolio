import React, { useState, useEffect, useRef } from 'react';
import './FaceTimeCall.css';

interface FaceTimeCallProps {
  isVisible: boolean;
  onClose: () => void;
}

const FaceTimeCall: React.FC<FaceTimeCallProps> = ({ isVisible, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const autoHideTimerRef = useRef<number | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    if (isVisible) {
      // Clear any existing timers
      if (autoHideTimerRef.current) {
        clearTimeout(autoHideTimerRef.current);
        autoHideTimerRef.current = null;
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
      
      // Small delay to ensure smooth animation
      requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      
      // Auto-hide after 8 seconds
      autoHideTimerRef.current = setTimeout(() => {
        handleClose();
      }, 8000);
    } else {
      // If isVisible becomes false, immediately hide
      setIsAnimating(false);
    }

    return () => {
      if (autoHideTimerRef.current) {
        clearTimeout(autoHideTimerRef.current);
        autoHideTimerRef.current = null;
      }
      if (closeTimerRef.current) {
        clearTimeout(closeTimerRef.current);
        closeTimerRef.current = null;
      }
    };
  }, [isVisible]);

  const handleClose = () => {
    // Clear auto-hide timer
    if (autoHideTimerRef.current) {
      clearTimeout(autoHideTimerRef.current);
      autoHideTimerRef.current = null;
    }
    
    setIsAnimating(false);
    
    // Clear any existing close timer
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    
    closeTimerRef.current = setTimeout(() => {
      onClose();
    }, 300); // Wait for animation to complete
  };

  const handleEmailClick = () => {
    window.open('mailto:dimitrisgegas01@gmail.com', '_blank');
    handleClose();
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/dimitris-gkegkas/', '_blank');
    handleClose();
  };

  const handleCVClick = () => {
    window.open('/CV.pdf', '_blank');
    handleClose();
  };


  const handleDecline = () => {
    handleClose();
  };

  // Always render the component when isVisible is true, but control visibility with CSS classes
  if (!isVisible && !isAnimating) return null;

  return (
    <div className={`facetime-call ${isAnimating ? 'facetime-call--visible' : ''}`}>
      <div className="facetime-call__content">
        {/* Contact Info Section */}
        <div className="facetime-call__contact">
          <div className="facetime-call__avatar">
            <img 
              src="/profil.jpeg" 
              alt="Dimitrios Gkegkas" 
              className="facetime-call__avatar-img"
            />
            <div className="facetime-call__video-indicator">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="facetime-call__info">
            <h3 className="facetime-call__name">Dimitrios Gkegkas</h3>
            <p className="facetime-call__type">FaceTime Audio...</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="facetime-call__actions">
          <button 
            className="facetime-call__btn facetime-call__btn--keypad"
            onClick={handleEmailClick}
            title="Email"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
              <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          
          <button 
            className="facetime-call__btn facetime-call__btn--video"
            onClick={handleLinkedInClick}
            title="LinkedIn"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2"/>
              <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
          
          <button 
            className="facetime-call__btn facetime-call__btn--mute"
            onClick={handleCVClick}
            title="CV"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" strokeWidth="2"/>
              <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2"/>
              <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="2"/>
              <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="2"/>
              <polyline points="10,9 9,9 8,9" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        
          
          <button 
            className="facetime-call__btn facetime-call__btn--decline"
            onClick={handleDecline}
            title="Decline"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaceTimeCall;
