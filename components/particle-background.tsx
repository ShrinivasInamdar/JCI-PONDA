"use client"

import { useCallback } from "react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"
import { useTheme } from "next-themes"
import type { Engine } from "tsparticles-engine"

export function ParticleBackground() {
  const { theme } = useTheme()

  // Initialize particles
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: theme === "dark" ? "#4a88eb" : "#1e40af",
            },
            links: {
              color: theme === "dark" ? "#4a88eb" : "#1e40af",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  )
}

