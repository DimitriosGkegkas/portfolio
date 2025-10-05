import React from 'react';

export const KeioThesis: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <h1>🚗 Decentralized Multi-Agent RL with Communication</h1>
        <p className="subtitle">Master Thesis - Autonomous Driving Research</p>
      </div>
      
      <div className="content-body">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            This Master's thesis project focuses on developing decentralized multi-agent reinforcement learning 
            systems with communication capabilities for autonomous driving applications. The research emphasizes 
            optimization, control algorithms, and safe decision-making in multi-robot systems.
          </p>
        </div>

        <div className="project-details">
          <h2>Key Research Areas</h2>
          <ul>
            <li>Decentralized multi-agent reinforcement learning architectures</li>
            <li>Vehicle-to-vehicle (V2V) communication protocols</li>
            <li>Optimization algorithms for multi-robot coordination</li>
            <li>Safe decision-making frameworks for autonomous systems</li>
            <li>Simulation-based validation of learning-based controllers</li>
          </ul>
        </div>

        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">ROS2</span>
            <span className="tech-tag">SUMO</span>
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">Multi-Agent RL</span>
            <span className="tech-tag">Simulation</span>
            <span className="tech-tag">V2X Communication</span>
            <span className="tech-tag">Control Systems</span>
            <span className="tech-tag">Python</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Academic Context</h2>
          <p>
            This project was completed as part of the Master of Science in Engineering (JEMARO Double Degree) 
            at Keio University, Tokyo, Japan (September 2024 – August 2025). It represents advanced research 
            in autonomous systems, multi-agent coordination, and reinforcement learning.
          </p>
        </div>

        <div className="research-focus">
          <h2>Research Focus</h2>
          <ul>
            <li><strong>Multi-Agent Coordination:</strong> Developing algorithms for coordinated decision-making across multiple autonomous vehicles</li>
            <li><strong>Communication Protocols:</strong> Implementing efficient V2V communication for policy exchange and learning</li>
            <li><strong>Safety Assurance:</strong> Ensuring safe operation through robust control algorithms and decision-making frameworks</li>
            <li><strong>Simulation Validation:</strong> Extensive testing and validation using simulation environments</li>
          </ul>
        </div>

        <div className="achievements">
          <h2>Key Achievements</h2>
          <ul>
            <li>Developed novel decentralized RL algorithms for autonomous driving</li>
            <li>Implemented efficient V2V communication protocols</li>
            <li>Created robust safety mechanisms for multi-agent systems</li>
            <li>Conducted comprehensive simulation-based validation</li>
            <li>Advanced the field of multi-agent autonomous systems</li>
          </ul>
        </div>

        <div className="impact">
          <h2>Research Impact</h2>
          <p>
            This work contributes to the advancement of autonomous driving technology by addressing critical 
            challenges in multi-agent coordination, communication, and safety. The research has implications 
            for future autonomous vehicle systems and intelligent transportation networks.
          </p>
        </div>

        <div className="methodology">
          <h2>Methodology</h2>
          <ul>
            <li>Extensive work with ROS2 for robotic system integration</li>
            <li>SUMO simulation environment for traffic modeling and validation</li>
            <li>PyTorch framework for deep reinforcement learning implementation</li>
            <li>Simulation-based validation of learning-based controllers</li>
            <li>Multi-agent coordination algorithms development</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
