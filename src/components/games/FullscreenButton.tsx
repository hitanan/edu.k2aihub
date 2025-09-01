'use client';

import React, { useState, useEffect } from 'react';
import { Maximize, Minimize } from 'lucide-react';

interface FullscreenButtonProps {
  targetElementId?: string; // ID of element to make fullscreen, defaults to document.body
  className?: string;
  buttonText?: string;
  showIcon?: boolean;
  size?: 'small' | 'medium' | 'large';
  position?: 'fixed' | 'relative';
  fixedPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export default function FullscreenButton({
  targetElementId,
  className = '',
  buttonText = '',
  showIcon = true,
  size = 'medium',
  position = 'relative',
  fixedPosition = 'top-right',
}: FullscreenButtonProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  // Check if fullscreen API is supported
  useEffect(() => {
    const checkSupport = () => {
      interface FullscreenDocument extends Document {
        webkitFullscreenEnabled?: boolean;
        mozFullScreenEnabled?: boolean;
        msFullscreenEnabled?: boolean;
      }

      const doc = document as FullscreenDocument;
      return !!(
        document.fullscreenEnabled ||
        doc.webkitFullscreenEnabled ||
        doc.mozFullScreenEnabled ||
        doc.msFullscreenEnabled
      );
    };

    setIsSupported(checkSupport());
  }, []);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      interface FullscreenDocument extends Document {
        webkitFullscreenElement?: Element;
        mozFullScreenElement?: Element;
        msFullscreenElement?: Element;
      }

      const doc = document as FullscreenDocument;
      const fullscreenElement =
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement;

      setIsFullscreen(!!fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const enterFullscreen = async (element: HTMLElement) => {
    interface FullscreenElement extends HTMLElement {
      webkitRequestFullscreen?: () => Promise<void>;
      mozRequestFullScreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    }

    const fullscreenElement = element as FullscreenElement;

    try {
      if (element.requestFullscreen) {
        await element.requestFullscreen();
      } else if (fullscreenElement.webkitRequestFullscreen) {
        await fullscreenElement.webkitRequestFullscreen();
      } else if (fullscreenElement.mozRequestFullScreen) {
        await fullscreenElement.mozRequestFullScreen();
      } else if (fullscreenElement.msRequestFullscreen) {
        await fullscreenElement.msRequestFullscreen();
      }
    } catch (error) {
      console.error('Error entering fullscreen:', error);
    }
  };

  const exitFullscreen = async () => {
    interface FullscreenDocument extends Document {
      webkitExitFullscreen?: () => Promise<void>;
      mozCancelFullScreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    }

    const doc = document as FullscreenDocument;

    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      }
    } catch (error) {
      console.error('Error exiting fullscreen:', error);
    }
  };

  const toggleFullscreen = async () => {
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      let targetElement: HTMLElement;

      if (targetElementId) {
        const element = document.getElementById(targetElementId);
        if (!element) {
          console.error(`Element with ID '${targetElementId}' not found`);
          return;
        }
        targetElement = element;
      } else {
        // Default to the game container or body
        const gameContainer = document.querySelector('[data-game-container]') as HTMLElement;
        targetElement = gameContainer || document.body;
      }

      await enterFullscreen(targetElement);
    }
  };

  // Don't render if not supported
  if (!isSupported) {
    return null;
  }

  // Size configurations
  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    medium: 'px-3 py-2 text-sm',
    large: 'px-4 py-3 text-base',
  };

  const iconSizes = {
    small: 'w-3 h-3',
    medium: 'w-4 h-4',
    large: 'w-5 h-5',
  };

  // Position classes for fixed positioning
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  const baseClasses = `
    ${sizeClasses[size]} 
    bg-gray-800/90 hover:bg-gray-700/90 
    text-white border border-gray-600/50 hover:border-gray-500 
    rounded-lg transition-all duration-200 
    flex items-center gap-2 
    backdrop-blur-sm
    hover:scale-105 active:scale-95
    focus:outline-none focus:ring-2 focus:ring-blue-500/50
    ${className}
  `;

  const fullClasses =
    position === 'fixed' ? `${baseClasses} fixed z-50 ${positionClasses[fixedPosition]}` : baseClasses;

  return (
    <button
      onClick={toggleFullscreen}
      className={fullClasses}
      title={isFullscreen ? 'Thoát chế độ toàn màn hình (ESC)' : 'Chế độ toàn màn hình'}
      aria-label={isFullscreen ? 'Thoát toàn màn hình' : 'Vào toàn màn hình'}
    >
      {showIcon && (
        <>{isFullscreen ? <Minimize className={iconSizes[size]} /> : <Maximize className={iconSizes[size]} />}</>
      )}

      {buttonText && <span className="font-medium">{buttonText || (isFullscreen ? 'Thu nhỏ' : 'Toàn màn hình')}</span>}
    </button>
  );
}

