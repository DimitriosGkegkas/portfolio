import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import Window from "../../Windows/DraggableWindow/Window";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const GanMetrics: FC = () => {

  return (
    <ScrollableContent
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🎨" title="GAN Metrics for Image Quality Evaluation" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              Master's Thesis at NTUA
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                Interactive AI validation framework for evaluating generative models.
              </span>
            </div>
          </ProjectGroup>

          {/* FRAMEWORK */}
          <ProjectGroup 
            emoji="🤖" 
            title="VALIDATION FRAMEWORK" 
            color="#F472B6"
            badges={["Human Feedback", "Model Evaluation", "Quality Assessment"]}
            content={[
              <>
                Developed an <span style={{ color: "#F472B6" }}>interactive validation framework</span> for AI models using human feedback.
              </>,
              <>
                Integrated <span style={{ color: "#34D399" }}>user feedback mechanisms</span> to validate and assess generative model quality.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={[
              { courses: ["Python", "TensorFlow", "PyTorch"], color: "#A78BFA" },
              { courses: ["Computer Vision", "Machine Learning"], color: "#F59E0B" }
            ]}
            content={[
              <>
                Built with <span style={{ color: "#A78BFA" }}>Python</span>, <span style={{ color: "#A78BFA" }}>TensorFlow</span>, and <span style={{ color: "#A78BFA" }}>PyTorch</span> for deep learning research.
              </>,
              <>
                Created <span style={{ color: "#6EE7B7" }}>comprehensive GAN metrics</span> for quality assessment and comparison.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="🔬" 
            title="RESEARCH IMPACT" 
            color="#6EE7B7"
            content={[
              <>
                Advanced research in <span style={{ color: "#F59E0B" }}>computer vision</span> and <span style={{ color: "#F59E0B" }}>machine learning</span>.
              </>,
              <>
                Contributed to <span style={{ color: "#EC4899" }}>AI model evaluation</span> methodologies and best practices.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.1}
      >

        <img src={asset('/projects/gan/0.png')} alt='Gan Metrics' className='mockup-image' width={600} />

      </StaticItemDiv>
      <StaticItemDiv
        top="-30%"
        left="-35%"
        threshold={0.3}
      >

        <img src={asset('/projects/gan/1.png')} alt='Gan Metrics' className='mockup-image' width={500} />

      </StaticItemDiv>
      <StaticItemDiv
        top="-40%"
        left="-45%"
        threshold={0.5}
      >
        <Window>
          <img src={asset('/projects/gan/2.jpg')} alt='Gan Metrics' className='mockup-image' width={300} />
        </Window>
      </StaticItemDiv>
    </ScrollableContent>
  );
};