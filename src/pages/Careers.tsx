import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Careers() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const roles = [
    { title: "Senior ESG Consultant", location: "Mumbai / Hybrid", type: "Full-time" },
    { title: "Climate Risk Analyst", location: "Bengaluru / Hybrid", type: "Full-time" },
    { title: "Sustainability Reporting Associate", location: "Delhi NCR", type: "Full-time" },
    { title: "ESG Data Engineer", location: "Remote (India)", type: "Full-time" }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Careers at ESGastraa
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Shape the future of sustainable business. We are looking for driven individuals who want to make a measurable impact.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <motion.div {...fadeIn} className="aspect-[4/3] bg-slate-100">
              <img src="https://picsum.photos/seed/culture/800/600" alt="Our Culture" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
            <motion.div {...fadeIn} className="flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Culture</h2>
              <p className="text-lg text-slate-600 mb-6">
                At ESGastraa, we foster a culture of continuous learning, rigorous analysis, and collaborative problem-solving. Our consultants work alongside industry leaders to tackle some of the most pressing environmental and social challenges of our time.
              </p>
              <ul className="space-y-4 text-slate-700 font-medium">
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-emerald-700 rounded-full"></div> Impact-driven projects</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-emerald-700 rounded-full"></div> Accelerated career growth</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-emerald-700 rounded-full"></div> Comprehensive wellness benefits</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 bg-emerald-700 rounded-full"></div> Flexible and hybrid work models</li>
              </ul>
            </motion.div>
          </div>

          <motion.div {...fadeIn}>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Open Roles</h2>
            <div className="border-t border-slate-200">
              {roles.map((role, i) => (
                <div key={i} className="py-8 border-b border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:bg-slate-50 transition-colors px-4 -mx-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">{role.title}</h3>
                    <p className="text-slate-600 font-medium">{role.location} &bull; {role.type}</p>
                  </div>
                  <button className="inline-flex items-center gap-2 bg-emerald-900 text-white px-6 py-3 font-bold hover:bg-emerald-800 transition-colors shrink-0">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
