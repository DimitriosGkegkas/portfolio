import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";
import { useThree } from "@react-three/fiber";
import { asset } from "../../../utils/asset";
import { ItemDiv } from "../ItemDiv";

export const RoboticArm: FC = () => {
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
          🤖 <span style={{ color: "#60A5FA" }}>Robotic Arm Pick & Place</span> - Hackathon Project (2nd Place)
        </ItemDiv>
        <ItemDiv offset={55}>
          🎯 Developed <span style={{ color: "#FBBF24" }}>autonomous pick and place system</span> with computer vision
        </ItemDiv>
        <ItemDiv offset={95}>
          👁️ Implemented <span style={{ color: "#F472B6" }}>real-time object detection</span> and localization
        </ItemDiv>
        <ItemDiv offset={135}>
          🛤️ Created <span style={{ color: "#34D399" }}>path planning algorithms</span> with obstacle avoidance
        </ItemDiv>
        <ItemDiv offset={175}>
          🛠️ Built with <span style={{ color: "#A78BFA" }}>ROS</span>, <span style={{ color: "#A78BFA" }}>Python</span>, and <span style={{ color: "#A78BFA" }}>OpenCV</span>
        </ItemDiv>
        <ItemDiv offset={215}>
          🏆 Secured <span style={{ color: "#6EE7B7" }}>2nd place</span> in robotics hackathon competition
        </ItemDiv>
        <ItemDiv offset={255}>
          ⚡ Achieved <span style={{ color: "#F59E0B" }}>high precision</span> in manipulation tasks
        </ItemDiv>
        <ItemDiv offset={295}>
          🔧 Integrated <span style={{ color: "#EC4899" }}>multiple sensors</span> for robust operation
        </ItemDiv>
      </Scroll>
    </ScrollControls>
  );
};