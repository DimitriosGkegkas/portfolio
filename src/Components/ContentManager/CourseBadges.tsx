import { type FC } from "react";

interface CourseBadgesProps {
  courses: string[];
  color: string;
}

export const CourseBadges: FC<CourseBadgesProps> = ({ courses, color }) => {
  // Convert hex color to rgba for background and border
  const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div className="course-badges" style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "8px" }}>
      {courses.map((course, index) => (
        <span
          key={index}
          style={{
            background: hexToRgba(color, 0.15),
            color: color,
            padding: "4px 12px",
            borderRadius: "12px",
            fontSize: "12px",
            fontWeight: "500",
            border: `1px solid ${hexToRgba(color, 0.3)}`,
          }}>
          {course}
        </span>
      ))}
    </div>
  );
};

