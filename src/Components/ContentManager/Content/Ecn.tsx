// components/Ecn.tsx

import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Ecn: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollableContent
      damping={0.1}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🎓" title="Master in Control and Robotics" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              École Centrale de Nantes (2023–2024)
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                JEMARO Double Degree – Advanced Robotics program in Nantes, France.
              </span>
            </div>
          </ProjectGroup>

          {/* KEY PROJECT */}
          <ProjectGroup 
            emoji="🎯" 
            title="KEY PROJECT" 
            color="#FBBF24"
            badges={["SLAM", "Multi-Agent Systems", "Sensor Fusion"]}
            content={[
              <>
                <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>Multi-Drone Collaborative SLAM with Kimera-Multi</span>
              </>,
              <>
                Implemented <span style={{ color: "#A78BFA" }}>real-time mapping and sensor fusion</span> for distributed drone systems in AirSim/Unreal environments.
              </>,
              <>
                Connected <span style={{ color: "#A78BFA" }}>Kimera-Multi to high-fidelity simulations</span> using ROS2, achieving <span style={{ color: "#A78BFA" }}>distributed autonomy</span>.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECH STACK" 
            color="#F472B6"
            badges={[
              { courses: ["ROS2", "AirSim", "Unreal Engine", "Kimera-Multi"], color: "#F472B6" },
              { courses: ["Python", "C++"], color: "#A78BFA" }
            ]}
            content={[
              <>
                <span style={{ color: "#F472B6" }}>Specializations:</span> Control Theory, Robotic Manipulation, SLAM, Optimization
              </>,
              <>
                <span style={{ color: "#F472B6" }}>Focus Areas:</span> AI-driven robotics, dynamic controllers, system modeling
              </>
            ]}
          />

          {/* EXPERIENCE */}
          <ProjectGroup 
            emoji="🌟" 
            title="EXPERIENCE" 
            color="#34D399"
            content={[
              <>
                Studied alongside peers from across <span style={{ color: "#34D399" }}>Europe</span> in a diverse academic environment.
              </>,
              <>
                A year of deepening my passion for <span style={{ color: "#FCD34D" }}>autonomy</span>, <span style={{ color: "#FCD34D" }}>intelligent systems</span>, and <span style={{ color: "#FCD34D" }}>robotics R&D</span>.
              </>
            ]}
          />
        </>
      }
    >
      <Scroll>
        <ItemText text={"ECN"} scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
        <ItemText text='2023-2024' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='NANTES' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />
      </Scroll>
    </ScrollableContent>
  );
};