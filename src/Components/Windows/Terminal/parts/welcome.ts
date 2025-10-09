import type { Terminal } from "@xterm/xterm";
import { COLOR } from "./constants";



export const welcomeMessage = (instance: Terminal) => {
  instance.writeln("");
  instance.writeln(`${COLOR.cyan}  ┌────────────────────────────────────────┐${COLOR.reset}`);
  instance.writeln(`${COLOR.cyan}  │                                        │${COLOR.reset}`);
  instance.writeln(`${COLOR.cyan}  │   👨‍💻  Welcome to the terminal of        │${COLOR.reset}`);
  instance.writeln(`${COLOR.cyan}  │       ${COLOR.green}Dimitrios Gkegkas${COLOR.cyan}                │${COLOR.reset}`);
  instance.writeln(`${COLOR.cyan}  │                                        │${COLOR.reset}`);
  instance.writeln(`${COLOR.cyan}  └────────────────────────────────────────┘${COLOR.reset}`);
  instance.writeln("");

  instance.writeln(`${COLOR.gray}Hey there!${COLOR.reset} I'm ${COLOR.green}Dimitrios${COLOR.reset}, a creative engineer 👨‍🔧`);
  instance.writeln(`exploring ${COLOR.blue}robotics 🤖${COLOR.reset}, ${COLOR.magenta}design 🎨${COLOR.reset}, and ${COLOR.yellow}code 💻${COLOR.reset}.`);
  instance.writeln("");
  instance.writeln(`Type ${COLOR.cyan}\`help\`${COLOR.reset} to see available commands.`);
  instance.writeln(`Explore with ${COLOR.cyan}\`git checkout education\`${COLOR.reset}, ${COLOR.cyan}\`web-development\`${COLOR.reset},`);
  instance.writeln(`or ${COLOR.cyan}\`robotics-ai\`${COLOR.reset} to view my projects.`);
  instance.writeln("");
};
