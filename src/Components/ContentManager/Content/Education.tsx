// components/Education.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";
import { ItemDiv } from "../ItemDiv";

export const Education: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={10.5}>
      {/* Adjust pages based on total scroll height */}
      <Scroll>
        {/* Keio University */}
        <group position={[0, -h * 0.14, 0]}>
          <ItemText text='KEIO' scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
          <ItemText text='2024-2025' scale={3.5} position={[-w / 2 + w / 5, h / 1, 100]} color='#9CA3AF' />
          <ItemText text='TOKYO' scale={2} position={[-w / 2 + w / 5, h / 1.3, 100]} color='#6B7280' />

          <ItemText text='JEMARO' scale={1.5} position={[-w / 2 + w / 2.3, h / 5, 20]} color='#60A5FA' />
          <ItemText text='RL' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#FBBF24' />
          <ItemText text='ROS2' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]} color='#A78BFA' />
          <ItemText text='SUMO' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]} color='#F472B6' />
          <ItemText text='PyTorch' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.6, 20]} color='#34D399' />
        </group>

        {/* ECN */}
        <group position={[0, -h * 2.8, 0]}>
          <ItemText text='ECN' scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
          <ItemText text='2023-2024' scale={3.5} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#9CA3AF' />
          <ItemText text='NANTES' scale={2} position={[-w / 2 + w / 5, h / 1.1, 100]} color='#6B7280' />

          <ItemText text='JEMARO' scale={1.5} position={[-w / 2 + w / 2.3, h / 5, 20]} color='#60A5FA' />
          <ItemText text='SLAM' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#FBBF24' />
          <ItemText text='AirSim' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]} color='#A78BFA' />
          <ItemText text='ROS2' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]} color='#F472B6' />
          <ItemText text='Control' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.6, 20]} color='#34D399' />
        </group>

        {/* NTUA */}
        <group position={[0, -5.5 * h, 0]}>
          <ItemText text='NTUA' scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
          <ItemText text='2016-2022' scale={3.5} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#9CA3AF' />
          <ItemText text='ATHENS' scale={2} position={[-w / 2 + w / 5, h / 1.1, 100]} color='#6B7280' />

          <ItemText
            text='integrated
