import { useRef, useEffect, useMemo } from "react";
import { useXTerm } from "react-xtermjs";
import { FitAddon } from "@xterm/addon-fit";
import { MenuBar } from "../Menu/MenuBar/MenuBar";
import { COLOR, fs_data } from "./parts/constants";
import "./Terminal.css"; // Assuming you have a CSS file for styling the terminal
import { welcomeMessage } from "./parts/welcome";
import { prompt } from "./parts/promt";
import { getCommands } from "./parts/commands";
import { provideLinksHandler } from "./parts/links/provideLinksHandler";
import { aboutHandler, contactHandler, educationHandler, projectsHandler } from "./parts/links/handlers";
import { a as web } from "@react-spring/web";

const Terminal3D = ({ setState }: { setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>> }) => {
  const { instance, ref } = useXTerm();
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputBuffer = useRef<string>("");
  const currentBranch = useRef<"education" | "projects" | null>(null);
  const currentPath = useRef<string>("~/portfolio/");
  const fs = useRef<Record<string, { name: string; isDir: boolean; created: string; content?: string }[]>>(fs_data);

  const onCommand = useMemo(() => {
    if (!instance) return () => {};
    const commands = getCommands(instance, fs, currentPath, currentBranch, setState);

    return (input: string) => {
      const [rawCmd, ...args] = input.trim().split(/\s+/);
      const cmd = rawCmd.toLowerCase();
      const handler = commands.get(cmd);
      if (handler) {
        instance?.writeln("\r");
        handler(args);
      } else {
        instance?.writeln("\r");
        instance?.writeln(`${COLOR.red}Unknown command: '${cmd}'${COLOR.reset}`);
      }
    };
  }, [instance, fs, currentPath, currentBranch, setState]);

  useEffect(() => {
    if (!instance) return;
    const terminalElement = terminalRef.current;
    if (!terminalElement) return;

    const fitAddon = new FitAddon();
    const observer = new ResizeObserver(([args]) => {
      instance.options.fontSize = args.contentRect.width / 45; // Adjust font size based on width
      fitAddon.fit();
      // if (args.contentRect.width < 350 || args.contentRect.height < 200) {
      //   instance.options.fontSize = 10; // Set font size
      // } else if (args.contentRect.width < 600) {
      //   instance.options.fontSize = 12; // Reset to default font size
      // } else {
      //   instance.options.fontSize = 14; // Set larger font size
      // }
    });
    observer.observe(terminalElement);

    instance.loadAddon(fitAddon);
    fitAddon.fit();

    instance.registerLinkProvider({
      provideLinks: provideLinksHandler(instance, currentPath, currentBranch, onCommand),
    });

    instance.onData((data: string) => {
      const code = data.charCodeAt(0);
      switch (code) {
        // do not do anything for arrows and tabs
        case 27: // Escape
        case 91: // Escape sequence start
        case 9: // Tab
          return;
        case 13: // Enter
          onCommand(inputBuffer.current);
          prompt(currentPath, currentBranch, instance);
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

    welcomeMessage(instance);
    prompt(currentPath, currentBranch, instance);

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [instance]);

  const handleAboutClick = useMemo(() => {
    if (instance) return aboutHandler(instance, onCommand, currentPath, currentBranch);
    return () => {};
  }, [instance, onCommand]);

  const handleContactClick = useMemo(() => {
    if (instance) return contactHandler(instance, onCommand, currentPath, currentBranch);
    return () => {};
  }, [instance, onCommand]);

  const handleEducationClick = useMemo(() => {
    if (instance) return educationHandler(instance, onCommand, currentPath, currentBranch);
    return () => {};
  }, [instance, onCommand]);

  const handleProjectsClick = useMemo(() => {
    if (instance) return projectsHandler(instance, onCommand, currentPath, currentBranch);
    return () => {};
  }, [instance, onCommand]);

  return (
    <web.div ref={terminalRef} className='terminal-window-wrapper'>
      <div className='macos-header'>
        <span className='macos-dot red'></span>
        <span className='macos-dot yellow'></span>
        <span className='macos-dot green'></span>
        <MenuBar
          menuButtons={[
            { label: "About", onClick: handleAboutClick },
            { label: "Education", onClick: handleEducationClick },
            { label: "Projects", onClick: handleProjectsClick },
            { label: "Contact", onClick: handleContactClick },
          ]}
        />
      </div>

      <div className='terminal-wrapper' onPointerDown={(e) => e.stopPropagation()}>
        <div ref={ref} id='terminal' />
      </div>
    </web.div>
  );
};

export default Terminal3D;
