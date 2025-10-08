import type { Terminal } from "@xterm/xterm";
import type { RefObject } from "react";

export const pwdHandler = (instance: Terminal, currentPath: RefObject<string>) => {
  return () => instance?.writeln(currentPath.current);
};
