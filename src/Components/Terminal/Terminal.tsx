import { useRef, useEffect, useMemo } from "react";
import { useXTerm } from "react-xtermjs";
import { FitAddon } from "@xterm/addon-fit";
import { COLOR, fs_data } from "./parts/constants";
import "./Terminal.css";
import { welcomeMessage } from "./parts/welcome";
import { prompt } from "./parts/promt";
import { getCommands } from "./parts/commands";
import { provideLinksHandler } from "./parts/links/provideLinksHandler";
import { aboutHandler, contactHandler, educationHandler, webDevHandler, roboticsHandler } from "./parts/links/handlers";
import DraggableWindow from "../DraggableWindow/DraggableWindow";

// Define terminal options outside component to prevent re-creation on every render
const terminalOptions = {
  rows: 32
};

const Terminal3D = ({ 
  setState, 
  onWebDevClick, 
  onRoboticsClick 
}: { 
  setState: React.Dispatch<React.SetStateAction<{ open: boolean; project: string | null }>>;
  onWebDevClick?: () => void;
  onRoboticsClick?: () => void;
}) => {
  const { instance, ref } = useXTerm({
    options: terminalOptions
  });
  const inputBuffer = useRef<string>("");
  const currentBranch = useRef<"education" | "projects" | null>(null);
  const currentPath = useRef<string>("~/portfolio/");
  const fs = useRef<Record<string, { name: string; isDir: boolean; created: string; content?: string }[]>>(fs_data);

  const onCommand = useMemo(() => {
    if (!instance) return () => { };
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
    const terminalElement = document.getElementById('terminal');
    if (!terminalElement) return;

    const fitAddon = new FitAddon();
    instance.loadAddon(fitAddon);

    const observer = new ResizeObserver(([args]) => {
      // Use requestAnimationFrame to ensure DOM is updated before fitting
      requestAnimationFrame(() => {
        fitAddon.fit();
      });
      instance.options.fontSize = args.contentRect.width / 60; // Adjust font size based on width
      // if (args.contentRect.width < 350 || args.contentRect.height < 200) {
      //   instance.options.fontSize = 10; // Set font size
      // } else if (args.contentRect.width < 600) {
      //   instance.options.fontSize = 12; // Reset to default font size
      // } else {
      //   instance.options.fontSize = 14; // Set larger font size
      // }
    });

    observer.observe(terminalElement);

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

    // Fit after content is loaded - use multiple approaches to ensure it works
    const fitTerminal = () => {
      requestAnimationFrame(() => {
        fitAddon.fit();
      });
    };

    // Fit immediately
    fitTerminal();

    // Fit after a short delay to ensure content is rendered
    setTimeout(fitTerminal, 50);

    // Fit after content is fully loaded
    setTimeout(fitTerminal, 200);

    // Cleanup on unmount
    return () => observer.disconnect();
  }, [instance]);

  const handleAboutClick = useMemo(() => {
    if (instance) return aboutHandler(instance, onCommand, currentPath, currentBranch);
    return () => { };
  }, [instance, onCommand]);

  const handleContactClick = useMemo(() => {
    if (instance) return contactHandler(instance, onCommand, currentPath, currentBranch);
    return () => { };
  }, [instance, onCommand]);

  const handleEducationClick = useMemo(() => {
    if (instance) return educationHandler(instance, onCommand, currentPath, currentBranch);
    return () => { };
  }, [instance, onCommand]);

  const handleWebDevClick = useMemo(() => {
    if (instance) {
      const originalHandler = webDevHandler(instance, onCommand, currentPath, currentBranch);
      return () => {
        originalHandler();
        onWebDevClick?.(); // Trigger Finder to come to front
      };
    }
    return () => { };
  }, [instance, onCommand, onWebDevClick]);

  const handleRoboticsClick = useMemo(() => {
    if (instance) {
      const originalHandler = roboticsHandler(instance, onCommand, currentPath, currentBranch);
      return () => {
        originalHandler();
        onRoboticsClick?.(); // Trigger Finder to come to front
      };
    }
    return () => { };
  }, [instance, onCommand, onRoboticsClick]);

  return (
    <DraggableWindow
      menuButtons={[
        { label: "About", onClick: handleAboutClick },
        { label: "Education", onClick: handleEducationClick },
        { label: "Web Dev", onClick: handleWebDevClick },
        { label: "Robotics & AI", onClick: handleRoboticsClick },
        { label: "Contact", onClick: handleContactClick },
      ]}
      style={{
        transform: `translateX(-50%) translateY(-50%)`
      }}
      windowId="terminal-window"
    >
      <div className='terminal-wrapper' onPointerDown={(e) => e.stopPropagation()}>
        <div ref={ref} id='terminal' />
      </div>
    </DraggableWindow>
  );
};

export default Terminal3D;
