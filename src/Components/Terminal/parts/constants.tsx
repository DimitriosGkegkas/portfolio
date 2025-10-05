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

export const fs_data = {
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
📧  Email: dimitrisgegas01@gmail.com
🔗  LinkedIn: https://www.linkedin.com/in/dimitris-gkegkas/
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
      content: "# \ud83e\udde0 Keio University\n\n## \ud83c\udf0c Overview\n- **Degree:** Master of Science in Engineering (JEMARO Double Degree)\n- **Duration:** September 2024 \u2013 August 2025\n- **Location:** Tokyo, Japan\n- **Program:** Japan-Europe Master on Advanced Robotics (JEMARO)\n\n## \ud83d\udcda Master Thesis Project\n**Decentralized Multi-Agent Reinforcement Learning with Communication for Autonomous Driving**\n\n### \ud83d\udca1 Research Focus\n- Optimization algorithms for multi-robot coordination\n- Control algorithms for autonomous vehicle systems\n- Safe decision-making in dynamic environments\n- Vehicle-to-vehicle (V2X) communication protocols\n- Policy exchange and coordinated learning mechanisms\n\n### \ud83d\udcbb Technical Implementation\n- **Simulation Environment:** SUMO traffic simulator\n- **Learning Framework:** Multi-agent reinforcement learning\n- **Communication:** V2X infrastructure for policy sharing\n- **Validation:** Simulation-based testing of learning controllers\n\n## \ud83d\udd27 Tech Stack\n\n### \ud83d\udd0d Core Technologies\n- **ROS2** - Robot Operating System for distributed systems\n- **SUMO** - Simulation of Urban Mobility for traffic modeling\n- **PyTorch** - Deep learning framework for RL algorithms\n- **Python** - Primary programming language\n\n### \ud83d\udca1 Specialized Skills\n- **Multi-Agent Reinforcement Learning** - Coordinated learning algorithms\n- **Autonomous Driving** - Self-driving vehicle control systems\n- **V2X Communication** - Vehicle-to-vehicle communication protocols\n- **Traffic Simulation** - Urban mobility and traffic flow modeling\n- **Control Theory** - Dynamic system control and optimization\n\n### \ud83d\udc68\u200d\ud83d\udcbb Development Tools\n- **Git** - Version control and collaboration\n- **Docker** - Containerization for reproducible environments\n- **Jupyter Notebooks** - Interactive development and analysis\n- **Linux** - Development environment\n\n## \ud83c\udf93 Academic Environment\n- **Research Lab:** Advanced Robotics Laboratory\n- **Supervisor:** [Supervisor Name]\n- **Collaboration:** International JEMARO program with European partners\n- **Language:** English (primary), Japanese (environmental)\n\n## \ud83d\udcda Publications & Outputs\n- Master thesis defense: [Date]\n- Research presentations at JEMARO consortium meetings\n- Technical documentation and code repositories\n\n---\n*[Image placeholder: Keio University campus, Tokyo skyline, or research lab]*",
    },
    {
      name: "ecn.md",
      isDir: false,
      created: "Jul 1 2024",
      content: "# \ud83e\udd16 \u00c9cole Centrale de Nantes\n\n## \ud83c\udf0c Overview\n- **Degree:** Master in Control and Robotics \u2013 Advanced Robotics (JEMARO Double Degree)\n- **Duration:** September 2023 \u2013 August 2024\n- **Location:** Nantes, France\n- **Program:** Japan-Europe Master on Advanced Robotics (JEMARO)\n\n## \ud83d\udcda Key Project\n**Multi-Drone Collaborative SLAM with Kimera-Multi**\n\n### \ud83d\udca1 Project Focus\n- Real-time mapping and localization for multiple drones\n- Sensor fusion from multiple aerial platforms\n- Distributed autonomy in complex environments\n- Collaborative mapping algorithms\n- High-fidelity simulation integration\n\n### \ud83d\udcbb Technical Implementation\n- **SLAM Framework:** Kimera-Multi for multi-robot SLAM\n- **Simulation Environment:** AirSim/Unreal Engine for high-fidelity drone simulation\n- **Communication:** ROS2 for distributed system communication\n- **Mapping:** Real-time 3D mapping and sensor fusion\n- **Control:** Distributed autonomy algorithms\n\n## \ud83d\udd27 Tech Stack\n\n### \ud83d\udd0d Core Technologies\n- **ROS2** - Robot Operating System for distributed robotics\n- **AirSim** - High-fidelity drone simulation platform\n- **Unreal Engine** - 3D simulation environment\n- **Kimera-Multi** - Multi-robot SLAM framework\n- **Python/C++** - Primary programming languages\n\n### \ud83d\udca1 Specialized Skills\n- **Control Theory** - Dynamic system control and stability\n- **Robotic Manipulation** - Robot arm control and planning\n- **SLAM** - Simultaneous Localization and Mapping\n- **Optimization** - Mathematical optimization for robotics\n- **AI-Driven Robotics** - Machine learning in robotic systems\n\n### \ud83d\udc68\u200d\ud83d\udcbb Development Tools\n- **Git** - Version control and collaboration\n- **Docker** - Containerization for reproducible environments\n- **CMake** - Build system for C++ projects\n- **Gazebo** - Additional simulation environment\n- **Linux** - Development environment\n\n## \ud83c\udf93 Academic Environment\n- **Research Lab:** Robotics and Control Laboratory\n- **Supervisor:** [Supervisor Name]\n- **Collaboration:** International JEMARO program with Japanese partners\n- **Language:** English (primary), French (environmental)\n\n## \ud83d\udcda Coursework & Specializations\n- **Control Theory** - Advanced control systems and stability\n- **Robotic Manipulation** - Robot arm kinematics and dynamics\n- **Optimization** - Mathematical optimization methods\n- **AI-Driven Robotics** - Machine learning applications in robotics\n- **Distributed Systems** - Multi-robot coordination\n\n## \ud83d\udcda Publications & Outputs\n- Project presentation at JEMARO consortium meetings\n- Technical documentation and code repositories\n- Simulation results and performance analysis\n\n---\n*[Image placeholder: ECN campus, Nantes cityscape, or robotics lab]*",
    },
    {
      name: "ntua.md",
      isDir: false,
      created: "May 1 2022",
      content: "# \ud83c\udf93 National Technical University of Athens (NTUA)\n\n## \ud83c\udf0c Overview\n- **Degree:** MEng in Electrical & Computer Engineering (Integrated Master's)\n- **Duration:** September 2016 \u2013 June 2022\n- **Location:** Athens, Greece\n- **Program:** Five-year integrated degree program\n\n## \ud83d\udcda Master Thesis Project\n**GAN Metrics for Image Quality Evaluation**\n\n### \ud83d\udca1 Research Focus\n- Generative Adversarial Networks (GANs) evaluation metrics\n- Image quality assessment algorithms\n- Interactive AI model validation frameworks\n- User feedback integration in AI systems\n- Computer vision and deep learning applications\n\n### \ud83d\udcbb Technical Implementation\n- **Deep Learning Framework:** PyTorch/TensorFlow for GAN development\n- **Computer Vision:** OpenCV for image processing\n- **Web Framework:** Interactive web interface for user feedback\n- **Data Analysis:** Statistical analysis of image quality metrics\n- **Validation:** User study design and implementation\n\n## \ud83d\udd27 Tech Stack\n\n### \ud83d\udd0d Core Technologies\n- **C++** - System programming and embedded development\n- **Python** - Data science and machine learning\n- **JavaScript** - Web development and interactive interfaces\n- **Embedded Systems** - Microcontroller programming\n- **Linux** - Development environment\n\n### \ud83d\udca1 Specialized Skills\n- **Robotics** - Robot control and automation systems\n- **Embedded Systems** - Microcontroller and hardware programming\n- **Control Engineering** - Dynamic system control and stability\n- **Software Development** - Full-stack development\n- **Signal Processing** - Digital signal processing algorithms\n- **Circuit Design** - Analog and digital circuit design\n\n### \ud83d\udc68\u200d\ud83d\udcbb Development Tools\n- **Git** - Version control and collaboration\n- **Docker** - Containerization for reproducible environments\n- **Arduino/Raspberry Pi** - Embedded development platforms\n- **MATLAB/Simulink** - Control system design and simulation\n- **Eagle/Altium** - PCB design software\n- **Visual Studio Code** - Integrated development environment\n\n## \ud83c\udf93 Academic Environment\n- **Department:** School of Electrical and Computer Engineering\n- **Specialization:** Control Systems and Robotics\n- **Supervisor:** [Supervisor Name]\n- **Language:** Greek (primary), English (technical)\n\n## \ud83d\udcda Coursework & Specializations\n- **Control Theory** - Linear and nonlinear control systems\n- **Robotics** - Robot kinematics, dynamics, and control\n- **Embedded Systems** - Microcontroller programming and real-time systems\n- **Signal Processing** - Digital signal processing and communications\n- **Circuit Design** - Analog and digital circuit analysis\n- **Software Engineering** - Software development methodologies\n- **Mathematics** - Advanced calculus, linear algebra, and statistics\n\n## \ud83d\udcda Key Projects & Achievements\n- **Master Thesis:** GAN Metrics for Image Quality Evaluation\n- **Embedded Projects:** Real-time control systems\n- **Robotics Projects:** Autonomous robot navigation\n- **Software Projects:** Full-stack web applications\n- **Hardware Projects:** Custom PCB design and implementation\n\n## \ud83d\udcda Publications & Outputs\n- Master thesis defense: June 2022\n- Technical documentation and code repositories\n- Hardware and software project portfolios\n\n---\n*[Image placeholder: NTUA campus, Athens cityscape, or engineering lab]*",
    },
  ],
  "~/portfolio/projects/": [
    {
      name: "meteoBot.md",
      isDir: false,
      created: "Jan 1 2023",
      content: "# \u2601\ufe0f Viber Weather Chatbot\nConversational AI for real-time weather updates.\n\n- Stack: Node.js, MongoDB, Viber API\n- Tags: Chatbot, Conversational AI\n- Role: Developer\n- Highlights: Multi-language support, location-based forecasts",
    },
    {
      name: "alexanderMap.md",
      isDir: false,
      created: "Feb 1 2023",
      content: "# \ud83d\uddfa\ufe0f Alexander's Journey \u2013 Interactive Map\nA web-based 3D visualization of Alexander the Great's campaign.\n\n- Stack: React, Three.js, GIS data\n- Tags: 3D Web, History, Interactive UX\n- Role: Full-stack Developer",
    },
    {
      name: "zagorisiaApp.md",
      isDir: false,
      created: "Mar 1 2023",
      content: "# \ud83c\udfdb\ufe0f Zagorisia Architecture Showcase\nA 3D web experience highlighting traditional Greek architecture.\n\n- Stack: React, Three.js, Custom CMS\n- Tags: Architecture, Design, 3D UX\n- Role: Designer & Developer",
    },
    {
      name: "digitalMuseums.md",
      isDir: false,
      created: "Apr 1 2023",
      content: "# \ud83d\uddbc\ufe0f Digital Museums Platform\nOnline platform for exploring cultural exhibits.\n\n- Stack: Next.js, MongoDB, Image Processing\n- Tags: CultureTech, Digitization\n- Role: Backend & Data Engineer",
    },
    {
      name: "digitizationPipeline.md",
      isDir: false,
      created: "May 1 2023",
      content: "# \ud83d\udd2c Digitization Automation Pipeline\nAutomation and computer vision for scanning delicate artifacts.\n\n- Stack: Python, OpenCV\n- Tags: Automation, CV, Heritage\n- Role: ML Engineer\n- Highlights: Streamlined pipeline for museum artifact digitization",
    },
  ],
};