// Hook for programmatic fullscreen control
export function useFullscreen(targetElementId?: string) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    const checkSupport = () => {
      interface FullscreenDocument extends Document {
        webkitFullscreenEnabled?: boolean;
        mozFullScreenEnabled?: boolean;
        msFullscreenEnabled?: boolean;
      }

      const doc = document as FullscreenDocument;
      return !!(
        document.fullscreenEnabled ||
        doc.webkitFullscreenEnabled ||
        doc.mozFullScreenEnabled ||
        doc.msFullscreenEnabled
      );
    };

    setIsSupported(checkSupport());

    const handleFullscreenChange = () => {
      interface FullscreenDocument extends Document {
        webkitFullscreenElement?: Element;
        mozFullScreenElement?: Element;
        msFullscreenElement?: Element;
      }

      const doc = document as FullscreenDocument;
      const fullscreenElement =
        document.fullscreenElement ||
        doc.webkitFullscreenElement ||
        doc.mozFullScreenElement ||
        doc.msFullscreenElement;

      setIsFullscreen(!!fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('MSFullscreenChange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
    };
  }, []);

  const enterFullscreen = async () => {
    let targetElement: HTMLElement;

    if (targetElementId) {
      const element = document.getElementById(targetElementId);
      if (!element) {
        console.error(`Element with ID '${targetElementId}' not found`);
        return;
      }
      targetElement = element;
    } else {
      const gameContainer = document.querySelector('[data-game-container]') as HTMLElement;
      targetElement = gameContainer || document.body;
    }

    interface FullscreenElement extends HTMLElement {
      webkitRequestFullscreen?: () => Promise<void>;
      mozRequestFullScreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    }

    const fullscreenElement = targetElement as FullscreenElement;

    try {
      if (targetElement.requestFullscreen) {
        await targetElement.requestFullscreen();
      } else if (fullscreenElement.webkitRequestFullscreen) {
        await fullscreenElement.webkitRequestFullscreen();
      } else if (fullscreenElement.mozRequestFullScreen) {
        await fullscreenElement.mozRequestFullScreen();
      } else if (fullscreenElement.msRequestFullscreen) {
        await fullscreenElement.msRequestFullscreen();
      }
    } catch (error) {
      console.error('Error entering fullscreen:', error);
    }
  };

  const exitFullscreen = async () => {
    interface FullscreenDocument extends Document {
      webkitExitFullscreen?: () => Promise<void>;
      mozCancelFullScreen?: () => Promise<void>;
      msExitFullscreen?: () => Promise<void>;
    }

    const doc = document as FullscreenDocument;

    try {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
      } else if (doc.webkitExitFullscreen) {
        await doc.webkitExitFullscreen();
      } else if (doc.mozCancelFullScreen) {
        await doc.mozCancelFullScreen();
      } else if (doc.msExitFullscreen) {
        await doc.msExitFullscreen();
      }
    } catch (error) {
      console.error('Error exiting fullscreen:', error);
    }
  };

  const toggleFullscreen = async () => {
    if (isFullscreen) {
      await exitFullscreen();
    } else {
      await enterFullscreen();
    }
  };

  return {
    isFullscreen,
    isSupported,
    enterFullscreen,
    exitFullscreen,
    toggleFullscreen,
  };
}
