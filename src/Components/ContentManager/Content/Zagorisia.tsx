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
          <ProjectGroup
            emoji="🏛️"
            title="Zagorian Architectural Heritage Archive"
            color="#60A5FA"
            content={[

              < >
                Rizarios Foundation Digital Archive
              </>,
              <>
                A digital archive created in collaboration with the{" "}
                <span style={{ color: "#60A5FA" }}>Rizarios Foundation</span>,
                presenting the architectural heritage of{" "}
                <span style={{ color: "#60A5FA" }}>Zagori</span> through curated video narratives
                and an accessible web interface.
              </>

            ]}
          />

          {/* USER EXPERIENCE */}
          <ProjectGroup
            emoji="🎬"
            title="VIDEO EXPERIENCE"
            color="#FBBF24"
            badges={["Video Playback", "Subtitles", "Responsive UI"]}
            content={[
              <>
                Focused on <span style={{ color: "#FBBF24" }}>immersive storytelling</span> through high-resolution
                video content and clean, minimal interface design.
              </>,
              <>
                Features <span style={{ color: "#FBBF24" }}>subtitle synchronization</span>
                with narration, providing{" "}
                <span style={{ color: "#34D399" }}>accessibility and multilingual support</span>.
              </>
            ]}
          />

          {/* TECHNOLOGY */}
          <ProjectGroup
            emoji="🛠️"
            title="TECHNOLOGY"
            color="#A78BFA"
            badges={[
              "React",
              "TypeScript",
              "Custom Subtitle Engine"
            ]}
            content={[
              <>
                Developed with <span style={{ color: "#A78BFA" }}>React</span> and{" "}
                <span style={{ color: "#A78BFA" }}>TypeScript</span>.
              </>,
              <>
                Built a <span style={{ color: "#A78BFA" }}>custom subtitle renderer</span> that synchronizes
                with the video’s voiceover timing for an inclusive viewing experience.
              </>
            ]}
          />

          {/* PURPOSE */}
          <ProjectGroup
            emoji="✨"
            title="CULTURAL IMPACT"
            color="#FCD34D"
            content={[
              <>
                Designed as an <span style={{ color: "#FCD34D" }}>accessible cultural archive</span>,
                combining <span style={{ color: "#FCD34D" }}>visual storytelling</span> with
                modern web technologies.
              </>,
              <>
                Highlights the traditional architecture and history of{" "}
                <span style={{ color: "#60A5FA" }}>Zagori</span>, preserving it digitally
                for educational and cultural use.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv top="-40%" left="-40%" threshold={0.1}>
        <VimeoVideo videoId="1124791001" />
      </StaticItemDiv>

      <StaticItemDiv top="-20%" left="-45%" threshold={0.4}>
        <VimeoVideo videoId="1124791196" />
      </StaticItemDiv>

      <StaticItemDiv top="-30%" left="-35%" threshold={0.7}>
        <VimeoVideo videoId="1124790861" />
      </StaticItemDiv>
    </ScrollableContent >
  );
};
