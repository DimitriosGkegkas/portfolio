// components/Ntua.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";

export const Ntua: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={4.5}>
      <Scroll>
        <ItemText text={"NTUA"} scale={3} position={[-w / 2 + w / 5.7, h / 2, 10]} />
        <ItemText text='2016-2022' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='ATHENS' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />
        
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
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🎓 <span style={{ color: "#60A5FA" }}>MEng in Electrical & Computer Engineering</span> at <span style={{ color: "#60A5FA" }}>National Technical University of Athens</span>, Greece
        </div>
        <div className='project-text' style={styles(80)}>
          📅 <span style={{ color: "#9CA3AF" }}>September 2016 – June 2022</span>
        </div>
        
        <div className='project-text' style={styles(120)}>
          🎯 <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>MASTER THESIS PROJECT</span>
        </div>
        <div className='project-text' style={styles(150)}>
          <span style={{ color: "#FBBF24", fontWeight: 'bold' }}>GAN Metrics for Image Quality Evaluation</span>
        </div>
        <div className='project-text' style={styles(180)}>
          🧠 Developed an <span style={{ color: "#A78BFA" }}>interactive framework for AI model validation</span> using user feedback
        </div>
        <div className='project-text' style={styles(210)}>
          👥 Implemented <span style={{ color: "#A78BFA" }}>user feedback mechanisms</span> for AI model validation
        </div>
        
        <div className='project-text' style={styles(250)}>
          🛠️ <span style={{ color: "#F472B6", fontWeight: 'bold' }}>TECH STACK</span>
        </div>
        <div className='project-text' style={styles(280)}>
          <span style={{ color: "#F472B6" }}>Core Technologies:</span> C++, Python, JavaScript, Embedded Systems, Linux
        </div>
        <div className='project-text' style={styles(310)}>
          <span style={{ color: "#F472B6" }}>Specializations:</span> Robotics, Embedded Systems, Control Engineering, Software Development
        </div>
        <div className='project-text' style={styles(340)}>
          <span style={{ color: "#F472B6" }}>Focus Areas:</span> Signal Processing, Circuit Design, AI/ML, Real-time Systems
        </div>
        
        <div className='project-text' style={styles(380)}>
          🧮 Built foundations in <span style={{ color: "#FBBF24" }}>math</span>, <span style={{ color: "#FBBF24" }}>signal processing</span>, and <span style={{ color: "#FBBF24" }}>digital systems</span>
        </div>
        <div className='project-text' style={styles(410)}>
          🌟 Graduated with <span style={{ color: "#6EE7B7" }}>8.81/10</span>, one of the top students in class
        </div>
        <div className='project-text' style={styles(440)}>
          🔍 A journey into <span style={{ color: "#FCD34D" }}>problem-solving</span>, <span style={{ color: "#FCD34D" }}>engineering thinking</span>, and <span style={{ color: "#FCD34D" }}>technical curiosity</span>
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}svh`,
});