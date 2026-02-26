import { motion } from 'framer-motion'

const stats = [
  { value: '50K+', label: 'Developers', sublabel: 'trust Codex daily' },
  { value: '2M+', label: 'Snippets Saved', sublabel: 'and counting' },
  { value: '<50ms', label: 'Search Speed', sublabel: 'average response' },
  { value: '99.9%', label: 'Uptime', sublabel: 'enterprise SLA' },
]

export default function Stats() {
  return (
    <section className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-gradient-to-br from-surface-900 via-surface-900 to-primary-950 p-12 md:p-16 ring-1 ring-white/5"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-semibold text-white/80">
                  {stat.label}
                </div>
                <div className="text-xs text-white/40">
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
