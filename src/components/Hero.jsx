import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-28">
          <div className="text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900"
            >
              Elevate Your Game
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-4 text-gray-700 text-lg max-w-xl"
            >
              Premium football kits, boots, and gear. Explore a futuristic, interactive experience while you shop.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a href="#products" className="inline-flex items-center justify-center rounded-md bg-blue-600 text-white px-6 py-3 font-semibold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors">
                Shop New Arrivals
              </a>
              <a href="#kits" className="inline-flex items-center justify-center rounded-md bg-white/70 backdrop-blur px-6 py-3 font-semibold border border-black/10 hover:bg-white transition-colors">
                Browse Kits
              </a>
            </motion.div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-t from-blue-100/70 via-purple-100/30 to-transparent rounded-[50%] blur-3xl" />
    </section>
  )
}
