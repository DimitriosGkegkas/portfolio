import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import Window from "../../Windows/DraggableWindow/Window";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const KeioThesis: FC = () => {
  return (
    <ScrollableContent
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🚗" title="Decentralized Multi-Agent RL with Communication" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              Master's Thesis at Keio University
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                JEMARO Program - Autonomous driving research with multi-agent reinforcement learning.
              </span>
            </div>
          </ProjectGroup>

          {/* RESEARCH */}
          <ProjectGroup 
            emoji="🤖" 
            title="RESEARCH FOCUS" 
            color="#F472B6"
            badges={["Multi-Agent RL", "V2V Communication", "Autonomous Driving"]}
            content={[
              <>
                Developed <span style={{ color: "#F472B6" }}>multi-agent RL algorithms</span> with V2V communication protocols for coordinated autonomous driving.
              </>,
              <>
                Created <span style={{ color: "#34D399" }}>safe decision-making frameworks</span> for dynamic traffic environments.
              </>,
              <>
                Advanced research in <span style={{ color: "#6EE7B7" }}>policy exchange</span> and <span style={{ color: "#6EE7B7" }}>coordinated learning</span> strategies.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={[
              { courses: ["ROS2", "SUMO", "PyTorch"], color: "#A78BFA" },
              { courses: ["Python", "Traffic Simulation"], color: "#F59E0B" }
            ]}
            content={[
              <>
                Built with <span style={{ color: "#A78BFA" }}>ROS2</span> for robotics middleware, <span style={{ color: "#A78BFA" }}>SUMO</span> for traffic simulation, and <span style={{ color: "#A78BFA" }}>PyTorch</span> for deep learning.
              </>,
              <>
                Validated in <span style={{ color: "#F59E0B" }}>realistic traffic simulation</span> environments with complex scenarios.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="🚀" 
            title="IMPACT" 
            color="#6EE7B7"
            content={[
              <>
                Contributed to <span style={{ color: "#EC4899" }}>decentralized autonomous systems</span> research and methodology.
              </>,
              <>
                Advancing the field of <span style={{ color: "#6EE7B7" }}>multi-agent coordination</span> for future autonomous mobility.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv
        top="-40%"
        left="-45%"
        threshold={0.15}
      >
        <Window>
          <img src={asset('/projects/rl/2.jpg')} alt='Keio Thesis' className='mockup-image' width={450} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-10%"
        left="-40%"
        threshold={0.2}
      >
        <Window>
          <img src={asset('/projects/rl/3.jpg')} alt='Keio Thesis' className='mockup-image' width={500} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-30%"
        left="-48%"
        threshold={0.5}
      >
        <Window>
          <img src={asset('/projects/rl/2 copy.jpg')} alt='Keio Thesis' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-38%"
        left="-24%"
        threshold={0.6}
      >
        <Window>
          <img src={asset('/projects/rl/1.jpg')} alt='Keio Thesis' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv
        top="-30%"
        left="-10%"
        threshold={0.05}
      >
        <Window>
          <video src={asset('/projects/rl/1.mp4')} autoPlay loop muted />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};