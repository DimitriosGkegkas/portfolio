import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Thessaloniki: FC = () => {
  return (
    <>
      <ScrollableContent
        damping={0.1}
        zIndex={100000000}
        htmlContent={
          <>
            {/* HEADER */}
            <ProjectGroup emoji="🗺️" title="3D Historical Map of Prewar Thessaloniki" color="#60A5FA">
              <div className="project-text" style={{ fontSize: "1.8em" }}>
                Digital Reconstruction of Jewish Neighborhoods
              </div>
              <div className="project-text">
                <span style={{ color: "#60A5FA" }}>
                  An immersive 3D map digitally reconstructing Jewish neighborhoods before WWII.
                </span>
              </div>
            </ProjectGroup>

            {/* CONTENT */}
            <ProjectGroup 
              emoji="🏛️" 
              title="HISTORICAL CONTENT" 
              color="#FBBF24"
              badges={["11 Neighborhoods", "Historical Documents", "Cultural Heritage"]}
              content={[
                <>
                  Users can explore <span style={{ color: "#FBBF24" }}>11 historical neighborhoods</span> with <span style={{ color: "#FBBF24" }}>interactive information points</span> and cultural artifacts.
                </>,
                <>
                  Each neighborhood contains <span style={{ color: "#34D399" }}>historical documents</span>, <span style={{ color: "#34D399" }}>family photographs</span>, and <span style={{ color: "#34D399" }}>synagogue records</span>.
                </>
              ]}
            />

            {/* TECH STACK */}
            <ProjectGroup 
              emoji="🛠️" 
              title="TECHNOLOGY" 
              color="#A78BFA"
              badges={[
                { courses: ["React Three Fiber", "GLSL Shaders", "Draco"], color: "#A78BFA" },
                { courses: ["3D Graphics", "Web Optimization"], color: "#6EE7B7" }
              ]}
              content={[
                <>
                  Built with <span style={{ color: "#A78BFA" }}>React Three Fiber</span>, <span style={{ color: "#A78BFA" }}>custom GLSL shaders</span>, and <span style={{ color: "#A78BFA" }}>Draco compression</span> for optimized 3D models.
                </>,
                <>
                  Features <span style={{ color: "#6EE7B7" }}>paper texture simulation</span> and <span style={{ color: "#6EE7B7" }}>ink-based rendering effects</span> for stylized historical visualization.
                </>
              ]}
            />

            {/* IMPACT */}
            <ProjectGroup 
              emoji="✨" 
              title="CULTURAL PRESERVATION" 
              color="#FCD34D"
              content={[
                <>
                  A <span style={{ color: "#FCD34D" }}>cultural preservation tool</span> combining <span style={{ color: "#FCD34D" }}>cutting-edge web technologies</span> with <span style={{ color: "#FCD34D" }}>historical research</span>.
                </>,
                <>
                  Preserving the memory of <span style={{ color: "#60A5FA" }}>Jewish Thessaloniki</span> through immersive digital storytelling.
                </>
              ]}
            />
          </>
        }
      >
        <StaticItemDiv
          top="-40%"
          left="-40%"
          threshold={0.}
        >
          <VimeoVideo videoId="1125190846" width={40} />
        </StaticItemDiv>
        <StaticItemDiv
          top="-10%"
          left="-45%"
          threshold={0.4}
        >
          <VimeoVideo videoId="1125190893" width={40} />
        </StaticItemDiv>
        <StaticItemDiv
          top="-25%"
          left="-30%"
          threshold={0.7}
        >
          <VimeoVideo videoId="1125190994" width={40} />
        </StaticItemDiv>
      </ScrollableContent>
    </>
  );
};
