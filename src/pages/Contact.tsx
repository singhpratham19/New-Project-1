import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Get in touch
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Partner with ESGastraa to navigate your sustainability journey. Reach out to our experts for a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div {...fadeIn}>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Work Email</label>
                  <input type="email" className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Company</label>
                  <input type="text" className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">How can we help?</label>
                  <textarea rows={4} className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700"></textarea>
                </div>
                <button type="button" className="bg-emerald-900 text-white px-8 py-4 font-bold hover:bg-emerald-800 transition-colors">
                  Submit Inquiry
                </button>
              </form>
            </motion.div>

            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-slate-50 p-12 border border-slate-200">
              <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8">Our Offices</h2>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Mumbai (Headquarters)</h4>
                  <div className="space-y-3 text-slate-600">
                    <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-emerald-700 shrink-0" /> ESGastraa Tower, BKC, Mumbai, Maharashtra 400051</p>
                    <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-700 shrink-0" /> +91 22 4000 5000</p>
                    <p className="flex items-center gap-3"><Mail className="w-5 h-5 text-emerald-700 shrink-0" /> contact@esgastraa.com</p>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Delhi NCR</h4>
                  <div className="space-y-3 text-slate-600">
                    <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-emerald-700 shrink-0" /> Cyber Hub, DLF Phase 2, Gurugram, Haryana 122002</p>
                    <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-700 shrink-0" /> +91 124 4000 500</p>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h4 className="text-xl font-bold text-slate-900 mb-4">Bengaluru</h4>
                  <div className="space-y-3 text-slate-600">
                    <p className="flex items-start gap-3"><MapPin className="w-5 h-5 text-emerald-700 shrink-0" /> UB City, Vittal Mallya Road, Bengaluru, Karnataka 560001</p>
                    <p className="flex items-center gap-3"><Phone className="w-5 h-5 text-emerald-700 shrink-0" /> +91 80 4000 5000</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
