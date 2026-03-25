import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, Building2, Factory, Briefcase, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const AnimatedCounter = ({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="flex flex-col">
      <div className="text-4xl md:text-5xl font-serif font-bold text-emerald-950 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-slate-600">
        {label}
      </div>
    </div>
  );
};

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <>
      {/* Hero Section - Editorial Style */}
      <section className="relative pt-20 lg:pt-20 bg-emerald-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/indiaesg/1920/1080?blur=1" 
            alt="Sustainable business landscape" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-800/50 border border-emerald-700 text-emerald-100 text-xs font-bold uppercase tracking-widest mb-6">
              India's Premier ESG Partner
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] mb-8">
              Accelerating the transition to a sustainable India.
            </h1>
            <p className="text-xl md:text-2xl text-emerald-100/90 mb-10 font-light leading-relaxed max-w-2xl">
              From BRSR compliance to Net Zero strategy, we partner with visionary leaders to turn sustainability into a competitive advantage.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link to="/services" className="bg-white text-emerald-950 px-8 py-4 text-sm font-bold hover:bg-slate-100 transition-all flex items-center gap-2">
                Explore our capabilities <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/contact" className="text-white border-b border-white pb-1 text-sm font-bold hover:text-emerald-200 hover:border-emerald-200 transition-all flex items-center gap-2 mt-2 sm:mt-0">
                Book a Free ESG Assessment <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Credibility Strip */}
      <section className="py-10 border-y border-slate-200 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Aligned with Global & Indian Frameworks</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale">
            <div className="text-xl font-bold font-serif">SEBI (BRSR)</div>
            <div className="text-xl font-bold font-serif">GRI</div>
            <div className="text-xl font-bold font-serif">TCFD</div>
            <div className="text-xl font-bold font-serif">UN SDGs</div>
            <div className="text-xl font-bold font-serif">SASB</div>
          </div>
        </div>
      </section>

      {/* Featured Insights - Magazine Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-6">
            <h2 className="text-4xl font-serif font-bold text-slate-900">Featured Insights</h2>
            <Link to="/insights" className="hidden md:flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-900">
              View all insights <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <motion.div {...fadeIn} className="lg:col-span-7 group cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden mb-6">
                <img 
                  src="https://picsum.photos/seed/sebi/1000/600" 
                  alt="BRSR Core" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">Report &bull; March 2026</div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 group-hover:text-emerald-800 transition-colors leading-tight">
                The CEO's Guide to SEBI's BRSR Core: Moving from Compliance to Value Creation
              </h3>
              <p className="text-lg text-slate-600 mb-6 max-w-2xl">
                As India's top 1000 listed entities navigate the new BRSR Core requirements, leaders must look beyond the checklist to uncover operational efficiencies and supply chain resilience.
              </p>
            </motion.div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              {[
                {
                  tag: "Article",
                  title: "Decarbonizing India's Manufacturing Sector: The Scope 3 Challenge",
                  desc: "How heavy industries are using digital twins and supplier engagement to tackle their largest emissions source."
                },
                {
                  tag: "Whitepaper",
                  title: "The ROI of ESG for Indian SMEs",
                  desc: "Why mid-market companies that adopt sustainable practices are securing better financing and global contracts."
                },
                {
                  tag: "Webinar Replay",
                  title: "Navigating the Carbon Border Adjustment Mechanism (CBAM)",
                  desc: "What Indian exporters to the EU need to know about the upcoming carbon tax and how to prepare."
                }
              ].map((post, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group cursor-pointer border-t border-slate-200 pt-6 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-6"
                >
                  <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">{post.tag}</div>
                  <h4 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-emerald-800 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-slate-600 text-sm line-clamp-2">{post.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Segments Strip */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12 border-b border-slate-200 pb-6">
            <h2 className="text-4xl font-serif font-bold text-slate-900">Industries We Serve</h2>
            <Link to="/industries" className="hidden md:flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-900">
              View all industries <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Building2 className="w-8 h-8" />, title: "Corporates", desc: "Enterprise-grade BRSR & sustainability strategies." },
              { icon: <Factory className="w-8 h-8" />, title: "Manufacturing", desc: "Scope 3 emissions & supply chain decarbonization." },
              { icon: <Briefcase className="w-8 h-8" />, title: "Investors", desc: "ESG due diligence & portfolio risk assessments." },
              { icon: <Store className="w-8 h-8" />, title: "SMEs", desc: "Accessible frameworks to kickstart your ESG journey." }
            ].map((segment, i) => (
              <Link to="/industries" key={i} className="bg-white p-8 border border-slate-200 hover:border-emerald-700 hover:shadow-lg transition-all group cursor-pointer text-left flex flex-col h-full">
                <div className="text-emerald-800 mb-6 group-hover:scale-110 transition-transform origin-left">
                  {segment.icon}
                </div>
                <h4 className="text-xl font-serif font-bold text-slate-900 mb-2">{segment.title}</h4>
                <p className="text-sm text-slate-600 mb-6 flex-1">{segment.desc}</p>
                <span className="text-sm font-bold text-emerald-700 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Client Impact / Case Studies */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Client Impact</h2>
              <p className="text-lg text-slate-600 mb-10">
                We measure our success by the tangible, sustainable results we deliver for our clients across India and the globe.
              </p>
              <div className="space-y-8">
                <AnimatedCounter end={150} suffix="+" label="Enterprise Clients Served" />
                <div className="h-px w-full bg-slate-200"></div>
                <AnimatedCounter end={2.5} suffix="M" label="Tons CO₂ Reduced Annually" />
                <div className="h-px w-full bg-slate-200"></div>
                <AnimatedCounter end={500} suffix="+" label="ESG Reports Filed Successfully" />
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
              {[
                {
                  img: "https://picsum.photos/seed/fmcg/600/400",
                  industry: "FMCG",
                  title: "Achieving Water Neutrality across 12 manufacturing facilities in India.",
                  stat: "45%",
                  statLabel: "Reduction in freshwater usage"
                },
                {
                  img: "https://picsum.photos/seed/finance/600/400",
                  industry: "BFSI",
                  title: "Developing a robust ESG risk assessment framework for a leading private bank.",
                  stat: "$2B+",
                  statLabel: "Portfolio assessed for climate risk"
                }
              ].map((caseStudy, i) => (
                <div key={i} className="bg-white border border-slate-200 group cursor-pointer hover:shadow-xl transition-all flex flex-col h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={caseStudy.img} alt={caseStudy.industry} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-3">{caseStudy.industry}</div>
                    <h4 className="text-xl font-serif font-bold text-slate-900 mb-6">{caseStudy.title}</h4>
                    <div className="mt-auto pt-6 border-t border-slate-100">
                      <div className="text-3xl font-serif font-bold text-emerald-900 mb-1">{caseStudy.stat}</div>
                      <div className="text-sm text-slate-600">{caseStudy.statLabel}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
