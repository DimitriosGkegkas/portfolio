import { Suspense, type FC } from "react";
import { Ntua } from "./Content/Ntua";
import { Keio } from "./Content/Keio";
import { Ecn } from "./Content/Ecn";
import { Meteo } from "./Content/Meteo";
import "./ContentManager.css"; // Import your CSS styles

interface ContentManagerProps {
  page: string | null; // Use 'null' for no page selected
}

export const ContentManager: FC<ContentManagerProps> = ({ page }) => {
  if (!page) return null;
  console.log("ContentManager page:", page);
  // You can extend this to handle different pages
  const renderContent = () => {
    switch (page) {
      case "ntua":
        return <Ntua />;
      case "keio":
        return <Keio />;
      case "ecn":
        return <Ecn />;
      case "meteoBot":
        return <Meteo />;
      default:
        return null;
    }
  };

  return <Suspense fallback={null}>{renderContent()}</Suspense>;
};
