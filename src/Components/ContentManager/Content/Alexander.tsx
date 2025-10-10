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
            {/* HEADER */}
            <ProjectGroup emoji="🗺️" title="Alexander the Great's Campaigns" color="#60A5FA">
              <div className="project-text" style={{ fontSize: "1.8em" }}>
                Interactive 3D Historical Map
              </div>
              <div className="project-text">
                <span style={{ color: "#60A5FA" }}>
                  A 3D interactive map powered by React Three Fiber exploring Alexander the Great's legendary campaigns.
                </span>
              </div>
            </ProjectGroup>

            {/* CONCEPT */}
            <ProjectGroup 
              emoji="🎬" 
              title="IMMERSIVE STORYTELLING" 
              color="#FBBF24"
              content={[
                <>
                  Users can explore <span style={{ color: "#FBBF24" }}>key points along his journey</span>, each paired with <span style={{ color: "#FBBF24" }}>historical videos</span> and multimedia content.
                </>,
                <>
                  Designed as an <span style={{ color: "#34D399" }}>immersive storytelling platform</span> combining history, geography, and modern web technologies.
                </>
              ]}
            />

            {/* TECH STACK */}
            <ProjectGroup 
              emoji="🛠️" 
              title="TECHNOLOGY" 
              color="#A78BFA"
              badges={["React Three Fiber", "GLSL Shaders", "Recoil", "TypeScript"]}
              content={[
                <>
                  Built using <span style={{ color: "#A78BFA" }}>React Three Fiber</span> for 3D rendering, <span style={{ color: "#A78BFA" }}>custom shaders</span> for visual effects, and <span style={{ color: "#A78BFA" }}>Recoil</span> for state management.
                </>
              ]}
            />

            {/* COLLABORATION */}
            <ProjectGroup 
              emoji="🌍" 
              title="COLLABORATION" 
              color="#6EE7B7"
              content={[
                <>
                  Created in collaboration with the <span style={{ color: "#6EE7B7" }}>Hellenic Institute of Byzantine and Post-Byzantine Studies</span> in Venice.
                </>,
                <>
                  A blend of <span style={{ color: "#FCD34D" }}>technical innovation</span> and <span style={{ color: "#FCD34D" }}>cultural education</span> through modern web storytelling.
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
