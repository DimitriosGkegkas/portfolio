import { type FC, useEffect, useState, useRef } from "react";
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
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (project) {
            // Responsive offset - smaller on mobile
            const isMobile = window.innerWidth <= 768;
            const offsetX = isMobile ? 8 : 15;
            const offsetY = isMobile ? 8 : 15;
            
            // Estimate tooltip dimensions based on screen size
            const getTooltipDimensions = () => {
                if (tooltipRef.current) {
                    // Use actual dimensions if available
                    return {
                        width: tooltipRef.current.offsetWidth,
                        height: tooltipRef.current.offsetHeight
                    };
                }
                
                // Fallback estimates based on screen width
                if (window.innerWidth <= 480) {
                    return { width: 240, height: 250 };
                } else if (window.innerWidth <= 768) {
                    return { width: 280, height: 280 };
                } else {
                    return { width: 320, height: 300 };
                }
            };
            
            const { width: tooltipWidth, height: tooltipHeight } = getTooltipDimensions();
            
            // Add padding from screen edges
            const edgePadding = isMobile ? 8 : 16;
            const maxX = window.innerWidth - tooltipWidth - edgePadding;
            const maxY = window.innerHeight - tooltipHeight - edgePadding;
            
            let x = position.x + offsetX;
            let y = position.y + offsetY;
            
            // Adjust if tooltip would go off screen - with proper clamping
            if (x + tooltipWidth > window.innerWidth - edgePadding) {
                // Try to position to the left of cursor
                x = position.x - tooltipWidth - offsetX;
                // If still off screen, clamp to edge
                if (x < edgePadding) {
                    x = edgePadding;
                }
            }
            
            if (y + tooltipHeight > window.innerHeight - edgePadding) {
                // Try to position above cursor
                y = position.y - tooltipHeight - offsetY;
                // If still off screen, clamp to edge
                if (y < edgePadding) {
                    y = edgePadding;
                }
            }
            
            // Ensure tooltip stays within bounds
            x = Math.max(edgePadding, Math.min(x, maxX));
            y = Math.max(edgePadding, Math.min(y, maxY));
            
            setTooltipPosition({ x, y });
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [project, position]);

    if (!project || !isVisible) return null;

    return (
        <div
            ref={tooltipRef}
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
