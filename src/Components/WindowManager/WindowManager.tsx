import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

interface WindowManagerContextType {
  activeWindowId: string | null;
  bringToFront: (windowId: string) => void;
  getZIndex: (windowId: string) => number;
  isWindowVisible: (windowId: string) => boolean;
  openWindow: (windowId: string) => void;
  closeWindow: (windowId: string) => void;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
}

const WindowManagerContext = createContext<WindowManagerContextType | undefined>(undefined);

interface WindowManagerProviderProps {
  children: ReactNode;
}

export const WindowManagerProvider: React.FC<WindowManagerProviderProps> = ({ children }) => {
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [windowZIndexes, setWindowZIndexes] = useState<Record<string, number>>({});
  const [windowVisibility, setWindowVisibility] = useState<Record<string, boolean>>({});
  const [expanded, setExpandedState] = useState<boolean>(false);

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

  const isWindowVisible = (windowId: string): boolean => {
    // If we have a stored visibility state, use it
    if (windowVisibility[windowId] !== undefined) {
      return windowVisibility[windowId];
    }

    // Default to visible for all windows
    return true;
  };

  const openWindow = (windowId: string) => {
    setWindowVisibility(prev => ({ ...prev, [windowId]: true }));
    if (windowId === 'finder-window') {
      setExpandedState(true);
    }
    // When opening a window, also bring it to front
    bringToFront(windowId);
  };

  const closeWindow = (windowId: string) => {
    if (windowId === 'terminal-window') {
      setExpandedState(false);
      return;
    }
    setWindowVisibility(prev => ({ ...prev, [windowId]: false }));
    // If we're closing the active window, clear the active window
    if (activeWindowId === windowId) {
      setActiveWindowId(null);
    }
  };

  const setExpanded = (expanded: boolean) => {
    // expand if finder-window is open
    if (expanded) {
      if (windowVisibility['finder-window']) {
        setExpandedState(true);
      }
    } else {
      setExpandedState(false);
    }
  };

  useEffect(() => {
    if (windowVisibility['finder-window']) {
      setExpandedState(true);
    } else {
      setExpandedState(false);
    }
  }, [windowVisibility]);


  return (
    <WindowManagerContext.Provider value={{
      activeWindowId,
      bringToFront,
      getZIndex,
      isWindowVisible,
      openWindow,
      closeWindow,
      expanded,
      setExpanded
    }}>
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
