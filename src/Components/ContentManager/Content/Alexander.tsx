import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import PaperScreen from "../../SceneManager/PaperScreen";
import { useThree } from "@react-three/fiber";
import { asset } from "../../../utils/asset";
import { ItemDiv } from "../ItemDiv";

export const Alexander: FC = () => {
  const { width } = useThree((state) => state.viewport);
  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
         <PaperScreen src={asset('/projects/alex/alex1.jpeg')} scaleFactor={20.5} position={[width/3, 0, 30]} />
         <PaperScreen src={asset('/projects/alex/alex2.jpeg')} scaleFactor={15.5} position={[width/3, -15, 30]} />
         <PaperScreen src={asset('/projects/alex/alex3.jpeg')} scaleFactor={20.5} position={[width/4, -25, 30]} />
         <PaperScreen src={asset('/projects/alex/alex4.jpeg')} scaleFactor={20.5} position={[width/2, -35, 30]} />


      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <ItemDiv offset={40}>
          🗺️ A 3D interactive map of <span style={{ color: "#60A5FA" }}>Alexander the Great’s campaigns</span> powered by <span style={{ color: "#60A5FA" }}>React Three Fiber</span>
        </ItemDiv>
        <ItemDiv offset={85}>
          🎬 Users can explore <span style={{ color: "#FBBF24" }}>key points along his journey</span>, each paired with <span style={{ color: "#FBBF24" }}>historical videos</span>
        </ItemDiv>
        <ItemDiv offset={125}>
          🧠 Designed as an <span style={{ color: "#34D399" }}>immersive storytelling platform</span> combining history, geography, and multimedia
        </ItemDiv>
        <ItemDiv offset={165}>
          🛠️ Built using <span style={{ color: "#A78BFA" }}>React Three Fiber</span>, <span style={{ color: "#A78BFA" }}>custom shaders</span>, and <span style={{ color: "#A78BFA" }}>Recoil state management</span>
        </ItemDiv>
        <ItemDiv offset={205}>
          🌍 Created in collaboration with the <span style={{ color: "#6EE7B7" }}>Hellenic Institute of Byzantine and Post-Byzantine Studies</span> in Venice
        </ItemDiv>
        <ItemDiv offset={260}>
          ✨ A blend of <span style={{ color: "#FCD34D" }}>technical innovation</span> and <span style={{ color: "#FCD34D" }}>cultural education</span> through modern web storytelling
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});
