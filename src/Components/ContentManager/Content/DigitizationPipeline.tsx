import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";

export const DigitizationPipeline: FC = () => {
  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        <Item url='/projects/digitization-pipeline/pipeline1.png' position={[-3, 0, 30]} scale={18} />
        <Item url='/projects/digitization-pipeline/pipeline2.png' position={[-4, -20, 20]} scale={16} />
        <Item url='/projects/digitization-pipeline/pipeline3.png' position={[-1, -38, 10]} scale={16} />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          📚 Built a <span style={{ color: "#60A5FA" }}>digitization pipeline</span> to accelerate the scanning of <span style={{ color: "#60A5FA" }}>fragile historical documents</span>
        </div>
        <div className='project-text' style={styles(85)}>
          ⚡ Leveraged <span style={{ color: "#FBBF24" }}>real-time QR detection</span> to automatically link scanned pages to their correct digital IDs
        </div>
        <div className='project-text' style={styles(125)}>
          🧠 Integrated <span style={{ color: "#34D399" }}>deskewing</span> and <span style={{ color: "#34D399" }}>despeckling</span> CV algorithms to clean degraded or faded content
        </div>
        <div className='project-text' style={styles(165)}>
          🛠️ Developed with <span style={{ color: "#A78BFA" }}>OpenCV</span>, <span style={{ color: "#A78BFA" }}>Python</span>, and a custom <span style={{ color: "#A78BFA" }}>automation toolchain</span>
        </div>
        <div className='project-text' style={styles(205)}>
          ⏱️ Reduced manual annotation time by over <span style={{ color: "#6EE7B7" }}>70%</span>—especially in collections with fragile materials
        </div>
        <div className='project-text' style={styles(260)}>
          🌍 Making archival information <span style={{ color: "#FCD34D" }}>accessible and preservable</span> for future generations
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}svh`,
});
