import { motion, useScroll, useTransform } from 'framer-motion'
import { Star, Shirt, Football, Trophy } from 'lucide-react'

export default function ParallaxShowcase() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -450])

  return (
    <section className="relative py-28 overflow-hidden bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div style={{ y: y1 }} className="absolute -top-10 -left-10 w-60 h-60 rounded-full bg-gradient-to-tr from-blue-100 to-purple-100 blur-3xl" />
        <motion.div style={{ y: y2 }} className="absolute top-1/2 -right-10 w-72 h-72 rounded-full bg-gradient-to-tr from-purple-100 to-pink-100 blur-3xl" />
        <motion.div style={{ y: y3 }} className="absolute -bottom-10 left-1/3 w-64 h-64 rounded-full bg-gradient-to-tr from-blue-100 to-cyan-100 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Featured Categories</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Curated selection of premium football gear, brought to life with subtle parallax motion.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shirt, title: 'Club & National Kits', desc: 'Authentic jerseys from top teams worldwide.' },
            { icon: Football, title: 'Match Balls', desc: 'FIFA-approved balls for training and match day.' },
            { icon: Trophy, title: 'Boots', desc: 'Elite traction and control for every surface.' },
            { icon: Star, title: 'Accessories', desc: 'Socks, gloves, shin guards, and more.' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="relative rounded-2xl border border-black/5 p-6 bg-white/70 backdrop-blur hover:shadow-xl hover:shadow-blue-600/5 transition-all"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 text-white flex items-center justify-center">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              <a href="#" className="inline-block mt-4 text-sm font-semibold text-blue-600 hover:text-blue-700">Shop now →</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
