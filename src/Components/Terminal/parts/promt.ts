import type { Terminal } from "@xterm/xterm";
import type { RefObject } from "react";

export const prompt = (currentPath: RefObject<string>, currentBranch: RefObject<string | null>, instance: Terminal | null) => {
  const path = currentPath.current;
  const branch = currentBranch.current ? `(${currentBranch.current})` : "";

  const bgPath = "\x1b[43m"; // yellow
  const bgBranch = "\x1b[44m"; // blue
  const bgEnd = "\x1b[42m"; // green
  const fg = "\x1b[30m"; // black text
  const reset = "\x1b[0m";

  const styledPath = `${bgPath}${fg} ${path} ${reset}`;
  const styledBranch = branch ? `${bgBranch}${fg} ${branch} ${reset}` : "";
  const styledEnd = `${bgEnd}${fg} $ ${reset}`;

  if (!instance) return;

  instance?.write(`${styledPath}${styledBranch}${styledEnd} `);
};
