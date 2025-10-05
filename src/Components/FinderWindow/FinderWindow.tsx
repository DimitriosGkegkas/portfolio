import { type FC } from "react";
import DraggableWindow from "../DraggableWindow/DraggableWindow";
import { commits } from "../Terminal/parts/constants";
import "./FinderWindow.css";

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

interface FinderWindowProps {
  onProjectClick: (projectId: string) => void;
  position?: { x: number; y: number };
  onClose?: () => void;
  category?: 'web-development' | 'robotics-ai' | 'education';
  onCategoryChange?: (category: 'web-development' | 'robotics-ai' | 'education' | null) => void;
  onProjectHover?: (project: Project | null, position: { x: number; y: number }) => void;
}

// Function to get projects based on category
const getProjectsByCategory = (category?: 'web-development' | 'robotics-ai' | 'education'): Project[] => {
  if (!category) return [];
  
  const branch = commits[category];
  if (!branch || !branch.projects) return [];
  
  return branch.projects.map((project: any) => ({
    id: project.id,
    name: project.name || project.title || 'Untitled Project',
    icon: getProjectIcon(project.id),
    description: project.description || project.title || '',
    techStack: project.techStack?.join(', '),
    tags: project.tags,
    title: project.title,
    thumbnails: getProjectThumbnails(project.id)
  }));
};

// Function to get appropriate icon for each project
const getProjectIcon = (projectId: string): string => {
  const iconMap: Record<string, string> = {
    'meteoBot': '🌤️',
    'alexanderMap': '🗺️',
    'zagorisiaApp': '🏛️',
    'digitalMuseums': '🏛️',
    'rotunda': '🏛️',
    'keioThesis': '🚗',
    'multiDroneSLAM': '🚁',
    'digitizationPipeline': '📸',
    'keio': '🎓',
    'ecn': '🇫🇷',
    'ntua': '🏛️',
    'ganMetrics': '🧠',
    'roboticArm': '🦾'
  };
  return iconMap[projectId] || '📁';
};

// Function to get thumbnails for each project (max 3 images)
const getProjectThumbnails = (projectId: string): string[] => {
  const thumbnailMap: Record<string, string[]> = {
    'meteoBot': [
      '/projects/meteo/meteo1.png',
      '/projects/meteo/meteo2.png',
      '/projects/meteo/meteo3.png'
    ],
    'alexanderMap': [
      '/projects/alex/alex1.jpeg',
      '/projects/alex/alex2.jpeg',
      '/projects/alex/alex3.jpeg',
      '/projects/alex/alex4.jpeg'
    ],
    'zagorisiaApp': [
      '/projects/alex1.png' // Placeholder - you can add more Zagorisia images
    ],
    'digitalMuseums': [
      '/projects/alex1.png' // Placeholder
    ],
    'rotunda': [
      '/projects/alex1.png' // Placeholder
    ],
    'keioThesis': [
      '/projects/alex1.png' // Placeholder
    ],
    'multiDroneSLAM': [
      '/projects/alex1.png' // Placeholder
    ],
    'digitizationPipeline': [
      '/projects/alex1.png' // Placeholder
    ],
    'keio': [
      '/projects/alex1.png' // Placeholder
    ],
    'ecn': [
      '/projects/alex1.png' // Placeholder
    ],
    'ntua': [
      '/projects/alex1.png' // Placeholder
    ],
    'ganMetrics': [
      '/projects/alex1.png' // Placeholder
    ],
    'roboticArm': [
      '/projects/alex1.png' // Placeholder
    ]
  };
  return (thumbnailMap[projectId] || []).slice(0, 3); // Limit to max 3 images
};


export const FinderWindow: FC<FinderWindowProps> = ({
    onProjectClick,
    position = { x: 0, y: 0 },
    onClose,
    category,
    onCategoryChange,
    onProjectHover
}) => {

    const handleProjectClick = (projectId: string) => {
        onProjectClick(projectId);
    };

    const handleCategoryClick = (categoryType: 'web-development' | 'robotics-ai' | 'education') => {
        if (onCategoryChange) {
            onCategoryChange(categoryType);
        }
    };

    const handleHomeClick = () => {
        if (onCategoryChange) {
            onCategoryChange(null);
        }
    };

    const handleProjectMouseEnter = (project: Project, event: React.MouseEvent) => {
        if (onProjectHover) {
            onProjectHover(project, { x: event.clientX, y: event.clientY });
        }
    };

    const handleProjectMouseLeave = () => {
        if (onProjectHover) {
            onProjectHover(null, { x: 0, y: 0 });
        }
    };

    // Get projects based on category
    const projects = getProjectsByCategory(category);

    return (
        <DraggableWindow
            className="finder-window"
            style={{
                left: `${50 + position.x}%`,
                top: `${50 + position.y}%`,
                transform: `translateX(-60%) translateY(-65%)`
            }}
            onClose={onClose}
            windowId="finder-window"
        >
            <div className="finder-content">
                <div className="finder-sidebar">
                    <div className="sidebar-section">
                        <h3>Favorites</h3>
                        <div 
                            className={`sidebar-item ${!category ? 'active' : ''}`}
                            onClick={handleHomeClick}
                        >
                            <span className="sidebar-icon">🏠</span>
                            <span>Home</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-icon">📁</span>
                            <span>Projects</span>
                        </div>
                    </div>

                    <div className="sidebar-section">
                        <h3>Categories</h3>
                        <div 
                            className={`sidebar-item ${category === 'web-development' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('web-development')}
                        >
                            <span className="sidebar-icon">🌐</span>
                            <span>Web Development</span>
                        </div>
                        <div 
                            className={`sidebar-item ${category === 'robotics-ai' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('robotics-ai')}
                        >
                            <span className="sidebar-icon">🤖</span>
                            <span>Robotics & AI</span>
                        </div>
                        <div 
                            className={`sidebar-item ${category === 'education' ? 'active' : ''}`}
                            onClick={() => handleCategoryClick('education')}
                        >
                            <span className="sidebar-icon">🎓</span>
                            <span>Education</span>
                        </div>
                    </div>
                </div>

                <div className="finder-main">
                    <div className="finder-path">
                        <span className="path-segment" onClick={handleHomeClick}>🏠</span>
                        <span className="path-separator">&gt;</span>
                        <span className="path-segment">Portfolio</span>
                        <span className="path-separator">&gt;</span>
                        <span className="path-segment">
                            {category === 'web-development' ? 'Web Development' : 
                             category === 'robotics-ai' ? 'Robotics & AI' : 
                             category === 'education' ? 'Education' : 'Projects'}
                        </span>
                    </div>


                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="project-item"
                                onClick={() => handleProjectClick(project.id)}
                                onMouseEnter={(e) => handleProjectMouseEnter(project, e)}
                                onMouseLeave={handleProjectMouseLeave}
                            >
                                <div className="project-icon">{project.icon}</div>
                                <div className="project-name">{project.name}</div>
                                <div className="project-description">{project.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </DraggableWindow>
    );
};
