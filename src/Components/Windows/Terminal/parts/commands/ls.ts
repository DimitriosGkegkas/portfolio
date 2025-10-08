import type { Terminal } from "@xterm/xterm";
import type { RefObject } from "react";
import { COLOR } from "../constants";

export const lsHelper = (instance: Terminal, fs: RefObject<Record<string, { name: string; isDir: boolean; created: string; content?: string }[]>>, currentPath: RefObject<string>) => {
  return (args: string[]) => {
    const longFormat = args.includes("-l");
    const entries = fs.current[currentPath.current];
    if (!entries) {
      instance?.writeln(`${COLOR.red}Directory not found${COLOR.reset}`);
      return;
    }

    if (longFormat) {
      instance?.writeln("Permissions  Owner   Group   Size    Created       Name");
      instance?.writeln("-----------------------------------------------------------");
      entries.forEach((entry) => {
        const perms = entry.isDir ? "drwxr-xr-x" : "-rw-r--r--";
        const owner = "gkegkas";
        const group = "staff";
        const size = entry.isDir ? "4096" : "1024";
        const created = entry.created;
        const name = entry.name;
        instance?.writeln(`${perms}  ${owner}  ${group}  ${size.padEnd(6)} ${created}  ${name}`);
      });
    } else {
      entries.forEach((entry) => instance?.writeln(entry.name));
    }
  };
};
