import { motion } from 'framer-motion'
import { PenLine, Brain, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: PenLine,
    title: 'Capture Anything',
    description: 'Jot down code snippets, notes, links, or full documents. Our editor supports Markdown, code blocks, and rich media.',
    visual: (
      <div className="rounded-xl bg-surface-900 p-4 ring-1 ring-white/10 font-mono text-sm">
        <div className="flex items-center gap-2 mb-3">
          <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="text-surface-200/40 text-xs">quick-note.md</span>
        </div>
        <div className="space-y-1 text-surface-200/60">
          <p><span className="text-primary-400"># </span><span className="text-white/90">React Server Components</span></p>
          <p className="text-surface-200/30 text-xs">---</p>
          <p className="text-xs">Key insight: RSCs run <span className="text-amber-300/80">only on the server</span>,</p>
          <p className="text-xs">reducing bundle size significantly...</p>
        </div>
      </div>
    ),
  },
  {
    number: '02',
    icon: Brain,
    title: 'Auto-Organize',
    description: 'AI suggests tags, links related notes, and builds a knowledge graph so connections surface naturally.',
    visual: (
      <div className="rounded-xl bg-surface-900 p-4 ring-1 ring-white/10">
        <div className="flex flex-wrap gap-2 mb-3">
          {['React', 'TypeScript', 'Performance', 'Server'].map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-primary-500/15 text-primary-300 ring-1 ring-primary-500/20">
              {tag}
            </span>
          ))}
        </div>
        <div className="space-y-2">
          {['Linked: RSC vs SSR comparison', 'Linked: Bundle optimization tips', 'Suggested: Next.js App Router'].map((item, i) => (
            <div key={item} className="flex items-center gap-2 text-xs text-surface-200/50">
              <div className={`h-1.5 w-1.5 rounded-full ${i === 2 ? 'bg-amber-400' : 'bg-emerald-400'}`} />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Retrieve Instantly',
    description: 'Type a few characters and find exactly what you need. Semantic search understands your intent, not just keywords.',
    visual: (
      <div className="rounded-xl bg-surface-900 p-4 ring-1 ring-white/10">
        <div className="flex items-center gap-2 bg-surface-800 rounded-lg px-3 py-2.5 ring-1 ring-white/5 mb-3">
          <div className="h-4 w-4 rounded text-surface-200/30">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <span className="text-xs text-surface-200/60">react server comp...</span>
          <span className="ml-auto text-[10px] text-surface-200/20 font-mono">⌘K</span>
        </div>
        <div className="space-y-1.5">
          {[
            { title: 'React Server Components', match: '98%' },
            { title: 'RSC vs SSR Comparison', match: '87%' },
            { title: 'Server-Side Rendering', match: '72%' },
          ].map((result, i) => (
            <div key={result.title} className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs ${i === 0 ? 'bg-primary-500/10 text-primary-300 ring-1 ring-primary-500/20' : 'text-surface-200/50'}`}>
              <span>{result.title}</span>
              <span className={`text-[10px] font-mono ${i === 0 ? 'text-primary-400' : 'text-surface-200/30'}`}>{result.match}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
            How It Works
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-surface-900">
            Three steps to{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              clarity
            </span>
          </h2>
          <p className="mt-5 text-lg text-surface-700/70 leading-relaxed">
            A workflow so simple it becomes second nature.
          </p>
        </motion.div>

        <div className="mt-20 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative"
            >
              <div className="mb-6">
                <span className="text-6xl font-black text-surface-200/50 leading-none">
                  {step.number}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                  <step.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-surface-900">{step.title}</h3>
              </div>
              <p className="text-sm text-surface-700/70 leading-relaxed mb-6">
                {step.description}
              </p>
              {step.visual}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
