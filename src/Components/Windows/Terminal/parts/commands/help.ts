import type { Terminal } from "@xterm/xterm";
import { COLOR } from "../constants";

export const helpHandler = (instance: Terminal) => {
  return () => {
    instance.writeln("");
    instance.writeln(`${COLOR.cyan}  ╔════════════════════════════════════════════════════════════╗${COLOR.reset}`);
    instance.writeln(`${COLOR.cyan}  ║                   ${COLOR.yellow}📚  AVAILABLE COMMANDS${COLOR.cyan}                    ║${COLOR.reset}`);
    instance.writeln(`${COLOR.cyan}  ╚════════════════════════════════════════════════════════════╝${COLOR.reset}`);
    instance.writeln("");
    
    // Git commands section
    instance.writeln(`  ${COLOR.magenta}🔀 Git Commands:${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}git checkout${COLOR.reset} ${COLOR.yellow}[education|web-development|robotics-ai]${COLOR.reset}`);
    instance.writeln(`    ${COLOR.gray}└─${COLOR.reset} Switch between project branches`);
    instance.writeln("");
    instance.writeln(`    ${COLOR.green}git log${COLOR.reset}`);
    instance.writeln(`    ${COLOR.gray}└─${COLOR.reset} View commit history of current branch`);
    instance.writeln("");
    instance.writeln(`    ${COLOR.green}git status${COLOR.reset}`);
    instance.writeln(`    ${COLOR.gray}└─${COLOR.reset} Show current branch status`);
    instance.writeln("");
    
    // File system commands
    instance.writeln(`  ${COLOR.blue}📁 File System:${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}ls${COLOR.reset}              ${COLOR.gray}List directory contents${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}cd${COLOR.reset} ${COLOR.yellow}[folder]${COLOR.reset}    ${COLOR.gray}Change directory${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}pwd${COLOR.reset}             ${COLOR.gray}Print working directory${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}mkdir${COLOR.reset} ${COLOR.yellow}[name]${COLOR.reset}    ${COLOR.gray}Create new directory${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}touch${COLOR.reset} ${COLOR.yellow}[name]${COLOR.reset}    ${COLOR.gray}Create new file${COLOR.reset}`);
    instance.writeln("");
    
    // Utility commands
    instance.writeln(`  ${COLOR.cyan}🛠️  Utilities:${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}echo${COLOR.reset} ${COLOR.yellow}[text]${COLOR.reset}     ${COLOR.gray}Display text${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}whoami${COLOR.reset}          ${COLOR.gray}Display user information${COLOR.reset}`);
    instance.writeln(`    ${COLOR.green}clear${COLOR.reset}           ${COLOR.gray}Clear terminal screen${COLOR.reset}`);
    instance.writeln("");
    
    instance.writeln(`  ${COLOR.yellow}💡 Tip:${COLOR.reset} Start with ${COLOR.cyan}git checkout education${COLOR.reset} to explore my journey!`);
    instance.writeln("");
  };
};
