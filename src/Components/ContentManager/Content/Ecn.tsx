// components/Ecn.tsx

import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Ecn: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollableContent
      damping={0.1}
      htmlContent={
        <>
        {/* HEADER */}
        <ProjectGroup emoji="🎓" title="MSc in Robotics and AI – JEMARO Year 2" color="#60A5FA"
          content={[
          <>
            École Centrale de Nantes (2023–2024)
          </>,
          <>
            <span style={{ color: "#60A5FA" }}>
              Advanced specialization in robotics, control, and intelligent systems as part of the JEMARO international master’s program.
            </span>
          </>
          ]}
        />
      
        {/* ROBOTICS & MANIPULATION */}
        <ProjectGroup
          emoji="🤖"
          title="ROBOTICS & MANIPULATION"
          color="#F472B6"
          badges={[
            "Advanced and Robot Programming",
            "Modelling of Manipulators",
            "Mechanical Design Methods in Robotics",
            "Mobile Robots"
          ]}
          content={[
            <>
              Explored <span style={{ color: "#F472B6" }}>kinematics</span>,{" "}
              <span style={{ color: "#F472B6" }}>dynamics</span>, and{" "}
              <span style={{ color: "#F472B6" }}>mechanical design</span> of robotic systems from theory to implementation.
            </>,
            <>
              Developed controllers for <span style={{ color: "#F472B6" }}>manipulators</span> and{" "}
              <span style={{ color: "#F472B6" }}>mobile robots</span> through{" "}
              <span style={{ color: "#F472B6" }}>hands-on programming projects</span> and simulation environments.
            </>
          ]}
        />
      
        {/* CONTROL & OPTIMIZATION */}
        <ProjectGroup
          emoji="⚙️"
          title="CONTROL & OPTIMIZATION"
          color="#34D399"
          badges={[
            "Classical Linear Control",
            "Dynamic Model Based Control",
            "Optimization Techniques",
            "Signal Processing"
          ]}
          content={[
            <>
              Strengthened control theory foundation with{" "}
              <span style={{ color: "#34D399" }}>linear</span> and{" "}
              <span style={{ color: "#34D399" }}>nonlinear control systems</span> applied to robotic dynamics.
            </>,
            <>
              Designed <span style={{ color: "#34D399" }}>state estimators</span> and{" "}
              <span style={{ color: "#34D399" }}>optimal controllers</span> for real-time decision-making.
            </>,
            <>
              Integrated <span style={{ color: "#34D399" }}>signal processing</span> and{" "}
              <span style={{ color: "#34D399" }}>optimization algorithms</span> for robust system modeling and tuning.
            </>
          ]}
        />
      
        {/* AI & PERCEPTION */}
        <ProjectGroup
          emoji="🧠"
          title="ARTIFICIAL INTELLIGENCE & PERCEPTION"
          color="#FBBF24"
          badges={[
            "Artificial Intelligence",
            "Artificial Intelligence for Robotics",
            "Computer Vision"
          ]}
          content={[
            <>
              Studied <span style={{ color: "#FBBF24" }}>AI methodologies</span> for perception and decision-making in autonomous systems.
            </>,
            <>
              Implemented <span style={{ color: "#FBBF24" }}>vision-based algorithms</span> for environment understanding and{" "}
              <span style={{ color: "#FBBF24" }}>robot learning</span> applications.
            </>
          ]}
        />
      
        {/* SOFTWARE SYSTEMS */}
        <ProjectGroup
          emoji="💻"
          title="SOFTWARE ARCHITECTURE & SYSTEMS"
          color="#A78BFA"
          badges={[
            "Software Architecture for Robotics",
            "Advanced and Robot Programming",
            "Python",
            "C++"
          ]}
          content={[
            <>
              Built <span style={{ color: "#A78BFA" }}>modular robotic software</span> integrating perception, planning, and control layers.
            </>,
            <>
              Focused on <span style={{ color: "#A78BFA" }}>software reliability</span>,{" "}
              <span style={{ color: "#A78BFA" }}>real-time systems</span>, and{" "}
              <span style={{ color: "#A78BFA" }}>distributed architectures</span> for robot control.
            </>
          ]}
        />
      
        {/* RESEARCH TRACK */}
        <ProjectGroup
          emoji="🔬"
          title="RESEARCH TRACK"
          color="#6EE7B7"
          badges={["Research Track 1", "Research Track 2"]}
          content={[
            <>
              Engaged in <span style={{ color: "#6EE7B7" }}>academic research</span> focused on{" "}
              <span style={{ color: "#6EE7B7" }}>multi-agent systems</span> and{" "}
              <span style={{ color: "#6EE7B7" }}>autonomous decision-making</span>.
            </>,
            <>
              The ECN research phase led to later thesis work on{" "}
              <span style={{ color: "#6EE7B7" }}>decentralized multi-agent reinforcement learning</span>{" "}
              and cooperative traffic systems.
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
              The ECN experience deepened my expertise in{" "}
              <span style={{ color: "#6EE7B7" }}>robotics software</span>,{" "}
              <span style={{ color: "#6EE7B7" }}>AI-driven control</span>, and{" "}
              <span style={{ color: "#6EE7B7" }}>optimization-based decision making</span>.
            </>,
            <>
              This year connected theoretical control foundations with{" "}
              <span style={{ color: "#6EE7B7" }}>applied machine learning</span>,{" "}
              shaping my direction toward{" "}
              <span style={{ color: "#6EE7B7" }}>autonomous multi-agent systems</span>.
            </>
          ]}
        />
      </>
      
      }
    >
      <Scroll>
        <ItemText text={"ECN"} scale={3} position={[-w / 2 + w / 4.4, h / 2, 10]} />
        <ItemText text='2023-2024' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='NANTES' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />
      </Scroll>
    </ScrollableContent>
  );
};