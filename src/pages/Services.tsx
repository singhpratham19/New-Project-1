import { motion } from 'motion/react';
import { FileText, Wind, ShieldCheck, Users, Leaf, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "BRSR & ESG Reporting",
      desc: "End-to-end preparation of sustainability reports aligned with SEBI's BRSR Core, GRI, SASB, and TCFD frameworks. We ensure data integrity and audit-readiness."
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Net Zero Strategy",
      desc: "Science-based target setting (SBTi) and actionable decarbonization roadmaps. We help you transition operations while maintaining profitability."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "ESG Due Diligence",
      desc: "Pre-investment risk assessments and post-deal value creation strategies for Private Equity and Venture Capital firms operating in India."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "CSR Advisory",
      desc: "Strategic CSR fund allocation, impact assessment, and compliance with the Companies Act, 2013. Maximizing social ROI."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Carbon Accounting",
      desc: "Precise measurement, monitoring, and verification of Scope 1, 2, and 3 GHG emissions across your entire enterprise and value chain."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainable Supply Chain",
      desc: "Vendor ESG audits, capacity building, and sustainable procurement policy development to mitigate upstream risks."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              Capabilities
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              We bring deep industry expertise and rigorous analytical capabilities to help organizations navigate the complex ESG landscape.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {services.map((service, i) => (
              <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.1 }} className="group">
                <div className="text-emerald-800 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                <Link to="/contact" className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-900">
                  Discuss this capability <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
