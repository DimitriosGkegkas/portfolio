import type { Terminal } from "@xterm/xterm";
import { prompt } from "../promt";

export const aboutHandler = (instance: Terminal, onCommand: (cmd: string) => void, currentPath: React.RefObject<string>, currentBranch: React.RefObject<string | null>) => () => {
  instance.write(`cd ~/portfolio/`);
  onCommand(`cd ~/portfolio/`);
  prompt(currentPath, currentBranch, instance);
  instance.writeln("cat README.md");
  onCommand("cat README.md");
  instance.scrollToBottom();
  prompt(currentPath, currentBranch, instance);
};

export const educationHandler = (instance: Terminal, onCommand: (cmd: string) => void, currentPath: React.RefObject<string>, currentBranch: React.RefObject<string | null>) => () => {
  instance.write(`git checkout education`);
  onCommand(`git checkout education`);
  prompt(currentPath, currentBranch, instance);
  instance.scrollToBottom();
};

export const projectsHandler = (instance: Terminal, onCommand: (cmd: string) => void, currentPath: React.RefObject<string>, currentBranch: React.RefObject<string | null>) => () => {
  instance.write(`git checkout projects`);
  onCommand(`git checkout projects`);
  prompt(currentPath, currentBranch, instance);
  instance.scrollToBottom();
};

export const contactHandler = (instance: Terminal, onCommand: (cmd: string) => void, currentPath: React.RefObject<string>, currentBranch: React.RefObject<string | null>) => () => {
  instance.write(`cd ~/portfolio/`);
  onCommand(`cd ~/portfolio/`);
  prompt(currentPath, currentBranch, instance);
  instance.writeln("cat contact.txt");
  onCommand("cat contact.txt");
  instance.scrollToBottom();
  prompt(currentPath, currentBranch, instance);
};
