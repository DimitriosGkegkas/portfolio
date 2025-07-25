import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";

export const DigitalMuseum: FC = () => {
  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        {/* <Item url='/projects/digital-museum/museum1.png' position={[-3, 0, 30]} scale={18} />
        <Item url='/projects/digital-museum/museum2.png' position={[-4, -20, 20]} scale={16} />
        <Item url='/projects/digital-museum/museum3.png' position={[-1, -38, 10]} scale={16} /> */}
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <ItemDiv offset={40}>
          🖼️ A fully interactive <span style={{ color: "#60A5FA" }}>digital museum platform</span> developed for the <span style={{ color: "#60A5FA" }}>Rizarios Foundation</span>
        </ItemDiv>
        <ItemDiv offset={85}>
          🧭 Visitors can explore <span style={{ color: "#FBBF24" }}>virtual exhibition spaces</span> via <span style={{ color: "#FBBF24" }}>VR headsets or standard browsers</span>
        </ItemDiv>
        <ItemDiv offset={125}>
          🧠 Designed to replicate the <span style={{ color: "#34D399" }}>gallery experience</span> through 3D architecture, lighting, and spatial audio
        </ItemDiv>
        <ItemDiv offset={165}>
          🛠️ Built using <span style={{ color: "#A78BFA" }}>React Three Fiber</span>, <span style={{ color: "#A78BFA" }}>WebXR</span>, and <span style={{ color: "#A78BFA" }}>custom shaders</span>
        </ItemDiv>
        <ItemDiv offset={205}>
          🖌️ Artworks rendered as <span style={{ color: "#6EE7B7" }}>high-resolution textures</span> on canvas, walls, and 3D objects
        </ItemDiv>
        <ItemDiv offset={260}>
          ✨ A digital curation experience blending <span style={{ color: "#FCD34D" }}>art</span>, <span style={{ color: "#FCD34D" }}>technology</span>, and <span style={{ color: "#FCD34D" }}>accessibility</span>
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};
