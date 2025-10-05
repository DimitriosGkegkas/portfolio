import React from 'react';

export const RoboticArm: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <h1>🤖 Robotic Arm Pick & Place</h1>
        <p className="subtitle">Hackathon Project - 2nd Place</p>
      </div>
      
      <div className="content-body">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            This hackathon project involved developing a robotic arm system capable of performing pick and place 
            tasks autonomously. The system combines computer vision, robotics control, and intelligent planning 
            to achieve precise manipulation tasks. The project secured 2nd place in the competition.
          </p>
        </div>

        <div className="project-details">
          <h2>Key Features</h2>
          <ul>
            <li>Autonomous pick and place operations</li>
            <li>Computer vision-based object detection and localization</li>
            <li>Real-time path planning and obstacle avoidance</li>
            <li>Precise robotic manipulation control</li>
            <li>Integration of multiple sensors for robust operation</li>
          </ul>
        </div>

        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">ROS</span>
            <span className="tech-tag">Python</span>
            <span className="tech-tag">Computer Vision</span>
            <span className="tech-tag">Robotics</span>
            <span className="tech-tag">OpenCV</span>
            <span className="tech-tag">Path Planning</span>
            <span className="tech-tag">Control Systems</span>
            <span className="tech-tag">Sensor Fusion</span>
          </div>
        </div>

        <div className="competition-details">
          <h2>Competition Details</h2>
          <p>
            This project was developed during a robotics hackathon focused on robotic manipulation tasks. 
            The competition required teams to build and program robotic systems capable of performing 
            complex pick and place operations with high accuracy and efficiency.
          </p>
        </div>

        <div className="achievements">
          <h2>Key Achievements</h2>
          <ul>
            <li>Secured 2nd place in robotics hackathon</li>
            <li>Achieved high precision in pick and place operations</li>
            <li>Developed robust computer vision pipeline</li>
            <li>Implemented efficient path planning algorithms</li>
            <li>Created reliable robotic control system</li>
          </ul>
        </div>

        <div className="technical-challenges">
          <h2>Technical Challenges</h2>
          <ul>
            <li>Real-time object detection and tracking</li>
            <li>Precise robotic arm control and calibration</li>
            <li>Path planning with obstacle avoidance</li>
            <li>Integration of multiple sensor systems</li>
            <li>Optimization for speed and accuracy</li>
          </ul>
        </div>

        <div className="impact">
          <h2>Project Impact</h2>
          <p>
            This project demonstrates practical application of robotics, computer vision, and control systems 
            in a competitive environment. The successful implementation showcases skills in rapid prototyping, 
            system integration, and problem-solving under time constraints.
          </p>
        </div>
      </div>
    </div>
  );
};
