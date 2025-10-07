import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";
import { StaticItemDiv } from "../StaticItemDiv";
import Window from "../../DraggableWindow/Window";

export const KeioThesis: FC = () => {

  return (
    <ScrollControls damping={0.1} pages={3.2} style={{ zIndex: 1000000000 }}>


      <StaticItemDiv
        top="-40%"
        left="-45%"
        threshold={0.15}
      >
        <Window>
          <img src='/projects/rl/2.jpg' alt='Keio Thesis' className='mockup-image' width={450} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-10%"
        left="-40%"
        threshold={0.2}
      >
        <Window>
          <img src='/projects/rl/3.jpg' alt='Keio Thesis' className='mockup-image' width={500} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-30%"
        left="-48%"
        threshold={0.5}
      >
        <Window>
          <img src='/projects/rl/2 copy.jpg' alt='Keio Thesis' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-38%"
        left="-24%"
        threshold={0.6}
      >
        <Window>
          <img src='/projects/rl/1.jpg' alt='Keio Thesis' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-30%"
        left="-10%"
        threshold={0.05}
      >
        <Window>
          <video src='/projects/rl/1.mp4' autoPlay loop muted />
        </Window>
      </StaticItemDiv>


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