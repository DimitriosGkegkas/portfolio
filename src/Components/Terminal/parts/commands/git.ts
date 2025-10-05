import type { Terminal } from "@xterm/xterm";
import { COLOR, commits } from "../constants";
import type { RefObject } from "react";
import type { Project } from "../../../../Data/portfolioData";
import { getBranchProjects } from "../../../../Data/portfolioData";

export const gitHelper = (
  instance: Terminal,
  currentBranch: RefObject<string | null>,
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>
) => {
  return ([sub, ...rest]: string[]) => {
    if (sub === "checkout") {
      const branch = rest[0];
      if (branch === "education" || branch === "web-development" || branch === "robotics-ai") {
        currentBranch.current = branch;
        instance?.writeln(`Switched to branch '${branch}'`);
        instance?.writeln(`${COLOR.yellow}Commit history for '${branch}':${COLOR.reset}`);

        const branchProjects = getBranchProjects(branch);
        
        branchProjects.forEach((project: Project) => {
          instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${project.hash}${COLOR.reset} ${project.year ? `${COLOR.gray}${project.year}${COLOR.reset}` : ""}  ${project.title}`);
          
          if (project.university) {
            instance?.writeln(`${COLOR.green}| └──  ${project.university} - ${project.location}${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 ${project.name}${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${project.description}${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ${project.techStack.join(', ')}${COLOR.reset}`);
          } else {
            instance?.writeln(`${COLOR.green}| └──  ${project.name}${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${project.description}${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ${project.techStack.join(', ')}${COLOR.reset}`);
          }
        });
      }
      // else if it is one of the hashes in the commits
      else if (currentBranch.current && getBranchProjects(currentBranch.current).some((p: Project) => p.hash === branch)) {
        const found = getBranchProjects(currentBranch.current).find((p: Project) => p.hash === branch);
        if (found) {
          setState((prev) => ({ ...prev, project: found.id || null }));
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

      const branchProjects = getBranchProjects(branch);
      
      branchProjects.forEach((project: Project) => {
        instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
        instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${project.hash}${COLOR.reset} ${project.year ? `${COLOR.gray}${project.year}${COLOR.reset}` : ""}  ${project.title}`);
        
        if (project.university) {
          instance?.writeln(`${COLOR.green}| └──  ${project.university} - ${project.location}${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 ${project.name}${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${project.description}${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ${project.techStack.join(', ')}${COLOR.reset}`);
        } else {
          instance?.writeln(`${COLOR.green}| └──  ${project.name}${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${project.description}${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ${project.techStack.join(', ')}${COLOR.reset}`);
        }
      });
    } else {
      instance?.writeln(`${COLOR.red}Unknown git command: ${sub}${COLOR.reset}`);
    }
  };
};
