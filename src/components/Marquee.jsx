import { useRef, useEffect } from 'react'

export default function Marquee({ items = [] }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let frame
    let x = 0
    const speed = 0.5
    const animate = () => {
      x -= speed
      if (x <= -el.scrollWidth / 2) x = 0
      el.style.transform = `translateX(${x}px)`
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  const loop = [...items, ...items]

  return (
    <div className="overflow-hidden w-full py-4 bg-gradient-to-r from-blue-50 via-white to-purple-50 border-y border-black/5">
      <div className="flex gap-10 whitespace-nowrap will-change-transform" ref={ref}>
        {loop.map((item, i) => (
          <span key={i} className="text-sm text-gray-700 font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
