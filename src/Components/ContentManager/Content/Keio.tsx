// components/EducationContent.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";

export const Keio: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        <ItemText text={"Keio"} scale={3} position={[-w / 2 + w / 4.5, h / 2, 10]} />
        <ItemText text='2025' scale={5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🎓 MSc in <span style={{ color: "#60A5FA" }}>Engineering</span> at <span style={{ color: "#60A5FA" }}>Keio University</span> through the <span style={{ color: "#60A5FA" }}>JEMARO</span> program
        </div>
        <div className='project-text' style={styles(90)}>
          🧠 Conducted research on <span style={{ color: "#FBBF24" }}>Decentralized Multi-Agent Reinforcement Learning</span> for intersection safety and traffic coordination
        </div>
        <div className='project-text' style={styles(130)}>
          🤖 Focused on <span style={{ color: "#34D399" }}>collaborative autonomous vehicles</span> and <span style={{ color: "#34D399" }}>communication-aware learning</span>
        </div>
        <div className='project-text' style={styles(170)}>
          🛠️ Built and tested simulations in <span style={{ color: "#F472B6" }}>CARLA</span>, <span style={{ color: "#F472B6" }}>ROS</span>, and <span style={{ color: "#F472B6" }}>Unreal Engine</span>
        </div>
        <div className='project-text' style={styles(210)}>
          🌏 Immersed in Japan's academic and tech ecosystem at one of its top private universities
        </div>
        <div className='project-text' style={styles(250)}>
          🚗 Pushed the boundaries of <span style={{ color: "#A78BFA" }}>AI-driven mobility</span> and <span style={{ color: "#A78BFA" }}>autonomous decision-making</span>
        </div>
        <div className='project-text' style={styles(290)}>
          🌟 A capstone experience blending <span style={{ color: "#FCD34D" }}>research</span>, <span style={{ color: "#FCD34D" }}>simulation</span>, and <span style={{ color: "#FCD34D" }}>real-world impact</span>
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}svh`,
});