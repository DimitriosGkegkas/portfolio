import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import Window from "../../Windows/DraggableWindow/Window";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const MultiDroneSLAM: FC = () => {

  return (
    <ScrollableContent
      damping={0.1}
      zIndex={100000000}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup 
            emoji="🚁" 
            title="Multi-Drone Collaborative SLAM" 
            color="#60A5FA"
            content={[
              <>
                JEMARO Master’s Project,{" "}
                <span style={{ color: "#60A5FA" }}>École Centrale de Nantes</span>
              </>,
              <>
                Research on{" "}
                <span style={{ color: "#60A5FA" }}>real-time multi-agent mapping</span>{" "}
                using distributed SLAM and{" "}
                <span style={{ color: "#60A5FA" }}>ROS2–AirSim integration</span>{" "}
                for drone swarms in simulated rescue scenarios.
              </>
            ]}
          />

          {/* IMPLEMENTATION */}
          <ProjectGroup 
            emoji="🎯" 
            title="IMPLEMENTATION" 
            color="#FBBF24"
            badges={["Kimera-Multi", "ROS2", "AirSim", "Sensor Fusion", "Multi-Agent"]}
            content={[
              <>
                Implemented a{" "}
                <span style={{ color: "#FBBF24" }}>distributed SLAM pipeline</span>{" "}
                based on{" "}
                <span style={{ color: "#FBBF24" }}>Kimera-Multi</span>, enabling 
                collaborative mapping between multiple UAVs.
              </>,
              <>
                Extended the framework to operate with{" "}
                <span style={{ color: "#FBBF24" }}>live sensor data</span>{" "} 
                streamed from{" "} 
                <span style={{ color: "#FBBF24" }}>AirSim in Unreal Engine</span>{" "} 
                via{" "} 
                <span style={{ color: "#FBBF24" }}>ROS2 middleware</span>, 
                rather than offline rosbag playback.
              </>,
              <>
                Developed{" "} 
                <span style={{ color: "#34D399" }}>synchronization and validation modules</span>{" "} 
                to verify map consistency and inter-drone localization accuracy in real time.
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
              "Kimera-Multi", 
              "AirSim", 
              "Unreal Engine", 
              "Python", 
              "C++"
            ]}
            content={[
              <>
                Built with{" "} 
                <span style={{ color: "#A78BFA" }}>ROS2</span> for 
                inter-process communication and distributed control, using{" "} 
                <span style={{ color: "#A78BFA" }}>Kimera-Multi</span> as the 
                core SLAM back-end for pose graph optimization and loop closure.
              </>,
              <>
                Integrated{" "} 
                <span style={{ color: "#A78BFA" }}>AirSim (Unreal Engine)</span>{" "} 
                as a photorealistic simulator for drone flight and perception, 
                achieving{" "} 
                <span style={{ color: "#A78BFA" }}>real-time data streaming</span>{" "} 
                between simulated agents and ROS2 nodes.
              </>,
              <>
                Algorithms implemented in{" "} 
                <span style={{ color: "#A78BFA" }}>C++</span>{" "} 
                for performance-critical SLAM tasks, with{" "} 
                <span style={{ color: "#A78BFA" }}>Python</span>{" "} 
                scripts for system orchestration and evaluation.
              </>
            ]}
          />

          {/* APPLICATION */}
          <ProjectGroup 
            emoji="🚨" 
            title="APPLICATION CONTEXT" 
            color="#F59E0B"
            content={[
              <>
                Designed for{" "} 
                <span style={{ color: "#F59E0B" }}>rapid-response scenarios</span>{" "} 
                such as{" "} 
                <span style={{ color: "#F59E0B" }}>search and rescue missions</span>, 
                where multiple drones collaboratively map unknown environments 
                to locate targets quickly.
              </>,
              <>
                Demonstrates the potential of{" "} 
                <span style={{ color: "#F59E0B" }}>multi-agent autonomy</span>{" "} 
                for large-scale deployment in dynamic or hazardous environments.
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
                Conducted as part of the{" "} 
                <span style={{ color: "#6EE7B7" }}>JEMARO Master’s program</span>{" "} 
                at{" "} 
                <span style={{ color: "#6EE7B7" }}>École Centrale de Nantes</span>.
              </>,
              <>
                Advanced state-of-the-art methodologies in{" "} 
                <span style={{ color: "#6EE7B7" }}>sensor fusion</span>{" "} 
                and{" "} 
                <span style={{ color: "#6EE7B7" }}>distributed SLAM</span>{" "}
                for collaborative aerial robotics.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv top="-30%" left="-40%" threshold={0.05}>
        <Window>
          <img 
            src={asset("/projects/slam/slam_1 Large.jpeg")} 
            alt="Multi-Drone SLAM" 
            className="mockup-image" 
            width={500} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="0%" left="-35%" threshold={0.2}>
        <Window>
          <img 
            src={asset("/projects/slam/slam_2 Large.jpeg")} 
            alt="Multi-Drone SLAM Visualization" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="4%" left="-20%" threshold={0.3}>
        <Window>
          <img 
            src={asset("/projects/slam/slam_3 Large.jpeg")} 
            alt="Multi-Drone Mapping System" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="-25%" left="-10%" threshold={0.5}>
        <Window>
          <img 
            src={asset("/projects/slam/slam_5 Large.jpeg")} 
            alt="Multi-Drone SLAM Architecture" 
            className="mockup-image" 
            width={400} 
          />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};
