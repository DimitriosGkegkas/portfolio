// components/Keio.tsx

import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Keio: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollableContent
      damping={0.1}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🎓" title="Master of Science in Engineering" color="#60A5FA"
            content={[
              <>
                Keio University, Tokyo (2024–2025)
              </>,
              <>
                <span style={{ color: "#60A5FA" }}>
                  JEMARO double degree program at one of Japan’s leading private universities, bridging robotics research, AI, and advanced engineering.
                </span>
              </>
            ]}
          />

          {/* ACADEMIC FOCUS */}
          <ProjectGroup
            emoji="🤖"
            title="ADVANCED ROBOTICS & SYSTEMS"
            color="#A78BFA"
            badges={[
              "Advanced Robotics",
              "Intelligent Systems",
              "Control Engineering",
              "Systems Optimization"
            ]}
            content={[
              <>
                Deepened expertise in <span style={{ color: "#A78BFA" }}>robotics and control</span> through the{" "}
                <span style={{ color: "#A78BFA" }}>Namerikawa Toru Laboratory</span>, a leading research group in{" "}
                <span style={{ color: "#A78BFA" }}>control theory</span> and{" "}
                <span style={{ color: "#A78BFA" }}>multi-agent systems</span>.
              </>,
              <>
                Focused on <span style={{ color: "#A78BFA" }}>distributed control architectures</span> and{" "}
                <span style={{ color: "#A78BFA" }}>intelligent coordination</span> for robotic and cyber-physical systems.
              </>
            ]}
          />

          {/* RESEARCH PROJECT */}
          <ProjectGroup
            emoji="🎯"
            title="RESEARCH PROJECT"
            color="#FBBF24"
            badges={["Multi-Agent RL", "SMARTS", "Autonomous Driving", "V2V Communication"]}
            content={[
              <>
                Conducted thesis research on{" "}
                <span style={{ color: "#FBBF24", fontWeight: "bold" }}>
                  Decentralized Multi-Agent Reinforcement Learning with Communication
                </span>{" "}
                using the <span style={{ color: "#FBBF24" }}>SMARTS</span> simulation environment.
              </>,
              <>
                Proposed a{" "}
                <span style={{ color: "#FBBF24" }}>decentralized communication-driven learning framework</span>{" "}
                for <span style={{ color: "#FBBF24" }}>autonomous vehicle coordination</span> at intersections.
              </>,
              <>
                Validated through{" "}
                <span style={{ color: "#A78BFA" }}>Python Gym</span> and{" "}
                <span style={{ color: "#A78BFA" }}>PyTorch</span>-based training pipelines, achieving{" "}
                <span style={{ color: "#FBBF24" }}>collision-free and efficient multi-agent behavior</span>.
              </>
            ]}
          />

          {/* LAB & EXPERIENCE */}
          <ProjectGroup
            emoji="🧪"
            title="NAMERIKAWA TORU LAB EXPERIENCE"
            color="#34D399"
            badges={["Control Theory", "Distributed Systems", "Research Collaboration"]}
            content={[
              <>
                Conducted research within{" "}
                <span style={{ color: "#34D399" }}>Namerikawa Toru’s Lab</span>,{" "}
                a hub for control and systems engineering research at Keio University.
              </>,
              <>
                Collaborated with researchers on{" "}
                <span style={{ color: "#34D399" }}>multi-agent control</span>,{" "}
                <span style={{ color: "#34D399" }}>consensus algorithms</span>, and{" "}
                <span style={{ color: "#34D399" }}>autonomous systems</span>, gaining hands-on academic and experimental experience.
              </>
            ]}
          />

          {/* CULTURAL IMMERSION */}
          <ProjectGroup
            emoji="🎎"
            title="CULTURAL & ACADEMIC IMMERSION"
            color="#F472B6"
            content={[
              <>
                Immersed in Japan’s{" "}
                <span style={{ color: "#F472B6" }}>engineering innovation culture</span>{" "}
                and cross-disciplinary academic environment.
              </>,
              <>
                Engaged with an international cohort of{" "}
                <span style={{ color: "#F472B6" }}>robotics researchers</span> under the{" "}
                <span style={{ color: "#F472B6" }}>JEMARO program</span>, fostering{" "}
                <span style={{ color: "#F472B6" }}>cultural exchange</span> and{" "}
                <span style={{ color: "#F472B6" }}>collaborative research</span>.
              </>
            ]}
          />

          {/* REFLECTION */}
          <ProjectGroup
            emoji="🌱"
            title="REFLECTION"
            color="#6EE7B7"
            content={[
              <>
                The Keio experience expanded my technical and cultural horizons, uniting{" "}
                <span style={{ color: "#6EE7B7" }}>robotics</span>,{" "}
                <span style={{ color: "#6EE7B7" }}>AI research</span>, and{" "}
                <span style={{ color: "#6EE7B7" }}>Japanese engineering philosophy</span>.
              </>,
              <>
                It strengthened my ability to conduct{" "}
                <span style={{ color: "#6EE7B7" }}>independent, high-impact research</span>{" "}
                within global academic environments.
              </>
            ]}
          />
        </>

      }
    >
      <Scroll>
        <ItemText text={"Keio"} scale={3} position={[-w / 2 + w / 4.5, h / 2, 10]} />
        <ItemText text='2024-2025' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='TOKYO' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />
      </Scroll>
    </ScrollableContent>
  );
};