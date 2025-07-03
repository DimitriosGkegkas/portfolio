// components/EducationContent.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";

export const Ecn: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        <ItemText text={"ECN"} scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
        <ItemText text='2024' scale={5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText
          text='Autonomous
        Systems'
          scale={1}
          position={[-w / 2 + w / 2.3, -4.5, 10]}
          color='#FBBF24'
        />
        <ItemText text='ROS' scale={3} position={[-w / 2 + w / 2.8, -10, 30]} color='#34D399' />
        <ItemText text='Control' scale={2} position={[-w / 2 + w / 2.45, -18, 20]} color='#F472B6' />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🎓 MSc in <span style={{ color: "#60A5FA" }}>Control & Advanced Robotics</span> through the <span style={{ color: "#60A5FA" }}>JEMARO</span> program
        </div>
        <div className='project-text' style={styles(90)}>
          ⚙️ Specialized in <span style={{ color: "#FBBF24" }}>autonomous systems</span>, <span style={{ color: "#FBBF24" }}>robotics control</span>, and <span style={{ color: "#FBBF24" }}>multi-agent systems</span>
        </div>
        <div className='project-text' style={styles(130)}>
          🧠 Learned to design and simulate robotic behavior using <span style={{ color: "#34D399" }}>ROS</span>, <span style={{ color: "#34D399" }}>Gazebo</span>, and <span style={{ color: "#34D399" }}>MATLAB/Simulink</span>
        </div>
        <div className='project-text' style={styles(170)}>
          📚 Applied <span style={{ color: "#F472B6" }}>control theory</span> to solve real-time robotics challenges
        </div>
        <div className='project-text' style={styles(210)}>
          🌐 Studied alongside peers from across <span style={{ color: "#A78BFA" }}>Europe</span> in a diverse academic environment
        </div>
        <div className='project-text' style={styles(250)}>
          🔬 Strengthened understanding of <span style={{ color: "#6EE7B7" }}>robot dynamics</span>, <span style={{ color: "#6EE7B7" }}>perception</span>, and <span style={{ color: "#6EE7B7" }}>planning</span>
        </div>
        <div className='project-text' style={styles(290)}>
          🌟 A year of deepening my passion for <span style={{ color: "#FCD34D" }}>autonomy</span>, <span style={{ color: "#FCD34D" }}>intelligent systems</span>, and <span style={{ color: "#FCD34D" }}>robotics R&D</span>
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});