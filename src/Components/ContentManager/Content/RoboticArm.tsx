import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import Window from "../../Windows/DraggableWindow/Window";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const RoboticArm: FC = () => {

  return (
    <ScrollableContent
      damping={0.1}
      zIndex={100000000}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup 
            emoji="🤖" 
            title="Robotic Arm Pick & Place" 
            color="#60A5FA"
            content={[
              <>
                Hackathon Project,{" "}
                <span style={{ color: "#60A5FA" }}>2nd Place at JEMARO DAYS 2024</span>{" "}
                (Warsaw, Poland)
              </>,
              <>
                An autonomous{" "}
                <span style={{ color: "#60A5FA" }}>pick-and-place robotic system</span>{" "}
                built using{" "}
                <span style={{ color: "#60A5FA" }}>ROS2</span>, featuring perception, 
                control, state management, and decision-making components.
              </>
            ]}
          />

          {/* SYSTEM DESIGN */}
          <ProjectGroup 
            emoji="🎯" 
            title="SYSTEM DESIGN" 
            color="#FBBF24"
            badges={["Perception", "Control", "State Management", "ROS2"]}
            content={[
              <>
                Designed and implemented a complete{" "}
                <span style={{ color: "#FBBF24" }}>ROS2-based architecture</span>{" "}
                spanning from sensor-driven perception to low-level motion control.
              </>,
              <>
                Developed{" "}
                <span style={{ color: "#F472B6" }}>real-time object detection</span>{" "}
                and localization pipelines using computer vision.
              </>,
              <>
                Created{" "}
                <span style={{ color: "#34D399" }}>path planning algorithms</span>{" "}
                with obstacle avoidance and smooth trajectory generation.
              </>,
              <>
                Integrated{" "}
                <span style={{ color: "#A78BFA" }}>finite-state management</span>{" "}
                for autonomous task sequencing and system coordination.
              </>
            ]}
          />

          {/* TECHNOLOGY */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={[
              "ROS2", 
              "Python", 
              "OpenCV", 
              "Sensor Fusion", 
              "Motion Control"
            ]}
            content={[
              <>
                Built with{" "}
                <span style={{ color: "#A78BFA" }}>ROS2</span> for modular 
                robotics communication and{" "}
                <span style={{ color: "#A78BFA" }}>Python</span> for control 
                and perception nodes.
              </>,
              <>
                Used{" "}
                <span style={{ color: "#A78BFA" }}>OpenCV</span> for 
                computer vision and{" "}
                <span style={{ color: "#34D399" }}>sensor integration</span>{" "}
                to enable reliable real-time detection under varying lighting conditions.
              </>,
              <>
                Implemented{" "}
                <span style={{ color: "#A78BFA" }}>PID motion control</span>{" "}
                and trajectory smoothing for precise manipulation and stability.
              </>
            ]}
          />

          {/* ACHIEVEMENT */}
          <ProjectGroup 
            emoji="🏆" 
            title="COMPETITION RESULT" 
            color="#6EE7B7"
            content={[
              <>
                Awarded{" "}
                <span style={{ color: "#6EE7B7" }}>2nd Place</span>{" "}
                at{" "}
                <span style={{ color: "#6EE7B7" }}>JEMARO DAYS 2024</span>{" "}
                in Warsaw, Poland.
              </>,
              <>
                Recognized for{" "}
                <span style={{ color: "#F59E0B" }}>system robustness</span>,{" "}
                <span style={{ color: "#F59E0B" }}>integration depth</span>, 
                and{" "}
                <span style={{ color: "#F59E0B" }}>precision in task execution</span>.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv top="-40%" left="-30%" threshold={0.1}>
        <Window>
          <img 
            src={asset("/projects/roboHack/robot.jpeg")} 
            alt="Robotic Arm Pick & Place" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="-30%" left="-48%" threshold={0.2}>
        <Window>
          <img 
            src={asset("/projects/roboHack/code.jpeg")} 
            alt="Robotic Arm Code" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="-25%" left="-20%" threshold={0.3}>
        <VimeoVideo videoId="1124883419" ratio={1.5} height={60} />
      </StaticItemDiv>

      <StaticItemDiv top="-30%" left="-40%" threshold={0.4}>
        <Window>
          <img 
            src={asset("/projects/roboHack/place.jpeg")} 
            alt="Robotic Arm Manipulation" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};
