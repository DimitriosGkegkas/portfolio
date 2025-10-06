import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";
import { useThree } from "@react-three/fiber";
import { asset } from "../../../utils/asset";
import { ItemDiv } from "../ItemDiv";

export const MultiDroneSLAM: FC = () => {
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
          🚁 <span style={{ color: "#60A5FA" }}>Multi-Drone Collaborative SLAM</span> with real-time mapping and sensor fusion
        </ItemDiv>
        <ItemDiv offset={55}>
          🎯 Implemented <span style={{ color: "#FBBF24" }}>distributed SLAM system</span> using Kimera-Multi framework
        </ItemDiv>
        <ItemDiv offset={95}>
          🌐 Achieved <span style={{ color: "#F472B6" }}>real-time performance</span> in AirSim/Unreal Engine simulation
        </ItemDiv>
        <ItemDiv offset={135}>
          🤖 Developed <span style={{ color: "#34D399" }}>multi-agent coordination</span> protocols for autonomous operations
        </ItemDiv>
        <ItemDiv offset={175}>
          🛠️ Built with <span style={{ color: "#A78BFA" }}>ROS2</span>, <span style={{ color: "#A78BFA" }}>Python</span>, and <span style={{ color: "#A78BFA" }}>C++</span>
        </ItemDiv>
        <ItemDiv offset={215}>
          🎓 Part of <span style={{ color: "#6EE7B7" }}>JEMARO Master's program</span> at École Centrale de Nantes
        </ItemDiv>
        <ItemDiv offset={255}>
          🔬 Advanced research in <span style={{ color: "#F59E0B" }}>sensor fusion</span> and <span style={{ color: "#F59E0B" }}>distributed autonomy</span>
        </ItemDiv>
        <ItemDiv offset={295}>
          📊 Created <span style={{ color: "#EC4899" }}>scalable communication protocols</span> for multi-drone systems
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};
