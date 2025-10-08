import type { Terminal } from "@xterm/xterm";
import { COLOR } from "../constants";
import type { RefObject } from "react";

export const catHelper = (
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
  return ([fileName]: string[]) => {
    if (!fileName) {
      instance.writeln(`${COLOR.red}cat: missing file name${COLOR.reset}`);
      return;
    }

    if (fileName.includes("CV.pdf")) {
      // Open CV in a new tab
      window.open("/CV.pdf", "_blank");
    }

    const dirContents = fs.current[currentPath.current];
    if (!dirContents) {
      instance.writeln(`${COLOR.red}cat: directory not found${COLOR.reset}`);
      return;
    }

    const file = dirContents.find((item) => item.name === fileName);

    if (!file) {
      instance.writeln(`${COLOR.red}cat: ${fileName}: No such file${COLOR.reset}`);
    } else if (file.isDir) {
      instance.writeln(`${COLOR.red}cat: ${fileName}: Is a directory${COLOR.reset}`);
    } else {
      if (file.content) file.content.split("\n").forEach((line) => instance.writeln(line));
      else instance.writeln(" ");
    }
  };
};
