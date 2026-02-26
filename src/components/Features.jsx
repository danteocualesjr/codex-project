import { motion } from 'framer-motion'
import { Search, FolderTree, Zap, Share2, Shield, Code2 } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Instant Search',
    description: 'Find any snippet, note, or document in milliseconds. Full-text search with fuzzy matching and smart filters.',
    color: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: FolderTree,
    title: 'Smart Collections',
    description: 'Auto-organize your knowledge with AI-powered tagging and nested collections that adapt to your workflow.',
    color: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Code2,
    title: 'Code-First Editor',
    description: 'A beautiful editor built for developers. Syntax highlighting for 100+ languages with live preview.',
    color: 'from-emerald-500 to-teal-400',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Share2,
    title: 'Team Sharing',
    description: 'Share knowledge across your team with granular permissions. Real-time collaboration built in.',
    color: 'from-amber-500 to-orange-400',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Shield,
    title: 'End-to-End Encryption',
    description: 'Your knowledge stays private. Enterprise-grade encryption ensures only you and your team have access.',
    color: 'from-rose-500 to-pink-400',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Zap,
    title: 'API & Integrations',
    description: 'Connect Codex to your existing tools. REST API, webhooks, and native integrations with VS Code, Slack, and more.',
    color: 'from-primary-500 to-indigo-400',
    bg: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
            Features
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-surface-900">
            Everything you need to{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              build faster
            </span>
          </h2>
          <p className="mt-5 text-lg text-surface-700/70 leading-relaxed">
            Powerful tools designed for developers who want to spend less time
            searching and more time shipping.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="group relative rounded-2xl bg-white p-8 ring-1 ring-surface-200/60 transition-all duration-300 hover:shadow-xl hover:shadow-surface-900/5 hover:ring-surface-200 hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center h-12 w-12 rounded-xl ${feature.bg} ${feature.iconColor} mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <feature.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold text-surface-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-surface-700/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
