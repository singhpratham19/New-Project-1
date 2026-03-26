import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Database, FileText, Globe, Layers, Lock, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Tools() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    viewport: { once: true }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Hero Section - SaaS Split Layout */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Copy */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest mb-6 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                ESGastraa Software Platform
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                Enterprise-grade <span className="text-emerald-700">ESG data</span> management.
              </h1>
              <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
                Automate data collection, calculate your carbon footprint, and generate audit-ready BRSR and global sustainability reports in one unified platform.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link to="/contact" className="w-full sm:w-auto bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-900/20">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="w-full sm:w-auto bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                  Explore Features
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm font-medium text-slate-500">
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> BRSR Aligned</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Audit-Ready</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> ISO 27001</div>
              </div>
            </motion.div>

            {/* Right: Dashboard Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 30, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative perspective-1000"
            >
              {/* Decorative background blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-full blur-3xl -z-10 opacity-70"></div>
              
              <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transform transition-transform hover:scale-[1.02] duration-500">
                {/* Window Controls */}
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                  <div className="ml-4 text-xs font-mono text-slate-400">esgastraa.app / dashboard</div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-end mb-8">
                    <div>
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Emissions (tCO₂e)</div>
                      <div className="text-4xl font-mono font-bold text-slate-900 tracking-tight">24,592.4</div>
                    </div>
                    <div className="text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full flex items-center gap-1">
                      <ArrowRight className="w-3 h-3 rotate-45" /> -12.4% YoY
                    </div>
                  </div>
                  
                  {/* Chart */}
                  <div className="h-40 flex items-end gap-3 mb-8">
                    {[40, 60, 45, 80, 55, 90, 75, 65, 85, 70, 95, 80].map((h, i) => (
                      <div key={i} className="w-full bg-slate-100 rounded-t-md relative group h-full flex items-end">
                        <div 
                          className="w-full bg-emerald-500 rounded-t-md transition-all duration-1000 ease-out group-hover:bg-emerald-600" 
                          style={{ height: `${h}%` }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Scopes */}
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400"></div> Scope 1
                      </div>
                      <div className="font-mono font-bold text-lg text-slate-900">4,200</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500"></div> Scope 2
                      </div>
                      <div className="font-mono font-bold text-lg text-slate-900">8,150</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-700"></div> Scope 3
                      </div>
                      <div className="font-mono font-bold text-lg text-slate-900">12,242</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Element */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">BRSR Ready</div>
                  <div className="text-xs text-slate-500">100% Data Coverage</div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Grid - Bento Box Style */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Everything you need to manage ESG data</h2>
            <p className="text-lg text-slate-600 font-light">Replace spreadsheets with a single source of truth. Our platform streamlines data collection, calculation, and reporting.</p>
          </div>

          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: <Database className="w-6 h-6" />,
                title: "Automated Data Collection",
                desc: "Integrate with ERPs, HRMS, and utility providers via APIs to automatically pull consumption data, eliminating manual entry errors."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Carbon Accounting Engine",
                desc: "Calculate Scope 1, 2, and 3 emissions using built-in, regularly updated emission factor databases (DEFRA, EPA, IPCC)."
              },
              {
                icon: <FileText className="w-6 h-6" />,
                title: "One-Click BRSR Reporting",
                desc: "Map your data directly to SEBI's BRSR Core format. Generate XBRL-ready reports with a single click."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Supply Chain ESG",
                desc: "Send automated assessments to suppliers, track their emissions, and calculate your Scope 3 Category 1 footprint accurately."
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "Audit-Ready Trail",
                desc: "Maintain a complete, immutable log of data sources, calculation methodologies, and approvals for assurance providers."
              },
              {
                icon: <Layers className="w-6 h-6" />,
                title: "Multi-Framework Alignment",
                desc: "Report the same data across multiple frameworks including GRI, SASB, TCFD, and CDP without duplicating effort."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                variants={fadeIn}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works - Step Process */}
      <section className="py-24 bg-slate-950 text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">How the platform works</h2>
            <p className="text-lg text-slate-400 font-light">A streamlined workflow from raw data to assured reporting.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-slate-800 z-0"></div>

            {[
              { step: "01", title: "Collect", desc: "Connect systems or upload bulk data via intelligent templates." },
              { step: "02", title: "Calculate", desc: "Engine applies correct emission factors and conversion logic." },
              { step: "03", title: "Analyze", desc: "Visualize performance against targets in real-time dashboards." },
              { step: "04", title: "Report", desc: "Export audit-ready reports mapped to global frameworks." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center text-2xl font-mono font-bold text-emerald-400 mb-6 shadow-xl">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-700 text-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Ready to streamline your ESG reporting?</h2>
            <p className="text-xl text-emerald-100 mb-10 font-light">
              Join leading enterprises using ESGastraa to turn compliance into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-colors text-lg shadow-xl">
                Book a Platform Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
