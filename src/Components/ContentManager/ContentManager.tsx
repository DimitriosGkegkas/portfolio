import { Suspense, type FC } from "react";
import { Ntua } from "./Content/Ntua";
import { Keio } from "./Content/Keio";
import { Ecn } from "./Content/Ecn";
import { Meteo } from "./Content/Meteo";
import { Zagorisia } from "./Content/Zagorisia";
import { DigitalMuseum } from "./Content/DigitalMuseum";
import { DigitizationPipeline } from "./Content/DigitizationPipeline";
import { Rotunda } from "./Content/Rotunda";
import "./ContentManager.css";
import { Alexander } from "./Content/Alexander";
import { Education } from "./Content/Education";
import { MultiDroneSLAM } from "./Content/MultiDroneSLAM";
import { GanMetrics } from "./Content/GanMetrics";
import { RoboticArm } from "./Content/RoboticArm";
import { KeioThesis } from "./Content/KeioThesis";

interface ContentManagerProps {
  page: string | null;
}

export const ContentManager: FC<ContentManagerProps> = ({ page }) => {
  if (!page) return null;
  console.log("ContentManager page:", page);

  const renderContent = () => {
    switch (page) {
      // Education
      case "ntua":
        return <Ntua />;
      case "keio":
        return <Keio />;
      case "ecn":
        return <Ecn />;
      case "education":
        return <Education />;

      // Web Development Projects
      case "meteoBot":
        return <Meteo />;
      case "alexanderMap":
        return <Alexander />;
      case "zagorisiaApp":
        return <Zagorisia />;
      case "digitalMuseums":
        return <DigitalMuseum />;
      case "digitizationPipeline":
        return <DigitizationPipeline />;
      case "rotunda":
        return <Rotunda />;

      // Robotics & AI Projects
      case "keioThesis":
        return <KeioThesis />;
      case "multiDroneSLAM":
        return <MultiDroneSLAM />;
      case "ganMetrics":
        return <GanMetrics />;
      case "roboticArm":
        return <RoboticArm />;

      default:
        return null;
    }
  };

  return <Suspense fallback={null}>{renderContent()}</Suspense>;
};
