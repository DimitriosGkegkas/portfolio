import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import Window from "../../Windows/DraggableWindow/Window";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const GanMetrics: FC = () => {

  return (
    <ScrollableContent
      damping={0.1}
      zIndex={100000000}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup 
            emoji="🎨" 
            title="GAN Metrics for Image Quality Evaluation" 
            color="#60A5FA"
            content={[
              <>
                Master’s Thesis at{" "} 
                <span style={{ color: "#60A5FA" }}>National Technical University of Athens (NTUA)</span>
              </>,
              <>
                Developed an{" "} 
                <span style={{ color: "#60A5FA" }}>interactive AI validation platform</span>{" "} 
                that allowed users to evaluate and compare{" "} 
                <span style={{ color: "#60A5FA" }}>generative image models</span>{" "} 
                through real-time feedback, an early concept similar to modern{" "} 
                <span style={{ color: "#60A5FA" }}>ChatGPT-like human-in-the-loop systems</span>.
              </>
            ]}
          />

          {/* FRAMEWORK */}
          <ProjectGroup 
            emoji="🧩" 
            title="INTERACTIVE VALIDATION FRAMEWORK" 
            color="#F472B6"
            badges={[
              "Human Feedback", 
              "Model Evaluation", 
              "Full-Stack Development"
            ]}
            content={[
              <>
                Designed and implemented a{" "} 
                <span style={{ color: "#F472B6" }}>human-in-the-loop evaluation framework</span>{" "} 
                where users could rate and compare GAN-generated images.
              </>,
              <>
                The system collected{" "} 
                <span style={{ color: "#34D399" }}>user judgments and behavioral metrics</span>{" "} 
                to assess perceptual quality beyond traditional numerical measures.
              </>,
              <>
                Conceptually similar to{" "} 
                <span style={{ color: "#F472B6" }}>modern RLHF (Reinforcement Learning from Human Feedback)</span>{" "} 
                pipelines used in large-scale AI models.
              </>
            ]}
          />

          {/* TECHNOLOGY */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY STACK" 
            color="#A78BFA"
            badges={[
              "Python", 
              "TensorFlow", 
              "PyTorch", 
              "Node.js", 
              "MongoDB", 
              "Express"
            ]}
            content={[
              <>
                Backend built with{" "} 
                <span style={{ color: "#A78BFA" }}>Python</span> for model computation 
                and{" "} 
                <span style={{ color: "#A78BFA" }}>Node.js</span>{" "} 
                for the web server layer, connected via{" "} 
                <span style={{ color: "#A78BFA" }}>REST APIs</span>.
              </>,
              <>
                Stored evaluation data and feedback using{" "} 
                <span style={{ color: "#A78BFA" }}>MongoDB</span>, enabling 
                dynamic aggregation of user input for model comparison.
              </>,
              <>
                Implemented multiple{" "} 
                <span style={{ color: "#A78BFA" }}>GAN evaluation metrics</span>{" "}
                including FID, Inception Score, and perceptual quality measures,{" "}
                visualized through a{" "} 
                <span style={{ color: "#A78BFA" }}>real-time interactive dashboard</span>.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="🔬" 
            title="RESEARCH CONTRIBUTION" 
            color="#6EE7B7"
            content={[
              <>
                Advanced understanding of{" "} 
                <span style={{ color: "#6EE7B7" }}>human-centered AI evaluation</span>{" "} 
                and the integration of{" "} 
                <span style={{ color: "#6EE7B7" }}>subjective feedback</span>{" "} 
                into quantitative model assessment.
              </>,
              <>
                Demonstrated early design principles for{" "} 
                <span style={{ color: "#6EE7B7" }}>interactive AI systems</span>{" "} 
                bridging generative modeling, web technologies, and user experience.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv top="-30%" left="-40%" threshold={0.1}>
        <img 
          src={asset("/projects/gan/0.png")} 
          alt="GAN Metrics Interface" 
          className="mockup-image" 
          width={600} 
        />
      </StaticItemDiv>

      <StaticItemDiv top="-30%" left="-35%" threshold={0.3}>
        <img 
          src={asset("/projects/gan/1.png")} 
          alt="GAN Metrics Dashboard" 
          className="mockup-image" 
          width={500} 
        />
      </StaticItemDiv>

      <StaticItemDiv top="-40%" left="-45%" threshold={0.5}>
        <Window>
          <img 
            src={asset("/projects/gan/2.jpg")} 
            alt="GAN Evaluation Pipeline" 
            className="mockup-image" 
            width={300} 
          />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};
