import type { Terminal } from "@xterm/xterm";
import { COLOR } from "../constants";
import type { RefObject } from "react";
import { normalizePath } from "../utils";

export const cdHelper = (
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
  return ([target]: string[]) => {
    if (!target) {
      target = "~/portfolio"; // Default to home directory
    }

    const current = currentPath.current;
    const targetSegments = target.startsWith("~") ? target.split("/") : (current + "/" + target).split("/");

    const newPath = normalizePath(targetSegments);
    console.log("Changing directory to:", newPath, target);
    if (fs.current[newPath]) {
      currentPath.current = newPath;
    } else {
      instance?.writeln(`${COLOR.red}cd: ${target}: No such file or directory${COLOR.reset}`);
    }
  };
};
