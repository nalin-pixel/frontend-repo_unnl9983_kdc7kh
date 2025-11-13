import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ParallaxShowcase from './components/ParallaxShowcase'
import Marquee from './components/Marquee'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Marquee items={["UEFA Champions League", "Premier League", "La Liga", "Serie A", "Bundesliga", "World Cup"]} />
        <ParallaxShowcase />
        <section id="cta" className="relative py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl p-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden relative">
              <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(ellipse at 20% 10%, rgba(255,255,255,.6), transparent 35%), radial-gradient(ellipse at 80% 120%, rgba(255,255,255,.4), transparent 40%)' }} />
              <div className="relative">
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Join the BallHQ Club</h3>
                <p className="mt-2 text-white/90 max-w-2xl">Get early access to drops, exclusive discounts, and behind-the-scenes content.</p>
                <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl">
                  <input type="email" placeholder="Email address" className="flex-1 rounded-md px-4 py-3 text-gray-900 placeholder:text-gray-500" />
                  <button className="rounded-md bg-white text-blue-600 font-semibold px-6 py-3 hover:bg-blue-50 transition-colors">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-12 border-t border-black/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} BallHQ. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Contact</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
