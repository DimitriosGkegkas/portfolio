import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import PaperScreen from "../../SceneManager/PaperScreen";
import { useThree } from "@react-three/fiber";
import { asset } from "../../../utils/asset";
import { ItemDiv } from "../ItemDiv";

export const Alexander: FC = () => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        {/* <ItemText text='Alexander' scale={2} position={[-width / 4, height / 2, 1]} /> */}
        <PaperScreen src={asset("/projects/alex/alex1.jpeg")} scaleFactor={9} position={[width / 4 - width / 5, height * 0.1, 1]} />
        <PaperScreen src={asset("/projects/alex/alex2.jpeg")} scaleFactor={7} position={[width / 4 - width / 6, -height * 0.35, 1]} />
        <PaperScreen src={asset("/projects/alex/alex3.jpeg")} scaleFactor={7} position={[width / 4 - width / 5, -height * 0.75, 1]} />
        <PaperScreen src={asset("/projects/alex/alex4.jpeg")} scaleFactor={7} position={[width / 4 - width / 6, -height * 1.15, 1]} />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <ItemDiv offset={10}>
          🗺️ A 3D interactive map of <span style={{ color: "#60A5FA" }}>Alexander the Great’s campaigns</span> powered by <span style={{ color: "#60A5FA" }}>React Three Fiber</span>
        </ItemDiv>
        <ItemDiv offset={55}>
          🎬 Users can explore <span style={{ color: "#FBBF24" }}>key points along his journey</span>, each paired with <span style={{ color: "#FBBF24" }}>historical videos</span>
        </ItemDiv>
        <ItemDiv offset={95}>
          🧠 Designed as an <span style={{ color: "#34D399" }}>immersive storytelling platform</span> combining history, geography, and multimedia
        </ItemDiv>
        <ItemDiv offset={135}>
          🛠️ Built using <span style={{ color: "#A78BFA" }}>React Three Fiber</span>, <span style={{ color: "#A78BFA" }}>custom shaders</span>, and <span style={{ color: "#A78BFA" }}>Recoil state management</span>
        </ItemDiv>
        <ItemDiv offset={175}>
          🌍 Created in collaboration with the <span style={{ color: "#6EE7B7" }}>Hellenic Institute of Byzantine and Post-Byzantine Studies</span> in Venice
        </ItemDiv>
        <ItemDiv offset={230}>
          ✨ A blend of <span style={{ color: "#FCD34D" }}>technical innovation</span> and <span style={{ color: "#FCD34D" }}>cultural education</span> through modern web storytelling
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};
