import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";

export const Zagorisia: FC = () => {
  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>
        {/* <Item url='/projects/zagorisia/zagorisia1.png' position={[-3, 0, 30]} scale={18} />
        <Item url='/projects/zagorisia/zagorisia2.png' position={[-4, -20, 20]} scale={16} />
        <Item url='/projects/zagorisia/zagorisia3.png' position={[-1, -38, 10]} scale={16} /> */}
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
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
    </ScrollControls>
  );
};
