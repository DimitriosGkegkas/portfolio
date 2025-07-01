// components/EducationContent.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";

export const Ntua: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        <ItemText text={"NTUA"} scale={3} position={[-w / 2 + w / 5.7, h / 2, 10]} />
        <ItemText text='2022' scale={5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🎓 Integrated Master’s in <span style={{ color: "#60A5FA" }}>Electrical & Computer Engineering</span>
        </div>
        <div className='project-text' style={styles(90)}>
          🧮 Built foundations in <span style={{ color: "#FBBF24" }}>math</span>, <span style={{ color: "#FBBF24" }}>signal processing</span>, and <span style={{ color: "#FBBF24" }}>digital systems</span>
        </div>
        <div className='project-text' style={styles(130)}>
          🛠️ Explored <span style={{ color: "#34D399" }}>embedded systems</span>, <span style={{ color: "#34D399" }}>microcontrollers</span>, and <span style={{ color: "#34D399" }}>circuit design</span>
        </div>
        <div className='project-text' style={styles(170)}>
          💻 Specialized in <span style={{ color: "#F472B6" }}>AI</span>, <span style={{ color: "#F472B6" }}>robotics</span>, and <span style={{ color: "#F472B6" }}>computer vision</span> in final years
        </div>
        <div className='project-text' style={styles(210)}>
          🤖 Diploma thesis on <span style={{ color: "#A78BFA" }}>Artificial Intelligence</span> — scored <span style={{ color: "#A78BFA" }}>10/10</span>
        </div>
        <div className='project-text' style={styles(250)}>
          🌟 Graduated with <span style={{ color: "#6EE7B7" }}>8.81/10</span>, one of the top students in class
        </div>
        <div className='project-text' style={styles(290)}>
          🔍 A journey into <span style={{ color: "#FCD34D" }}>problem-solving</span>, <span style={{ color: "#FCD34D" }}>engineering thinking</span>, and <span style={{ color: "#FCD34D" }}>technical curiosity</span>
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});