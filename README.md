# 🚀 3D Interactive Portfolio - Dimitrios Gkegkas

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen.svg)](https://dimitriosgkegkas.github.io/portfolio/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![Three.js](https://img.shields.io/badge/Three.js-r150-black.svg)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

> **[🔗 View Live Portfolio](https://dimitriosgkegkas.github.io/portfolio/)**

An immersive 3D portfolio experience that combines the elegance of a MacBook Pro interface with the power of a terminal-based navigation system. This project showcases my journey as a Robotics Engineer through an interactive, git-inspired browsing experience.

<div align="center">
  <img src="https://dimitriosgkegkas.github.io/portfolio/thumb.jpg" alt="Portfolio Preview" width="800">
  <p><em>Interactive 3D MacBook interface with terminal-based navigation</em></p>
</div>

---

## 👨‍💻 About Me

I'm **Dimitrios Gkegkas**, a passionate Robotics Engineer with expertise in:
- 🤖 **Autonomous Systems** - Multi-robot coordination and SLAM
- 🧠 **AI/ML** - Reinforcement Learning, Computer Vision, GANs
- 🌐 **Full-Stack Development** - React, Three.js, Node.js
- 🎓 **Academic Background** - JEMARO Double Degree (France & Japan), NTUA

My work bridges the gap between cutting-edge research and real-world applications, from autonomous driving systems to cultural heritage digitization projects that serve 250k+ users.

---

## 💡 Concept & Features

### The Idea
This portfolio reimagines the traditional CV as an **interactive 3D experience** where users explore my work through a familiar yet engaging interface - a MacBook Pro with a functional terminal and Finder-like file browser.

### Key Features

#### 🖥️ **3D MacBook Interface**
- Realistic MacBook Pro 3D model with interactive screen
- Smooth animations and camera movements
- Responsive design that adapts to all screen sizes
- Touch-optimized controls for mobile devices

#### ⌨️ **Git-Inspired Terminal**
- Full-featured terminal with command history
- Navigate through projects using `git` commands
- Browse directories with `ls`, `cd`, and `cat`
- Interactive help system with `help` command
- Clickable links and file paths
- ANSI color support for beautiful output

**Available Commands:**
```bash
git checkout education        # View academic background
git checkout web-development  # Browse web projects
git checkout robotics-ai      # Explore robotics projects
ls                           # List files in current directory
cd [path]                    # Change directory
cat [file]                   # Read file contents
help                         # Show all commands
clear                        # Clear terminal
```

#### 📁 **Finder Window**
- macOS-inspired file browser
- Category-based project organization
- Project thumbnails and descriptions
- Hover tooltips with tech stack details
- Smooth navigation between categories

#### 📱 **Responsive Design**
- Desktop, tablet, and mobile support
- Touch gestures for mobile devices
- Adaptive UI that scales beautifully
- Performance-optimized 3D rendering

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - UI library with hooks
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool

### 3D Graphics
- **Three.js** - WebGL rendering engine
- **React Three Fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for R3F
- **GLTF/GLB Models** - Optimized 3D assets with Draco compression

### Terminal Emulation
- **xterm.js** - Full-featured terminal emulator
- **xterm-addon-fit** - Responsive terminal sizing
- **xterm-addon-web-links** - Clickable link detection
- Custom command parser and execution engine

### Styling & UI
- **CSS3** - Modern styling with custom properties
- **CSS Grid & Flexbox** - Responsive layouts
- **Custom Animations** - Smooth transitions and effects

### Development Tools
- **ESLint** - Code linting
- **Git** - Version control
- **GitHub Pages** - Deployment

---

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── Components/
│   │   ├── ContentManager/      # Dynamic content display system
│   │   │   ├── Content/          # Individual project content components
│   │   │   │   ├── Education/    # Educational background components
│   │   │   │   ├── WebDev/       # Web development projects
│   │   │   │   └── RoboticsAI/   # Robotics & AI projects
│   │   │   ├── ContentManager.tsx
│   │   │   ├── Item.tsx          # Project item renderer
│   │   │   └── StaticItemDiv.tsx # Static content container
│   │   │
│   │   ├── Laptop/              # 3D MacBook model & scene
│   │   │   ├── Laptop.tsx       # Main 3D scene component
│   │   │   └── Laptop.css
│   │   │
│   │   ├── Menu/                # Navigation menu system
│   │   │   ├── EnterButton/     # Entry point button
│   │   │   ├── MenuBar/         # Top menu bar
│   │   │   └── ReturnButton/    # Back navigation
│   │   │
│   │   ├── SceneManager/        # 3D scene orchestration
│   │   │   ├── SceneManager.tsx # Scene state management
│   │   │   ├── animations.times.tsx
│   │   │   ├── ImageFadeMaterialDisplacementCover.tsx
│   │   │   └── PaperScreen.tsx  # Screen texture renderer
│   │   │
│   │   ├── UIManager/           # UI state & overlay management
│   │   │   ├── UIManager.tsx
│   │   │   └── UIManager.css
│   │   │
│   │   ├── Windows/             # Window components
│   │   │   ├── DraggableWindow/ # Base draggable window
│   │   │   ├── FinderWindow/    # macOS-style file browser
│   │   │   ├── Terminal/        # Terminal emulator
│   │   │   │   ├── Terminal.tsx
│   │   │   │   └── parts/
│   │   │   │       ├── commands/      # Command implementations
│   │   │   │       │   ├── cat.ts     # File reading
│   │   │   │       │   ├── cd.ts      # Directory navigation
│   │   │   │       │   ├── clear.ts   # Clear screen
│   │   │   │       │   ├── git.ts     # Git-like commands
│   │   │   │       │   ├── help.ts    # Help system
│   │   │   │       │   └── ls.ts      # List directory
│   │   │   │       ├── links/         # Link detection
│   │   │   │       ├── constants.tsx  # Terminal constants
│   │   │   │       └── welcome.ts     # Welcome message
│   │   │   ├── VimeoVideo/      # Video player window
│   │   │   └── ProjectTooltip/  # Project hover tooltips
│   │   │
│   │   └── Light.tsx            # Scene lighting
│   │
│   ├── Data/
│   │   └── portfolioData.ts     # Centralized data store
│   │                            # - Projects (single source of truth)
│   │                            # - Branches (categories)
│   │                            # - File system structure
│   │
│   ├── utils/
│   │   └── asset.ts             # Asset loading utilities
│   │
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # Application entry point
│   └── index.css                # Global styles
│
├── public/                      # Static assets
│   ├── macbook.glb              # 3D MacBook model
│   ├── projects/                # Project images
│   ├── CV.pdf                   # Resume
│   └── ...
│
├── dist/                        # Production build
├── package.json                 # Dependencies & scripts
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

---

## 🏗️ Architecture & Design Patterns

### Data Architecture
The portfolio uses a **centralized data store** pattern to eliminate redundancy:

```typescript
// Single source of truth for all projects
projects: {
  projectId: {
    id: "projectId",
    name: "Project Name",
    description: "...",
    techStack: ["React", "Three.js"],
    category: "web-development",
    // ... other fields
  }
}

// Branches reference projects by ID
branches: {
  "web-development": {
    projectIds: ["project1", "project2", ...]
  }
}
```

**Benefits:**
- ✅ Single source of truth - update once, reflect everywhere
- ✅ Easy maintenance and consistency
- ✅ Type-safe with TypeScript interfaces
- ✅ Efficient data access through helper functions

### Component Hierarchy
```
App
├── SceneManager (3D scene state)
│   └── Laptop (3D MacBook)
│       └── PaperScreen (Screen content)
├── UIManager (UI state)
│   ├── Menu (Navigation)
│   ├── Windows
│   │   ├── Terminal
│   │   └── FinderWindow
│   └── ContentManager (Project display)
└── Light (3D lighting)
```

### Terminal Command System
The terminal uses a **command pattern** with individual modules:

```typescript
// Each command is a self-contained module
export const executeCommand = (
  cmd: string,
  args: string[],
  context: TerminalContext
) => {
  switch (cmd) {
    case 'git':
      return gitCommand(args, context);
    case 'ls':
      return lsCommand(args, context);
    // ... other commands
  }
};
```

### File System Abstraction
The portfolio simulates a Unix-like file system:

```typescript
fileSystem: {
  "~/portfolio/": [
    { name: "education", isDir: true },
    { name: "web-development", isDir: true },
    { name: "README.md", isDir: false, content: "..." }
  ]
}
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and yarn
- Modern browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dimitriosgkegkas/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Run development server**
   ```bash
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
yarn build
```

The optimized production build will be in the `dist/` directory.


---

## 🎨 Customization

### Adding New Projects

1. **Define the project** in `src/Data/portfolioData.ts`:
   ```typescript
   projects: {
     myProject: {
       id: "myProject",
       name: "My Awesome Project",
       title: "Short Title",
       description: "Project description",
       techStack: ["React", "Node.js"],
       tags: ["Web", "AI"],
       category: "web-development",
       hash: "my-project",
       component: "MyProject",
       icon: "🚀",
       thumbnails: ["/projects/my-project/1.jpg"]
     }
   }
   ```

2. **Add to a branch**:
   ```typescript
   branches: {
     "web-development": {
       projectIds: [..., "myProject"]
     }
   }
   ```

3. **Create content component** in `src/Components/ContentManager/Content/MyProject.tsx`

4. **Add file system entry**:
   ```typescript
   "~/portfolio/web-development/": [
     { name: "myProject.md", isDir: false, content: "..." }
   ]
   ```

### Styling
- Global styles: `src/index.css`
- Component styles: Colocated `.css` files
- CSS variables: Defined in `index.css` for easy theming

---

## 📱 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

**Note:** Requires WebGL support for 3D rendering.

---

## 🔧 Performance Optimizations

- **Draco Compression** - 3D models compressed up to 90%
- **Code Splitting** - Dynamic imports for faster initial load
- **Lazy Loading** - Components loaded on demand
- **Optimized Assets** - Compressed images and models
- **Responsive 3D** - Adjusted quality based on device capabilities

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📬 Contact

**Dimitrios Gkegkas**
- 📧 Email: dimitrisgegas01@gmail.com
- 💼 LinkedIn: [dimitris-gkegkas](https://www.linkedin.com/in/dimitris-gkegkas/)
- 🌐 Portfolio: [https://dimitriosgkegkas.github.io/portfolio/](https://dimitriosgkegkas.github.io/portfolio/)

---

## 🙏 Acknowledgments

- 3D MacBook model inspired by Apple's design language
- Terminal emulation powered by [xterm.js](https://xtermjs.org/)
- 3D rendering with [Three.js](https://threejs.org/) and [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)

---

<div align="center">
  <p>Made with ❤️ and lots of ☕</p>
  <p>⭐ Star this repo if you like it!</p>
</div>
