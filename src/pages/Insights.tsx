import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Insights() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const insights = [
    { tag: "Regulatory Update", title: "SEBI's New BRSR Core Guidelines Explained", date: "March 15, 2026", img: "https://picsum.photos/seed/sebi/600/400" },
    { tag: "Whitepaper", title: "Navigating Scope 3 Emissions in Indian Manufacturing", date: "March 02, 2026", img: "https://picsum.photos/seed/factoryemissions/600/400" },
    { tag: "Blog Post", title: "The ROI of ESG: Why Indian SMEs Can't Afford to Wait", date: "February 28, 2026", img: "https://picsum.photos/seed/smebusiness/600/400" },
    { tag: "Guide", title: "Carbon Accounting 101 for Financial Institutions", date: "February 15, 2026", img: "https://picsum.photos/seed/financeguide/600/400" },
    { tag: "Webinar", title: "Preparing for the EU Carbon Border Adjustment Mechanism", date: "February 01, 2026", img: "https://picsum.photos/seed/webinar/600/400" },
    { tag: "Report", title: "State of ESG in India 2026", date: "January 15, 2026", img: "https://picsum.photos/seed/report2026/600/400" }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Insights & Resources
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Thought leadership, regulatory updates, and actionable guides from our ESG experts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((post, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="group cursor-pointer flex flex-col">
                <div className="aspect-[3/2] overflow-hidden mb-6">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">{post.tag} &bull; {post.date}</div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors">{post.title}</h3>
                <div className="mt-auto inline-flex items-center text-sm font-bold text-emerald-700">
                  Read more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
