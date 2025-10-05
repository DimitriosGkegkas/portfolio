import React, { createContext, useContext, useState, type ReactNode } from 'react';

interface WindowManagerContextType {
  activeWindowId: string | null;
  bringToFront: (windowId: string) => void;
  getZIndex: (windowId: string) => number;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

interface WindowManagerProviderProps {
  children: ReactNode;
}

export const WindowManagerProvider: React.FC<WindowManagerProviderProps> = ({ children }) => {
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [windowZIndexes, setWindowZIndexes] = useState<Record<string, number>>({});

  const bringToFront = (windowId: string) => {
    setActiveWindowId(windowId);
    
    // Update z-index state instead of directly manipulating DOM
    const currentZIndexes = { ...windowZIndexes };
    const maxZIndex = Math.max(...Object.values(currentZIndexes), 10);
    
    // Set all other windows to lower z-index
    Object.keys(currentZIndexes).forEach(id => {
      if (id !== windowId) {
        currentZIndexes[id] = Math.max(currentZIndexes[id] - 1, 9);
      }
    });
    
    // Bring the clicked window to front
    currentZIndexes[windowId] = maxZIndex + 1;
    
    setWindowZIndexes(currentZIndexes);
  };

  const getZIndex = (windowId: string): number => {
    // If we have a stored z-index, use it
    if (windowZIndexes[windowId] !== undefined) {
      return windowZIndexes[windowId];
    }
    
    // Default z-indexes for initial state
    if (windowId === 'finder-window') {
      return 9; // Behind by default
    }
    return 10; // Normal behavior for other windows
  };

  return (
    <WindowManagerContext.Provider value={{ activeWindowId, bringToFront, getZIndex }}>
      {children}
    </WindowManagerContext.Provider>
  );
};

export const useWindowManager = (): WindowManagerContextType => {
  const context = useContext(WindowManagerContext);
  if (!context) {
    throw new Error('useWindowManager must be used within a WindowManagerProvider');
  }
  return context;
};
