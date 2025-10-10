import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Rotunda: FC = () => {
  return (
    <ScrollableContent
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="🏛️" title="Rotunda of Thessaloniki Digital Installation" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              Permanent Interactive E-Table
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                A permanent digital installation inside the iconic Rotunda of Thessaloniki.
              </span>
            </div>
          </ProjectGroup>

          {/* EXPERIENCE */}
          <ProjectGroup 
            emoji="🗺️" 
            title="INTERACTIVE EXPERIENCE" 
            color="#FBBF24"
            badges={["Interactive Design", "Cultural Heritage", "Spatial UX"]}
            content={[
              <>
                Developed an interactive <span style={{ color: "#FBBF24" }}>e-table experience</span> connecting visitors to key historical landmarks in the city.
              </>,
              <>
                Enables zoomed-in exploration of the <span style={{ color: "#34D399" }}>Rotunda's mosaics</span> with stunning clarity and detail.
              </>,
              <>
                Designed to link <span style={{ color: "#A78BFA" }}>ancient architecture</span> with a <span style={{ color: "#A78BFA" }}>network of related sites</span> across Thessaloniki.
              </>
            ]}
          />

          {/* DESIGN */}
          <ProjectGroup 
            emoji="🎯" 
            title="DESIGN PHILOSOPHY" 
            color="#6EE7B7"
            badges={["UX Design", "Narrative Design", "Cultural Education"]}
            content={[
              <>
                Combines <span style={{ color: "#6EE7B7" }}>spatial UX</span>, <span style={{ color: "#6EE7B7" }}>narrative design</span>, and <span style={{ color: "#6EE7B7" }}>cultural insight</span> into a unified visitor experience.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="🌍" 
            title="IMPACT" 
            color="#FCD34D"
            content={[
              <>
                A project that reimagines <span style={{ color: "#FCD34D" }}>cultural storytelling</span> through technology and place-based interaction.
              </>,
              <>
                Enhancing visitor engagement with <span style={{ color: "#60A5FA" }}>historical heritage</span> through modern interactive design.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.05}
      >
        <VimeoVideo videoId="1124860764" />
      </StaticItemDiv>
    </ScrollableContent>
  );
};
