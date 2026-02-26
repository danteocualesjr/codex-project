import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individual developers getting started.',
    features: [
      'Up to 500 snippets',
      'Full-text search',
      'Markdown editor',
      'Browser extension',
      'Community support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$12',
    period: '/month',
    description: 'For power users who want unlimited knowledge capture.',
    features: [
      'Unlimited snippets',
      'AI-powered organization',
      'Semantic search',
      'API access',
      'VS Code integration',
      'Priority support',
      'Custom domains',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Team',
    price: '$29',
    period: '/user/month',
    description: 'For teams that want to share knowledge effortlessly.',
    features: [
      'Everything in Pro',
      'Shared collections',
      'Real-time collaboration',
      'Admin dashboard',
      'SSO & SAML',
      'Audit logs',
      'Dedicated support',
      '99.9% SLA',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-28 bg-surface-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
            Pricing
          </span>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-surface-900">
            Simple, transparent{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
              pricing
            </span>
          </h2>
          <p className="mt-5 text-lg text-surface-700/70 leading-relaxed">
            Start free, upgrade when you need to. No hidden fees, ever.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-white ring-2 ring-primary-500 shadow-xl shadow-primary-500/10 scale-[1.02] md:scale-105'
                  : 'bg-white ring-1 ring-surface-200/60 hover:shadow-lg hover:shadow-surface-900/5'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full shadow-lg shadow-primary-500/30">
                    <Sparkles className="h-3 w-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-surface-900">{plan.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold text-surface-900">{plan.price}</span>
                  <span className="text-sm text-surface-700/50">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm text-surface-700/60">{plan.description}</p>
              </div>

              <a
                href="#"
                className={`block w-full py-3 px-6 text-center text-sm font-semibold rounded-xl transition-all duration-200 ${
                  plan.popular
                    ? 'text-white bg-gradient-to-r from-primary-600 to-primary-500 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5'
                    : 'text-surface-700 bg-surface-50 ring-1 ring-surface-200 hover:bg-surface-100 hover:ring-surface-300'
                }`}
              >
                {plan.cta}
              </a>

              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${plan.popular ? 'bg-primary-100 text-primary-600' : 'bg-surface-100 text-surface-700'}`}>
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-surface-700/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
