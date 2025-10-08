import type { Terminal } from "@xterm/xterm";

export const whoamiHandler = (instance: Terminal) => {
  return () => {
    instance?.writeln("dimitriosgkegkas");
  };
};
