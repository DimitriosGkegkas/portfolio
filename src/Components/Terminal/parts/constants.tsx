import { getFileSystem, getBranches, getProjects } from "../../../Data/portfolioData";
export { COLOR } from "../../../Data/portfolioData";

// Export the centralized data
export const fs_data = getFileSystem();
export const commits = getBranches();
export const projects = getProjects();

// Helper functions for backward compatibility
export const getProjectsByCategory = (category: string) => 
  Object.values(projects).filter((project: any) => project.category === category);
