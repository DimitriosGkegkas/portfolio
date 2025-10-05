import React from 'react';

export const MultiDroneSLAM: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <h1>🚁 Multi-Drone Collaborative SLAM</h1>
        <p className="subtitle">Real-time Mapping with Kimera-Multi</p>
      </div>
      
      <div className="content-body">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            This project focuses on implementing multi-drone collaborative Simultaneous Localization and Mapping (SLAM) 
            using the Kimera-Multi framework. The system enables real-time mapping, sensor fusion, and distributed 
            autonomy in AirSim/Unreal Engine environment with ROS2.
          </p>
        </div>

        <div className="project-details">
          <h2>Key Features</h2>
          <ul>
            <li>Multi-agent SLAM system with distributed processing</li>
            <li>Real-time sensor fusion and mapping</li>
            <li>Distributed autonomy for coordinated drone operations</li>
            <li>Integration with AirSim/Unreal Engine simulation environment</li>
            <li>ROS2-based communication and control architecture</li>
          </ul>
        </div>

        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">ROS2</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">C++</span>
            <span className="tech-tag">AirSim</span>
            <span className="tech-tag">Unreal Engine</span>
            <span className="tech-tag">Kimera-Multi</span>
            <span className="tech-tag">SLAM</span>
            <span className="tech-tag">Computer Vision</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Academic Context</h2>
          <p>
            This project was developed as part of the Master's program in Control and Robotics – Advanced Robotics 
            (JEMARO Double Degree) at École Centrale de Nantes, France. It represents advanced work in multi-agent 
            robotics, sensor fusion, and distributed systems.
          </p>
        </div>

        <div className="achievements">
          <h2>Key Achievements</h2>
          <ul>
            <li>Successfully implemented distributed SLAM across multiple drones</li>
            <li>Achieved real-time performance in simulation environment</li>
            <li>Developed robust sensor fusion algorithms</li>
            <li>Created scalable multi-agent communication protocols</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
