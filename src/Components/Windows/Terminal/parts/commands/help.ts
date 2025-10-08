import type { Terminal } from "@xterm/xterm";

export const helpHandler = (instance: Terminal) => {
  return () => {
    instance.writeln("Available commands:");
    instance.writeln("  git checkout [education|projects]");
    instance.writeln("  git log");
    instance.writeln("  git status");
    instance.writeln("  ls");
    instance.writeln("  cd [folder]");
    instance.writeln("  pwd");
    instance.writeln("  mkdir [name]");
    instance.writeln("  touch [name]");
    instance.writeln("  echo [text]");
    instance.writeln("  whoami");
    instance.writeln("  clear");
  };
};
