import { Scroll } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const DigitizationPipeline: FC = () => {
  return (
    <ScrollableContent
      damping={0.1}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="📚" title="Digitization Pipeline" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              Automated Historical Document Processing
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                Built a digitization pipeline to accelerate the scanning of fragile historical documents.
              </span>
            </div>
          </ProjectGroup>

          {/* AUTOMATION */}
          <ProjectGroup 
            emoji="⚡" 
            title="AUTOMATION & DETECTION" 
            color="#FBBF24"
            badges={["QR Detection", "Real-time Processing", "Document Linking"]}
            content={[
              <>
                Leveraged <span style={{ color: "#FBBF24" }}>real-time QR detection</span> to automatically link scanned pages to their correct digital IDs.
              </>,
              <>
                Integrated <span style={{ color: "#34D399" }}>deskewing</span> and <span style={{ color: "#34D399" }}>despeckling</span> computer vision algorithms to clean degraded or faded content.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={["OpenCV", "Python", "Image Processing", "Automation"]}
            content={[
              <>
                Developed with <span style={{ color: "#A78BFA" }}>OpenCV</span>, <span style={{ color: "#A78BFA" }}>Python</span>, and a custom <span style={{ color: "#A78BFA" }}>automation toolchain</span>.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="🌍" 
            title="IMPACT" 
            color="#6EE7B7"
            content={[
              <>
                Reduced manual annotation time by over <span style={{ color: "#6EE7B7" }}>70%</span>—especially in collections with fragile materials.
              </>,
              <>
                Making archival information <span style={{ color: "#FCD34D" }}>accessible and preservable</span> for future generations.
              </>
            ]}
          />
        </>
      }
    >
      <Scroll>
        <Item url='/projects/digitization-pipeline/pipeline1.png' position={[-3, 0, 30]} scale={18} />
        <Item url='/projects/digitization-pipeline/pipeline2.png' position={[-4, -20, 20]} scale={16} />
        <Item url='/projects/digitization-pipeline/pipeline3.png' position={[-1, -38, 10]} scale={16} />
      </Scroll>
    </ScrollableContent>
  );
};
