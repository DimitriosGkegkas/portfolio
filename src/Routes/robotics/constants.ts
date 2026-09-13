export const Y_MIN = -1.22;
export const Y_MAX = 2.6;
export const FIRE_POSITION = [1.15, -0.88, -2.15] as const;
export const FIRE_BOX_SIZE = [1.1, 1.35, 1.1] as const;

export type ProgressRange = {
  start: number;
  end: number;
};

export type Vec3 = readonly [number, number, number];

export type RoboticsStep = {
  id: string;
  progress: {
    center: number;
  };
  ui: {
    eyebrow: string;
    title: string;
    subtitle: string;
    body: string;
    stats: ReadonlyArray<{ value: string; label: string }> | null;
  };
  camera: {
    position: Vec3;
    target: Vec3;
    holdUntil?: number;
  };
  scene?: {
    lidar?: {
      reveal: ProgressRange;
      persistent: ProgressRange & { opacity: number };
      sweep: {
        start: number;
        peakEnd: number;
        fadeStart: number;
        fadeEnd: number;
        opacity: number;
      };
      visible: ProgressRange;
      travel: ProgressRange & { speed: number };
    };
    robot?: {
      stance?: ProgressRange;
      gait?: {
        start: number;
        end: number;
        fadeStart: number;
        fadeEnd: number;
      };
      shadow?: ProgressRange;
    };
    fire?: {
      flame: ProgressRange;
      detection: ProgressRange;
      fadeOut: ProgressRange;
    };
    background?: {
      warmth?: ProgressRange & { strength: number };
      outro?: ProgressRange;
    };
    lighting?: {
      warmth?: ProgressRange;
      outro?: ProgressRange;
    };
    overlay?: {
      enter: ProgressRange;
    };
  };
};

