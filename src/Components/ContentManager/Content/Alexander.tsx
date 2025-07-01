import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";
import PaperScreen from "../../SceneManager/PaperScreen";
import { useThree } from "@react-three/fiber";

export const Alexander: FC = () => {
  const { width } = useThree((state) => state.viewport);
  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
         <PaperScreen src='/projects/alex/alex1.jpeg' scaleFactor={20.5} position={[width/3, 0, 30]} />
         <PaperScreen src='/projects/alex/alex2.jpeg' scaleFactor={15.5} position={[width/3, -15, 30]} />
         <PaperScreen src='/projects/alex/alex3.jpeg' scaleFactor={20.5} position={[width/4, -25, 30]} />
         <PaperScreen src='/projects/alex/alex4.jpeg' scaleFactor={20.5} position={[width/2, -35, 30]} />


      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🗺️ A 3D interactive map of <span style={{ color: "#60A5FA" }}>Alexander the Great’s campaigns</span> powered by <span style={{ color: "#60A5FA" }}>React Three Fiber</span>
        </div>
        <div className='project-text' style={styles(85)}>
          🎬 Users can explore <span style={{ color: "#FBBF24" }}>key points along his journey</span>, each paired with <span style={{ color: "#FBBF24" }}>historical videos</span>
        </div>
        <div className='project-text' style={styles(125)}>
          🧠 Designed as an <span style={{ color: "#34D399" }}>immersive storytelling platform</span> combining history, geography, and multimedia
        </div>
        <div className='project-text' style={styles(165)}>
          🛠️ Built using <span style={{ color: "#A78BFA" }}>React Three Fiber</span>, <span style={{ color: "#A78BFA" }}>custom shaders</span>, and <span style={{ color: "#A78BFA" }}>Recoil state management</span>
        </div>
        <div className='project-text' style={styles(205)}>
          🌍 Created in collaboration with the <span style={{ color: "#6EE7B7" }}>Hellenic Institute of Byzantine and Post-Byzantine Studies</span> in Venice
        </div>
        <div className='project-text' style={styles(260)}>
          ✨ A blend of <span style={{ color: "#FCD34D" }}>technical innovation</span> and <span style={{ color: "#FCD34D" }}>cultural education</span> through modern web storytelling
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});
