// components/ProjectContent.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { ItemDiv } from "../ItemDiv";
import { StaticItemDiv } from "../StaticItemDiv";

export const Meteo: FC = () => {

  return (
    <ScrollControls damping={0.1} pages={3.2} style={{ zIndex: 1000000000 }}>

      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.1}
      >
        <img src='/projects/meteo/meteo1.png' alt='Meteo chatbot UI 1' className='mockup-image' width={300} />
      </StaticItemDiv>

      <StaticItemDiv
        top="-30%"
        left="-20%"
        threshold={0.3}
      >
        <img src='/projects/meteo/meteo2.png' alt='Meteo chatbot UI 1' className='mockup-image' width={300} />
      </StaticItemDiv>

      <StaticItemDiv
        top="5%"
        left="-38%"
        threshold={0.8}
      >
        <img src='/projects/meteo/meteo3.png' alt='Meteo chatbot UI 1' className='mockup-image' width={500} />
      </StaticItemDiv>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <ItemDiv offset={10}>
          📱 Launched the first <span style={{ color: "#60A5FA" }}>Viber chatbot in Greece</span> with over <span style={{ color: "#60A5FA" }}>250,000 active users</span>
        </ItemDiv>
        <ItemDiv offset={55}>
          ☁️ Delivers <span style={{ color: "#FBBF24" }}>daily weather broadcasts</span> and responds to <span style={{ color: "#FBBF24" }}>natural language queries</span>
        </ItemDiv>
        <ItemDiv offset={95}>
          🌤️ Features include <span style={{ color: "#F472B6" }}>live weather</span>, <span style={{ color: "#F472B6" }}>7-day forecasts</span>, and <span style={{ color: "#F472B6" }}>beach suggestions</span>
        </ItemDiv>
        <ItemDiv offset={135}>
          🧠 Uses <span style={{ color: "#34D399" }}>NLP</span> to handle questions like “Where should I go swimming in Santorini?"
        </ItemDiv>
        <ItemDiv offset={175}>
          🛠️ Built with <span style={{ color: "#A78BFA" }}>Node.js</span> and <span style={{ color: "#A78BFA" }}>MongoDB</span> to scale across a national audience
        </ItemDiv>
        <ItemDiv offset={215}>
          📊 Developed a custom <span style={{ color: "#6EE7B7" }}>admin panel</span> for user statistics and targeted broadcasting
        </ItemDiv>

        {/* Optional iPhone-style mockup container */}
        <div style={imageContainerStyles(320)}>
          <div className='iphone-frame'>
            <img src='/images/meteo-mockup-1.jpg' alt='Meteo chatbot UI 1' className='mockup-image' />
          </div>
        </div>

        <div style={imageContainerStyles(380)}>
          <div className='iphone-frame'>
            <img src='/images/meteo-mockup-2.jpg' alt='Meteo chatbot UI 2' className='mockup-image' />
          </div>
        </div>
      </Scroll>

    </ScrollControls>
  );
};

const imageContainerStyles: (vh: number) => React.CSSProperties = (vh) => ({
  position: "absolute",
  top: `${vh}svh`,
  left: "10vw",
  width: "fit-content",
  height: "fit-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
