# Pavlou warehouse mission

The `/robotics` page is a six-chapter, scroll-controlled presentation: mission → RGB/thermal verification → 3D localization → target handoff → suppression → engineering.

- `src/Routes/robotics/missionStory.ts`: chapter copy and interpolation.
- `src/Routes/robotics/mission.json`: shared robot and camera waypoints (Three.js coordinates, Y up).
- `src/Routes/robotics/WarehouseScene.tsx`: scene, payloads, wheel rotation, hose, and illustrative effects.
- `src/Routes/robotics/RoboticsRoute.tsx`: chapter navigation, accessible reading content, mobile layout, reduced-motion support.
- `public/robotics/`: four exported GLBs, approximately 3.2 MB total. The M20 geometry is loaded once and shared between the two variants.

The original `public/M20` URDF and DAE files remain the source. The older scene components remain in the repository but are no longer used by this route.

## Blender

Editable scene: `/Users/dimitrisgkegkas/Documents/Codex/2026-09-06/how-to-delete-things-from-my/outputs/Pavlou_Warehouse.blend`.

Scrub frames 1–301. Six timeline markers correspond to the web chapters. Collections separate the warehouse, two robot variants, route guides, lights, and payloads. Route guide curves are hidden from renders. Camera target and robot positions are animated. Fire, verification rays, dynamic hose, and water effects are rendered in React Three Fiber.

To regenerate in Blender 4.5, open the Python Console and run:

```python
exec(compile(open('/Users/dimitrisgkegkas/Personal/portfolio/scripts/build_robotics_scene.py').read(), 'build_robotics_scene.py', 'exec'))
```

This creates a new scene, exports the GLBs, and saves the `.blend` and a preview. The source/output paths at the top of both Python scripts are local and should be updated if the project moves. `finalize_robotics_scene.py` updates the active generated scene from the shared mission data and renders the preview.

The cannon is refined from the supplied reference photos, with the original M20 retained. Camera/cannon mounts, fire, thermal panels, and the mission sequence are illustrations, not engineering CAD or recorded test footage. Copy describes the work as a proof of concept, and does not claim deployment or performance results. The presentation makes no live ROS connection.

## Validation

`npm run build` and targeted ESLint checks. Browser checks cover desktop and 390 px mobile views, all chapters, reverse navigation, keyboard scrolling, and loading without console errors. DPR is capped at 1.5, the environment uses nine material meshes, and no large textures or physics simulation are required. Device-specific frame rates have not been benchmarked.

## LiDAR reveal and water jet

`WarehouseReveal.tsx` generates fresh LiDAR returns from the warehouse mesh at the detection robot's current pose. A worker casts 92 elevation rings × 768 azimuth beams (384 on mobile), recording the nearest surface hit per beam, up to 32 m away. Floor rings recenter as the sensor moves; obstacles block beams. Small groups of horizontal rings appear immediately from low to high elevation, creating a pitch scan with green → yellow → red height colors. Previous returns remain in a bounded history buffer and fade over 2.4 seconds. The mesh remains hidden and is used only for ray intersections.

`lidar/scanWarehouse.ts` contains the beam pattern, constant point opacity and size, and scan settings. `three-mesh-bvh` accelerates nearest-hit raycasting in the worker. Batches run at up to 30 Hz with one request in flight and a recycled transferable buffer. Rendering appends results to a bounded GPU ring buffer; acquisition timestamps drive the decay entirely in the shader. World-space height changes color; distance does not. This simulates the static warehouse; moving robots, flames, and water do not contribute returns.

Regression checks for ring recentering, heading, occlusion and fresh warehouse samples:

```sh
node node_modules/esbuild/bin/esbuild scripts/test_lidar_scan.ts --bundle --platform=node --format=esm --outfile=/tmp/portfolio-lidar-test.mjs
node /tmp/portfolio-lidar-test.mjs
```

`WaterJet.tsx` renders a widening 3D stream, 720 traveling droplets, and 240 impact droplets. The nozzle and inlet coordinates in `payload.json` are exported by `refine_cannon.py`, keeping the water and supply hose attached to the reference-inspired cannon. The jet follows the nozzle direction before bending toward the fire. Motion stops under reduced-motion preferences.
