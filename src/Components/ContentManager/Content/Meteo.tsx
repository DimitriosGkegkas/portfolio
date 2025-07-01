// components/ProjectContent.tsx

import { Scroll, ScrollControls } from "@react-three/drei";
import { type FC } from "react";
import { Item } from "../Item";
import PaperScreen from "../../SceneManager/PaperScreen";
import { useThree } from "@react-three/fiber";

export const Meteo: FC = () => {
  const { width, height } = useThree((state) => state.viewport);

  return (
    <ScrollControls damping={0.1} pages={3}>
      <Scroll>


        <Item url='/projects/meteo/meteo1.png' position={[width/3, 0, 30]} scale={20.5} />
        <Item url='/projects/meteo/meteo2.png' position={[width/3, -20, 20]} scale={17} />
        <Item url='/projects/meteo/meteo3.png' position={[width/3, -38, 10]} scale={17} />

        {/* Visual highlights or animated keywords can go here later */}
        {/* Example: <ItemText text='Node.js' scale={2.5} position={[0, -10, 10]} color="#34D399" /> */}
      </Scroll>

      <Scroll html style={{ width: "100%", height: "100%", zIndex: 10000000 }}>
        <div className='project-text' style={styles(40)}>
          📱 Launched the first <span style={{ color: "#60A5FA" }}>Viber chatbot in Greece</span> with over <span style={{ color: "#60A5FA" }}>250,000 active users</span>
        </div>
        <div className='project-text' style={styles(85)}>
          ☁️ Delivers <span style={{ color: "#FBBF24" }}>daily weather broadcasts</span> and responds to <span style={{ color: "#FBBF24" }}>natural language queries</span>
        </div>
        <div className='project-text' style={styles(125)}>
          🌤️ Features include <span style={{ color: "#F472B6" }}>live weather</span>, <span style={{ color: "#F472B6" }}>7-day forecasts</span>, and <span style={{ color: "#F472B6" }}>beach suggestions</span>
        </div>
        <div className='project-text' style={styles(165)}>
          🧠 Uses <span style={{ color: "#34D399" }}>NLP</span> to handle questions like “Where should I go swimming in Santorini?"
        </div>
        <div className='project-text' style={styles(205)}>
          🛠️ Built with <span style={{ color: "#A78BFA" }}>Node.js</span> and <span style={{ color: "#A78BFA" }}>MongoDB</span> to scale across a national audience
        </div>
        <div className='project-text' style={styles(260)}>
          📊 Developed a custom <span style={{ color: "#6EE7B7" }}>admin panel</span> for user statistics and targeted broadcasting
        </div>

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

const styles: (vh: number) => React.CSSProperties = (vh) => ({
  top: `${vh}vh`,
});

const imageContainerStyles: (vh: number) => React.CSSProperties = (vh) => ({
  position: "absolute",
  top: `${vh}vh`,
  left: "10vw",
  width: "250px",
  height: "500px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
