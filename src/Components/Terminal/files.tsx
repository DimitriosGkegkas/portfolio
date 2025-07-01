const COLOR = {
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

I'm ${COLOR.green}Dimitrios Gkegkas${COLOR.reset}, an Electrical & Computer Engineer 
with a strong passion for ${COLOR.cyan}robotics${COLOR.reset}, ${COLOR.cyan}AI${COLOR.reset}, and ${COLOR.cyan}immersive web experiences${COLOR.reset}.

With hands-on experience in:
- control systems
- multi-agent reinforcement learning
- 3D interaction (React Three Fiber, Three.js)
- CV pipelines and digitization

I aim to bridge the physical and digital worlds through technology.

Currently pursuing an international MSc through the ${COLOR.yellow}JEMARO${COLOR.reset} program,
I combine technical precision with creative design to build intelligent systems 
that enhance real-world applications.

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
      name: "ntua.md",
      isDir: false,
      created: "May 1 2022",
      content: "# \ud83c\udf93 National Technical University of Athens (NTUA)\n- Degree: Integrated MSc in Electrical & Computer Engineering\n- Duration: 2016 \u2013 2022\n- Focus: Signal processing, robotics, systems control\n- Thesis: Reinforcement Learning for Multi-Agent Navigation\n- Location: Athens, Greece",
    },
    {
      name: "ecn.md",
      isDir: false,
      created: "Jul 1 2024",
      content: "# \ud83e\udd16 Centrale Nantes\n- Degree: MSc in Advanced Robotics (JEMARO)\n- Duration: 2023 \u2013 2024\n- Focus: Autonomous systems, motion planning, AI\n- Location: Nantes, France",
    },
    {
      name: "keio.md",
      isDir: false,
      created: "Jul 1 2025",
      content: "# \ud83e\udde0 Keio University\n- Degree: MSc in Robotics and Control Engineering\n- Duration: 2024 \u2013 Present\n- Focus: Multi-agent reinforcement learning for traffic systems\n- Location: Tokyo, Japan",
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
