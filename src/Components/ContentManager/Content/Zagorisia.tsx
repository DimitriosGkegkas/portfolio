import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Zagorisia: FC = () => {
  return (
    <ScrollableContent
      damping={0.1}
      zIndex={100000000}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🏛️" title="Zagorian Architectural Heritage Archive" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              Rizarios Foundation Digital Archive
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                A digital archive celebrating Zagorian architectural heritage in collaboration with the Rizarios Foundation.
              </span>
            </div>
          </ProjectGroup>

          {/* CONTENT */}
          <ProjectGroup 
            emoji="🧱" 
            title="IMMERSIVE EXPLORATION" 
            color="#FBBF24"
            badges={["3D Architecture", "Cultural Heritage", "Virtual Tours"]}
            content={[
              <>
                Users can explore <span style={{ color: "#FBBF24" }}>3D-rendered traditional buildings</span> from the Zagori region in <span style={{ color: "#FBBF24" }}>immersive detail</span>.
              </>,
              <>
                Built as an interactive platform to <span style={{ color: "#34D399" }}>preserve and promote cultural identity</span> through digital means.
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={[
              { courses: ["React Three Fiber", "GLSL Shaders"], color: "#A78BFA" },
              { courses: ["3D Graphics", "Geospatial"], color: "#6EE7B7" }
            ]}
            content={[
              <>
                Developed with <span style={{ color: "#A78BFA" }}>React Three Fiber</span> and <span style={{ color: "#A78BFA" }}>custom shaders</span> for dynamic architectural visualization.
              </>,
              <>
                Integrates <span style={{ color: "#6EE7B7" }}>visual storytelling</span> and <span style={{ color: "#6EE7B7" }}>geospatial exploration</span> of historical sites.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="✨" 
            title="CULTURAL IMPACT" 
            color="#FCD34D"
            content={[
              <>
                A project bridging <span style={{ color: "#FCD34D" }}>technology</span> and <span style={{ color: "#FCD34D" }}>cultural preservation</span> through architectural immersion.
              </>,
              <>
                Preserving the unique architectural heritage of <span style={{ color: "#60A5FA" }}>Zagori</span> for future generations.
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
        <VimeoVideo videoId="1124791001" />
      </StaticItemDiv>
      <StaticItemDiv
        top="-20%"
        left="-45%"
        threshold={0.4}
      >
        <VimeoVideo videoId="1124791196" />
      </StaticItemDiv>
      <StaticItemDiv
        top="-30%"
        left="-35%"
        threshold={0.7}
      >
        <VimeoVideo videoId="1124790861" />
      </StaticItemDiv>
    </ScrollableContent>
  );
};
