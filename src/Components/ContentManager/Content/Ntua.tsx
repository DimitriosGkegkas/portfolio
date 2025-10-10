// components/Ntua.tsx

import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { type FC } from "react";
import { ItemText } from "../ItemText";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Ntua: FC = () => {
  const { width: w, height: h } = useThree((state) => state.viewport);

  return (
    <ScrollableContent
      damping={0.1}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🎓" title="MEng in Electrical & Computer Engineering" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              National Technical University of Athens (2016–2022)
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                Five-year integrated master's degree blending electrical engineering, computer science, and robotics.
              </span>
            </div>
          </ProjectGroup>

          {/* FOUNDATIONS (Purple) */}
          <ProjectGroup 
            emoji="🧩" 
            title="FOUNDATIONS" 
            color="#A78BFA"
            badges={["Linear Systems", "Signals & Systems", "Algorithms", "Data Structures"]}
            content={[
              <>
                Built rigorous understanding of{" "}
                <span style={{ color: "#A78BFA" }}>signals and systems</span>,{" "}
                <span style={{ color: "#A78BFA" }}>control theory</span>, and{" "}
                <span style={{ color: "#A78BFA" }}>mathematical modeling</span>.
              </>,
              <>
                These courses shaped how I analyze and model dynamic processes, establishing the link between mathematical
                abstraction and computation.
              </>
            ]}
          />

          {/* SYSTEM DESIGN (Green) */}
          <ProjectGroup 
            emoji="⚙️" 
            title="SYSTEM DESIGN & CONTROL" 
            color="#34D399"
            badges={["Microprocessor Systems", "Computer Architecture", "Digital Circuit Design"]}
            content={[
              <>
                Applied theory to hardware through design of{" "}
                <span style={{ color: "#34D399" }}>real-time embedded platforms</span> and{" "}
                <span style={{ color: "#34D399" }}>control systems</span>.
              </>,
              <>
                Focused on <span style={{ color: "#34D399" }}>modeling</span>,{" "}
                <span style={{ color: "#34D399" }}>simulation</span>, and{" "}
                <span style={{ color: "#34D399" }}>optimization</span> translating control equations into working systems.
              </>
            ]}
          />

          {/* ROBOTICS & AI (Pink) */}
          <ProjectGroup 
            emoji="🤖" 
            title="ROBOTICS & ARTIFICIAL INTELLIGENCE" 
            color="#F472B6"
            badges={[
              { courses: ["Robotics Systems", "Pattern Recognition"], color: "#F472B6" },
              { courses: ["Artificial Intelligence", "Machine Learning"], color: "#FBBF24" }
            ]}
            content={[
              <>
                Advanced into <span style={{ color: "#F472B6" }}>robotics</span>,{" "}
                <span style={{ color: "#F472B6" }}>computer vision</span>, and{" "}
                <span style={{ color: "#FBBF24" }}>machine learning</span> exploring perception, motion, and autonomous decision-making.
              </>,
              <>
                Explored how <span style={{ color: "#F472B6" }}>sensors</span>,{" "}
                <span style={{ color: "#F472B6" }}>control</span>, and{" "}
                <span style={{ color: "#FBBF24" }}>learning algorithms</span> integrate into intelligent agents.
              </>
            ]}
          />

          {/* THESIS (Gold) */}
          <ProjectGroup 
            emoji="🧠" 
            title="MASTER THESIS" 
            color="#FBBF24"
            badges={[
              { courses: ["Machine Learning"], color: "#FBBF24" },
              { courses: ["Software Engineering"], color: "#A78BFA" },
              { courses: ["Human–Computer Interaction"], color: "#F472B6" }
            ]}
            content={[
              <>
                🎓 <span style={{ color: "#FBBF24" }}>"GAN Metrics for Image Quality Evaluation"</span> proposed an{" "}
                <span style={{ color: "#A78BFA" }}>interactive evaluation framework</span> using{" "}
                <span style={{ color: "#F472B6" }}>human feedback</span> to validate{" "}
                <span style={{ color: "#FBBF24" }}>generative models</span>.
              </>
            ]}
          />

          {/* REFLECTION (Mint) */}
          <ProjectGroup 
            emoji="🌱" 
            title="REFLECTION" 
            color="#6EE7B7"
            content={[
              <>
                The NTUA journey grounded me in <span style={{ color: "#6EE7B7" }}>analytical thinking</span> and{" "}
                <span style={{ color: "#6EE7B7" }}>technical creativity</span>. It shaped a mindset that merges{" "}
                <span style={{ color: "#6EE7B7" }}>engineering rigor</span> with{" "}
                <span style={{ color: "#6EE7B7" }}>curiosity-driven research</span>.
              </>,
              <>
                This balance between <span style={{ color: "#6EE7B7" }}>hardware, theory, and AI</span> became the foundation
                for my later work in <span style={{ color: "#F472B6" }}>autonomous robotics</span>.
              </>
            ]}
          />
        </>
      }
    >
      <Scroll>
        {/* Floating Keywords */}
        <ItemText text='NTUA' scale={3} position={[-w / 2 + w / 5.7, h / 2, 10]} />
        <ItemText text='2016–2022' scale={3.5} position={[-w / 2 + w / 5, h / 0.65, 100]} color='#9CA3AF' />
        <ItemText text='ATHENS' scale={2} position={[-w / 2 + w / 5, h / 0.8, 100]} color='#6B7280' />

        {/* <ItemText text='integrated meng' scale={1.6} position={[-w / 2 + w / 2.3, h / 5, 20]} color='#60A5FA' />
        <ItemText text='signal' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.35, 20]} color='#A78BFA' />
        <ItemText text='control' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 0.7, 20]} color='#34D399' />
        <ItemText text='robotics' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.05, 20]} color='#F472B6' />
        <ItemText text='AI' scale={2} position={[-w / 2 + w / 2.3, h / 5 - h * 1.4, 20]} color='#FBBF24' /> */}
      </Scroll>
    </ScrollableContent>
  );
};
