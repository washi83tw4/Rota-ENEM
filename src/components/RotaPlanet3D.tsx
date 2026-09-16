import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RotaPlanet3DProps {
  className?: string;
}

export const RotaPlanet3D: React.FC<RotaPlanet3DProps> = ({
  className = 'w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64',
}) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 240;
    let height = container.clientHeight || 240;

    // Scene
    const scene = new THREE.Scene();

    // Camera with plenty of FOV / distance buffer so rings never clip
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 7.8);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Main Group to handle levitation and tilt
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    // 1. Central Core Sphere (Deep Navy/Royal Blue with warm metallic sheen)
    const sphereGeo = new THREE.SphereGeometry(1.25, 48, 48);
    const sphereMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x06184a),
      roughness: 0.28,
      metalness: 0.45,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    planetGroup.add(sphere);

    // Subtle inner atmosphere glow mesh
    const glowGeo = new THREE.SphereGeometry(1.28, 32, 32);
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(0x2563eb),
      transparent: true,
      opacity: 0.2,
      wireframe: false,
    });
    const glowMesh = new THREE.Mesh(glowGeo, glowMat);
    planetGroup.add(glowMesh);

    // 2. Primary Golden Orbital Ring
    const goldRingGeo = new THREE.TorusGeometry(2.05, 0.045, 20, 100);
    const goldRingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xfea619),
      roughness: 0.18,
      metalness: 0.85,
      emissive: new THREE.Color(0x855300),
      emissiveIntensity: 0.35,
    });
    const goldRingGroup = new THREE.Group();
    goldRingGroup.rotation.x = Math.PI / 3.2; // tilted
    goldRingGroup.rotation.y = Math.PI / 7;
    const goldRing = new THREE.Mesh(goldRingGeo, goldRingMat);
    goldRingGroup.add(goldRing);

    // Small golden bead on gold ring
    const goldBeadGeo = new THREE.SphereGeometry(0.12, 24, 24);
    const goldBeadMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xffd54f),
      metalness: 0.9,
      roughness: 0.1,
      emissive: new THREE.Color(0xfea619),
      emissiveIntensity: 0.6,
    });
    const goldBead = new THREE.Mesh(goldBeadGeo, goldBeadMat);
    goldBead.position.set(2.05, 0, 0);
    goldRingGroup.add(goldBead);

    planetGroup.add(goldRingGroup);

    // 3. Secondary Electric Blue / Cyan Ring (opposing tilt)
    const blueRingGeo = new THREE.TorusGeometry(2.32, 0.035, 18, 100);
    const blueRingMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x38bdf8),
      roughness: 0.2,
      metalness: 0.7,
      emissive: new THREE.Color(0x0284c7),
      emissiveIntensity: 0.4,
    });
    const blueRingGroup = new THREE.Group();
    blueRingGroup.rotation.x = -Math.PI / 4;
    blueRingGroup.rotation.y = -Math.PI / 5;
    const blueRing = new THREE.Mesh(blueRingGeo, blueRingMat);
    blueRingGroup.add(blueRing);

    // Small cyan bead on blue ring
    const cyanBeadGeo = new THREE.SphereGeometry(0.09, 20, 20);
    const cyanBeadMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x7dd3fc),
      metalness: 0.8,
      roughness: 0.15,
      emissive: new THREE.Color(0x38bdf8),
      emissiveIntensity: 0.5,
    });
    const cyanBead = new THREE.Mesh(cyanBeadGeo, cyanBeadMat);
    cyanBead.position.set(2.32, 0, 0);
    blueRingGroup.add(cyanBead);

    planetGroup.add(blueRingGroup);

    // 4. Subtle Sparkling Star Dust / Micro Particles in orbit
    const particleCount = 28;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const radius = 1.7 + Math.random() * 0.9;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.9;
      particlePositions[i * 3] = radius * Math.cos(theta);
      particlePositions[i * 3 + 1] = radius * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.sin(theta);
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffe082,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    planetGroup.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xfff7ed, 2.8);
    keyLight.position.set(5, 6, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 2.2);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    const fillGoldLight = new THREE.PointLight(0xfea619, 1.6, 12);
    fillGoldLight.position.set(3, -2, 4);
    scene.add(fillGoldLight);

    // Interactive mouse tracking
    let targetRotY = 0;
    let targetRotX = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const nx = (e.clientX - (rect.left + rect.width / 2)) / (window.innerWidth / 2);
      const ny = (e.clientY - (rect.top + rect.height / 2)) / (window.innerHeight / 2);
      targetRotY = nx * 0.4;
      targetRotX = ny * 0.25;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth spin of planetary rings
      goldRingGroup.rotation.z = elapsed * 0.55;
      blueRingGroup.rotation.z = -elapsed * 0.42;

      // Slow axial rotation of core planet & particles
      sphere.rotation.y = elapsed * 0.25;
      particles.rotation.y = elapsed * 0.18;

      // Gentle vertical levitation oscillation
      planetGroup.position.y = Math.sin(elapsed * 1.6) * 0.09;

      // Smooth damping toward mouse tilt
      planetGroup.rotation.y += (targetRotY - planetGroup.rotation.y) * 0.05;
      planetGroup.rotation.x += (targetRotX - planetGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling via ResizeObserver
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width;
        const newHeight = entry.contentRect.height;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
      glowGeo.dispose();
      glowMat.dispose();
      goldRingGeo.dispose();
      goldRingMat.dispose();
      goldBeadGeo.dispose();
      goldBeadMat.dispose();
      blueRingGeo.dispose();
      blueRingMat.dispose();
      cyanBeadGeo.dispose();
      cyanBeadMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative flex items-center justify-center select-none pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
};
