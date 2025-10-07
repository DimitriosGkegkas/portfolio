import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../VimeoVideo";

export const Thessaloniki: FC = () => {
  return (
    <>
      <ScrollControls damping={0.1} pages={3} style={{ zIndex: 100000000 }}>
        <StaticItemDiv
          top="-40%"
          left="-40%"
          threshold={0.}
        >
          <VimeoVideo videoId="1125190846" width={40} />
        </StaticItemDiv>
        <StaticItemDiv
          top="-10%"
          left="-45%"
          threshold={0.4}
        >
          <VimeoVideo videoId="1125190893" width={40} />
        </StaticItemDiv>
        <StaticItemDiv
          top="-25%"
          left="-30%"
          threshold={0.7}
        >
          <VimeoVideo videoId="1125190994" width={40} />
        </StaticItemDiv>

        <Scroll html style={{ width: "100%", height: "100%" }}>
          <ItemDiv offset={10}>
            🗺️ An immersive <span style={{ color: "#60A5FA" }}>3D Historical Map of Prewar Thessaloniki</span> digitally reconstructing <span style={{ color: "#60A5FA" }}>Jewish neighborhoods</span> before WWII
          </ItemDiv>
          <ItemDiv offset={55}>
            🏛️ Users can explore <span style={{ color: "#FBBF24" }}>11 historical neighborhoods</span> with <span style={{ color: "#FBBF24" }}>interactive information points</span> and cultural artifacts
          </ItemDiv>
          <ItemDiv offset={95}>
            📜 Each neighborhood contains <span style={{ color: "#34D399" }}>historical documents</span>, <span style={{ color: "#34D399" }}>family photographs</span>, and <span style={{ color: "#34D399" }}>synagogue records</span>
          </ItemDiv>
          <ItemDiv offset={135}>
            🛠️ Built with <span style={{ color: "#A78BFA" }}>React Three Fiber</span>, <span style={{ color: "#A78BFA" }}>custom GLSL shaders</span>, and <span style={{ color: "#A78BFA" }}>Draco compression</span> for optimized 3D models
          </ItemDiv>
          <ItemDiv offset={175}>
            🎨 Features <span style={{ color: "#6EE7B7" }}>paper texture simulation</span> and <span style={{ color: "#6EE7B7" }}>ink-based rendering effects</span> for stylized historical visualization
          </ItemDiv>
          <ItemDiv offset={230}>
            ✨ A <span style={{ color: "#FCD34D" }}>cultural preservation tool</span> combining <span style={{ color: "#FCD34D" }}>cutting-edge web technologies</span> with <span style={{ color: "#FCD34D" }}>historical research</span>
          </ItemDiv>
        </Scroll>
      </ScrollControls>
    </>
  );
};
