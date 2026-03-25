import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              About AstraESG
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We are a collective of environmental scientists, financial analysts, and strategic thinkers dedicated to guiding India's corporate landscape toward a sustainable, net-zero future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                To empower businesses to achieve sustainable growth, regulatory compliance, and long-term value creation through data-driven ESG strategies. We believe that profitability and sustainability are not mutually exclusive, but deeply intertwined.
              </p>
              <p className="text-lg text-slate-600">
                Since our founding, we have partnered with over 150 enterprises, helping them navigate complex regulatory environments like SEBI's BRSR Core, while uncovering operational efficiencies that drive bottom-line results.
              </p>
            </motion.div>
            <motion.div {...fadeIn} className="aspect-video bg-slate-100">
              <img src="https://picsum.photos/seed/mission/800/600" alt="Our Mission" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Ananya Sharma", role: "Managing Partner", img: "https://picsum.photos/seed/person1/400/500" },
              { name: "Vikram Mehta", role: "Head of Climate Strategy", img: "https://picsum.photos/seed/person2/400/500" },
              { name: "Priya Patel", role: "Director, ESG Reporting", img: "https://picsum.photos/seed/person3/400/500" }
            ].map((leader, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="group">
                <div className="aspect-[4/5] overflow-hidden mb-4">
                  <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                <p className="text-emerald-700 font-medium">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-emerald-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-6">Join our mission</h2>
          <p className="text-xl text-emerald-100/80 mb-10">We are always looking for passionate individuals to join our team.</p>
          <Link to="/careers" className="inline-flex items-center gap-2 bg-white text-emerald-950 px-8 py-4 font-bold hover:bg-slate-100 transition-colors">
            View Open Roles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
