// components/Keio.tsx

import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Keio: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollableContent
      damping={0.1}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🎓" title="Master of Science in Engineering" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              Keio University, Tokyo (2024–2025)
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                JEMARO Double Degree program at one of Japan's top private universities.
              </span>
            </div>
          </ProjectGroup>

          {/* THESIS PROJECT */}
          <ProjectGroup 
            emoji="🎯" 
            title="MASTER THESIS PROJECT" 
            color="#FBBF24"
            badges={["Reinforcement Learning", "Multi-Agent Systems", "V2X Communication"]}
            content={[
              <>
                <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>Decentralized Multi-Agent Reinforcement Learning with Communication</span> for autonomous driving
              </>,
              <>
                Focused on <span style={{ color: "#A78BFA" }}>optimization, control algorithms, and safe decision-making</span> in multi-robot systems.
              </>,
              <>
                Developed <span style={{ color: "#A78BFA" }}>vehicle-to-vehicle communication infrastructure</span> for policy exchange and coordinated learning.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECH STACK" 
            color="#F472B6"
            badges={[
              { courses: ["ROS2", "SUMO", "PyTorch", "Python"], color: "#F472B6" },
              { courses: ["Multi-Agent RL", "Autonomous Driving", "V2X"], color: "#A78BFA" }
            ]}
            content={[
              <>
                <span style={{ color: "#F472B6" }}>Specializations:</span> Multi-Agent RL, Autonomous Driving, V2X Communication
              </>,
              <>
                <span style={{ color: "#F472B6" }}>Validation:</span> Simulation-based validation of learning-based controllers
              </>
            ]}
          />

          {/* EXPERIENCE */}
          <ProjectGroup 
            emoji="🌏" 
            title="EXPERIENCE" 
            color="#34D399"
            content={[
              <>
                Immersed in Japan's academic and tech ecosystem at one of its top private universities.
              </>,
              <>
                A capstone experience blending <span style={{ color: "#FCD34D" }}>research</span>, <span style={{ color: "#FCD34D" }}>simulation</span>, and <span style={{ color: "#FCD34D" }}>real-world impact</span>.
              </>
            ]}
          />
        </>
      }
    >
      <Scroll>
        <ItemText text={"Keio"} scale={3} position={[-w / 2 + w / 4.5, h / 2, 10]} />
        <ItemText text='2024-2025' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='TOKYO' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />
      </Scroll>
    </ScrollableContent>
  );
};