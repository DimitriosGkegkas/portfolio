import type { Terminal } from "@xterm/xterm";
import type { RefObject } from "react";
import { welcomeMessage } from "../welcome";

export const clearHelper = (instance: Terminal, currentBranch: RefObject<string | null>, setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>): ((args: string[]) => void) => {
  return () => {
    currentBranch.current = null;
    setState((prev) => ({ ...prev, project: null }));
    if (!instance) return;
    instance.clear();
    welcomeMessage(instance);
  };
};
