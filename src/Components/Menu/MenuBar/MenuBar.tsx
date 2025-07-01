// components/MenuBar.tsx
import { useCallback } from "react";
import "./MenuBar.css";
import type { Terminal } from "@xterm/xterm";

export const MenuBar = ({ instance, onCommand, prompt }: { instance: Terminal | null; onCommand: (command: string) => void; prompt: () => void }) => {
  const handleAboutClick = useCallback(() => {
    if (!instance) return;
    instance.write(`cd ~/portfolio/`);
    onCommand(`cd ~/portfolio/`);
    prompt();
    instance.writeln("cat README.md");
    onCommand("cat README.md");
    instance.scrollToBottom();
    prompt();
  }, [instance, onCommand, prompt]);

  const handleContactClick = useCallback(() => {
    if (!instance) return;
    instance.write(`cd ~/portfolio/`);
    onCommand(`cd ~/portfolio/`);
    prompt();
    instance.writeln("cat contact.txt");
    onCommand("cat contact.txt");
    instance.scrollToBottom();
    prompt();
  }, [instance, onCommand, prompt]);

  const handleEducationClick = useCallback(() => {
    if (!instance) return;
    instance.write(`git checkout education`);
    onCommand(`git checkout education`);
    prompt();
    instance.scrollToBottom();
  }, [instance, onCommand, prompt]);

  const handleProjectsClick = useCallback(() => {
    if (!instance) return;
    instance.write(`git checkout projects`);
    onCommand(`git checkout projects`);
    prompt();
    instance.scrollToBottom();
  }, [instance, onCommand, prompt]);

  return (
    <nav className='menu-bar'>
      <button className='menu-item' onClick={handleAboutClick}>
        About
      </button>
      <button className='menu-item' onClick={handleEducationClick}>
        Education
      </button>
      <button className='menu-item' onClick={handleProjectsClick}>
        Projects
      </button>
      <button className='menu-item' onClick={handleContactClick}>
        Contact
      </button>
    </nav>
  );
};
