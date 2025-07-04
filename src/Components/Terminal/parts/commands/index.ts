import type { RefObject } from "react";
import { catHelper } from "./cat";
import { cdHelper } from "./cd";
import { clearHelper } from "./clear";
import { gitHelper } from "./git";
import { helpHandler } from "./help";
import { lsHelper } from "./ls";
import { mkdirHelper } from "./mkdir";
import { pwdHandler } from "./pwd";
import { touchHandler } from "./touch";
import { whoamiHandler } from "./whoami";
import type { Terminal } from "@xterm/xterm";

type CommandFn = (args: string[]) => void;

export const getCommands = (
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
  currentPath: RefObject<string>,
  currentBranch: RefObject<string | null>,
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>
): Map<string, CommandFn> => {
  const commands = new Map<string, CommandFn>();

  commands.set("cat", catHelper(instance, fs, currentPath));
  commands.set("cd", cdHelper(instance, fs, currentPath));
  commands.set("clear", clearHelper(instance, currentBranch, setState));
  commands.set("git", gitHelper(instance, currentBranch, setState));
  commands.set("help", helpHandler(instance));
  commands.set("ls", lsHelper(instance, fs, currentPath));
  commands.set("mkdir", mkdirHelper(instance, fs, currentPath));
  commands.set("pwd", pwdHandler(instance, currentPath));
  commands.set("touch", touchHandler(instance, fs, currentPath));
  commands.set("whoami", whoamiHandler(instance));

  return commands;
};
