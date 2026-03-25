import { motion } from 'motion/react';
import { Calculator, ShieldCheck, LineChart, ArrowRight } from 'lucide-react';

export default function Tools() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-white">
      <section className="bg-emerald-950 text-white py-24 border-b border-emerald-900">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/50 border border-emerald-700 text-emerald-100 text-xs font-bold uppercase tracking-widest mb-6">
              AstraESG Digital
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
              ESG Digital Tools
            </h1>
            <p className="text-xl text-emerald-100/80 leading-relaxed">
              Leverage our suite of free digital calculators and readiness checkers to benchmark your current ESG standing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Calculator className="w-8 h-8" />,
                title: "Carbon Footprint Estimator",
                desc: "Get a quick estimate of your Scope 1 and 2 emissions based on industry averages and facility size."
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "BRSR Readiness Checker",
                desc: "A 20-point diagnostic to assess your preparedness for SEBI's BRSR Core reporting mandate."
              },
              {
                icon: <LineChart className="w-8 h-8" />,
                title: "CSR Budget Calculator",
                desc: "Calculate your mandatory CSR spend under the Companies Act and explore high-impact allocation models."
              }
            ].map((tool, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="border border-slate-200 p-8 hover:border-emerald-700 hover:shadow-xl transition-all cursor-pointer group">
                <div className="text-emerald-800 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {tool.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{tool.title}</h3>
                <p className="text-slate-600 mb-8">{tool.desc}</p>
                <div className="inline-flex items-center text-sm font-bold text-emerald-700">
                  Launch Tool <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
