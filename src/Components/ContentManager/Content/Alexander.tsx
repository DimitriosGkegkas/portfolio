import { Scroll } from "@react-three/drei";
import { type FC } from "react";
import PaperScreen from "../../SceneManager/PaperScreen";
import { useThree } from "@react-three/fiber";
import { asset } from "../../../utils/asset";
import { StaticItemDiv } from "../StaticItemDiv";
import { VimeoVideo } from "../../Windows/VimeoVideo/VimeoVideo";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Alexander: FC = () => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <>
      <ScrollableContent
        damping={0.1}
        zIndex={100000000}
        htmlContent={
          <>
            <ProjectGroup emoji="🗺️" title="Alexander the Great's Campaigns" color="#60A5FA">
              <div className="project-text" style={{ fontSize: "1.8em" }}>
                Interactive 3D Historical Map
              </div>
              <div className="project-text">
                A 3D interactive experience built with <span style={{ color: "#60A5FA" }}>React Three Fiber</span> and <span style={{ color: "#60A5FA" }}>Three.js</span>, visualizing Alexander the Great’s legendary campaigns through real-time navigation, sound, and storytelling.
              </div>
              <div className="project-text">
                Created in collaboration with the <span style={{ color: "#60A5FA" }}>Hellenic Institute of Venice</span>.
              </div>
            </ProjectGroup>

            <ProjectGroup
              emoji="🕊️"
              title="NAVIGATION EXPERIENCE"
              color="#FBBF24"
              content={[
                <>
                  Users navigate the map by <span style={{ color: "#FBBF24" }}>controlling a bird in flight</span> with their mouse, gliding over reconstructed historical terrains in real time.
                </>,
                <>
                  Designed for <span style={{ color: "#FBBF24" }}>responsive performance</span> across devices, preserving fluid motion and visual depth on any screen size.
                </>
              ]}
            />

            <ProjectGroup
              emoji="🧊"
              title="CUSTOM VISUAL EFFECTS"
              color="#A78BFA"
              badges={["React Three Fiber", "GLSL Shader", "Three.js"]}
              content={[
                <>
                  Developed a <span style={{ color: "#A78BFA" }}>custom dissolving paper shader</span> to transition between scenes, simulating ancient parchment revealing new geographical layers.
                </>,
                <>
                  Combined <span style={{ color: "#A78BFA" }}>lighting and depth-based effects</span> to enhance the sense of atmosphere and authenticity.
                </>
              ]}
            />

            <ProjectGroup
              emoji="🔊"
              title="AUDIO & ACCESSIBILITY"
              color="#34D399"
              content={[
                <>
                  Integrated a <span style={{ color: "#34D399" }}>sound system</span> for ambient cues, environmental sound effects, and voiceovers tied to specific map events.
                </>,
                <>
                  Implemented <span style={{ color: "#34D399" }}>subtitle support</span> synchronized with video voiceovers for accessibility and clarity.
                </>
              ]}
            />

            <ProjectGroup
              emoji="🧠"
              title="DESIGN & ARCHITECTURE"
              color="#F472B6"
              content={[
                <>
                  Built on <span style={{ color: "#F472B6" }}>React Three Fiber</span> for declarative 3D scene composition and real-time rendering.
                </>,
                <>
                  Optimized responsiveness and input handling for a smooth, interactive experience across devices.
                </>
              ]}
            />

            <ProjectGroup
              emoji="🌍"
              title="PURPOSE"
              color="#6EE7B7"
              content={[
                <>
                  Designed as an <span style={{ color: "#6EE7B7" }}>educational storytelling tool</span> that connects <span style={{ color: "#6EE7B7" }}>historical research</span> with <span style={{ color: "#6EE7B7" }}>modern 3D web technologies</span>.
                </>,
                <>
                  A collaborative effort to make cultural heritage more accessible through interactive visualization.
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
          <VimeoVideo videoId="1125180944" width={40} />
        </StaticItemDiv>
        <StaticItemDiv
          top="-10%"
          left="-45%"
          threshold={0.4}
        >
          <VimeoVideo videoId="1125180911" width={40} />
        </StaticItemDiv>
        <StaticItemDiv
          top="-25%"
          left="-30%"
          threshold={0.7}
        >
          <VimeoVideo videoId="1125180879" width={40} />
        </StaticItemDiv>
        <Scroll>
          <PaperScreen src={asset("/projects/alex/alex1.jpeg")} scaleFactor={9} position={[width / 4 - width / 5, height * 0.1, 1]} />
        </Scroll>
      </ScrollableContent>
    </>
  );
};
