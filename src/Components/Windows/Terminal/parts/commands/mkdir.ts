import type { Terminal } from "@xterm/xterm";
import { COLOR } from "../constants";
import type { RefObject } from "react";
import { normalizePath } from "../utils";

export const mkdirHelper = (
  instance: Terminal,
  fs: RefObject<
    Record<
      string,
      {
        name: string;
        isDir: boolean;
        created: string;
        content?: string;
      }[]
    >
  >,
  currentPath: RefObject<string>
) => {
  return ([dir]: string[]) => {
    if (!dir) return instance?.writeln(`${COLOR.red}mkdir: missing name${COLOR.reset}`);

    const now = new Date().toDateString().slice(4); // "Jul 01 2025"

    const parentSegments = currentPath.current.split("/").filter(Boolean);
    const newPath = normalizePath([...parentSegments, dir]);

    if (fs.current[newPath]) return instance?.writeln(`${COLOR.red}mkdir: File exists${COLOR.reset}`);

    // Create new folder in fs
    fs.current[newPath] = [];

    // Update parent directory listing
    if (!fs.current[currentPath.current]) fs.current[currentPath.current] = [];

    fs.current[currentPath.current].push({
      name: dir,
      isDir: true,
      created: now,
    });

    instance?.writeln(`${COLOR.green}Created directory '${dir}'${COLOR.reset}`);
  };
};
