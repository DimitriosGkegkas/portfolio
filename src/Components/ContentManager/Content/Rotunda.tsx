import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";

export const Rotunda: FC = () => {
  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        <Item url='/projects/rotunda/rotunda1.png' position={[-3, 0, 30]} scale={18} />
        <Item url='/projects/rotunda/rotunda2.png' position={[-4, -20, 20]} scale={16} />
        <Item url='/projects/rotunda/rotunda3.png' position={[-1, -38, 10]} scale={16} />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          🏛️ Created a <span style={{ color: "#60A5FA" }}>permanent digital installation</span> inside the iconic <span style={{ color: "#60A5FA" }}>Rotunda of Thessaloniki</span>
        </div>
        <div className='project-text' style={styles(85)}>
          🗺️ Developed an interactive <span style={{ color: "#FBBF24" }}>e-table experience</span> connecting visitors to key historical landmarks in the city
        </div>
        <div className='project-text' style={styles(125)}>
          ✨ Enables zoomed-in exploration of the <span style={{ color: "#34D399" }}>Rotunda’s mosaics</span> with stunning clarity
        </div>
        <div className='project-text' style={styles(165)}>
          🔗 Designed to link <span style={{ color: "#A78BFA" }}>ancient architecture</span> with a <span style={{ color: "#A78BFA" }}>network of related sites</span> across Thessaloniki
        </div>
        <div className='project-text' style={styles(205)}>
          🎯 Combines <span style={{ color: "#6EE7B7" }}>spatial UX</span>, <span style={{ color: "#6EE7B7" }}>narrative design</span>, and <span style={{ color: "#6EE7B7" }}>cultural insight</span> into a unified visitor experience
        </div>
        <div className='project-text' style={styles(260)}>
          🌍 A project that reimagines <span style={{ color: "#FCD34D" }}>cultural storytelling</span> through technology and place-based interaction
        </div>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});
