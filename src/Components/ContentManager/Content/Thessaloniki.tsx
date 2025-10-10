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
            <ProjectGroup
              emoji="🗺️"
              title="3D Historical Map of Prewar Thessaloniki"
              color="#60A5FA"
              content={[
                <>
                  Digital Reconstruction of Prewar Neighborhoods
                </>,
                <>
                  A 3D interactive map built with <span style={{ color: "#60A5FA" }}>React Three Fiber</span>,
                  digitally reconstructing the <span style={{ color: "#60A5FA" }}>historic neighborhoods of Thessaloniki </span>
                  before WWII, rendered in a distinctive <span style={{ color: "#60A5FA" }}>hand-drawn visual style </span>
                  through a custom post-processing shader.
                </>
              ]}
            />

      {/* CONTENT */}
      <ProjectGroup
        emoji="🏛️"
        title="HISTORICAL CONTENT"
        color="#FBBF24"
        badges={["11 Neighborhoods", "Historical Documents", "Cultural Heritage"]}
        content={[
          <>
            Users can explore <span style={{ color: "#FBBF24" }}>11 reconstructed neighborhoods </span>
            featuring <span style={{ color: "#FBBF24" }}>interactive information points</span> and archival materials.
          </>,
          <>
            Each area presents <span style={{ color: "#34D399" }}>historical documents</span>, <span style={{ color: "#34D399" }}>family photographs</span>, and <span style={{ color: "#34D399" }}>archival records </span> sourced from cultural institutions and researchers.
          </>
        ]}
      />

      {/* TECH STACK */}
      <ProjectGroup
        emoji="🛠️"
        title="TECHNOLOGY"
        color="#A78BFA"
        badges={[
          "React Three Fiber",
          "GLSL Shaders",
          "Postprocessing Pipeline",
          "Draco Compression"
        ]}
        content={[
          <>
            Developed using <span style={{ color: "#A78BFA" }}>React Three Fiber</span> and
            <span style={{ color: "#A78BFA" }}>Three.js</span>, with
            <span style={{ color: "#A78BFA" }}>Draco compression</span> for lightweight 3D models and efficient streaming.
          </>,
          <>
            Implemented a <span style={{ color: "#A78BFA" }}>custom post-processing shader </span>
            that takes the rendered frame and applies a <span style={{ color: "#A78BFA" }}>hand-drawn effect </span>
            dynamically tracing outlines with variable thickness, randomness, and subtle color variation to emulate ink on paper.
          </>,
          <>
            Combined with <span style={{ color: "#6EE7B7" }}>paper-texture overlays</span> and
            <span style={{ color: "#6EE7B7" }}> lighting adjustments</span>, this achieves a stylized
            aesthetic inspired by vintage cartography.
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
            A <span style={{ color: "#FCD34D" }}>digital preservation initiative</span>
            merging <span style={{ color: "#FCD34D" }}>web-based 3D visualization</span> with
            <span style={{ color: "#FCD34D" }}>historical storytelling</span>.
          </>,
          <>
            Developed in collaboration with historians and cultural researchers to preserve
            the memory and urban fabric of <span style={{ color: "#60A5FA" }}>prewar Thessaloniki </span>
            through immersive digital media and creative rendering.
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
      </ScrollableContent >
    </>
  );
};
