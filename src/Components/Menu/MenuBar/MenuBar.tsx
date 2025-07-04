// components/MenuBar.tsx
import "./MenuBar.css";

export const MenuBar = ({ menuButtons }: { menuButtons: { label: string; onClick: () => void }[] }) => {
  return (
    <nav className='menu-bar'>
      {menuButtons.map((button) => (
        <button key={button.label} className='menu-item' onClick={button.onClick}>
          {button.label}
        </button>
      ))}
    </nav>
  );
};
