import mission from './mission.json';

export const MISSION = mission;
export const CHAPTERS = [
  {
    label: 'The mission',
    title: 'Two robots.\nOne response.',
    eyebrow: 'Pavlou Fire Fighting / Robotics Engineer',

    body: 'Co-leading a two-quadruped firefighting project. One robot detects and localizes fire; the resulting spatial target is transferred to a second robot equipped for suppression.',

    detail: 'Athens, Greece · October 2025 — Present',

    tags: [
      'System architecture',
      'Multi-robot coordination',
    ],

    status: '01 / THE SYSTEM',
  },

  {
    label: 'Perceive',
    title: 'See the flame.\nVerify the heat.',
    eyebrow: '01 / RGB–thermal perception',

    body: 'I developed an RGB–thermal perception pipeline that combines YOLO-based visual detection with custom thermal validation. Visual evidence proposes a fire; thermal information determines whether it becomes a verified event.',

    detail: 'From visual detection to verified physical event.',

    tags: [
      'YOLO',
      'Thermal imaging',
      'Camera calibration'
    ],

    status: '02 / FIRE VERIFICATION',
  },

  {
    label: 'Localize',
    title: 'From pixels\nto physical space.',
    eyebrow: '02 / Monocular 3D localization',

    body: 'A detection in an image is not yet a destination. I designed a localization method that combines camera geometry, robot poses, and observations from multiple viewpoints to estimate the 3D position of each fire source.',

    detail: 'Multiple observations converge on one spatial target.',

    tags: [
      'Camera geometry',
      'Robot localization',
      'Multi-view estimation'
    ],

    status: '03 / SPATIAL ESTIMATION',
  },

  {
    label: 'Coordinate',
    title: 'One robot sees.\nThe other responds.',
    eyebrow: '03 / ROS 2 + Nav2',

    body: 'I connected perception to autonomy through ROS 2 and Nav2. Custom Behavior Tree plugins, nodes, transforms, and services turn the estimated fire position into an actionable navigation target and coordinate the handoff between robots.',

    detail: 'Perception becomes shared spatial information — then action.',

    tags: [
      'ROS 2',
      'Nav2',
      'Behavior Trees'
    ],

    status: '04 / ROBOT-TO-ROBOT HANDOFF',
  },
{
  label: 'Build',
  title: 'Make it work\nin the real world.',
  eyebrow: '04 / Hardware + electrical integration',

  body: 'I integrated the suppression payload as a complete physical system: power conversion and distribution, Ethernet and CAN connectivity, custom cabling and connectors, camera and water-cannon interfaces, waterproof enclosures, and mechanical mounting.',

  detail: 'From schematics and component selection to crimping, soldering, assembly, and field testing.',

  tags: [
    'Power + DC/DC',
    'Cabling + connectors',
    'CAD + fabrication'
  ],

  status: '05 / PHYSICAL SYSTEM',
},

  {
    label: 'Engineer',
    title: 'Make the prototype\na system.',
    eyebrow: '05 / Architecture + deployment',

    body: 'Beyond the individual algorithms, I defined the software and deployment architecture that lets the prototype operate as one system: Docker services, systemd deployment, repository structure, CI/CD conventions, reusable Git templates, and React/rosbridge operator controls.',

    detail: 'My work spans perception, autonomy, physical computing, interaction, and deployment.',

    tags: [
      'Docker + systemd',
      'CI/CD',
      'Human–robot interface'
    ],

    status: '06 / INTEGRATED SYSTEM',
  },
] as const;


export function missionSample(progress: number) {
  const p = Math.max(0, Math.min(1, progress));
  const i = Math.min(Math.floor(p * 5), 4);
  const a = MISSION.frames[i], b = MISSION.frames[i + 1];
  // Hold the hero while the opening scan reconstructs the warehouse.
  const t = (p-a.p)/(b.p-a.p);
  const e = t * t * (3 - 2 * t);
  const mix = (u: number[], v: number[]) => u.map((n, k) => n + (v[k] - n) * e) as [number, number, number];
  return { robot: mix(a.robot, b.robot), responder: mix(a.responder, b.responder), camera: mix(a.camera, b.camera), target: mix(a.target, b.target) };
}
