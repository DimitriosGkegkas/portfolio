// components/Ecn.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";

export const Ecn: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={4.5}>
      <Scroll>
        <ItemText text={"ECN"} scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
        <ItemText text='2023-2024' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='NANTES' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />
        
        <ItemText text='JEMARO' scale={1.5} position={[-w / 2 + w / 2.3, h / 5, 20]} color='#60A5FA' />
        <ItemText text='SLAM' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#FBBF24' />
        <ItemText text='AirSim' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]} color='#A78BFA' />
        <ItemText text='ROS2' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]} color='#F472B6' />
        <ItemText text='Control' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.6, 20]} color='#34D399' />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🎓 <span style={{ color: "#60A5FA" }}>Master in Control and Robotics – Advanced Robotics</span> (JEMARO Double Degree) at <span style={{ color: "#60A5FA" }}>École Centrale de Nantes</span>, France
        </div>
        <div className='project-text' style={styles(80)}>
          📅 <span style={{ color: "#9CA3AF" }}>September 2023 – August 2024</span>
        </div>
        
        <div className='project-text' style={styles(120)}>
          🎯 <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>KEY PROJECT</span>
        </div>
        <div className='project-text' style={styles(150)}>
          <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>Multi-Drone Collaborative SLAM with Kimera-Multi</span>
        </div>
        <div className='project-text' style={styles(180)}>
          🚁 Implemented <span style={{ color: "#A78BFA" }}>real-time mapping and sensor fusion</span> for distributed drone systems
        </div>
        <div className='project-text' style={styles(210)}>
          🌐 Developed <span style={{ color: "#A78BFA" }}>distributed autonomy</span> in AirSim/Unreal environment
        </div>
        <div className='project-text' style={styles(240)}>
          🔗 Connected <span style={{ color: "#A78BFA" }}>Kimera-Multi to high-fidelity simulations</span> using ROS2
        </div>
        
        <div className='project-text' style={styles(280)}>
          🛠️ <span style={{ color: "#F472B6", fontWeight: 'bold' }}>TECH STACK</span>
        </div>
        <div className='project-text' style={styles(310)}>
          <span style={{ color: "#F472B6" }}>Core Technologies:</span> ROS2, AirSim, Unreal Engine, Kimera-Multi, Python/C++
        </div>
        <div className='project-text' style={styles(340)}>
          <span style={{ color: "#F472B6" }}>Specializations:</span> Control Theory, Robotic Manipulation, SLAM, Optimization
        </div>
        <div className='project-text' style={styles(370)}>
          <span style={{ color: "#F472B6" }}>Focus Areas:</span> AI-driven robotics, dynamic controllers, system modeling
        </div>
        
        <div className='project-text' style={styles(410)}>
          🌐 Studied alongside peers from across <span style={{ color: "#A78BFA" }}>Europe</span> in a diverse academic environment
        </div>
        <div className='project-text' style={styles(440)}>
          🌟 A year of deepening my passion for <span style={{ color: "#FCD34D" }}>autonomy</span>, <span style={{ color: "#FCD34D" }}>intelligent systems</span>, and <span style={{ color: "#FCD34D" }}>robotics R&D</span>
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});