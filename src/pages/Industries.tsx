import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Industries() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const industries = [
    { name: "Manufacturing", img: "https://picsum.photos/seed/manufacturing/800/600", desc: "Tackling Scope 3 emissions, resource efficiency, and supply chain decarbonization." },
    { name: "BFSI", img: "https://picsum.photos/seed/bfsi/800/600", desc: "Integrating ESG risk into lending portfolios and investment due diligence." },
    { name: "Pharma & Healthcare", img: "https://picsum.photos/seed/pharma/800/600", desc: "Managing waste, water usage, and ensuring ethical supply chains." },
    { name: "IT & Technology", img: "https://picsum.photos/seed/tech/800/600", desc: "Data center energy efficiency, e-waste management, and diversity initiatives." },
    { name: "Real Estate", img: "https://picsum.photos/seed/realestate/800/600", desc: "Green building certifications, energy modeling, and sustainable materials." },
    { name: "FMCG", img: "https://picsum.photos/seed/fmcg2/800/600", desc: "Sustainable packaging, water neutrality, and responsible sourcing." }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Industries
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Tailored ESG strategies that address the unique regulatory and operational challenges of your sector.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="group border border-slate-200 hover:shadow-xl transition-all cursor-pointer flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img src={industry.img} alt={industry.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{industry.name}</h3>
                  <p className="text-slate-600 mb-6 flex-1">{industry.desc}</p>
                  <Link to="/contact" className="inline-flex items-center text-sm font-bold text-emerald-700">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
