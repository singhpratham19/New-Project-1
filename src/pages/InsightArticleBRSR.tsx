import { motion } from 'motion/react';
import { ArrowRight, Share2, Printer, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsightArticleBRSR() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Article Header */}
      <article className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div {...fadeIn}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-bold text-emerald-700 uppercase tracking-widest">
                  Regulatory Update
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-sm font-medium text-slate-500">
                  March 10, 2026
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                SEBI's New BRSR Core Guidelines Explained
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
                As India's top 1000 listed entities navigate the new BRSR Core requirements, leaders must look beyond the checklist to uncover operational efficiencies and supply chain resilience.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-y border-slate-200 mb-12 gap-6">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-900">
                  <span className="text-slate-500">By</span>
                  <a href="#" className="hover:text-emerald-700 underline underline-offset-4 decoration-slate-300">Priya Patel</a>
                  <a href="#" className="hover:text-emerald-700 underline underline-offset-4 decoration-slate-300">Dr. Ananya Sharma</a>
                </div>
                
                <div className="flex items-center gap-4 text-slate-500">
                  <button className="hover:text-emerald-700 transition-colors" aria-label="Share on LinkedIn"><Linkedin className="w-5 h-5" /></button>
                  <button className="hover:text-emerald-700 transition-colors" aria-label="Share on Twitter"><Twitter className="w-5 h-5" /></button>
                  <button className="hover:text-emerald-700 transition-colors" aria-label="Share via Email"><Mail className="w-5 h-5" /></button>
                  <div className="w-px h-4 bg-slate-300 mx-2"></div>
                  <button className="hover:text-emerald-700 transition-colors" aria-label="Print"><Printer className="w-5 h-5" /></button>
                  <button className="hover:text-emerald-700 transition-colors" aria-label="Share"><Share2 className="w-5 h-5" /></button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto mb-20"
          >
            <div className="aspect-[21/9] bg-slate-100 overflow-hidden relative">
              <img 
                src="https://picsum.photos/seed/sebi/2000/1000" 
                alt="SEBI BRSR Core Guidelines" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs text-slate-500 font-medium">
                © AstraESG Insights
              </div>
            </div>
          </motion.div>

          {/* Article Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-p:text-slate-700 prose-a:text-emerald-700 prose-a:underline-offset-4 hover:prose-a:text-emerald-800">
                
                <p className="lead text-2xl text-slate-900 font-light mb-10">
                  <strong>The regulatory landscape in India is shifting rapidly.</strong> With the introduction of the Business Responsibility and Sustainability Reporting (BRSR) Core, SEBI has raised the bar for corporate transparency and accountability.
                </p>

                <p>
                  The BRSR Core is a subset of the broader BRSR framework, focusing on specific key performance indicators (KPIs) that are critical for assessing a company's ESG performance. It aims to enhance the reliability and comparability of ESG disclosures, making it easier for investors and stakeholders to evaluate companies.
                </p>

                <h2>Key Components of the BRSR Core</h2>
                
                <p>
                  The BRSR Core mandates disclosures across several critical areas, including greenhouse gas (GHG) emissions, water usage, waste management, and employee well-being. Unlike the comprehensive BRSR, the Core focuses on quantifiable metrics that provide a clear picture of a company's environmental and social impact.
                </p>

                <blockquote className="my-12 pl-6 border-l-4 border-emerald-700 italic text-2xl text-slate-900 font-serif leading-snug">
                  "The BRSR Core is not just a compliance exercise; it is a strategic tool that can help companies identify risks, optimize operations, and build trust with stakeholders."
                </blockquote>

                <p>
                  One of the most significant additions in the BRSR Core is the requirement for reasonable assurance on specific KPIs. This means that companies must engage independent auditors to verify their ESG data, adding a layer of credibility that was previously lacking in voluntary reporting frameworks.
                </p>

                {/* Data Visualization Placeholder */}
                <div className="my-16 p-8 bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Exhibit 1</h4>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">BRSR Core Implementation Timeline</h3>
                  <p className="text-sm text-slate-500 mb-8">Phased rollout for top listed entities</p>
                  
                  {/* CSS Chart */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>FY 2023-24</span>
                        <span>Top 150</span>
                      </div>
                      <div className="w-full bg-slate-200 h-8">
                        <div className="bg-emerald-700 h-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>FY 2024-25</span>
                        <span>Top 250</span>
                      </div>
                      <div className="w-full bg-slate-200 h-8">
                        <div className="bg-emerald-700 h-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>FY 2025-26</span>
                        <span>Top 500</span>
                      </div>
                      <div className="w-full bg-slate-200 h-8">
                        <div className="bg-emerald-700 h-full" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>FY 2026-27</span>
                        <span>Top 1000</span>
                      </div>
                      <div className="w-full bg-slate-200 h-8">
                        <div className="bg-emerald-700 h-full" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Value Creation Beyond Compliance</h2>
                
                <p>
                  While compliance is the primary driver for adopting the BRSR Core, forward-thinking companies are leveraging this framework to drive value creation. By systematically tracking and managing ESG metrics, organizations can identify inefficiencies, reduce costs, and mitigate risks.
                </p>

                <p>
                  For example, detailed tracking of energy consumption and GHG emissions can highlight opportunities for energy efficiency improvements and the transition to renewable energy sources. Similarly, monitoring water usage and waste generation can lead to more sustainable resource management practices.
                </p>

                <h2>Preparing for the Future</h2>
                
                <p>
                  As the regulatory landscape continues to evolve, companies must proactively integrate ESG considerations into their core business strategies. The BRSR Core provides a solid foundation for building a robust ESG reporting framework that meets the expectations of regulators, investors, and society at large.
                </p>

                <p>
                  At AstraESG, we help organizations navigate the complexities of the BRSR Core, ensuring compliance while unlocking the strategic value of sustainability. Our team of experts provides end-to-end support, from data collection and assurance to strategic advisory and capacity building.
                </p>
              </div>

              {/* Author Bios */}
              <div className="mt-20 pt-12 border-t border-slate-200">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-8">About the authors</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Priya Patel</strong> is the Director of ESG Reporting at AstraESG, specializing in regulatory compliance and sustainability disclosures.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Dr. Ananya Sharma</strong> is the Managing Partner at AstraESG, with over two decades of experience in environmental science and corporate sustainability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 space-y-12">
                
                {/* In Brief Box */}
                <div className="bg-slate-50 p-8 border-t-4 border-emerald-700">
                  <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">In brief</h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0"></div>
                      <p className="text-sm text-slate-700 leading-relaxed">The BRSR Core mandates disclosures on specific, quantifiable ESG metrics for India's top listed entities.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0"></div>
                      <p className="text-sm text-slate-700 leading-relaxed">Reasonable assurance is required for key performance indicators, enhancing data reliability.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0"></div>
                      <p className="text-sm text-slate-700 leading-relaxed">Beyond compliance, the BRSR Core offers a strategic tool for identifying operational efficiencies and mitigating risks.</p>
                    </li>
                  </ul>
                </div>

                {/* Download Report */}
                <div className="border border-slate-200 p-8">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">Download the BRSR Core Guide</h3>
                  <p className="text-sm text-slate-600 mb-6">Get our comprehensive guide on navigating the new SEBI guidelines and preparing for assurance.</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 text-sm font-bold hover:bg-emerald-800 transition-colors">
                    <Download className="w-4 h-4" /> Download PDF (8MB)
                  </button>
                </div>

                {/* Related Insights */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6 border-b border-slate-200 pb-4">Related Insights</h3>
                  <div className="space-y-6">
                    <Link to="/insights" className="group block">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">Report</div>
                      <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        The ESG premium: Why sustainability matters for valuation
                      </h4>
                    </Link>
                    <Link to="/insights" className="group block">
                      <div className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">Article</div>
                      <h4 className="text-lg font-serif font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        Navigating Scope 3 emissions in complex supply chains
                      </h4>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </article>
    </div>
  );
}
