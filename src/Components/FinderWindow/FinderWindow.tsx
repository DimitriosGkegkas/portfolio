import { FC } from "react";
import DraggableWindow from "../DraggableWindow/DraggableWindow";
import { commits } from "../Terminal/parts/constants";
import "./FinderWindow.css";

interface Project {
    id: string;
    name: string;
    icon: string;
    description: string;
}

interface FinderWindowProps {
  onProjectClick: (projectId: string) => void;
  position?: { x: number; y: number };
  onClose?: () => void;
  category?: 'web-development' | 'robotics-ai';
}

// Function to get projects based on category
const getProjectsByCategory = (category?: 'web-development' | 'robotics-ai'): Project[] => {
  if (!category) return [];
  
  const categoryProjects = commits[category] || [];
  
  return categoryProjects.map(project => ({
    id: project.project,
    name: project.message,
    icon: getProjectIcon(project.project),
    description: project.description || project.title || ''
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
    'digitizationPipeline': '📸'
  };
  return iconMap[projectId] || '📁';
};

const projects: Project[] = [
    {
        id: "meteoBot",
        name: "MeteoBot",
        icon: "🌤️",
        description: "Viber Weather Chatbot"
    },
    {
        id: "alexanderMap",
        name: "Alexander's Journey",
        icon: "🗺️",
        description: "Interactive Historical Map"
    },
    {
        id: "zagorisiaApp",
        name: "Zagorisia",
        icon: "🏛️",
        description: "Architecture Showcase"
    },
    {
        id: "digitalMuseums",
        name: "Digital Museums",
        icon: "🖼️",
        description: "Cultural Platform"
    },
    {
        id: "digitizationPipeline",
        name: "Digitization Pipeline",
        icon: "📷",
        description: "Automation System"
    },
    {
        id: "rotunda",
        name: "Rotunda",
        icon: "🏛️",
        description: "Digital Installation"
    },
    {
        id: "keioThesis",
        name: "Keio Thesis",
        icon: "🎓",
        description: "Research Project"
    },
    {
        id: "multiDroneSLAM",
        name: "Multi-Drone SLAM",
        icon: "🚁",
        description: "Robotics System"
    },
    {
        id: "roboticArm",
        name: "Robotic Arm",
        icon: "🦾",
        description: "Control System"
    },
    {
        id: "ganMetrics",
        name: "GAN Metrics",
        icon: "🧠",
        description: "AI Research"
    },
    {
        id: "project11",
        name: "Project 11",
        icon: "🚀",
        description: "New Project"
    },
    {
        id: "project12",
        name: "Project 12",
        icon: "⚡",
        description: "Another Project"
    },
    {
        id: "project13",
        name: "Project 13",
        icon: "🎯",
        description: "More Projects"
    },
    {
        id: "project14",
        name: "Project 14",
        icon: "🌟",
        description: "Even More"
    }
];

export const FinderWindow: FC<FinderWindowProps> = ({
    onProjectClick,
    position = { x: 0, y: 0 },
    onClose,
    category
}) => {
    const handleProjectClick = (projectId: string) => {
        onProjectClick(projectId);
    };

    // Get projects based on category
    const projects = getProjectsByCategory(category);

    return (
        <DraggableWindow
            className="finder-window"
            style={{
                left: `${50 + position.x}%`,
                top: `${50 + position.y}%`,
                transform: `translateX(-80%) translateY(-65%)`
            }}
            onClose={onClose}
            windowId="finder-window"
        >
            <div className="finder-content">
                <div className="finder-sidebar">
                    <div className="sidebar-section">
                        <h3>Favorites</h3>
                        <div className="sidebar-item">
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
                        <div className="sidebar-item">
                            <span className="sidebar-icon">🌐</span>
                            <span>Web Development</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-icon">🤖</span>
                            <span>Robotics & AI</span>
                        </div>
                        <div className="sidebar-item">
                            <span className="sidebar-icon">🎓</span>
                            <span>Research</span>
                        </div>
                    </div>
                </div>

                <div className="finder-main">
                    <div className="finder-path">
                        <span className="path-segment">🏠</span>
                        <span className="path-separator">&gt;</span>
                        <span className="path-segment">Portfolio</span>
                        <span className="path-separator">&gt;</span>
                        <span className="path-segment active">Projects</span>
                    </div>


                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="project-item"
                                onClick={() => handleProjectClick(project.id)}
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
