import { Suspense, type FC, useMemo, memo } from "react";
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
import { Thessaloniki } from "./Content/Thessaloniki";
import { Education } from "./Content/Education";
import { MultiDroneSLAM } from "./Content/MultiDroneSLAM";
import { GanMetrics } from "./Content/GanMetrics";
import { RoboticArm } from "./Content/RoboticArm";
import { KeioThesis } from "./Content/KeioThesis";
import { getProjectById } from "../../Data/portfolioData";

interface ContentManagerProps {
  page: string | null;
}

const ContentManagerImpl: FC<ContentManagerProps> = ({ page }) => {
  if (!page) return null;
  console.log("ContentManager page:", page);

  const renderContent = useMemo(() => {
    // Get project data from centralized source
    const project = getProjectById(page);
    
    if (project && project.component) {
      // Use the component mapping from centralized data
      switch (project.component) {
        // Education
        case "Ntua":
          return <Ntua />;
        case "Keio":
          return <Keio />;
        case "Ecn":
          return <Ecn />;
        case "Education":
          return <Education />;

        // Web Development Projects
        case "Meteo":
          return <Meteo />;
        case "Alexander":
          return <Alexander />;
        case "Thessaloniki":
          return <Thessaloniki />;
        case "Zagorisia":
          return <Zagorisia />;
        case "DigitalMuseum":
          return <DigitalMuseum />;
        case "DigitizationPipeline":
          return <DigitizationPipeline />;
        case "Rotunda":
          return <Rotunda />;

        // Robotics & AI Projects
        case "KeioThesis":
          return <KeioThesis />;
        case "MultiDroneSLAM":
          return <MultiDroneSLAM />;
        case "GanMetrics":
          return <GanMetrics />;
        case "RoboticArm":
          return <RoboticArm />;

        default:
          return null;
      }
    }

    // Fallback to original switch statement for backward compatibility
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
      case "thessalonikiMap":
        return <Thessaloniki />;
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
  }, [page]);

  return <Suspense fallback={null}>{renderContent}</Suspense>;
};

export const ContentManager = memo(ContentManagerImpl);