export const commits: Record<string, { hash: string; year?: string; university?: string; location?: string; message?: string; project: string; title?: string; color?: string; tech?: string[]; tags?: string[]; description?: string; techStack?: string }[]> = {
  education: [
    {
      hash: "keio-jemaro",
      year: "2024-2025",
      university: "Keio University",
      location: "Tokyo, Japan",
      message: "Master of Science in Engineering (JEMARO Double Degree)",
      project: "keio",
      description: "Master thesis: Decentralized Multi-Agent Reinforcement Learning with Communication for autonomous driving",
      techStack: "ROS2, SUMO, PyTorch, Multi-Agent RL, Simulation"
    },
    {
      hash: "ecn-jemaro",
      year: "2023-2024",
      university: "École Centrale de Nantes",
      location: "Nantes, France",
      message: "MSc in Control and Robotics – Advanced Robotics (JEMARO)",
      project: "ecn",
    },
    {
      hash: "ntua",
      year: "2016-2022",
      university: "National Technical University of Athens",
      location: "Athens, Greece",
      color: COLOR.cyan,
      message: "MEng in Electrical & Computer Engineering",
      project: "ntua",
    },
  ],

  "web-development": [
    {
      hash: "meteo123",
      message: "Viber Weather Chatbot",
      title: "Conversational AI for Weather Services",
      tech: ["Node.js", "MongoDB", "Viber API"],
      tags: ["Chatbot", "Conversational AI"],
      project: "meteoBot",
      description: "Real-time weather updates through conversational interface",
      techStack: "Node.js, MongoDB, Viber API"
    },
    {
      hash: "alex456",
      message: "Alexander's Journey – Interactive Map",
      title: "Historical Visualization of Alexander the Great's Campaign",
      tech: ["Three.js", "React", "GIS Data"],
      tags: ["Interactive Web", "3D", "History"],
      project: "alexanderMap",
      description: "3D web visualization of historical military campaigns",
      techStack: "React, Three.js, GIS Data"
    },
    {
      hash: "zago789",
      message: "Zagorisia Architecture Showcase",
      title: "Web Experience for Traditional Greek Architecture",
      tech: ["React", "Three.js", "Custom CMS"],
      tags: ["Architecture", "Web Design"],
      project: "zagorisiaApp",
      description: "Immersive 3D showcase of traditional Greek architectural heritage",
      techStack: "React, Three.js, Custom CMS"
    },
    {
      hash: "museum321",
      message: "Digital Museums Platform",
      title: "Online Platform for Cultural Exhibits",
      tech: ["Next.js", "MongoDB", "Image Processing"],
      tags: ["Cultural Tech", "Web App", "Digitization"],
      project: "digitalMuseums",
      description: "Digital platform for cultural heritage preservation and exhibition",
      techStack: "Next.js, MongoDB, Image Processing"
    },
    {
      hash: "rota987",
      message: "Rotunda Digital Installation",
      title: "Interactive E-table for the Rotunda of Thessaloniki",
      tech: ["Touchscreen UI", "Custom CMS", "Cultural Mapping"],
      tags: ["Cultural Heritage", "Physical Installation", "Interactive Exhibit"],
      project: "rotunda",
      description: "Interactive touchscreen installation for cultural heritage education",
      techStack: "Touchscreen UI, Custom CMS, Cultural Mapping"
    },
  ],

  "robotics-ai": [
    {
      hash: "keio-thesis",
      message: "Decentralized Multi-Agent RL with Communication",
      title: "Master Thesis - Autonomous Driving Research",
      tech: ["ROS2", "SUMO", "PyTorch", "Multi-Agent RL", "Simulation"],
      tags: ["Autonomous Driving", "Multi-Agent RL", "V2X Communication"],
      project: "keioThesis",
      description: "Master thesis focusing on optimization, control algorithms, and safe decision-making in multi-robot systems",
      techStack: "ROS2, SUMO, PyTorch, Multi-Agent RL, Simulation"
    },
    {
      hash: "slam-multi",
      message: "Multi-Drone Collaborative SLAM",
      title: "Real-time Mapping with Kimera-Multi",
      tech: ["ROS2", "Python", "C++", "AirSim", "Unreal Engine"],
      tags: ["SLAM", "Multi-Agent", "Robotics"],
      project: "multiDroneSLAM",
      description: "Implementing real-time mapping, sensor fusion, and distributed autonomy in AirSim/Unreal with ROS2",
      techStack: "ROS2, Python, C++, AirSim, Unreal Engine"
    },
    {
      hash: "gan-metrics",
      message: "GAN Metrics for Image Quality Evaluation",
      title: "Interactive Framework for AI Model Validation",
      tech: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
      tags: ["AI", "Computer Vision", "GAN"],
      project: "ganMetrics",
      description: "Developing an interactive framework for AI model validation using user feedback",
      techStack: "Python, TensorFlow, PyTorch, Computer Vision"
    },
    {
      hash: "robotic-arm",
      message: "Robotic Arm Pick & Place",
      title: "Hackathon Project - 2nd Place",
      tech: ["ROS", "Python", "Computer Vision", "Robotics"],
      tags: ["Robotics", "Computer Vision", "Manipulation"],
      project: "roboticArm",
      description: "Robotic arm with pick and place task implementation for hackathon competition",
      techStack: "ROS, Python, Computer Vision, Robotics"
    },
  ],
};
