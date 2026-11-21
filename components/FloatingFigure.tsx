"use client"

import { useEffect, useRef } from "react"

/**
 * Wraps a project figure and makes it float.
 *
 * - Floating only runs while the figure is on screen (IntersectionObserver), so at most two or three
 *   figures animate at once and off-screen ones cost nothing.
 * - On devices with a mouse the figure also tilts toward the pointer and a soft highlight follows it.
 * - Every animated property is `transform`, `translate`, `rotate` or `opacity`, so it runs on the
 *   compositor and never causes layout shift.
 * - Without JavaScript, or with prefers-reduced-motion, the figure simply stays still.
 *
 * Per-figure variation is written with the CSSOM (element.style.setProperty), which a strict
 * Content-Security-Policy without 'unsafe-inline' for styles still allows.
 */
export default function FloatingFigure({ children, index = 0 }: { children: React.ReactNode; index?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)")

    // Deterministic, slightly different rhythm per figure so neighbours never move in sync.
    const golden = (index * 0.618) % 1
    el.style.setProperty("--float-dur", `${(7 + golden * 3.4).toFixed(2)}s`)
    el.style.setProperty("--float-delay", `${(-golden * 9).toFixed(2)}s`)
    el.style.setProperty("--float-rise", `${(5 + golden * 4).toFixed(1)}px`)
    el.style.setProperty("--float-drift", `${(index % 2 === 0 ? 1 : -1) * (1.5 + golden * 2.5)}px`)
    el.style.setProperty("--float-sway", `${(index % 2 === 0 ? 1 : -1) * (0.25 + golden * 0.25)}deg`)

    let observer: IntersectionObserver | undefined
    const syncMotion = () => {
      observer?.disconnect()
      if (reduce.matches) {
        delete el.dataset.active
        return
      }
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) el.dataset.active = "true"
          else delete el.dataset.active
        },
        { rootMargin: "80px 0px" },
      )
      observer.observe(el)
    }
    syncMotion()
    reduce.addEventListener("change", syncMotion)

    // ---- pointer tilt (mouse and trackpad only) ----
    let frame = 0
    let nx = 0
    let ny = 0
    const paint = () => {
      frame = 0
      el.style.setProperty("--ry", `${(nx * 5).toFixed(2)}deg`)
      el.style.setProperty("--rx", `${(-ny * 4).toFixed(2)}deg`)
      el.style.setProperty("--gx", `${((nx + 1) * 50).toFixed(1)}%`)
      el.style.setProperty("--gy", `${((ny + 1) * 50).toFixed(1)}%`)
    }
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || reduce.matches || !finePointer.matches) return
      const rect = el.getBoundingClientRect()
      nx = Math.max(-1, Math.min(1, ((event.clientX - rect.left) / rect.width) * 2 - 1))
      ny = Math.max(-1, Math.min(1, ((event.clientY - rect.top) / rect.height) * 2 - 1))
      el.dataset.hover = "true"
      if (!frame) frame = requestAnimationFrame(paint)
    }
    const onLeave = () => {
      delete el.dataset.hover
      nx = 0
      ny = 0
      if (!frame) frame = requestAnimationFrame(paint)
    }
    el.addEventListener("pointermove", onMove)
    el.addEventListener("pointerleave", onLeave)

    return () => {
      observer?.disconnect()
      reduce.removeEventListener("change", syncMotion)
      el.removeEventListener("pointermove", onMove)
      el.removeEventListener("pointerleave", onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [index])

  return (
    <div className="float" ref={ref}>
      {children}
    </div>
  )
}
