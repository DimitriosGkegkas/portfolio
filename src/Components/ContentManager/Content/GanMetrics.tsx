import React from 'react';

export const GanMetrics: React.FC = () => {
  return (
    <div className="content-container">
      <div className="content-header">
        <h1>🎨 GAN Metrics for Image Quality Evaluation</h1>
        <p className="subtitle">Interactive Framework for AI Model Validation</p>
      </div>
      
      <div className="content-body">
        <div className="project-overview">
          <h2>Project Overview</h2>
          <p>
            This Master's thesis project focuses on developing an interactive framework for evaluating 
            Generative Adversarial Network (GAN) models using user feedback. The system provides comprehensive 
            metrics for image quality evaluation and creates an interactive validation framework for AI models.
          </p>
        </div>

        <div className="project-details">
          <h2>Key Features</h2>
          <ul>
            <li>Interactive AI model validation framework</li>
            <li>User feedback integration for model evaluation</li>
            <li>Comprehensive GAN metrics implementation</li>
            <li>Real-time image quality assessment</li>
            <li>Comparative analysis tools for different GAN architectures</li>
          </ul>
        </div>

        <div className="tech-stack">
          <h2>Technology Stack</h2>
          <div className="tech-tags">
            <span className="tech-tag">Python</span>
            <span className="tech-tag">TensorFlow</span>
            <span className="tech-tag">PyTorch</span>
            <span className="tech-tag">Computer Vision</span>
            <span className="tech-tag">GAN</span>
            <span className="tech-tag">Machine Learning</span>
            <span className="tech-tag">Image Processing</span>
            <span className="tech-tag">Interactive UI</span>
          </div>
        </div>

        <div className="project-context">
          <h2>Academic Context</h2>
          <p>
            This project was completed as part of the Master's thesis for the MEng in Electrical & Computer 
            Engineering at the National Technical University of Athens, Greece. It represents advanced work in 
            artificial intelligence, computer vision, and human-computer interaction.
          </p>
        </div>

        <div className="achievements">
          <h2>Key Achievements</h2>
          <ul>
            <li>Developed novel metrics for GAN evaluation</li>
            <li>Created interactive validation framework</li>
            <li>Integrated user feedback mechanisms</li>
            <li>Conducted comprehensive comparative studies</li>
            <li>Published research findings in academic context</li>
          </ul>
        </div>

        <div className="research-impact">
          <h2>Research Impact</h2>
          <p>
            This work contributes to the field of AI model evaluation by providing a more comprehensive 
            and user-centric approach to assessing GAN performance. The interactive framework enables 
            researchers and practitioners to better understand and validate their AI models through 
            human feedback integration.
          </p>
        </div>
      </div>
    </div>
  );
};
