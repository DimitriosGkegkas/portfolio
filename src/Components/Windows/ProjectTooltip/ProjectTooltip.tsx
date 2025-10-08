import { type FC, useEffect, useState } from "react";
import "./ProjectTooltip.css";
import { asset } from "../../../utils/asset";

interface Project {
    id: string;
    name: string;
    icon: string;
    description: string;
    techStack?: string;
    tags?: string[];
    title?: string;
    thumbnails?: string[];
}

interface ProjectTooltipProps {
    project: Project | null;
    position: { x: number; y: number };
}

export const ProjectTooltip: FC<ProjectTooltipProps> = ({ project, position }) => {
    const [tooltipPosition, setTooltipPosition] = useState(position);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (project) {
            // Add small offset from cursor
            const offsetX = 15;
            const offsetY = 15;
            
            // Get tooltip dimensions (estimated)
            const tooltipWidth = 320;
            const tooltipHeight = 200;
            
            let x = position.x + offsetX;
            let y = position.y + offsetY;
            
            // Adjust if tooltip would go off screen
            if (x + tooltipWidth > window.innerWidth) {
                x = position.x - tooltipWidth - offsetX;
            }
            if (y + tooltipHeight > window.innerHeight) {
                y = position.y - tooltipHeight - offsetY;
            }
            
            setTooltipPosition({ x, y });
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [project, position]);

    if (!project || !isVisible) return null;

    return (
        <div
            className="project-preview-tooltip"
            style={{
                position: 'fixed',
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
                zIndex: 10000
            }}
        >
            <div className="tooltip-header">
                <span className="tooltip-icon">{project.icon}</span>
                <div className="tooltip-title-section">
                    <h3 className="tooltip-title">{project.title || project.name}</h3>
                    <p className="tooltip-subtitle">{project.name}</p>
                </div>
            </div>
            <div className="tooltip-content">
                <p className="tooltip-description">{project.description}</p>
                
                {/* Project Thumbnails - Google-style layout */}
                {project.thumbnails && project.thumbnails.length > 0 && (
                    <div className="tooltip-thumbnails">
                        <div className="thumbnails-container">
                            {/* Main large image (left half) */}
                            <div className="thumbnail-main">
                                <img 
                                    src={asset(project.thumbnails[0])} 
                                    alt={`${project.name} main screenshot`}
                                    className="thumbnail-image"
                                    loading="lazy"
                                />
                            </div>
                            
                            {/* Side images (right half) */}
                            <div className="thumbnail-side">
                                {project.thumbnails.slice(1, 3).map((thumbnail, index) => (
                                    <div key={index} className="thumbnail-item">
                                        <img 
                                            src={asset(thumbnail)} 
                                            alt={`${project.name} screenshot ${index + 2}`}
                                            className="thumbnail-image"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                
                {project.techStack && (
                    <div className="tooltip-tech">
                        <strong>Tech Stack:</strong> {project.techStack}
                    </div>
                )}
                {project.tags && project.tags.length > 0 && (
                    <div className="tooltip-tags">
                        <strong>Tags:</strong>
                        <div className="tags-container">
                            {project.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
