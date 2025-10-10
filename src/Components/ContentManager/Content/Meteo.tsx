// components/ProjectContent.tsx

import { type FC } from "react";
import { StaticItemDiv } from "../StaticItemDiv";
import { asset } from "../../../utils/asset";
import { ProjectGroup } from "../ProjectGroup";
import { ScrollableContent } from "../ScrollableContent";

export const Meteo: FC = () => {

  return (
    <ScrollableContent
      htmlContent={
        <>
          {/* HEADER */}
          <ProjectGroup emoji="📱" title="Meteo Weather Chatbot" color="#60A5FA">
            <div className="project-text" style={{ fontSize: "1.8em" }}>
              First Viber Chatbot in Greece
            </div>
            <div className="project-text">
              <span style={{ color: "#60A5FA" }}>
                Launched the first Viber chatbot in Greece with over 250,000 active users.
              </span>
            </div>
          </ProjectGroup>

          {/* FEATURES */}
          <ProjectGroup 
            emoji="☁️" 
            title="FEATURES" 
            color="#FBBF24"
            badges={["Weather Forecasts", "NLP", "Location-based"]}
            content={[
              <>
                Delivers <span style={{ color: "#FBBF24" }}>daily weather broadcasts</span> and responds to <span style={{ color: "#FBBF24" }}>natural language queries</span>.
              </>,
              <>
                Features include <span style={{ color: "#F472B6" }}>live weather</span>, <span style={{ color: "#F472B6" }}>7-day forecasts</span>, and <span style={{ color: "#F472B6" }}>beach suggestions</span>.
              </>,
              <>
                Uses <span style={{ color: "#34D399" }}>NLP</span> to handle questions like "Where should I go swimming in Santorini?"
              </>
            ]}
          />

          {/* TECH STACK */}
          <ProjectGroup 
            emoji="🛠️" 
            title="TECHNOLOGY" 
            color="#A78BFA"
            badges={[
              { courses: ["Node.js", "MongoDB"], color: "#A78BFA" },
              { courses: ["NLP", "Viber API"], color: "#34D399" }
            ]}
            content={[
              <>
                Built with <span style={{ color: "#A78BFA" }}>Node.js</span> and <span style={{ color: "#A78BFA" }}>MongoDB</span> to scale across a national audience.
              </>,
              <>
                Developed a custom <span style={{ color: "#6EE7B7" }}>admin panel</span> for user statistics and targeted broadcasting.
              </>
            ]}
          />

          {/* IMPACT */}
          <ProjectGroup 
            emoji="📊" 
            title="IMPACT" 
            color="#6EE7B7"
            content={[
              <>
                Serving over <span style={{ color: "#60A5FA" }}>250,000 active users</span> with daily weather information and personalized recommendations.
              </>,
              <>
                Pioneer product demonstrating the potential of <span style={{ color: "#6EE7B7" }}>conversational interfaces</span> in Greece.
              </>
            ]}
          />
        </>
      }
    >
      <StaticItemDiv
        top="-30%"
        left="-40%"
        threshold={0.1}
      >
        <img src={asset('/projects/meteo/meteo1.png')} alt='Meteo chatbot UI 1' className='mockup-image' width={300} />
      </StaticItemDiv>

      <StaticItemDiv
        top="-30%"
        left="-20%"
        threshold={0.3}
      >
        <img src={asset('/projects/meteo/meteo2.png')} alt='Meteo chatbot UI 1' className='mockup-image' width={300} />
      </StaticItemDiv>

      <StaticItemDiv
        top="5%"
        left="-38%"
        threshold={0.8}
      >
        <img src={asset('/projects/meteo/meteo3.png')} alt='Meteo chatbot UI 1' className='mockup-image' width={500} />
      </StaticItemDiv>
    </ScrollableContent>
  );
};
