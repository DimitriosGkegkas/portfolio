import type { Terminal } from "@xterm/xterm";
import { COLOR, commits } from "../constants";
import type { RefObject } from "react";

export const gitHelper = (
  instance: Terminal,
  currentBranch: RefObject<string | null>,
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>
) => {
  return ([sub, ...rest]: string[]) => {
    if (sub === "checkout") {
      const branch = rest[0];
      if (branch === "education" || branch === "projects") {
        currentBranch.current = branch;
        instance?.writeln(`Switched to branch '${branch}'`);
        instance?.writeln(`${COLOR.yellow}Commit history for '${branch}':${COLOR.reset}`);

        commits[currentBranch.current].forEach((c) => {
          instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash}${COLOR.reset} ${c.year ? `${COLOR.gray}${c.year}${COLOR.reset}` : ""}  ${c.message}`);
          if (c.university) {
            instance?.writeln(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
          }
        });
        if (branch === "education") setState((prev) => ({ ...prev, project: branch }));
      }
      // else if it is one of the hashes in the commits
      else if (currentBranch.current && Object.values(commits[currentBranch.current]).some((c) => c.hash === branch)) {
        const found = Object.values(commits[currentBranch.current]).find((c) => c.hash === branch);
        if (found) {
          setState((prev) => ({ ...prev, project: found.project || null }));
        } else {
          instance?.writeln(`${COLOR.red}git: unknown branch or commit hash '${branch}'${COLOR.reset}`);
        }
      } else {
        instance?.writeln(`${COLOR.red}git: unknown branch${COLOR.reset}`);
      }
    } else if (sub === "status") {
      if (currentBranch.current) {
        instance?.writeln(`On branch ${COLOR.blue}${currentBranch.current}${COLOR.reset}`);
        instance?.writeln("Your branch is up to date with 'origin/main'.");
        instance?.writeln("nothing to commit, working tree clean");
      } else {
        instance?.writeln(`${COLOR.red}fatal: no branch checked out${COLOR.reset}`);
      }
    } else if (sub === "log") {
      const branch = currentBranch.current;
      if (!branch || !commits[branch]) {
        instance?.writeln(`${COLOR.red}fatal: no branch checked out${COLOR.reset}`);
        return;
      }

      instance?.writeln(`${COLOR.yellow}Commit history for '${branch}':${COLOR.reset}`);

      commits[branch].forEach((c) => {
        instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
        instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash} ${COLOR.gray}${c.year}${COLOR.reset}  ${c.message}`);
        if (c.university) {
          instance?.writeln(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
        }
      });
    } else {
      instance?.writeln(`${COLOR.red}Unknown git command: ${sub}${COLOR.reset}`);
    }
  };
};