export const ROBOTICS_STEPS = [
  {
    id: "intro",
    progress: { center: 0 },
    ui: {
      eyebrow: "Pavlou Company | Robotics Engineer",
      title: "Leading an Autonomous\nFirefighting Quadruped.",
      subtitle: "Athens, Greece | October 2025 - Present",
      body: "At Pavlou Company I lead development of an autonomous firefighting robotic dog platform, integrating perception, localization, navigation, and fire suppression into one system aimed at real-world deployment.",
      stats: [
        { value: "ROS2", label: "Autonomy" },
        { value: "RGB + IR", label: "Fire Sensing" },
        { value: "Suppression", label: "Mission Goal" },
      ],
    },
    camera: {
      position: [2.4, 0.7, 4.4],
      target: [0, 0.15, 0],
      holdUntil: 0.18,
    },
  },
  {
    id: "localization",
    progress: { center: 1 / 7 },
    ui: {
      eyebrow: "Perception + Localization",
      title: "Built the Spatial Stack\nfor Navigation.",
      subtitle: "Perception, localization, and scene understanding in degraded environments",
      body: "A core part of my work is building the perception and localization layer that gives the quadruped spatial awareness in smoke, clutter, and GPS-denied settings, so navigation decisions are grounded in a reliable map of the scene.",
      stats: [
        { value: "LiDAR", label: "Mapping" },
        { value: "State Est.", label: "Localization" },
        { value: "3D", label: "Scene Context" },
      ],
    },
    camera: {
      position: [-3.8, 0.35, 2.1],
      target: [0.15, -0.05, 0.35],
    },
    scene: {
      lidar: {
        reveal: { start: 0.02, end: 0.18 },
        persistent: { start: 0.04, end: 0.18, opacity: 0.28 },
        sweep: { start: 0.02, peakEnd: 0.05, fadeStart: 0.18, fadeEnd: 0.22, opacity: 0.95 },
        visible: { start: 0.02, end: 0.1 },
        travel: { start: 0.18, end: 0.32, speed: 3.6 },
      },
    },
  },
  {
    id: "mobility",
    progress: { center: 2 / 7 },
    ui: {
      eyebrow: "Quadruped Platform",
      title: "ROS2 Autonomy\non Deep Robotics.",
      subtitle: "Sensor integration, control interfaces, and mission-level behaviors",
      body: "I develop ROS2-based autonomy software for Deep Robotics quadruped platforms, tying together onboard sensing, robot control interfaces, and mission-level behaviors so the platform acts as a coordinated system rather than a collection of parts.",
      stats: [
        { value: "ROS2", label: "Software Stack" },
        { value: "Deep Robotics", label: "Platform" },
        { value: "Control", label: "Interfaces" },
      ],
    },
    camera: {
      position: [-2.0, 1.1, 1.5],
      target: [0, 0.15, 0],
    },
    scene: {
      robot: {
        stance: { start: 0.22, end: 0.32 },
        gait: { start: 0.32, end: 0.44, fadeStart: 0.66, fadeEnd: 0.82 },
      },
    },
  },
  {
    id: "fire-detection",
    progress: { center: 3 / 7 },
    ui: {
      eyebrow: "Fire Detection",
      title: "Fused RGB and Thermal.\nLocalized the Fire.",
      subtitle: "Detection and source localization for suppression decisions",
      body: "I build fire detection and localization pipelines using RGB and thermal sensing, allowing the robot to identify fire sources, estimate where they are in space, and feed that information into downstream autonomous response logic.",
      stats: [
        { value: "IR", label: "Thermal Layer" },
        { value: "RGB", label: "Visible Layer" },
        { value: "3D", label: "Localization" },
      ],
    },
    camera: {
      position: [0, 2.0, 2.4],
      target: [0, 0.1, 0],
    },
    scene: {
      fire: {
        flame: { start: 0.35, end: 0.42 },
        detection: { start: 0.47, end: 0.55 },
        fadeOut: { start: 0.74, end: 0.84 },
      },
      background: {
        warmth: { start: 0.28, end: 0.48, strength: 0.35 },
      },
      lighting: {
        warmth: { start: 0.38, end: 0.5 },
      },
    },
  },
  {
    id: "autonomy",
    progress: { center: 4 / 7 },
    ui: {
      eyebrow: "Navigation + Suppression",
      title: "Connected Detection\nto Autonomous Response.",
      subtitle: "Navigation, approach logic, and action selection around hazards",
      body: "The autonomy layer has to convert perception into action. My work connects localization, navigation, obstacle handling, and response logic so the quadruped can approach fire safely and support autonomous suppression decisions in changing environments.",
      stats: [
        { value: "Nav", label: "Approach Logic" },
        { value: "Mission", label: "Decision Flow" },
        { value: "Fire", label: "Response Context" },
      ],
    },
    camera: {
      position: [-8.0, 3.5, 6.0],
      target: [0, -1.0, 0],
    },
  },
  {
    id: "mission-stack",
    progress: { center: 5 / 7 },
    ui: {
      eyebrow: "Payload Integration",
      title: "Built the Payload\nEnd to End.",
      subtitle: "Electronics assembly, CAN drivers, CAD mounts, and protective casing",
      body: "I designed and integrated the firefighting payload end-to-end, from electronics assembly and CAN interface drivers to CAD mounting and protective casing design, so the suppression hardware could be carried and operated reliably on the robot.",
      stats: [
        { value: "CAN", label: "Drivers" },
        { value: "CAD", label: "Mounting" },
        { value: "Electronics", label: "Assembly" },
      ],
    },
    camera: {
      position: [0.0, 1.8, 3.5],
      target: [0, 0.55, 0],
    },
  },
  {
    id: "operational-output",
    progress: { center: 6 / 7 },
    ui: {
      eyebrow: "Operator Interfaces",
      title: "Wrapped the Robot\nwith Control Tools.",
      subtitle: "Web and mobile interfaces for control, automation, and field use",
      body: "I also built the web and mobile control layer around the platform, adding operator-facing interfaces and automation tools that make the robot usable in practice, not just technically functional in isolation.",
      stats: [
        { value: "Web", label: "Controls" },
        { value: "Mobile", label: "Access" },
        { value: "Automation", label: "Mission Tools" },
      ],
    },
    camera: {
      position: [0.8, 0.4, 4.0],
      target: [0, -0.1, 0],
    },
    scene: {
      robot: {
        shadow: { start: 0.91, end: 0.99 },
      },
      background: {
        outro: { start: 0.92, end: 0.99 },
      },
      lighting: {
        outro: { start: 0.92, end: 0.99 },
      },
      overlay: {
        enter: { start: 0.93, end: 0.99 },
      },
    },
  },
] as const satisfies ReadonlyArray<RoboticsStep>;

export const SECTION_COUNT = ROBOTICS_STEPS.length + 1;

export function getRoboticsStep(stepId: string): RoboticsStep {
  const step = ROBOTICS_STEPS.find(({ id }) => id === stepId) as RoboticsStep | undefined;

  if (!step) {
    throw new Error(`Unknown robotics step: ${stepId}`);
  }

  return step;
}
