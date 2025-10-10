import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import Window from "../../Windows/DraggableWindow/Window";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const KeioThesis: FC = () => {
  return (
    <ScrollableContent
      damping={0.1}
      zIndex={100000000}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup 
            emoji="🚗" 
            title="Decentralized Multi-Agent Reinforcement Learning with Communication" 
            color="#60A5FA"
            content={[
              <>
                Master’s Thesis at{" "}
                <span style={{ color: "#60A5FA" }}>Keio University</span>{" "} 
                part of the{" "} 
                <span style={{ color: "#60A5FA" }}>JEMARO international robotics program</span>.
              </>,
              <>
                Research on{" "} 
                <span style={{ color: "#60A5FA" }}>multi-agent reinforcement learning (MARL)</span>{" "} 
                for{" "} 
                <span style={{ color: "#60A5FA" }}>autonomous vehicle coordination</span>,{" "} 
                focusing on{" "} 
                <span style={{ color: "#60A5FA" }}>learned inter-agent communication</span>{" "} 
                and decentralized control at intersections.
              </>
            ]}
          />

          {/* RESEARCH FOCUS */}
          <ProjectGroup 
            emoji="🤖" 
            title="RESEARCH FRAMEWORK" 
            color="#F472B6"
            badges={["Multi-Agent RL", "SMARTS", "V2V Communication", "Autonomous Driving"]}
            content={[
              <>
                Implemented and trained agents in{" "} 
                <span style={{ color: "#F472B6" }}>Python Gym</span>{" "} 
                using the{" "} 
                <span style={{ color: "#F472B6" }}>SMARTS traffic simulation environment</span>, 
                enabling scalable experimentation for intersection management tasks.
              </>,
              <>
                Proposed a{" "} 
                <span style={{ color: "#F472B6" }}>decentralized MARL framework</span>{" "} 
                where autonomous vehicles communicate locally, exchanging compact 
                representations of intent, state, and policy embeddings.
              </>,
              <>
                Combined{" "} 
                <span style={{ color: "#34D399" }}>continuous control</span>,{" "} 
                <span style={{ color: "#34D399" }}>multi-objective reward shaping</span>,{" "} 
                and{" "} 
                <span style={{ color: "#34D399" }}>learned communication</span>{" "} 
                to achieve cooperative and collision-free navigation without centralized coordination.
              </>
            ]}
          />

          {/* TECHNOLOGY */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY & IMPLEMENTATION" 
            color="#A78BFA"
            badges={[
              "Python", 
              "PyTorch", 
              "Gym", 
              "SMARTS", 
              "Distributed RL"
            ]}
            content={[
              <>
                Built in{" "} 
                <span style={{ color: "#A78BFA" }}>Python</span>{" "} 
                using{" "} 
                <span style={{ color: "#A78BFA" }}>PyTorch</span>{" "} 
                for training actor-critic models with{" "} 
                <span style={{ color: "#A78BFA" }}>parameter sharing</span>{" "}
                and decentralized communication modules.
              </>,
              <>
                Integrated with the{" "} 
                <span style={{ color: "#A78BFA" }}>SMARTS simulator</span>{" "} 
                for high-fidelity multi-vehicle interaction and complex intersection dynamics.
              </>,
              <>
                Designed a{" "} 
                <span style={{ color: "#A78BFA" }}>multi-agent training pipeline</span>{" "} 
                capable of coordinating multiple environments, enabling large-scale distributed experiments.
              </>
            ]}
          />

          {/* RESULTS */}
          <ProjectGroup 
            emoji="📈" 
            title="RESULTS & PERFORMANCE" 
            color="#6EE7B7"
            content={[
              <>
                The proposed{" "} 
                <span style={{ color: "#6EE7B7" }}>decentralized MARL framework</span>{" "} 
                achieved{" "} 
                <span style={{ color: "#6EE7B7" }}>strong performance</span>{" "} 
                in managing autonomous vehicle coordination at unsignalized intersections.
              </>,
              <>
                The final model demonstrated{" "} 
                <span style={{ color: "#6EE7B7" }}>100% success rate with zero collisions</span>,{" "} 
                low travel and waiting times, smooth speed profiles, and{" "} 
                <span style={{ color: "#6EE7B7" }}>energy-efficient trajectories</span>.
              </>,
              <>
                Results matched or surpassed baseline learning and rule-based approaches, 
                confirming that{" "} 
                <span style={{ color: "#6EE7B7" }}>learned inter-agent communication</span>{" "} 
                enables safe, efficient, and scalable intersection management 
                without global coordination.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="🚀" 
            title="RESEARCH IMPACT" 
            color="#F59E0B"
            content={[
              <>
                Demonstrated that{" "} 
                <span style={{ color: "#F59E0B" }}>decentralized cooperation</span>{" "} 
                can rival centralized systems while maintaining scalability, 
                robustness, and autonomy.
              </>,
              <>
                Represents a{" "} 
                <span style={{ color: "#F59E0B" }}>significant step toward fully autonomous, cooperative traffic systems</span>{" "} 
                for future smart mobility infrastructures.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv top="-40%" left="-45%" threshold={0.15}>
        <Window>
          <img 
            src={asset("/projects/rl/2.jpg")} 
            alt="Multi-Agent RL Overview" 
            className="mockup-image" 
            width={450} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="-10%" left="-40%" threshold={0.2}>
        <Window>
          <img 
            src={asset("/projects/rl/3.jpg")} 
            alt="Intersection Simulation" 
            className="mockup-image" 
            width={500} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="-30%" left="-48%" threshold={0.7}>
        <Window>
          <img 
            src={asset("/projects/rl/2 copy.jpg")} 
            alt="Agent Coordination Visualization" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="-38%" left="-24%" threshold={0.7}>
        <Window>
          <img 
            src={asset("/projects/rl/1.jpg")} 
            alt="Policy Visualization" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>

      <StaticItemDiv top="-30%" left="-10%" threshold={0.05}>
        <Window>
          <video 
            src={asset("/projects/rl/1.mp4")} 
            autoPlay 
            loop 
            muted 
          />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};
