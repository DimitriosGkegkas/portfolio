export const COLOR: Record<string, string> = {
  green: "\x1b[32m",
  blue: "\x1b[34m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  reset: "\x1b[0m",
  magenta: "\x1b[35m",
  white: "\x1b[37m",
  gray: "\x1b[90m",
};

export interface FileSystemItem {
  name: string;
  isDir: boolean;
  created: string;
  content?: string;
}

export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  techStack: string[];
  tags: string[];
  category: 'education' | 'web-development' | 'robotics-ai';
  hash: string;
  year?: string;
  university?: string;
  location?: string;
  content?: string;
  component?: string;
}

export interface Branch {
  name: string;
  description: string;
  projects: Project[];
}

export interface PortfolioData {
  fileSystem: Record<string, FileSystemItem[]>;
  branches: Record<string, Branch>;
  projects: Record<string, Project>;
}

export const portfolioData: PortfolioData = {
  fileSystem: {
    "/": [
      {
        name: "home",
        isDir: true,
        created: "Jan 1 2022",
      },
    ],
    "/home/": [
      {
        name: "gkegkas",
        isDir: true,
        created: "Feb 1 2022",
      },
    ],
    "~/": [
      {
        name: "portfolio",
        isDir: true,
        created: "Mar 1 2022",
      },
    ],
    "~/portfolio/": [
      {
        name: "contact.txt",
        isDir: false,
        created: "Jul 1 2025",
        content: `
${COLOR.cyan}📞 Contact Information${COLOR.reset}

${COLOR.green}📧  Email:${COLOR.reset} dimitrisgegas01@gmail.com
${COLOR.blue}🔗  LinkedIn:${COLOR.reset} https://www.linkedin.com/in/dimitris-gkegkas/
${COLOR.yellow}📄  CV:${COLOR.reset} Get my CV

${COLOR.gray}Ready to connect? Let's build something amazing together! 🚀${COLOR.reset}
`,
      },
      {
        name: "README.md",
        isDir: false,
        created: "Jul 1 2025",
        content: `${COLOR.green}# 👨‍💻 Dimitrios Gkegkas – Terminal Portfolio${COLOR.reset}

${COLOR.magenta}## 👨‍🎓 About Me${COLOR.reset}

I'm ${COLOR.green}Dimitrios Gkegkas${COLOR.reset}, a curious ${COLOR.cyan}Robotics Engineer${COLOR.reset} 
who loves building things that move, think, and explore! 🤖

${COLOR.yellow}Journey so far:${COLOR.reset}
• Started with circuits & code at ${COLOR.cyan}NTUA${COLOR.reset}
• Went international with ${COLOR.yellow}JEMARO${COLOR.reset} - France & Japan
• Taught robots to map, learn, and navigate autonomously
• Built systems that actually work, 250k+ users can't be wrong!

${COLOR.magenta}What I do:${COLOR.reset} ${COLOR.green}ROS/ROS2${COLOR.reset} | ${COLOR.green}Python${COLOR.reset} | ${COLOR.green}C++${COLOR.reset} | SLAM | CV | RL
${COLOR.cyan}What excites me:${COLOR.reset} Autonomous systems, multi-agent coordination, 
and bridging the gap between research and real-world impact.

Ready to ${COLOR.green}make robots smarter${COLOR.reset} together! 🚀

## 🧭 Try this:
${COLOR.cyan}$ git checkout education${COLOR.reset}  `,
      },
      {
        name: "CV.pdf",
        isDir: false,
        created: "Jul 1 2025",
        content: "Open CV",
      },
      {
        name: "education",
        isDir: true,
        created: "Apr 1 2022",
      },
      {
        name: "projects",
        isDir: true,
        created: "Apr 2 2022",
      },
    ],
    "~/portfolio/education/": [
      {
        name: "keio.md",
        isDir: false,
        created: "Jul 1 2025",
        content: "# 🧠 Keio University\n\n## 🌍 Overview\n- **Degree:** Master of Science in Engineering (JEMARO Double Degree)\n- **Duration:** September 2024 – August 2025\n- **Location:** Tokyo, Japan\n- **Program:** Japan-Europe Master on Advanced Robotics (JEMARO)\n\n## 📚 Master Thesis Project\n**Decentralized Multi-Agent Reinforcement Learning with Communication for Autonomous Driving**\n\n### 💡 Research Focus\n- Optimization algorithms for multi-robot coordination\n- Control algorithms for autonomous vehicle systems\n- Safe decision-making in dynamic environments\n- Vehicle-to-vehicle (V2X) communication protocols\n- Policy exchange and coordinated learning mechanisms\n\n### 🔧 Technical Implementation\n- **Simulation Environment:** SUMO traffic simulator\n- **Learning Framework:** Multi-agent reinforcement learning\n- **Communication:** V2X infrastructure for policy sharing\n- **Validation:** Simulation-based testing of learning controllers\n\n## 🛠️ Tech Stack\n\n### 🔍 Core Technologies\n- **ROS2** - Robot Operating System for distributed systems\n- **SUMO** - Simulation of Urban Mobility for traffic modeling\n- **PyTorch** - Deep learning framework for RL algorithms\n- **Python** - Primary programming language\n\n### 💡 Specialized Skills\n- **Multi-Agent Reinforcement Learning** - Coordinated learning algorithms\n- **Autonomous Driving** - Self-driving vehicle control systems\n- **V2X Communication** - Vehicle-to-vehicle communication protocols\n- **Traffic Simulation** - Urban mobility and traffic flow modeling\n- **Control Theory** - Dynamic system control and optimization\n\n### 👨‍💻 Development Tools\n- **Git** - Version control and collaboration\n- **Docker** - Containerization for reproducible environments\n- **Jupyter Notebooks** - Interactive development and analysis\n- **Linux** - Development environment\n\n## 🎓 Academic Environment\n- **Research Lab:** Advanced Robotics Laboratory\n- **Supervisor:** [Supervisor Name]\n- **Collaboration:** International JEMARO program with European partners\n- **Language:** English (primary), Japanese (environmental)\n\n## 📄 Publications & Outputs\n- Master thesis defense: [Date]\n- Research presentations at JEMARO consortium meetings\n- Technical documentation and code repositories\n\n---\n*[Image placeholder: Keio University campus, Tokyo skyline, or research lab]*",
      },
      {
        name: "ecn.md",
        isDir: false,
        created: "Jul 1 2024",
        content: "# 🤖 École Centrale de Nantes\n\n## 🌍 Overview\n- **Degree:** Master in Control and Robotics – Advanced Robotics (JEMARO Double Degree)\n- **Duration:** September 2023 – August 2024\n- **Location:** Nantes, France\n- **Program:** Japan-Europe Master on Advanced Robotics (JEMARO)\n\n## 📚 Key Project\n**Multi-Drone Collaborative SLAM with Kimera-Multi**\n\n### 💡 Project Focus\n- Real-time mapping and localization for multiple drones\n- Sensor fusion from multiple aerial platforms\n- Distributed autonomy in complex environments\n- Collaborative mapping algorithms\n- High-fidelity simulation integration\n\n### 🔧 Technical Implementation\n- **SLAM Framework:** Kimera-Multi for multi-robot SLAM\n- **Simulation Environment:** AirSim/Unreal Engine for high-fidelity drone simulation\n- **Communication:** ROS2 for distributed system communication\n- **Mapping:** Real-time 3D mapping and sensor fusion\n- **Control:** Distributed autonomy algorithms\n\n## 🛠️ Tech Stack\n\n### 🔍 Core Technologies\n- **ROS2** - Robot Operating System for distributed robotics\n- **AirSim** - High-fidelity drone simulation platform\n- **Unreal Engine** - 3D simulation environment\n- **Kimera-Multi** - Multi-robot SLAM framework\n- **Python/C++** - Primary programming languages\n\n### 💡 Specialized Skills\n- **Control Theory** - Dynamic system control and stability\n- **Robotic Manipulation** - Robot arm control and planning\n- **SLAM** - Simultaneous Localization and Mapping\n- **Optimization** - Mathematical optimization for robotics\n- **AI-Driven Robotics** - Machine learning in robotic systems\n\n### 👨‍💻 Development Tools\n- **Git** - Version control and collaboration\n- **Docker** - Containerization for reproducible environments\n- **CMake** - Build system for C++ projects\n- **Gazebo** - Additional simulation environment\n- **Linux** - Development environment\n\n## 🎓 Academic Environment\n- **Research Lab:** Robotics and Control Laboratory\n- **Supervisor:** [Supervisor Name]\n- **Collaboration:** International JEMARO program with Japanese partners\n- **Language:** English (primary), French (environmental)\n\n## 📄 Coursework & Specializations\n- **Control Theory** - Advanced control systems and stability\n- **Robotic Manipulation** - Robot arm kinematics and dynamics\n- **Optimization** - Mathematical optimization methods\n- **AI-Driven Robotics** - Machine learning applications in robotics\n- **Distributed Systems** - Multi-robot coordination\n\n## 📄 Publications & Outputs\n- Project presentation at JEMARO consortium meetings\n- Technical documentation and code repositories\n- Simulation results and performance analysis\n\n---\n*[Image placeholder: ECN campus, Nantes cityscape, or robotics lab]*",
      },
      {
        name: "ntua.md",
        isDir: false,
        created: "May 1 2022",
        content: "# 🎓 National Technical University of Athens (NTUA)\n\n## 🌍 Overview\n- **Degree:** MEng in Electrical & Computer Engineering (Integrated Master's)\n- **Duration:** September 2016 – June 2022\n- **Location:** Athens, Greece\n- **Program:** Five-year integrated degree program\n\n## 📚 Master Thesis Project\n**GAN Metrics for Image Quality Evaluation**\n\n### 💡 Research Focus\n- Generative Adversarial Networks (GANs) evaluation metrics\n- Image quality assessment algorithms\n- Interactive AI model validation frameworks\n- User feedback integration in AI systems\n- Computer vision and deep learning applications\n\n### 🔧 Technical Implementation\n- **Deep Learning Framework:** PyTorch/TensorFlow for GAN development\n- **Computer Vision:** OpenCV for image processing\n- **Web Framework:** Interactive web interface for user feedback\n- **Data Analysis:** Statistical analysis of image quality metrics\n- **Validation:** User study design and implementation\n\n## 🛠️ Tech Stack\n\n### 🔍 Core Technologies\n- **C++** - System programming and embedded development\n- **Python** - Data science and machine learning\n- **JavaScript** - Web development and interactive interfaces\n- **Embedded Systems** - Microcontroller programming\n- **Linux** - Development environment\n\n### 💡 Specialized Skills\n- **Robotics** - Robot control and automation systems\n- **Embedded Systems** - Microcontroller and hardware programming\n- **Control Engineering** - Dynamic system control and stability\n- **Software Development** - Full-stack development\n- **Signal Processing** - Digital signal processing algorithms\n- **Circuit Design** - Analog and digital circuit design\n\n### 👨‍💻 Development Tools\n- **Git** - Version control and collaboration\n- **Docker** - Containerization for reproducible environments\n- **Arduino/Raspberry Pi** - Embedded development platforms\n- **MATLAB/Simulink** - Control system design and simulation\n- **Eagle/Altium** - PCB design software\n- **Visual Studio Code** - Integrated development environment\n\n## 🎓 Academic Environment\n- **Department:** School of Electrical and Computer Engineering\n- **Specialization:** Control Systems and Robotics\n- **Supervisor:** [Supervisor Name]\n- **Language:** Greek (primary), English (technical)\n\n## 📄 Coursework & Specializations\n- **Control Theory** - Linear and nonlinear control systems\n- **Robotics** - Robot kinematics, dynamics, and control\n- **Embedded Systems** - Microcontroller programming and real-time systems\n- **Signal Processing** - Digital signal processing and communications\n- **Circuit Design** - Analog and digital circuit analysis\n- **Software Engineering** - Software development methodologies\n- **Mathematics** - Advanced calculus, linear algebra, and statistics\n\n## 📄 Key Projects & Achievements\n- **Master Thesis:** GAN Metrics for Image Quality Evaluation\n- **Embedded Projects:** Real-time control systems\n- **Robotics Projects:** Autonomous robot navigation\n- **Software Projects:** Full-stack web applications\n- **Hardware Projects:** Custom PCB design and implementation\n\n## 📄 Publications & Outputs\n- Master thesis defense: June 2022\n- Technical documentation and code repositories\n- Hardware and software project portfolios\n\n---\n*[Image placeholder: NTUA campus, Athens cityscape, or engineering lab]*",
      },
    ],
    "~/portfolio/projects/": [
      {
        name: "meteoBot.md",
        isDir: false,
        created: "Jan 1 2023",
        content: "# ☁️ Viber Weather Chatbot\nConversational AI for real-time weather updates.\n\n- Stack: Node.js, MongoDB, Viber API\n- Tags: Chatbot, Conversational AI\n- Role: Developer\n- Highlights: Multi-language support, location-based forecasts",
      },
      {
        name: "alexanderMap.md",
        isDir: false,
        created: "Feb 1 2023",
        content: "# 🗺️ Alexander's Journey – Interactive Map\nA web-based 3D visualization of Alexander the Great's campaign.\n\n- Stack: React, Three.js, GIS data\n- Tags: 3D Web, History, Interactive UX\n- Role: Full-stack Developer",
      },
      {
        name: "zagorisiaApp.md",
        isDir: false,
        created: "Mar 1 2023",
        content: "# 🏛️ Zagorisia Architecture Showcase\nA 3D web experience highlighting traditional Greek architecture.\n\n- Stack: React, Three.js, Custom CMS\n- Tags: Architecture, Design, 3D UX\n- Role: Designer & Developer",
      },
      {
        name: "digitalMuseums.md",
        isDir: false,
        created: "Apr 1 2023",
        content: "# 🏛️ Digital Museums Platform\nOnline platform for exploring cultural exhibits.\n\n- Stack: Next.js, MongoDB, Image Processing\n- Tags: CultureTech, Digitization\n- Role: Backend & Data Engineer",
      },
      {
        name: "digitizationPipeline.md",
        isDir: false,
        created: "May 1 2023",
        content: "# 📷 Digitization Automation Pipeline\nAutomation and computer vision for scanning delicate artifacts.\n\n- Stack: Python, OpenCV\n- Tags: Automation, CV, Heritage\n- Role: ML Engineer\n- Highlights: Streamlined pipeline for museum artifact digitization",
      },
    ],
  },

  branches: {
    education: {
      name: "education",
      description: "Academic journey and educational background",
      projects: [
        {
          id: "keio",
          name: "Keio University",
          title: "Master of Science in Engineering (JEMARO Double Degree)",
          description: "Master thesis: Decentralized Multi-Agent Reinforcement Learning with Communication for autonomous driving",
          techStack: ["ROS2", "SUMO", "PyTorch", "Multi-Agent RL", "Simulation"],
          tags: ["Autonomous Driving", "Multi-Agent RL", "V2X Communication"],
          category: "education",
          hash: "keio-jemaro",
          year: "2024-2025",
          university: "Keio University",
          location: "Tokyo, Japan",
          component: "Keio",
        },
        {
          id: "ecn",
          name: "École Centrale de Nantes",
          title: "MSc in Control and Robotics – Advanced Robotics (JEMARO)",
          description: "Multi-Drone Collaborative SLAM with Kimera-Multi - Real-time mapping, sensor fusion, and distributed autonomy",
          techStack: ["ROS2", "Python", "C++", "AirSim", "Unreal Engine"],
          tags: ["SLAM", "Multi-Agent", "Robotics"],
          category: "education",
          hash: "ecn-jemaro",
          year: "2023-2024",
          university: "École Centrale de Nantes",
          location: "Nantes, France",
          component: "Ecn",
        },
        {
          id: "ntua",
          name: "National Technical University of Athens",
          title: "MEng in Electrical & Computer Engineering",
          description: "GAN Metrics for Image Quality Evaluation - Interactive AI validation framework with user feedback",
          techStack: ["C++", "Python", "Javascript", "Embedded Systems"],
          tags: ["AI", "Computer Vision", "GAN"],
          category: "education",
          hash: "ntua",
          year: "2016-2022",
          university: "National Technical University of Athens",
          location: "Athens, Greece",
          component: "Ntua",
        },
      ],
    },
    "web-development": {
      name: "web-development",
      description: "Web development projects and applications",
      projects: [
        {
          id: "meteoBot",
          name: "Viber Weather Chatbot",
          title: "Conversational AI for Weather Services",
          description: "Real-time weather updates through conversational interface",
          techStack: ["Node.js", "MongoDB", "Viber API"],
          tags: ["Chatbot", "Conversational AI"],
          category: "web-development",
          hash: "meteo123",
          component: "Meteo",
        },
        {
          id: "alexanderMap",
          name: "Alexander's Journey – Interactive Map",
          title: "Historical Visualization of Alexander the Great's Campaign",
          description: "3D web visualization of historical military campaigns",
          techStack: ["Three.js", "React", "GIS Data"],
          tags: ["Interactive Web", "3D", "History"],
          category: "web-development",
          hash: "alex456",
          component: "Alexander",
        },
        {
          id: "zagorisiaApp",
          name: "Zagorisia Architecture Showcase",
          title: "Web Experience for Traditional Greek Architecture",
          description: "Immersive 3D showcase of traditional Greek architectural heritage",
          techStack: ["React", "Three.js", "Custom CMS"],
          tags: ["Architecture", "Web Design"],
          category: "web-development",
          hash: "zago789",
          component: "Zagorisia",
        },
        {
          id: "digitalMuseums",
          name: "Digital Museums Platform",
          title: "Online Platform for Cultural Exhibits",
          description: "Digital platform for cultural heritage preservation and exhibition",
          techStack: ["Next.js", "MongoDB", "Image Processing"],
          tags: ["Cultural Tech", "Web App", "Digitization"],
          category: "web-development",
          hash: "museum321",
          component: "DigitalMuseum",
        },
        {
          id: "rotunda",
          name: "Rotunda Digital Installation",
          title: "Interactive E-table for the Rotunda of Thessaloniki",
          description: "Interactive touchscreen installation for cultural heritage education",
          techStack: ["Touchscreen UI", "Custom CMS", "Cultural Mapping"],
          tags: ["Cultural Heritage", "Physical Installation", "Interactive Exhibit"],
          category: "web-development",
          hash: "rota987",
          component: "Rotunda",
        },
        {
          id: "thessalonikiMap",
          name: "Prewar Thessaloniki 3D Map",
          title: "Interactive 3D Historical Map of Jewish Neighborhoods",
          description: "Immersive 3D reconstruction of prewar Thessaloniki's Jewish neighborhoods with historical artifacts and documents",
          techStack: ["React Three Fiber", "Three.js", "Custom Shaders", "Draco Compression"],
          tags: ["Cultural Heritage", "3D Visualization", "Historical Preservation"],
          category: "web-development",
          hash: "thessaloniki3d",
          component: "Thessaloniki",
        },
      ],
    },
    "robotics-ai": {
      name: "robotics-ai",
      description: "Robotics and AI research projects",
      projects: [
        {
          id: "keioThesis",
          name: "Decentralized Multi-Agent RL with Communication",
          title: "Master Thesis - Autonomous Driving Research",
          description: "Master thesis focusing on optimization, control algorithms, and safe decision-making in multi-robot systems",
          techStack: ["ROS2", "SUMO", "PyTorch", "Multi-Agent RL", "Simulation"],
          tags: ["Autonomous Driving", "Multi-Agent RL", "V2X Communication"],
          category: "robotics-ai",
          hash: "keio-thesis",
          component: "KeioThesis",
        },
        {
          id: "multiDroneSLAM",
          name: "Multi-Drone Collaborative SLAM",
          title: "Real-time Mapping with Kimera-Multi",
          description: "Implementing real-time mapping, sensor fusion, and distributed autonomy in AirSim/Unreal with ROS2",
          techStack: ["ROS2", "Python", "C++", "AirSim", "Unreal Engine"],
          tags: ["SLAM", "Multi-Agent", "Robotics"],
          category: "robotics-ai",
          hash: "slam-multi",
          component: "MultiDroneSLAM",
        },
        {
          id: "ganMetrics",
          name: "GAN Metrics for Image Quality Evaluation",
          title: "Interactive Framework for AI Model Validation",
          description: "Developing an interactive framework for AI model validation using user feedback",
          techStack: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
          tags: ["AI", "Computer Vision", "GAN"],
          category: "robotics-ai",
          hash: "gan-metrics",
          component: "GanMetrics",
        },
        {
          id: "roboticArm",
          name: "Robotic Arm Pick & Place",
          title: "Hackathon Project - 2nd Place",
          description: "Robotic arm with pick and place task implementation for hackathon competition",
          techStack: ["ROS", "Python", "Computer Vision", "Robotics"],
          tags: ["Robotics", "Computer Vision", "Manipulation"],
          category: "robotics-ai",
          hash: "robotic-arm",
          component: "RoboticArm",
        },
      ],
    },
  },

  projects: {
    // Education projects
    keio: {
      id: "keio",
      name: "Keio University",
      title: "Master of Science in Engineering (JEMARO Double Degree)",
      description: "Master thesis: Decentralized Multi-Agent Reinforcement Learning with Communication for autonomous driving",
      techStack: ["ROS2", "SUMO", "PyTorch", "Multi-Agent RL", "Simulation"],
      tags: ["Autonomous Driving", "Multi-Agent RL", "V2X Communication"],
      category: "education",
      hash: "keio-jemaro",
      year: "2024-2025",
      university: "Keio University",
      location: "Tokyo, Japan",
      component: "Keio",
    },
    ecn: {
      id: "ecn",
      name: "École Centrale de Nantes",
      title: "MSc in Control and Robotics – Advanced Robotics (JEMARO)",
      description: "Multi-Drone Collaborative SLAM with Kimera-Multi - Real-time mapping, sensor fusion, and distributed autonomy",
      techStack: ["ROS2", "Python", "C++", "AirSim", "Unreal Engine"],
      tags: ["SLAM", "Multi-Agent", "Robotics"],
      category: "education",
      hash: "ecn-jemaro",
      year: "2023-2024",
      university: "École Centrale de Nantes",
      location: "Nantes, France",
      component: "Ecn",
    },
    ntua: {
      id: "ntua",
      name: "National Technical University of Athens",
      title: "MEng in Electrical & Computer Engineering",
      description: "GAN Metrics for Image Quality Evaluation - Interactive AI validation framework with user feedback",
      techStack: ["C++", "Python", "Javascript", "Embedded Systems"],
      tags: ["AI", "Computer Vision", "GAN"],
      category: "education",
      hash: "ntua",
      year: "2016-2022",
      university: "National Technical University of Athens",
      location: "Athens, Greece",
      component: "Ntua",
    },
    // Web development projects
    meteoBot: {
      id: "meteoBot",
      name: "Viber Weather Chatbot",
      title: "Conversational AI for Weather Services",
      description: "Real-time weather updates through conversational interface",
      techStack: ["Node.js", "MongoDB", "Viber API"],
      tags: ["Chatbot", "Conversational AI"],
      category: "web-development",
      hash: "meteo123",
      component: "Meteo",
    },
    alexanderMap: {
      id: "alexanderMap",
      name: "Alexander's Journey – Interactive Map",
      title: "Historical Visualization of Alexander the Great's Campaign",
      description: "3D web visualization of historical military campaigns",
      techStack: ["Three.js", "React", "GIS Data"],
      tags: ["Interactive Web", "3D", "History"],
      category: "web-development",
      hash: "alex456",
      component: "Alexander",
    },
    zagorisiaApp: {
      id: "zagorisiaApp",
      name: "Zagorisia Architecture Showcase",
      title: "Web Experience for Traditional Greek Architecture",
      description: "Immersive 3D showcase of traditional Greek architectural heritage",
      techStack: ["React", "Three.js", "Custom CMS"],
      tags: ["Architecture", "Web Design"],
      category: "web-development",
      hash: "zago789",
      component: "Zagorisia",
    },
    digitalMuseums: {
      id: "digitalMuseums",
      name: "Digital Museums Platform",
      title: "Online Platform for Cultural Exhibits",
      description: "Digital platform for cultural heritage preservation and exhibition",
      techStack: ["Next.js", "MongoDB", "Image Processing"],
      tags: ["Cultural Tech", "Web App", "Digitization"],
      category: "web-development",
      hash: "museum321",
      component: "DigitalMuseum",
    },
    rotunda: {
      id: "rotunda",
      name: "Rotunda Digital Installation",
      title: "Interactive E-table for the Rotunda of Thessaloniki",
      description: "Interactive touchscreen installation for cultural heritage education",
      techStack: ["Touchscreen UI", "Custom CMS", "Cultural Mapping"],
      tags: ["Cultural Heritage", "Physical Installation", "Interactive Exhibit"],
      category: "web-development",
      hash: "rota987",
      component: "Rotunda",
    },
    thessalonikiMap: {
      id: "thessalonikiMap",
      name: "Prewar Thessaloniki 3D Map",
      title: "Interactive 3D Historical Map of Jewish Neighborhoods",
      description: "Immersive 3D reconstruction of prewar Thessaloniki's Jewish neighborhoods with historical artifacts and documents",
      techStack: ["React Three Fiber", "Three.js", "Custom Shaders", "Draco Compression"],
      tags: ["Cultural Heritage", "3D Visualization", "Historical Preservation"],
      category: "web-development",
      hash: "thessaloniki3d",
      component: "Thessaloniki",
    },
    digitizationPipeline: {
      id: "digitizationPipeline",
      name: "Digitization Automation Pipeline",
      title: "Automation and Computer Vision for Scanning Delicate Artifacts",
      description: "Streamlined pipeline for museum artifact digitization",
      techStack: ["Python", "OpenCV"],
      tags: ["Automation", "CV", "Heritage"],
      category: "web-development",
      hash: "digit-pipeline",
      component: "DigitizationPipeline",
    },
    // Robotics & AI projects
    keioThesis: {
      id: "keioThesis",
      name: "Decentralized Multi-Agent RL with Communication",
      title: "Master Thesis - Autonomous Driving Research",
      description: "Master thesis focusing on optimization, control algorithms, and safe decision-making in multi-robot systems",
      techStack: ["ROS2", "SUMO", "PyTorch", "Multi-Agent RL", "Simulation"],
      tags: ["Autonomous Driving", "Multi-Agent RL", "V2X Communication"],
      category: "robotics-ai",
      hash: "keio-thesis",
      component: "KeioThesis",
    },
    multiDroneSLAM: {
      id: "multiDroneSLAM",
      name: "Multi-Drone Collaborative SLAM",
      title: "Real-time Mapping with Kimera-Multi",
      description: "Implementing real-time mapping, sensor fusion, and distributed autonomy in AirSim/Unreal with ROS2",
      techStack: ["ROS2", "Python", "C++", "AirSim", "Unreal Engine"],
      tags: ["SLAM", "Multi-Agent", "Robotics"],
      category: "robotics-ai",
      hash: "slam-multi",
      component: "MultiDroneSLAM",
    },
    ganMetrics: {
      id: "ganMetrics",
      name: "GAN Metrics for Image Quality Evaluation",
      title: "Interactive Framework for AI Model Validation",
      description: "Developing an interactive framework for AI model validation using user feedback",
      techStack: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      tags: ["AI", "Computer Vision", "GAN"],
      category: "robotics-ai",
      hash: "gan-metrics",
      component: "GanMetrics",
    },
    roboticArm: {
      id: "roboticArm",
      name: "Robotic Arm Pick & Place",
      title: "Hackathon Project - 2nd Place",
      description: "Robotic arm with pick and place task implementation for hackathon competition",
      techStack: ["ROS", "Python", "Computer Vision", "Robotics"],
      tags: ["Robotics", "Computer Vision", "Manipulation"],
      category: "robotics-ai",
      hash: "robotic-arm",
      component: "RoboticArm",
    },
  },
};

// Helper functions to access the centralized data
export const getFileSystem = () => portfolioData.fileSystem;
export const getBranches = () => portfolioData.branches;
export const getProjects = () => portfolioData.projects;
export const getProjectById = (id: string) => portfolioData.projects[id];
export const getProjectsByCategory = (category: string) => 
  Object.values(portfolioData.projects).filter(project => project.category === category);
export const getBranchProjects = (branchName: string) => 
  portfolioData.branches[branchName]?.projects || [];
