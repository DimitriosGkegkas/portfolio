import { type FC, type ReactNode } from "react";
import { CourseBadges } from "./CourseBadges";

interface BadgeGroup {
  courses: string[];
  color: string;
}

interface ProjectGroupProps {
  emoji?: string;
  title: string;
  color: string;
  children?: ReactNode;
  badges?: string[] | BadgeGroup[];
  content?: ReactNode[];
}

export const ProjectGroup: FC<ProjectGroupProps> = ({ emoji, title, color, children, badges, content }) => {
  const renderBadges = () => {
    if (!badges || badges.length === 0) return null;

    // Check if it's a simple array of strings
    if (typeof badges[0] === "string") {
      return <CourseBadges courses={badges as string[]} color={color} />;
    }

    // Otherwise it's an array of BadgeGroup objects
    return (
      <>
        {(badges as BadgeGroup[]).map((group, index) => (
          <CourseBadges key={index} courses={group.courses} color={group.color} />
        ))}
      </>
    );
  };

  return (
    <div className="project-group">
      <div className="project-title">
        {emoji && `${emoji} `}
        <span style={{ color, fontWeight: "bold" }}>{title}</span>
      </div>
      {badges && (
        <div className="project-group-badges">
          {renderBadges()}
        </div>
      )}
      {content && content.map((item, index) => (
        <div key={index} className="project-text">
          {item}
        </div>
      ))}
      {children}
    </div>
  );
};

