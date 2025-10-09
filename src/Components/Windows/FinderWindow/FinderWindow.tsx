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
    icon: project.icon || '📁',
    description: project.description || project.title || '',
    techStack: project.techStack?.join(', '),
    tags: project.tags,
    title: project.title,
    thumbnails: project.thumbnails?.slice(0, 3) || []
  }));
};


export const FinderWindow: FC<FinderWindowProps> = ({
  onProjectClick,
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

  const handleProjectPointerEnter = (project: Project, event: React.PointerEvent) => {
    // Only show tooltip for mouse/pen, not touch
    if (event.pointerType === 'touch') {
      return; // Skip tooltip for touch interactions
    }
    
    if (onProjectHover) {
      onProjectHover(project, { x: event.clientX, y: event.clientY });
    }
  };

  const handleProjectPointerLeave = (event: React.PointerEvent) => {
    // Only hide tooltip if it was triggered by mouse/pen, not touch
    if (event.pointerType === 'touch') {
      return;
    }
    
    if (onProjectHover) {
      onProjectHover(null, { x: 0, y: 0 });
    }
  };

  // Get projects based on category
  const projects = getProjectsByCategory(category);

  return (
    <DraggableWindow
      className="finder-window"
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
                onPointerEnter={(e) => handleProjectPointerEnter(project, e)}
                onPointerLeave={(e) => handleProjectPointerLeave(e)}
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
