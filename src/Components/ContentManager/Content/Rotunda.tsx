import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";

export const Rotunda: FC = () => {
  return (
    <ScrollControls damping={0.1} pages={3} style={{ zIndex: 1000000000 }}>
      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.05}
      >
        <VimeoVideo videoId="1124860764" />
      </StaticItemDiv>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <ItemDiv offset={40}>
          🏛️ Created a <span style={{ color: "#60A5FA" }}>permanent digital installation</span> inside the iconic <span style={{ color: "#60A5FA" }}>Rotunda of Thessaloniki</span>
        </ItemDiv>
        <ItemDiv offset={85}>
          🗺️ Developed an interactive <span style={{ color: "#FBBF24" }}>e-table experience</span> connecting visitors to key historical landmarks in the city
        </ItemDiv>
        <ItemDiv offset={125}>
          ✨ Enables zoomed-in exploration of the <span style={{ color: "#34D399" }}>Rotunda’s mosaics</span> with stunning clarity
        </ItemDiv>
        <ItemDiv offset={165}>
          🔗 Designed to link <span style={{ color: "#A78BFA" }}>ancient architecture</span> with a <span style={{ color: "#A78BFA" }}>network of related sites</span> across Thessaloniki
        </ItemDiv>
        <ItemDiv offset={205}>
          🎯 Combines <span style={{ color: "#6EE7B7" }}>spatial UX</span>, <span style={{ color: "#6EE7B7" }}>narrative design</span>, and <span style={{ color: "#6EE7B7" }}>cultural insight</span> into a unified visitor experience
        </ItemDiv>
        <ItemDiv offset={260}>
          🌍 A project that reimagines <span style={{ color: "#FCD34D" }}>cultural storytelling</span> through technology and place-based interaction
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};
