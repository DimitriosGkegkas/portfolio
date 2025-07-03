// components/CombinedEducation.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";
import { ItemDiv } from "../ItemDiv";

export const Education: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={7.8}>
      {/* Adjust pages based on total scroll height */}
      <Scroll>
        {/* ECN */}
        <group position={[0, -h * 0.14, 0]}>
          <ItemText text='KEIO' scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
          <ItemText text='2025' scale={5} position={[-w / 2 + w / 5, h / 1, 100]} color='#9CA3AF' />

          <ItemText text='JEMARO' scale={1.5} position={[-w / 2 + w / 2.3, h / 5, 20]} color='#60A5FA' />
          <ItemText text='RL' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#FBBF24' />
          <ItemText text='V2X' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]} color='#A78BFA' />
          <ItemText text='sumo' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]} color='#F472B6' />
        </group>

        <group position={[0, -h * 2.1, 0]}>
          <ItemText text='ECN' scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
          <ItemText text='2024' scale={5} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#9CA3AF' />

          <ItemText text='JEMARO' scale={1.5} position={[-w / 2 + w / 2.3, h / 5, 20]} color='#60A5FA' />
          <ItemText text='SLAM' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#FBBF24' />
          <ItemText
            text='mobile
control'
            scale={2}
            position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]}
            color='#34D399'
          />
          <ItemText
            text='robotic
arm'
            scale={2}
            position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]}
            color='#F472B6'
          />
        </group>
        <group position={[0, -4 * h, 0]}>
          <ItemText text='JEMARO' scale={3} position={[-w / 2 + w / 6, h / 2, 10]} />
          <ItemText text='2023' scale={5} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#9CA3AF' />
        </group>
        <group position={[0, -5.3 * h, 0]}>
          <ItemText text='NTUA' scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
          <ItemText text='2022' scale={5} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#9CA3AF' />
          <ItemText text='2016' scale={5} position={[-w / 2 + w / 5, -h * 1.2, 100]} color='#9CA3AF' />

          <ItemText
            text='integrated
meng'
            scale={1.5}
            position={[-w / 2 + w / 2.3, h / 5, 20]}
            color='#60A5FA'
          />
          <ItemText text='embedded' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#34D399' />
          <ItemText text='circuits' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]} color='#F472B6' />
          <ItemText text='gan' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]} color='#FBBF24' />
        </group>
      </Scroll>
      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        {/* Keio University */}

        <ItemDiv offset={50}>
          🎓 Pursued MSc in <span style={{ color: "#60A5FA" }}>Engineering</span> at <span style={{ color: "#60A5FA" }}>Keio University</span> through the <span style={{ color: "#60A5FA" }}>JEMARO</span> robotics double degree program
        </ItemDiv>
        <ItemDiv offset={90}>
          🤖 Researched <span style={{ color: "#FBBF24" }}>decentralized multi-agent reinforcement learning</span> for unsignalized intersection control using the <span style={{ color: "#FBBF24" }}>SMART</span> platform
        </ItemDiv>
        <ItemDiv offset={130}>
          📡 Developed a <span style={{ color: "#A78BFA" }}>vehicle-to-vehicle communication infrastructure</span> for policy exchange and coordinated learning
        </ItemDiv>
        <ItemDiv offset={170}>
          🚦 Simulated traffic flow using <span style={{ color: "#F472B6" }}>SUMO</span>, integrating decentralized agents with real-time vehicular models
        </ItemDiv>

        {/* ECN */}

        <ItemDiv offset={240}>
          🎓 Completed MSc in <span style={{ color: "#60A5FA" }}>Control & Advanced Robotics</span> through the <span style={{ color: "#60A5FA" }}>JEMARO</span> program
        </ItemDiv>
        <ItemDiv offset={280}>
          🧠 Connected <span style={{ color: "#FBBF24" }}>Kimera-Multi</span> to high-fidelity drone simulations in <span style={{ color: "#FBBF24" }}>AirSim</span> using <span style={{ color: "#FBBF24" }}>ROS</span> for multi-agent SLAM testing
        </ItemDiv>
        <ItemDiv offset={320}>
          ⚙️ Designed <span style={{ color: "#34D399" }}>dynamic controllers</span> for mobile vehicles, focusing on system modeling, stability, and robust control design
        </ItemDiv>
        <ItemDiv offset={360}>
          🤖 Simulated and deployed tasks on both a virtual and real <span style={{ color: "#F472B6" }}>robotic arm</span> (e.g., UR5) using <span style={{ color: "#F472B6" }}>Simulink</span> and ROS
        </ItemDiv>

        {/* JEMARO Introduction */}
        <ItemDiv offset={430}>
          🌍 Enrolled in the <span style={{ color: "#60A5FA" }}>Japan-Europe Master on Advanced Robotics</span> program
        </ItemDiv>
        {/* JEMARO Introduction */}
        <ItemDiv offset={460}>
          🎓 A double-degree MSc in <span style={{ color: "#FBBF24" }}>AI</span>, <span style={{ color: "#FBBF24" }}>control systems</span>, and <span style={{ color: "#FBBF24" }}>advanced robotics</span>
        </ItemDiv>
        <ItemDiv offset={490}>
          🌍 Studied across <span style={{ color: "#F472B6" }}>École Centrale de Nantes</span> in <span style={{ color: "#F472B6" }}>France</span>, and <span style={{ color: "#F472B6" }}>Keio University</span> in <span style={{ color: "#F472B6" }}>Japan</span>
        </ItemDiv>

        {/* NTUA */}
        <ItemDiv offset={560}>
          🎓 Completed 5-year <span style={{ color: "#60A5FA" }}>Integrated MEng</span> in Electrical & Computer Engineering at <span style={{ color: "#60A5FA" }}>NTUA</span>
        </ItemDiv>
        <ItemDiv offset={600}>
          🔌 Designed and implemented <span style={{ color: "#34D399" }}>embedded systems</span> using <span style={{ color: "#34D399" }}>microcontrollers</span> and real-time software in C++
        </ItemDiv>
        <ItemDiv offset={640}>
          🔧 Built and tested <span style={{ color: "#F472B6" }}>analog and digital circuits</span> for sensor integration, power regulation, and signal conditioning
        </ItemDiv>
        <ItemDiv offset={700}>
          🧠 Conducted thesis research on <span style={{ color: "#FBBF24" }}>Generative Adversarial Networks (GANs)</span> with focus on visual quality evaluation metrics
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};
