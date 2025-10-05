// components/Keio.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";

export const Keio: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={4.5}>
      <Scroll>
        <ItemText text={"Keio"} scale={3} position={[-w / 2 + w / 4.5, h / 2, 10]} />
        <ItemText text='2024-2025' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='TOKYO' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />
        
        <ItemText text='JEMARO' scale={1.5} position={[-w / 2 + w / 2.3, h / 5, 20]} color='#60A5FA' />
        <ItemText text='RL' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#FBBF24' />
        <ItemText text='ROS2' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]} color='#A78BFA' />
        <ItemText text='SUMO' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]} color='#F472B6' />
        <ItemText text='PyTorch' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.6, 20]} color='#34D399' />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🎓 <span style={{ color: "#60A5FA" }}>Master of Science in Engineering</span> (JEMARO Double Degree) at <span style={{ color: "#60A5FA" }}>Keio University</span>, Tokyo, Japan
        </div>
        <div className='project-text' style={styles(80)}>
          📅 <span style={{ color: "#9CA3AF" }}>September 2024 – August 2025</span>
        </div>
        
        <div className='project-text' style={styles(120)}>
          🎯 <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>MASTER THESIS PROJECT</span>
        </div>
        <div className='project-text' style={styles(150)}>
          <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>Decentralized Multi-Agent Reinforcement Learning with Communication</span> for autonomous driving
        </div>
        <div className='project-text' style={styles(180)}>
          🔬 Focused on <span style={{ color: "#A78BFA" }}>optimization, control algorithms, and safe decision-making</span> in multi-robot systems
        </div>
        <div className='project-text' style={styles(210)}>
          📡 Developed <span style={{ color: "#A78BFA" }}>vehicle-to-vehicle communication infrastructure</span> for policy exchange and coordinated learning
        </div>
        
        <div className='project-text' style={styles(250)}>
          🛠️ <span style={{ color: "#F472B6", fontWeight: 'bold' }}>TECH STACK</span>
        </div>
        <div className='project-text' style={styles(280)}>
          <span style={{ color: "#F472B6" }}>Core Technologies:</span> ROS2, SUMO, PyTorch, Python
        </div>
        <div className='project-text' style={styles(310)}>
          <span style={{ color: "#F472B6" }}>Specializations:</span> Multi-Agent RL, Autonomous Driving, V2X Communication
        </div>
        <div className='project-text' style={styles(340)}>
          <span style={{ color: "#F472B6" }}>Validation:</span> Simulation-based validation of learning-based controllers
        </div>
        
        <div className='project-text' style={styles(380)}>
          🌏 Immersed in Japan's academic and tech ecosystem at one of its top private universities
        </div>
        <div className='project-text' style={styles(410)}>
          🌟 A capstone experience blending <span style={{ color: "#FCD34D" }}>research</span>, <span style={{ color: "#FCD34D" }}>simulation</span>, and <span style={{ color: "#FCD34D" }}>real-world impact</span>
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}svh`,
});