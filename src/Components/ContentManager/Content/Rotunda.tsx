import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Rotunda: FC = () => {
  return (
    <ScrollableContent
      damping={0.1}
      zIndex={100000000}
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup
            emoji="🏛️"
            title="Rotunda of Thessaloniki Digital Installation"
            color="#60A5FA"
            content={[

              <>
                Permanent Interactive E-Table
              </>,
              <>
                A permanent{" "}
                <span style={{ color: "#60A5FA" }}>digital installation</span>{' '}
                housed inside the{" "}
                <span style={{ color: "#60A5FA" }}>Rotunda of Thessaloniki</span>.
                Visitors interact through a{" "}
                <span style={{ color: "#60A5FA" }}>large multi-touch table</span>{' '}
                that connects them to visual archives and interactive maps of the city.
              </>

            ]}
          />

          {/* EXPERIENCE */}
          <ProjectGroup
            emoji="🗺️"
            title="INTERACTIVE EXPERIENCE"
            color="#FBBF24"
            badges={["Touch Interface", "Interactive Maps", "Cultural Heritage"]}
            content={[
              <>
                Developed an intuitive{" "}
                <span style={{ color: "#FBBF24" }}>e-table interface</span>{' '}
                where visitors can browse photographic archives, artworks, and
                historical references tied to Thessaloniki’s monuments.
              </>,
              <>
                Includes a{" "}
                <span style={{ color: "#FBBF24" }}>route-creation system</span>{' '}
                that allows users to trace paths across the city and discover related
                sites and landmarks.
              </>
            ]}
          />

          {/* DESIGN */}
          <ProjectGroup
            emoji="🎯"
            title="DESIGN PHILOSOPHY"
            color="#6EE7B7"
            badges={["UX Design", "Spatial Interaction", "Exhibition Media"]}
            content={[
              <>
                Designed for{" "}
                <span style={{ color: "#6EE7B7" }}>museum-grade durability</span>{' '}
                and{" "}
                <span style={{ color: "#6EE7B7" }}>spatial UX</span>{' '}
                that invites public exploration.
                Balances{" "}
                <span style={{ color: "#6EE7B7" }}>narrative depth</span>{' '}
                with simplicity for quick, intuitive engagement.
              </>
            ]}
          />

          {/* TECHNOLOGY */}
          <ProjectGroup
            emoji="🛠️"
            title="TECHNOLOGY"
            color="#A78BFA"
            badges={[
              "Interactive UI",
              "Touch Input",
              "Multimedia Integration"
            ]}
            content={[
              <>
                Implemented a{" "}
                <span style={{ color: "#A78BFA" }}>custom multimedia system</span>{' '}
                supporting image archives, video playback, and map-based navigation.
              </>,
              <>
                Optimized for{" "}
                <span style={{ color: "#A78BFA" }}>high-resolution touch displays</span>{' '}
                to ensure smooth interaction and durability in continuous public use.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup
            emoji="🌍"
            title="CULTURAL IMPACT"
            color="#FCD34D"
            content={[
              <>
                A{" "}
                <span style={{ color: "#FCD34D" }}>permanent digital exhibit</span>{' '}
                bridging{" "}
                <span style={{ color: "#FCD34D" }}>technology</span>{' '}
                and{" "}
                <span style={{ color: "#FCD34D" }}>cultural heritage</span>.
              </>,
              <>
                Enhances visitor engagement with{" "}
                <span style={{ color: "#60A5FA" }}>Thessaloniki’s history</span>{' '}
                through modern, touch-driven interaction.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv top="-30%" left="-40%" threshold={0.05}>
        <VimeoVideo videoId="1124860764" />
      </StaticItemDiv>
    </ScrollableContent>
  );
};