meng'
            scale={1.5}
            position={[-w / 2 + w / 2.3, h / 5, 20]}
            color='#60A5FA'
          />
          <ItemText text='embedded' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.4, 20]} color='#34D399' />
          <ItemText text='robotics' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.8, 20]} color='#F472B6' />
          <ItemText text='GAN' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.2, 20]} color='#FBBF24' />
          <ItemText text='control' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.6, 20]} color='#A78BFA' />
        </group>
      </Scroll>
      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        {/* ===== KEIO UNIVERSITY SECTION ===== */}
        <ItemDiv offset={50}>
          <div style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #60A5FA', paddingBottom: '10px' }}>
            🎓 KEIO UNIVERSITY
          </div>
        </ItemDiv>
        
        <ItemDiv offset={90}>
          <div style={{ fontSize: '1.2em', marginBottom: '15px' }}>
            <span style={{ color: "#60A5FA", fontWeight: 'bold' }}>Master of Science in Engineering</span> (JEMARO Double Degree)
          </div>
          <div style={{ color: "#9CA3AF", fontSize: '1em', marginBottom: '10px' }}>
            📍 Tokyo, Japan | 📅 September 2024 – August 2025
          </div>
        </ItemDiv>

        <ItemDiv offset={130}>
          <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#FBBF24', marginBottom: '10px' }}>
            🎯 MASTER THESIS PROJECT
          </div>
          <div style={{ fontSize: '1em', marginBottom: '15px' }}>
            <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>Decentralized Multi-Agent Reinforcement Learning with Communication</span> for autonomous driving
          </div>
          <div style={{ fontSize: '0.95em', color: '#A78BFA', marginBottom: '10px' }}>
            • Focused on optimization, control algorithms, and safe decision-making in multi-robot systems
          </div>
          <div style={{ fontSize: '0.95em', color: '#A78BFA' }}>
            • Developed vehicle-to-vehicle communication infrastructure for policy exchange and coordinated learning
          </div>
        </ItemDiv>

        <ItemDiv offset={180}>
          <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#F472B6', marginBottom: '10px' }}>
            🛠️ TECHNOLOGIES & SKILLS
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Core Technologies:</span> ROS2, SUMO, PyTorch
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Specializations:</span> Multi-Agent RL, Autonomous Driving, V2X Communication
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Validation:</span> Simulation-based validation of learning-based controllers
          </div>
        </ItemDiv>

        {/* ===== ECN SECTION ===== */}
        <ItemDiv offset={250}>
          <div style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #60A5FA', paddingBottom: '10px' }}>
            🎓 ÉCOLE CENTRALE DE NANTES
          </div>
        </ItemDiv>
        
        <ItemDiv offset={290}>
          <div style={{ fontSize: '1.2em', marginBottom: '15px' }}>
            <span style={{ color: "#60A5FA", fontWeight: 'bold' }}>Master in Control and Robotics – Advanced Robotics</span> (JEMARO Double Degree)
          </div>
          <div style={{ color: "#9CA3AF", fontSize: '1em', marginBottom: '10px' }}>
            📍 Nantes, France | 📅 September 2023 – August 2024
          </div>
        </ItemDiv>

        <ItemDiv offset={330}>
          <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#FBBF24', marginBottom: '10px' }}>
            🎯 KEY PROJECTS
          </div>
          <div style={{ fontSize: '1em', marginBottom: '15px' }}>
            <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>Multi-Drone Collaborative SLAM with Kimera-Multi</span>
          </div>
          <div style={{ fontSize: '0.95em', color: '#A78BFA', marginBottom: '10px' }}>
            • Implemented real-time mapping and sensor fusion for distributed drone systems
          </div>
          <div style={{ fontSize: '0.95em', color: '#A78BFA', marginBottom: '10px' }}>
            • Developed distributed autonomy in AirSim/Unreal environment
          </div>
          <div style={{ fontSize: '0.95em', color: '#A78BFA' }}>
            • Connected Kimera-Multi to high-fidelity drone simulations using ROS2
          </div>
        </ItemDiv>

        <ItemDiv offset={380}>
          <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#F472B6', marginBottom: '10px' }}>
            🛠️ TECHNOLOGIES & SKILLS
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Core Technologies:</span> ROS2, AirSim, Unreal Engine, Kimera-Multi
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Specializations:</span> Control Theory, Robotic Manipulation, SLAM, Optimization
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Focus Areas:</span> AI-driven robotics, dynamic controllers, system modeling
          </div>
        </ItemDiv>

        {/* ===== NTUA SECTION ===== */}
        <ItemDiv offset={450}>
          <div style={{ fontSize: '1.8em', fontWeight: 'bold', marginBottom: '20px', borderBottom: '2px solid #60A5FA', paddingBottom: '10px' }}>
            🎓 NATIONAL TECHNICAL UNIVERSITY OF ATHENS
          </div>
        </ItemDiv>
        
        <ItemDiv offset={490}>
          <div style={{ fontSize: '1.2em', marginBottom: '15px' }}>
            <span style={{ color: "#60A5FA", fontWeight: 'bold' }}>MEng in Electrical & Computer Engineering</span>
          </div>
          <div style={{ color: "#9CA3AF", fontSize: '1em', marginBottom: '10px' }}>
            📍 Athens, Greece | 📅 September 2016 – June 2022
          </div>
        </ItemDiv>

        <ItemDiv offset={530}>
          <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#FBBF24', marginBottom: '10px' }}>
            🎯 MASTER THESIS PROJECT
          </div>
          <div style={{ fontSize: '1em', marginBottom: '15px' }}>
            <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>GAN Metrics for Image Quality Evaluation</span>
          </div>
          <div style={{ fontSize: '0.95em', color: '#A78BFA', marginBottom: '10px' }}>
            • Developed an interactive framework for AI model validation using user feedback
          </div>
          <div style={{ fontSize: '0.95em', color: '#A78BFA' }}>
            • Implemented user feedback mechanisms for AI model validation
          </div>
        </ItemDiv>

        <ItemDiv offset={580}>
          <div style={{ fontSize: '1.1em', fontWeight: 'bold', color: '#F472B6', marginBottom: '10px' }}>
            🛠️ TECHNOLOGIES & SKILLS
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Core Technologies:</span> C++, Python, Embedded Systems, Microcontrollers
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Specializations:</span> Robotics, Embedded Systems, Control Engineering, Software Development
          </div>
          <div style={{ fontSize: '0.95em', marginBottom: '8px' }}>
            <span style={{ color: "#F472B6" }}>Focus Areas:</span> Signal Processing, Circuit Design, AI/ML, Real-time Systems
          </div>
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};
