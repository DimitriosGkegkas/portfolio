import * as THREE from "three";
import { ROBOTICS_STEPS } from "./constants";

export function smoothstep(edge0: number, edge1: number, value: number) {
  const x = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
  return x * x * (3 - 2 * x);
}

export function tuneMaterial(material: THREE.Material) {
  if (material instanceof THREE.MeshPhongMaterial || material instanceof THREE.MeshLambertMaterial || material instanceof THREE.MeshBasicMaterial) {
    const upgradedMaterial = new THREE.MeshStandardMaterial({
      color: material.color?.clone() ?? new THREE.Color("#d0d3d6"),
      map: "map" in material ? material.map ?? null : null,
      transparent: material.transparent,
      opacity: material.opacity,
      side: material.side,
    });

    if ("emissive" in material && material.emissive) {
      upgradedMaterial.emissive.copy(material.emissive);
    }

    material = upgradedMaterial;
  }

  if (!(material instanceof THREE.MeshStandardMaterial)) {
    return material.clone();
  }

  const tunedMaterial = material.clone();
  tunedMaterial.roughness = Math.max(tunedMaterial.roughness ?? 0, 0.55);
  tunedMaterial.metalness = Math.min(tunedMaterial.metalness ?? 0, 0.35);
  tunedMaterial.emissive = new THREE.Color(0x000000);
  tunedMaterial.emissiveIntensity = 0;
  tunedMaterial.envMapIntensity = 0.6;

  const hsl = { h: 0, s: 0, l: 0 };
  tunedMaterial.color.getHSL(hsl);
  if (hsl.l > 0.85) {
    tunedMaterial.color.setHSL(hsl.h, hsl.s, 0.72);
  }

  return tunedMaterial;
}

export function sectionOpacity(progress: number, index: number) {
  const step = ROBOTICS_STEPS[index];

  if (!step) {
    return 0;
  }

  const center = step.progress.center;
  const bandwidth = 1 / ROBOTICS_STEPS.length;
  const distance = Math.abs(progress - center);
  const fadeZone = bandwidth * 0.42;

  if (distance > fadeZone) {
    return 0;
  }

  return Math.max(0, 1 - distance / fadeZone) ** 1.5;
}

export function getNearestSection(progress: number) {
  const lastCenter = ROBOTICS_STEPS[ROBOTICS_STEPS.length - 1]?.progress.center ?? 1;
  return Math.round(Math.min(progress, lastCenter) / lastCenter * (ROBOTICS_STEPS.length - 1));
}
