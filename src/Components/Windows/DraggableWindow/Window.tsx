import { type ReactNode } from "react";
import "./DraggableWindow.css";

interface DraggableWindowProps {
  children: ReactNode;
  menuButtons?: Array<{
    label: string;
    onClick: () => void;
  }>;
  isDragging?: boolean;
  isVisible?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
}

const Window = ({
  children,
  menuButtons = [],
  isVisible = true,
  isDragging = false,
  onClose,
  style
}: DraggableWindowProps) => {

  // Control button handlers
  const handleClose = () => {
    onClose?.();
  };

  // Don't render if not visible
  if (!isVisible) return null;

  return (
    <div style={style}>
      <div className={`macos-header ${isDragging ? 'dragging' : ''}`}>
        <div className="control-dots">
          <button className='macos-dot red' onClick={handleClose} title="Close"></button>
          <button className='macos-dot yellow' title="Minimize"></button>
          <button className='macos-dot green' title="Maximize"></button>
        </div>

        {menuButtons.length > 0 && (
          <div className="menu-bar">
            {menuButtons.map((button, index) => (
              <button
                key={index}
                className="menu-button"
                onClick={button.onClick}
              >
                {button.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className='window-content'>
        {children}
      </div>
    </div>
  );
};

export default Window;
