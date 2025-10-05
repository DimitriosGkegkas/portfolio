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
      if (branch === "education" || branch === "web-development" || branch === "robotics-ai") {
        currentBranch.current = branch;
        instance?.writeln(`Switched to branch '${branch}'`);
        instance?.writeln(`${COLOR.yellow}Commit history for '${branch}':${COLOR.reset}`);

        if (currentBranch.current === "education") {
          // Enhanced display for education branch
          commits[currentBranch.current].forEach((c) => {
            instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash}${COLOR.reset} ${c.year ? `${COLOR.gray}${c.year}${COLOR.reset}` : ""}  ${c.message}`);
            if (c.university) {
              instance?.writeln(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
              
              // Add detailed information based on the commit
              if (c.hash === "keio-jemaro") {
                instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 Thesis: Decentralized Multi-Agent RL with Communication${COLOR.reset}`);
                instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• Autonomous driving, optimization, control algorithms${COLOR.reset}`);
                instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ROS2, SUMO, PyTorch, Multi-Agent RL${COLOR.reset}`);
              } else if (c.hash === "ecn-jemaro") {
                instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 Project: Multi-Agent SLAM with Kimera-Multi${COLOR.reset}`);
                instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• Real-time mapping, distributed autonomy in AirSim${COLOR.reset}`);
                instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ROS2, Python, C++, AirSim, Unreal Engine${COLOR.reset}`);
              } else if (c.hash === "ntua") {
                instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 Thesis: GAN Metrics for Image Quality${COLOR.reset}`);
                instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• Interactive AI validation framework with user feedback${COLOR.reset}`);
                instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: C++, Python, Javascript, Embedded Systems${COLOR.reset}`);
              }
            }
          });
        } else if (currentBranch.current === "web-development") {
          // Enhanced display for web-development branch
          commits[currentBranch.current].forEach((c) => {
            instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash}${COLOR.reset}  ${c.message}`);
            if (c.title) {
              instance?.writeln(`${COLOR.green}| └──  ${c.title}${COLOR.reset}`);
              
              // Add detailed information based on the commit
              if (c.description) {
                instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${c.description}${COLOR.reset}`);
              }
              if (c.techStack) {
                instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ ${c.techStack}${COLOR.reset}`);
              }
            }
          });
        } else if (currentBranch.current === "robotics-ai") {
          // Enhanced display for robotics-ai branch
          commits[currentBranch.current].forEach((c) => {
            instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash}${COLOR.reset}  ${c.message}`);
            if (c.title) {
              instance?.writeln(`${COLOR.green}| └──  ${c.title}${COLOR.reset}`);
              
              // Add detailed information based on the commit
              if (c.description) {
                instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${c.description}${COLOR.reset}`);
              }
              if (c.techStack) {
                instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ ${c.techStack}${COLOR.reset}`);
              }
            }
          });
        } else {
          // Standard display for other branches
          commits[currentBranch.current].forEach((c) => {
            instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
            instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash}${COLOR.reset} ${c.year ? `${COLOR.gray}${c.year}${COLOR.reset}` : ""}  ${c.message}`);
            if (c.university) {
              instance?.writeln(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
            }
          });
        }
        // if (branch === "education") setState((prev) => ({ ...prev, project: branch }));
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

      if (branch === "education") {
        // Enhanced display for education branch
        commits[branch].forEach((c) => {
          instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash} ${COLOR.gray}${c.year}${COLOR.reset}  ${c.message}`);
          if (c.university) {
            instance?.writeln(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
            
            // Add detailed information based on the commit
            if (c.hash === "keio-jemaro") {
              instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 Thesis: Decentralized Multi-Agent RL with Communication${COLOR.reset}`);
              instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• Autonomous driving, optimization, control algorithms${COLOR.reset}`);
              instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ROS2, SUMO, PyTorch, Multi-Agent RL${COLOR.reset}`);
            } else if (c.hash === "ecn-jemaro") {
              instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 Project: Multi-Drone SLAM with Kimera-Multi${COLOR.reset}`);
              instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• Real-time mapping, distributed autonomy in AirSim${COLOR.reset}`);
              instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: ROS2, AirSim, Unreal Engine${COLOR.reset}`);
            } else if (c.hash === "ntua") {
              instance?.writeln(`${COLOR.green}|   ${COLOR.yellow}🎯 Thesis: GAN Metrics for Image Quality${COLOR.reset}`);
              instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• Interactive AI validation framework with user feedback${COLOR.reset}`);
              instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ Tech: C++, Python, Embedded Systems${COLOR.reset}`);
            }
          }
        });
      } else if (branch === "web-development") {
        // Enhanced display for web-development branch
        commits[branch].forEach((c) => {
          instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash}${COLOR.reset}  ${c.message}`);
          if (c.title) {
            instance?.writeln(`${COLOR.green}| └──  ${c.title}${COLOR.reset}`);
            
            // Add detailed information based on the commit
            if (c.description) {
              instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${c.description}${COLOR.reset}`);
            }
            if (c.techStack) {
              instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ ${c.techStack}${COLOR.reset}`);
            }
          }
        });
      } else if (branch === "robotics-ai") {
        // Enhanced display for robotics-ai branch
        commits[branch].forEach((c) => {
          instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash}${COLOR.reset}  ${c.message}`);
          if (c.title) {
            instance?.writeln(`${COLOR.green}| └──  ${c.title}${COLOR.reset}`);
            
            // Add detailed information based on the commit
            if (c.description) {
              instance?.writeln(`${COLOR.green}|   ${COLOR.cyan}• ${c.description}${COLOR.reset}`);
            }
            if (c.techStack) {
              instance?.writeln(`${COLOR.green}|   ${COLOR.magenta}🛠️ ${c.techStack}${COLOR.reset}`);
            }
          }
        });
      } else {
        // Standard display for other branches
        commits[branch].forEach((c) => {
          instance?.writeln(`${COLOR.green}|${COLOR.reset}`);
          instance?.writeln(`${COLOR.green}| * ${COLOR.yellow}${c.hash} ${COLOR.gray}${c.year}${COLOR.reset}  ${c.message}`);
          if (c.university) {
            instance?.writeln(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
          }
        });
      }
    } else {
      instance?.writeln(`${COLOR.red}Unknown git command: ${sub}${COLOR.reset}`);
    }
  };
};
