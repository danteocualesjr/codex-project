import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-400/5" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-200/15 rounded-full blur-3xl" />

      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary-700 bg-primary-100 rounded-full ring-1 ring-primary-200/50 mb-8">
              <Sparkles className="h-3.5 w-3.5" />
              Now in Public Beta
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-surface-900 leading-[1.08]"
          >
            Your knowledge,{' '}
            <span className="bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 bg-clip-text text-transparent">
              beautifully organized
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl leading-relaxed text-surface-700/80 max-w-2xl mx-auto"
          >
            Codex is the modern platform that helps developers capture, organize,
            and instantly retrieve everything they know. Stop searching, start building.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#"
              className="group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl shadow-xl shadow-primary-500/25 transition-all hover:shadow-primary-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Start for Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-surface-700 bg-white rounded-2xl shadow-lg shadow-surface-900/5 ring-1 ring-surface-200/60 transition-all hover:shadow-xl hover:ring-surface-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
                <Play className="h-3.5 w-3.5 ml-0.5" fill="currentColor" />
              </div>
              Watch Demo
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 flex items-center justify-center gap-6 text-sm text-surface-700/60"
          >
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              No credit card required
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Free for individuals
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              14-day team trial
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl bg-gradient-to-b from-surface-900 to-surface-950 p-1 shadow-2xl shadow-surface-900/20 ring-1 ring-white/10">
            <div className="rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 bg-surface-800/80 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-400/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <div className="h-3 w-3 rounded-full bg-green-400/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="px-12 py-1 rounded-md bg-surface-700/60 text-xs text-surface-200/40 font-mono">
                    app.codex.dev
                  </div>
                </div>
                <div className="w-12" />
              </div>
              <div className="bg-surface-900 p-6 min-h-[320px]">
                <div className="grid grid-cols-12 gap-4 h-full">
                  <div className="col-span-3 space-y-3">
                    <div className="h-4 w-20 rounded bg-surface-700/40" />
                    <div className="space-y-2 mt-4">
                      {['My Notes', 'React Patterns', 'API Design', 'DevOps', 'Algorithms'].map((item, i) => (
                        <div key={item} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium ${i === 1 ? 'bg-primary-500/15 text-primary-400' : 'text-surface-200/50 hover:bg-surface-800'}`}>
                          <div className={`h-2 w-2 rounded-sm ${i === 1 ? 'bg-primary-400' : 'bg-surface-700'}`} />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-span-9 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="h-5 w-40 rounded bg-surface-700/30" />
                      <div className="flex gap-2">
                        <div className="h-7 w-7 rounded-lg bg-surface-700/30" />
                        <div className="h-7 w-7 rounded-lg bg-surface-700/30" />
                      </div>
                    </div>
                    <div className="rounded-xl bg-surface-800/50 p-4 space-y-3 ring-1 ring-white/5">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-0.5 rounded text-[10px] font-semibold bg-primary-500/20 text-primary-300">React</div>
                        <div className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/20 text-emerald-300">Hooks</div>
                      </div>
                      <div className="h-3 w-3/4 rounded bg-surface-700/30" />
                      <div className="h-3 w-1/2 rounded bg-surface-700/20" />
                      <div className="mt-3 rounded-lg bg-surface-900/80 p-3 font-mono text-xs text-primary-300/70 ring-1 ring-white/5">
                        <span className="text-pink-400/70">const</span>{' '}
                        <span className="text-accent-400/80">[state, setState]</span>{' '}
                        <span className="text-pink-400/70">=</span>{' '}
                        <span className="text-yellow-300/70">useState</span>
                        <span className="text-surface-200/40">(initialValue)</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-surface-800/30 p-3 ring-1 ring-white/5">
                        <div className="h-3 w-20 rounded bg-surface-700/30 mb-2" />
                        <div className="h-2 w-full rounded bg-surface-700/15" />
                        <div className="h-2 w-2/3 rounded bg-surface-700/15 mt-1.5" />
                      </div>
                      <div className="rounded-xl bg-surface-800/30 p-3 ring-1 ring-white/5">
                        <div className="h-3 w-16 rounded bg-surface-700/30 mb-2" />
                        <div className="h-2 w-full rounded bg-surface-700/15" />
                        <div className="h-2 w-3/4 rounded bg-surface-700/15 mt-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -inset-x-20 -bottom-20 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
