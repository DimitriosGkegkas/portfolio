import type { Terminal } from "@xterm/xterm";
import type { RefObject } from "react";
import { COLOR } from "../constants";

export const touchHandler = (instance: Terminal, fs: RefObject<Record<string, { name: string; isDir: boolean; created: string; content?: string }[]>>, currentPath: RefObject<string>) => {
  return ([file]: string[]) => {
    if (!file) return instance?.writeln(`${COLOR.red}touch: missing file name${COLOR.reset}`);

    const now = new Date().toDateString().slice(4);

    const currentDir = fs.current[currentPath.current];
    if (!currentDir) {
      instance?.writeln(`${COLOR.red}touch: Current directory does not exist${COLOR.reset}`);
      return;
    }

    if (currentDir.some((f) => f.name === file)) {
      return instance?.writeln(`${COLOR.red}touch: File exists${COLOR.reset}`);
    }

    currentDir.push({
      name: file,
      isDir: false,
      created: now,
    });

    instance?.writeln(`${COLOR.green}Created file '${file}'${COLOR.reset}`);
  };
};
