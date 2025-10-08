import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import Window from "../../Windows/DraggableWindow/Window";

export const RoboticArm: FC = () => {

  return (
    <ScrollControls damping={0.1} pages={3.2} style={{ zIndex: 1000000000 }}>
      <StaticItemDiv
        top="-40%"
        left="-30%"
        threshold={0.1}
      >
        <Window>
          <img src='/projects/roboHack/robot.jpeg' alt='Robotic Arm Pick & Place' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>
      <StaticItemDiv
        top="-30%"
        left="-48%"
        threshold={0.2}
      >
        <Window>
          <img src='/projects/roboHack/code.jpeg' alt='Robotic Arm Pick & Place' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-25%"
        left="-20%"
        threshold={0.3}
      >
        <VimeoVideo videoId="1124883419" ratio={1.5} height={60} />
      </StaticItemDiv>
      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.4}
      >
        <Window>
          <img src='/projects/roboHack/place.jpeg' alt='Robotic Arm Pick & Place' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>

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