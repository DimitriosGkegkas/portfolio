import type { ILink, Terminal } from "@xterm/xterm";
import { commits } from "../constants";
import type { RefObject } from "react";
import { prompt } from "../promt";
import { educationHandler, projectsHandler } from "./handlers";

export const provideLinksHandler = (instance: Terminal, currentPath: RefObject<string>, currentBranch: RefObject<string | null>, onCommand: (cmd: string) => void) => (y: number, callback: (links: ILink[] | undefined) => void) => {
  const line = instance.buffer.active.getLine(y - 1);
  if (!line) return callback([]);

  const text = line.translateToString();
  const links: ILink[] = [];
  const addLink = (word: string, action: () => void) => {
    const index = text.indexOf(word);
    if (index !== -1) {
      links.push({
        range: {
          start: { x: index + 1, y }, // +1 because xterm is 1-based
          end: { x: index + word.length, y },
        },
        text: word,
        activate: action,
      });
    }
  };
  if (text.includes("git checkout")) {
    addLink("education", educationHandler(instance, onCommand, currentPath, currentBranch));
    addLink("projects", projectsHandler(instance, onCommand, currentPath, currentBranch));
  }
  commits["education"].forEach((c) =>
    addLink(c.hash, () => {
      instance?.writeln(`git checkout ${c.hash}`);
      onCommand(`git checkout ${c.hash}`);
      instance.scrollToBottom();
      prompt(currentPath, currentBranch, instance);
    })
  );
  commits["projects"].forEach((c) =>
    addLink(c.hash, () => {
      instance?.writeln(`git checkout ${c.hash}`);
      onCommand(`git checkout ${c.hash}`);
      instance.scrollToBottom();
      prompt(currentPath, currentBranch, instance);
    })
  );

  addLink("dimitrisgegas01@gmail.com", () => {
    // Open email client
    window.open(`mailto:dimitrisgegas01@gmail.com`);
  });
  addLink("https://www.linkedin.com/in/dimitris-gkegkas/", () => {
    // Open LinkedIn profile
    window.open(`https://www.linkedin.com/in/dimitris-gkegkas/`, "_blank");
  });

  callback(links);
};
