import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../VimeoVideo";

export const Zagorisia: FC = () => {
  return (
    <ScrollControls damping={0.1} pages={3.5} style={{ zIndex: 100000000 }}>
      <Scroll html style={{ width: "100%", height: "100%" }}>
        <ItemDiv offset={40}>
          🏛️ A digital archive celebrating <span style={{ color: "#60A5FA" }}>Zagorian architectural heritage</span> in collaboration with the <span style={{ color: "#60A5FA" }}>Rizarios Foundation</span>
        </ItemDiv>
        <ItemDiv offset={85}>
          🧱 Users can explore <span style={{ color: "#FBBF24" }}>3D-rendered traditional buildings</span> from the Zagori region in <span style={{ color: "#FBBF24" }}>immersive detail</span>
        </ItemDiv>
        <ItemDiv offset={125}>
          🧠 Built as an interactive platform to <span style={{ color: "#34D399" }}>preserve and promote cultural identity</span> through digital means
        </ItemDiv>
        <ItemDiv offset={165}>
          🛠️ Developed with <span style={{ color: "#A78BFA" }}>React Three Fiber</span> and <span style={{ color: "#A78BFA" }}>custom shaders</span> for dynamic architectural visualization
        </ItemDiv>
        <ItemDiv offset={205}>
          🌍 Integrates <span style={{ color: "#6EE7B7" }}>visual storytelling</span> and <span style={{ color: "#6EE7B7" }}>geospatial exploration</span> of historical sites
        </ItemDiv>
        <ItemDiv offset={260}>
          ✨ A project bridging <span style={{ color: "#FCD34D" }}>technology</span> and <span style={{ color: "#FCD34D" }}>cultural preservation</span> through architectural immersion
        </ItemDiv>
      </Scroll>

      <StaticItemDiv
        top="-40%"
        left="-40%"
        threshold={0.1}
      >
        <VimeoVideo videoId="1124791001" />
      </StaticItemDiv>
      <StaticItemDiv
        top="-20%"
        left="-45%"
        threshold={0.4}
      >
        <VimeoVideo videoId="1124791196" />
      </StaticItemDiv>
      <StaticItemDiv
        top="-30%"
        left="-35%"
        threshold={0.7}
      >
        <VimeoVideo videoId="1124790861" />
      </StaticItemDiv>
    </ScrollControls>
  );
};
