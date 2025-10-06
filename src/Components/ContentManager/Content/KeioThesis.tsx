import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";
import { useThree } from "@react-three/fiber";
import { asset } from "../../../utils/asset";
import { ItemDiv } from "../ItemDiv";

export const KeioThesis: FC = () => {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={3.2}>
      <Scroll>
        <Item url={asset("/projects/meteo/meteo1.png")} position={[width < 20 ? width / 2.2 : 0, 0, 20]} scale={19} />
        <Item url={asset("/projects/meteo/meteo2.png")} position={[width < 20 ? width / 2.2 : 0, -height, 20]} scale={19} />
        <Item url={asset("/projects/meteo/meteo3.png")} position={[ 0, -height * 2, 10]} scale={20} />
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <ItemDiv offset={10}>
          🚗 <span style={{ color: "#60A5FA" }}>Decentralized Multi-Agent RL with Communication</span> for autonomous driving
        </ItemDiv>
        <ItemDiv offset={55}>
          🎓 <span style={{ color: "#FBBF24" }}>Master's Thesis</span> at Keio University, Tokyo (JEMARO Program)
        </ItemDiv>
        <ItemDiv offset={95}>
          🤖 Developed <span style={{ color: "#F472B6" }}>multi-agent RL algorithms</span> with V2V communication protocols
        </ItemDiv>
        <ItemDiv offset={135}>
          🛡️ Created <span style={{ color: "#34D399" }}>safe decision-making frameworks</span> for dynamic environments
        </ItemDiv>
        <ItemDiv offset={175}>
          🛠️ Built with <span style={{ color: "#A78BFA" }}>ROS2</span>, <span style={{ color: "#A78BFA" }}>SUMO</span>, and <span style={{ color: "#A78BFA" }}>PyTorch</span>
        </ItemDiv>
        <ItemDiv offset={215}>
          🔬 Advanced research in <span style={{ color: "#6EE7B7" }}>policy exchange</span> and <span style={{ color: "#6EE7B7" }}>coordinated learning</span>
        </ItemDiv>
        <ItemDiv offset={255}>
          🌐 Validated in <span style={{ color: "#F59E0B" }}>realistic traffic simulation</span> environments
        </ItemDiv>
        <ItemDiv offset={295}>
          🚀 Contributed to <span style={{ color: "#EC4899" }}>decentralized autonomous systems</span> research
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};