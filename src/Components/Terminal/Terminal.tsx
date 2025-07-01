import { useRef, useEffect } from "react";
import { useXTerm } from "react-xtermjs";
import "xterm/css/xterm.css";
import { fs_data } from "./files";
import { MenuBar } from "../Menu/MenuBar/MenuBar";

const Terminal3D = ({ setState }: { setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>> }) => {
  const { instance, ref } = useXTerm();
  const inputBuffer = useRef<string>("");
  const currentBranch = useRef<"education" | "projects" | null>(null);
  const currentPath = useRef<string>("~/portfolio/");

  const fs = useRef<Record<string, { name: string; isDir: boolean; created: string; content?: string }[]>>(fs_data);

  const COLOR = {
    green: "\x1b[32m",
    blue: "\x1b[34m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    cyan: "\x1b[36m",
    reset: "\x1b[0m",
    magenta: "\x1b[35m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
  };

  const commits: Record<string, { hash: string; year?: string; university?: string; location?: string; message?: string; project: string; title?: string; color?: string; tech?: string[]; tags?: string[] }[]> = {
    education: [
      {
        hash: "h7i8j9k",
        year: "2025",
        university: "Keio University",
        location: "Tokyo, Japan",
        message: "MSc in Robotics and Control (in progress)",
        project: "keio",
      },
      {
        hash: "d4e5f6g",
        year: "2024",
        university: "Centrale Université de Nantes",
        location: "Nantes, France",
        message: "MSc in Advanced Robotics (JEMARO Double Degree)",
        project: "ecn",
      },
      {
        hash: "a1b2c3d",
        year: "2022",
        university: "National Technical University of Athens",
        location: "Athens, Greece",
        color: COLOR.cyan,
        message: "MSc in Electrical & Computer Engineering (5 year degree)",
        project: "ntua",
      },
    ],

    projects: [
      {
        hash: "meteo123",
        message: "Viber Weather Chatbot",
        title: "Conversational AI for Weather Services",
        tech: ["Node.js", "MongoDB", "Viber API"],
        tags: ["Chatbot", "Conversational AI"],
        project: "meteoBot", // key to match your dynamic route/component
      },
      {
        hash: "alex456",
        message: "Alexander's Journey – Interactive Map",
        title: "Historical Visualization of Alexander the Great's Campaign",
        tech: ["Three.js", "React", "GIS Data"],
        tags: ["Interactive Web", "3D", "History"],
        project: "alexanderMap",
      },
      {
        hash: "zago789",
        message: "Zagorisia Architecture Showcase",
        title: "Web Experience for Traditional Greek Architecture",
        tech: ["React", "Three.js", "Custom CMS"],
        tags: ["Architecture", "Web Design"],
        project: "zagorisiaApp",
      },
      {
        hash: "museum321",
        message: "Digital Museums Platform",
        title: "Online Platform for Cultural Exhibits",
        tech: ["Next.js", "MongoDB", "Image Processing"],
        tags: ["Cultural Tech", "Web App", "Digitization"],
        project: "digitalMuseums",
      },
      {
        hash: "pipe654",
        message: "Digitization Automation Pipeline",
        title: "Computer Vision Workflow for Delicate Artifact Scanning",
        tech: ["Python", "OpenCV", "Automation"],
        tags: ["Computer Vision", "Automation"],
        project: "digitizationPipeline",
      },
    ],
  };

  type CommandFn = (args: string[]) => void;

  const write = (text: string = "") => {
    instance?.writeln(`${text}`);
  };

  const commands = new Map<string, CommandFn>();

  commands.set("help", () => {
    write("Available commands:");
    write("  git checkout [education|projects]");
    write("  git log");
    write("  git status");
    write("  ls");
    write("  cd [folder]");
    write("  pwd");
    write("  mkdir [name]");
    write("  touch [name]");
    write("  echo [text]");
    write("  whoami");
    write("  clear");
  });

  commands.set("pwd", () => write(currentPath.current));
  commands.set("whoami", () => {
    write("dimitriosgkegkas");
  });
  commands.set("clear", () => {
    currentBranch.current = null;
    setState((prev) => ({ ...prev, project: null }));
    if (!instance) return;
    instance.clear();
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
    instance.writeln(`👉  Type ${COLOR.cyan}\`help\`${COLOR.reset} to see available commands.`);
    instance.writeln(`Use ${COLOR.cyan}\`git checkout education\`${COLOR.reset} or ${COLOR.cyan}\`projects\`${COLOR.reset} to explore.`);
    instance.writeln("");
  });

  commands.set("ls", (args) => {
    const longFormat = args.includes("-l");
    const entries = fs.current[currentPath.current];
    if (!entries) {
      write(`${COLOR.red}Directory not found${COLOR.reset}`);
      return;
    }

    if (longFormat) {
      write("Permissions  Owner   Group   Size    Created       Name");
      write("-----------------------------------------------------------");
      entries.forEach((entry) => {
        const perms = entry.isDir ? "drwxr-xr-x" : "-rw-r--r--";
        const owner = "gkegkas";
        const group = "staff";
        const size = entry.isDir ? "4096" : "1024";
        const created = entry.created;
        const name = entry.name;
        write(`${perms}  ${owner}  ${group}  ${size.padEnd(6)} ${created}  ${name}`);
      });
    } else {
      entries.forEach((entry) => write(entry.name));
    }
  });
  const normalizePath = (segments: string[]): string => {
    const resolved = [];
    for (const part of segments) {
      if (part === "." || part === "") continue;
      if (part === "..") resolved.pop();
      else resolved.push(part);
    }
    return resolved.join("/") + (resolved.length ? "/" : "");
  };

  commands.set("cd", ([target]) => {
    if (!target) {
      target = "~/portfolio"; // Default to home directory
    }

    const current = currentPath.current;
    const targetSegments = target.startsWith("~") ? target.split("/") : (current + "/" + target).split("/");

    const newPath = normalizePath(targetSegments);
    console.log("Changing directory to:", newPath, target);
    if (fs.current[newPath]) {
      currentPath.current = newPath;
    } else {
      write(`${COLOR.red}cd: ${target}: No such file or directory${COLOR.reset}`);
    }
  });

  commands.set("mkdir", ([dir]) => {
    if (!dir) return write(`${COLOR.red}mkdir: missing name${COLOR.reset}`);

    const now = new Date().toDateString().slice(4); // "Jul 01 2025"

    const parentSegments = currentPath.current.split("/").filter(Boolean);
    const newPath = normalizePath([...parentSegments, dir]);

    if (fs.current[newPath]) return write(`${COLOR.red}mkdir: File exists${COLOR.reset}`);

    // Create new folder in fs
    fs.current[newPath] = [];

    // Update parent directory listing
    if (!fs.current[currentPath.current]) fs.current[currentPath.current] = [];

    fs.current[currentPath.current].push({
      name: dir,
      isDir: true,
      created: now,
    });

    write(`${COLOR.green}Created directory '${dir}'${COLOR.reset}`);
  });

  commands.set("touch", ([file]) => {
    if (!file) return write(`${COLOR.red}touch: missing file name${COLOR.reset}`);

    const now = new Date().toDateString().slice(4);

    const currentDir = fs.current[currentPath.current];
    if (!currentDir) {
      write(`${COLOR.red}touch: Current directory does not exist${COLOR.reset}`);
      return;
    }

    if (currentDir.some((f) => f.name === file)) {
      return write(`${COLOR.red}touch: File exists${COLOR.reset}`);
    }

    currentDir.push({
      name: file,
      isDir: false,
      created: now,
    });

    write(`${COLOR.green}Created file '${file}'${COLOR.reset}`);
  });

  commands.set("cat", ([fileName]) => {
    if (!fileName) {
      write(`${COLOR.red}cat: missing file name${COLOR.reset}`);
      return;
    }

    if (fileName == "CV.pdf") {
      // Open CV in a new tab
      window.open("/CV.pdf", "_blank");
    }

    const dirContents = fs.current[currentPath.current];
    if (!dirContents) {
      write(`${COLOR.red}cat: directory not found${COLOR.reset}`);
      return;
    }

    const file = dirContents.find((item) => item.name === fileName);

    if (!file) {
      write(`${COLOR.red}cat: ${fileName}: No such file${COLOR.reset}`);
    } else if (file.isDir) {
      write(`${COLOR.red}cat: ${fileName}: Is a directory${COLOR.reset}`);
    } else {
      if (file.content) file.content.split("\n").forEach((line) => write(line));
      else write(" ");
    }
  });

  commands.set("git", ([sub, ...rest]) => {
    if (sub === "checkout") {
      const branch = rest[0];
      if (branch === "education" || branch === "projects") {
        currentBranch.current = branch;
        write(`Switched to branch '${branch}'`);
        write(`${COLOR.yellow}Commit history for '${branch}':${COLOR.reset}`);

        commits[currentBranch.current].forEach((c) => {
          write(`${COLOR.green}|${COLOR.reset}`);
          write(`${COLOR.green}| * ${COLOR.yellow}${c.hash} ${COLOR.gray}${c.year}${COLOR.reset}  ${c.message}`);
          if (c.university) {
            write(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
          }
        });
      }
      // else if it is one of the hashes in the commits
      else if (currentBranch.current && Object.values(commits[currentBranch.current]).some((c) => c.hash === branch)) {
        const found = Object.values(commits[currentBranch.current]).find((c) => c.hash === branch);
        console.log(found?.project);
        if (found) {
          setState((prev) => ({ ...prev, project: found.project || null }));
        } else {
          write(`${COLOR.red}git: unknown branch or commit hash '${branch}'${COLOR.reset}`);
        }
      } else {
        write(`${COLOR.red}git: unknown branch${COLOR.reset}`);
      }
    } else if (sub === "status") {
      if (currentBranch.current) {
        write(`On branch ${COLOR.blue}${currentBranch.current}${COLOR.reset}`);
        write("Your branch is up to date with 'origin/main'.");
        write("nothing to commit, working tree clean");
      } else {
        write(`${COLOR.red}fatal: no branch checked out${COLOR.reset}`);
      }
    } else if (sub === "log") {
      const branch = currentBranch.current;
      if (!branch || !commits[branch]) {
        write(`${COLOR.red}fatal: no branch checked out${COLOR.reset}`);
        return;
      }

      write(`${COLOR.yellow}Commit history for '${branch}':${COLOR.reset}`);

      commits[branch].forEach((c) => {
        write(`${COLOR.green}|${COLOR.reset}`);
        write(`${COLOR.green}| * ${COLOR.yellow}${c.hash} ${COLOR.gray}${c.year}${COLOR.reset}  ${c.message}`);
        if (c.university) {
          write(`${COLOR.green}| └──  ${c.university} - ${c.location}${COLOR.reset}`);
        }
      });
    } else {
      write(`${COLOR.red}Unknown git command: ${sub}${COLOR.reset}`);
    }
  });

  const onCommand = (input: string) => {
    const [rawCmd, ...args] = input.trim().split(/\s+/);
    const cmd = rawCmd.toLowerCase();
    const handler = commands.get(cmd);
    if (handler) {
      write("\r");
      handler(args);
    } else {
      write("\r");
      write(`${COLOR.red}Unknown command: '${cmd}'${COLOR.reset}`);
    }
  };
  const prompt = () => {
    const path = currentPath.current;
    const branch = currentBranch.current ? `(${currentBranch.current})` : "";

    const bgPath = "\x1b[43m"; // yellow
    const bgBranch = "\x1b[44m"; // blue
    const bgEnd = "\x1b[42m"; // green
    const fg = "\x1b[30m"; // black text
    const reset = "\x1b[0m";

    const styledPath = `${bgPath}${fg} ${path} ${reset}`;
    const styledBranch = branch ? `${bgBranch}${fg} ${branch} ${reset}` : "";
    const styledEnd = `${bgEnd}${fg} $ ${reset}`;

    if (!instance) return;

    instance.write(`${styledPath}${styledBranch}${styledEnd} `);
  };
  useEffect(() => {
    if (!instance) return;

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
    instance.writeln(`👉  Type ${COLOR.cyan}\`help\`${COLOR.reset} to see available commands.`);
    instance.writeln(`Use ${COLOR.cyan}\`git checkout education\`${COLOR.reset} or ${COLOR.cyan}\`projects\`${COLOR.reset} to explore.`);
    instance.writeln("");

    instance.registerLinkProvider({
      provideLinks: (y, callback) => {
        const line = instance.buffer.active.getLine(y - 1);
        if (!line) return callback([]);

        const text = line.translateToString();
        const links: { range: { start: { x: number; y: number }; end: { x: number; y: number } }; text: string; activate: () => void }[] = [];
        const addLink = (word: string, action: () => void) => {
          const index = text.indexOf(word);
          if (index !== -1) {
            links.push({
              range: {
                start: { x: index + 1, y }, // +1 because xterm is 1-based
                end: { x: index + word.length, y },
              },
              text: word,
              activate: action,
            });
          }
        };
        if (text.includes("git checkout")) {
          addLink("education", () => {
            instance.write(`git checkout education${COLOR.reset}`);
            onCommand("git checkout education");
            instance.scrollToBottom();
            prompt();
          });
          addLink("projects", () => {
            instance.write(`git checkout projects${COLOR.reset}`);
            onCommand("git checkout projects");
            instance.scrollToBottom();
            prompt();
          });
        }
        commits["education"].forEach((c) =>
          addLink(c.hash, () => {
            instance.write(`git checkout ${c.hash}`);
            onCommand(`git checkout ${c.hash}`);
            instance.scrollToBottom();
            prompt();
          })
        );
        commits["projects"].forEach((c) =>
          addLink(c.hash, () => {
            instance.write(`git checkout ${c.hash}`);
            onCommand(`git checkout ${c.hash}`);
            instance.scrollToBottom();
            prompt();
          })
        );

        addLink("dimitrisgegas01@gmail.com", () => {
          // Open email client
          window.open(`mailto:dimitrisgegas01@gmail.com`);
        });
        addLink("https://www.linkedin.com/in/dimitris-gkegkas/", () => {
          // Open LinkedIn profile
          window.open(`https://www.linkedin.com/in/dimitris-gkegkas/`, "_blank");
        });

        callback(links);
      },
    });

    const handleCommand = (command: string) => {
      onCommand(command);
      prompt();
    };

    prompt();
    console.log(instance);

    instance.onData((data: string) => {
      const code = data.charCodeAt(0);
      switch (code) {
        // do not do anything for arrows and tabs
        case 27: // Escape
        case 91: // Escape sequence start
        case 9: // Tab
          return;
        // case 65: // Up arrow
        // case 66: // Down arrow
        // case 67: // Right arrow
        // case 68: // Left arrow
        case 13: // Enter
          handleCommand(inputBuffer.current);
          inputBuffer.current = "";
          break;
        case 127: // Backspace
          if (inputBuffer.current.length > 0) {
            inputBuffer.current = inputBuffer.current.slice(0, -1);
            instance.write("\b \b");
          }
          break;
        default:
          inputBuffer.current += data;
          instance.write(data);
      }
    });
  }, [instance]);

  return (
    <>
      <div className='macos-header'>
        <span className='macos-dot red'></span>
        <span className='macos-dot yellow'></span>
        <span className='macos-dot green'></span>
        <MenuBar instance={instance} onCommand={onCommand} prompt={prompt} />
      </div>

      <div
        className='terminal-wrapper'
        onPointerDown={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          height: "100%",
          padding: "0px 28px 0px 28px",
          backgroundColor: "rgb(16, 20, 32)",
        }}>
        <div ref={ref} style={{ width: "100%", height: "100%" }} />
      </div>
    </>
  );
};

export default Terminal3D;
