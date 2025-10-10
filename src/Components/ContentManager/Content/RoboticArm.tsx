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
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🤖" title="Robotic Arm Pick & Place" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              Hackathon Project - 2nd Place
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                Autonomous pick and place system with computer vision and path planning.
              </span>
            </div>
          </ProjectGroup>

          {/* IMPLEMENTATION */}
          <ProjectGroup 
            emoji="🎯" 
            title="SYSTEM DESIGN" 
            color="#FBBF24"
            badges={["Computer Vision", "Path Planning", "Manipulation"]}
            content={[
              <>
                Developed an <span style={{ color: "#FBBF24" }}>autonomous pick and place system</span> with integrated computer vision.
              </>,
              <>
                Implemented <span style={{ color: "#F472B6" }}>real-time object detection</span> and precise localization.
              </>,
              <>
                Created <span style={{ color: "#34D399" }}>path planning algorithms</span> with obstacle avoidance capabilities.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={[
              { courses: ["ROS", "Python", "OpenCV"], color: "#A78BFA" },
              { courses: ["Sensor Integration", "Motion Control"], color: "#34D399" }
            ]}
            content={[
              <>
                Built with <span style={{ color: "#A78BFA" }}>ROS</span>, <span style={{ color: "#A78BFA" }}>Python</span>, and <span style={{ color: "#A78BFA" }}>OpenCV</span> for vision processing.
              </>,
              <>
                Integrated <span style={{ color: "#EC4899" }}>multiple sensors</span> for robust operation in dynamic environments.
              </>
            ]}
          />

          {/* ACHIEVEMENT */}
          <ProjectGroup 
            emoji="🏆" 
            title="ACHIEVEMENT" 
            color="#6EE7B7"
            content={[
              <>
                Secured <span style={{ color: "#6EE7B7" }}>2nd place</span> in robotics hackathon competition.
              </>,
              <>
                Achieved <span style={{ color: "#F59E0B" }}>high precision</span> in manipulation tasks under time constraints.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv
        top="-40%"
        left="-30%"
        threshold={0.1}
      >
        <Window>
          <img src={asset('/projects/roboHack/robot.jpeg')} alt='Robotic Arm Pick & Place' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>
      <StaticItemDiv
        top="-30%"
        left="-48%"
        threshold={0.2}
      >
        <Window>
          <img src={asset('/projects/roboHack/code.jpeg')} alt='Robotic Arm Pick & Place' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-25%"
        left="-20%"
        threshold={0.3}
      >
        <VimeoVideo videoId="1124883419" ratio={1.5} height={60} />
      </StaticItemDiv>
      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.4}
      >
        <Window>
          <img src={asset('/projects/roboHack/place.jpeg')} alt='Robotic Arm Pick & Place' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};