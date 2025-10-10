import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const DigitalMuseum: FC = () => {
  return (
    <>
      <ScrollableContent
        damping={0.1}
        zIndex={100000000}
        htmlContent={
          <><ProjectGroup emoji="🖼️" title="Digital Museum Platform" color="#60A5FA">
          <div className="project-text" style={{ fontSize: "1.8em" }}>
            Rizarios Foundation Virtual Gallery
          </div>
          <div className="project-text">
            A browser-based 3D museum experience built on <span style={{ color: "#60A5FA" }}>PlayCanvas</span>, allowing visitors to explore a reconstructed Greek village and navigate through virtual exhibition spaces of the <span style={{ color: "#60A5FA" }}>Rizarios Foundation</span>.
          </div>
        </ProjectGroup>
        
        <ProjectGroup 
          emoji="🏛️" 
          title="EXPERIENCE & NAVIGATION" 
          color="#FBBF24"
          badges={["360° Navigation", "Point-to-Point Travel", "Interactive Museum"]}
          content={[
            <>
              Visitors begin in a <span style={{ color: "#FBBF24" }}>360° village environment</span> and move seamlessly between viewpoints using a <span style={{ color: "#FBBF24" }}>point-to-point navigation system</span>.
            </>,
            <>
              Inside the museum, users can <span style={{ color: "#FBBF24" }}>click to walk the floor</span>, interact with artworks, and explore periodic exhibitions rendered in 3D space.
            </>
          ]}
        />
        
        <ProjectGroup 
          emoji="🎨" 
          title="INTERACTIVE EXHIBITS" 
          color="#34D399"
          content={[
            <>
              Each artwork supports multiple media types, including <span style={{ color: "#34D399" }}>3D objects</span>, <span style={{ color: "#34D399" }}>images</span>, and <span style={{ color: "#34D399" }}>videos</span>.
            </>,
            <>
              Selecting an exhibit displays contextual <span style={{ color: "#34D399" }}>information and voice-assisted explanations</span>, creating a guided-tour experience.
            </>
          ]}
        />
        
        <ProjectGroup 
          emoji="🛠️" 
          title="TECHNOLOGY" 
          color="#A78BFA"
          badges={["PlayCanvas", "JavaScript", "WebGL", "Responsive UI"]}
          content={[
            <>
              Developed on <span style={{ color: "#A78BFA" }}>PlayCanvas</span> for real-time WebGL rendering and asset streaming directly in the browser, no installation required.
            </>,
            <>
              Designed for <span style={{ color: "#A78BFA" }}>cross-device compatibility</span>, with dynamic loading and adaptive controls for desktop and mobile.
            </>
          ]}
        />
        
        <ProjectGroup 
          emoji="✨" 
          title="PURPOSE & IMPACT" 
          color="#FCD34D"
          content={[
            <>
              A digital initiative by the <span style={{ color: "#FCD34D" }}>Rizarios Foundation</span> to make cultural heritage and contemporary art <span style={{ color: "#FCD34D" }}>accessible online</span>.
            </>,
            <>
              Demonstrates how <span style={{ color: "#FCD34D" }}>real-time 3D web technology</span> can recreate physical exhibition experiences for <span style={{ color: "#6EE7B7" }}>global audiences</span>.
            </>
          ]}
        />
         </>
        }
      >
        <StaticItemDiv
          top="-40%"
          left="-40%"
          threshold={0.1}
        >
          <VimeoVideo videoId="1124866938" />
        </StaticItemDiv>
        <StaticItemDiv
          top="-10%"
          left="-45%"
          threshold={0.4}
        >
          <VimeoVideo videoId="1124866986" />
        </StaticItemDiv>
      </ScrollableContent>
    </>
  );
};
