import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import Window from "../../Windows/DraggableWindow/Window";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const MultiDroneSLAM: FC = () => {

  return (
    <ScrollableContent
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🚁" title="Multi-Drone Collaborative SLAM" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              JEMARO Master's Project at ECN
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                Real-time mapping and sensor fusion for distributed drone systems.
              </span>
            </div>
          </ProjectGroup>

          {/* IMPLEMENTATION */}
          <ProjectGroup 
            emoji="🎯" 
            title="IMPLEMENTATION" 
            color="#FBBF24"
            badges={["SLAM", "Kimera-Multi", "Sensor Fusion", "Multi-Agent"]}
            content={[
              <>
                Implemented a <span style={{ color: "#FBBF24" }}>distributed SLAM system</span> using the Kimera-Multi framework.
              </>,
              <>
                Achieved <span style={{ color: "#F472B6" }}>real-time performance</span> in AirSim/Unreal Engine simulation environments.
              </>,
              <>
                Developed <span style={{ color: "#34D399" }}>multi-agent coordination</span> protocols for autonomous operations.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={[
              { courses: ["ROS2", "AirSim", "Unreal Engine"], color: "#A78BFA" },
              { courses: ["Python", "C++"], color: "#34D399" }
            ]}
            content={[
              <>
                Built with <span style={{ color: "#A78BFA" }}>ROS2</span> for middleware, <span style={{ color: "#A78BFA" }}>Python</span> and <span style={{ color: "#A78BFA" }}>C++</span> for algorithms.
              </>,
              <>
                Created <span style={{ color: "#EC4899" }}>scalable communication protocols</span> for multi-drone coordination.
              </>
            ]}
          />

          {/* RESEARCH */}
          <ProjectGroup 
            emoji="🔬" 
            title="RESEARCH CONTRIBUTION" 
            color="#6EE7B7"
            content={[
              <>
                Part of <span style={{ color: "#6EE7B7" }}>JEMARO Master's program</span> at École Centrale de Nantes.
              </>,
              <>
                Advanced research in <span style={{ color: "#F59E0B" }}>sensor fusion</span> and <span style={{ color: "#F59E0B" }}>distributed autonomy</span> for aerial robotics.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.05}
      >
        <Window>
          <img src={asset('/projects/slam/slam_1 Large.jpeg')} alt='Multi-Drone SLAM' className='mockup-image' width={500} />
        </Window>
      </StaticItemDiv>
      <StaticItemDiv
        top="0%"
        left="-35%"
        threshold={0.2}
      >
        <Window>
          <img src={asset('/projects/slam/slam_2 Large.jpeg')} alt='Multi-Drone SLAM' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>
      <StaticItemDiv
        top="4%"
        left="-20%"
        threshold={0.3}
      >
        <Window>
          <img src={asset('/projects/slam/slam_3 Large.jpeg')} alt='Multi-Drone SLAM' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>
      <StaticItemDiv
        top="-25%"
        left="-10%"
        threshold={0.5}
      >
        <Window>
          <img src={asset('/projects/slam/slam_5 Large.jpeg')} alt='Multi-Drone SLAM' className='mockup-image' width={400} />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};
