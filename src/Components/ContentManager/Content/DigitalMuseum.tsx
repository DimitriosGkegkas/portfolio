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
          <>
            {/* HEADER */}
            <ProjectGroup emoji="🖼️" title="Digital Museum Platform" color="#60A5FA">
              <div className="project-text" style={{ fontSize: "1.8em" }}>
                Rizarios Foundation Virtual Gallery
              </div>
              <div className="project-text">
                <span style={{ color: "#60A5FA" }}>
                  A fully interactive digital museum platform enabling visitors to explore virtual exhibition spaces.
                </span>
              </div>
            </ProjectGroup>

            {/* EXPERIENCE */}
            <ProjectGroup 
              emoji="🧭" 
              title="IMMERSIVE EXPERIENCE" 
              color="#FBBF24"
              badges={["VR", "WebXR", "3D Gallery"]}
              content={[
                <>
                  Visitors can explore <span style={{ color: "#FBBF24" }}>virtual exhibition spaces</span> via <span style={{ color: "#FBBF24" }}>VR headsets or standard browsers</span>.
                </>,
                <>
                  Designed to replicate the <span style={{ color: "#34D399" }}>gallery experience</span> through 3D architecture, dynamic lighting, and spatial audio.
                </>
              ]}
            />

            {/* TECH STACK */}
            <ProjectGroup 
              emoji="🛠️" 
              title="TECHNOLOGY" 
              color="#A78BFA"
              badges={["React Three Fiber", "WebXR", "GLSL Shaders", "Three.js"]}
              content={[
                <>
                  Built using <span style={{ color: "#A78BFA" }}>React Three Fiber</span>, <span style={{ color: "#A78BFA" }}>WebXR</span> for VR support, and <span style={{ color: "#A78BFA" }}>custom shaders</span> for realistic rendering.
                </>,
                <>
                  Artworks rendered as <span style={{ color: "#6EE7B7" }}>high-resolution textures</span> on canvas, walls, and 3D objects.
                </>
              ]}
            />

            {/* IMPACT */}
            <ProjectGroup 
              emoji="✨" 
              title="IMPACT" 
              color="#FCD34D"
              content={[
                <>
                  A digital curation experience blending <span style={{ color: "#FCD34D" }}>art</span>, <span style={{ color: "#FCD34D" }}>technology</span>, and <span style={{ color: "#FCD34D" }}>accessibility</span>.
                </>,
                <>
                  Making cultural heritage accessible to <span style={{ color: "#6EE7B7" }}>global audiences</span> through modern web technologies.
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
