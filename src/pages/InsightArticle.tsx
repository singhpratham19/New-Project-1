import { motion } from 'motion/react';
import { ArrowRight, Share2, Printer, Linkedin, Twitter, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InsightArticle() {
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
                  Article
                </span>
                <span className="text-slate-300">|</span>
                <span className="text-sm font-medium text-slate-500">
                  March 15, 2026
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                The net-zero transition: What it would cost, what it could bring
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed mb-10">
                The transition to a net-zero economy will be universal, significant, and front-loaded, with uneven effects on sectors, geographies, and communities. Here is a closer look at the economic transformation required.
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-6 border-y border-slate-200 mb-12 gap-6">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-900">
                  <span className="text-slate-500">By</span>
                  <a href="#" className="hover:text-emerald-700 underline underline-offset-4 decoration-slate-300">PRATHAM SINGH</a>
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
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop" 
                alt="Wind turbines representing net-zero transition" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs text-slate-500 font-medium">
                © Unsplash / RawFilm
              </div>
            </div>
          </motion.div>

          {/* Article Layout */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="prose prose-lg prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-p:leading-relaxed prose-p:text-slate-700 prose-a:text-emerald-700 prose-a:underline-offset-4 hover:prose-a:text-emerald-800">
                
                <p className="lead text-2xl text-slate-900 font-light mb-10">
                  <strong>The science is clear:</strong> to avert the worst impacts of climate change, the global economy must transition to net-zero emissions. But what would this transition actually entail for the economy?
                </p>

                <p>
                  In a new report, we simulate a hypothetical transition to net-zero emissions by 2050, examining the economic and societal adjustments required. The research looks at the transition's impact on demand, capital allocation, costs, and jobs, assessing these factors at the level of sectors and geographies.
                </p>

                <h2>A universal, significant, and front-loaded transformation</h2>
                
                <p>
                  The transition would be universal. Every country and every sector of the economy would be affected. It would also be significant. We estimate that capital spending on physical assets for energy and land-use systems in the net-zero transition would amount to about $275 trillion, or $9.2 trillion per year on average, an annual increase of as much as $3.5 trillion from today.
                </p>

                <blockquote className="my-12 pl-6 border-l-4 border-emerald-700 italic text-2xl text-slate-900 font-serif leading-snug">
                  "The transition would be front-loaded: spending would rise from 6.8 percent of GDP today to about 9 percent of GDP between 2026 and 2030 before falling."
                </blockquote>

                <p>
                  To put this in perspective, the $3.5 trillion increase is equivalent to half of global corporate profits, a quarter of total tax revenue, and 7 percent of household spending. An additional $1 trillion of today's annual spend would need to be reallocated from high-emissions to low-emissions assets.
                </p>

                {/* Data Visualization Placeholder */}
                <div className="my-16 p-8 bg-slate-50 border border-slate-200">
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-6">Exhibit 1</h4>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">Capital spending on physical assets for energy and land-use systems</h3>
                  <p className="text-sm text-slate-500 mb-8">Estimated annual average, 2021–50, $ trillions</p>
                  
                  {/* CSS Chart */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>Current spending</span>
                        <span>$5.7T</span>
                      </div>
                      <div className="w-full bg-slate-200 h-8">
                        <div className="bg-slate-400 h-full" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm font-medium text-slate-700 mb-2">
                        <span>Required spending for net-zero</span>
                        <span>$9.2T</span>
                      </div>
                      <div className="w-full bg-slate-200 h-8 flex">
                        <div className="bg-slate-400 h-full" style={{ width: '60%' }}></div>
                        <div className="bg-emerald-700 h-full" style={{ width: '40%' }}></div>
                      </div>
                      <div className="mt-2 text-xs text-slate-500 text-right">
                        <span className="inline-block w-3 h-3 bg-emerald-700 mr-1 align-middle"></span>
                        Additional $3.5T required
                      </div>
                    </div>
                  </div>
                </div>

                <h2>Uneven impacts across sectors and geographies</h2>
                
                <p>
                  While the transition creates opportunities, its effects will be uneven. Sectors with high-emissions products or operations—which generate about 20 percent of global GDP—would face substantial effects on demand, production costs, and employment.
                </p>

                <p>
                  Developing countries and those with large fossil fuel sectors would need to invest more as a share of their GDP than other countries. For example, sub-Saharan Africa, Latin America, India, and other Asian nations would need to spend about 1.5 times as much as advanced economies as a share of GDP to support economic development and build low-carbon infrastructure.
                </p>

                <h2>The cost of inaction</h2>
                
                <p>
                  It is important to note that these economic adjustments are not the only costs to consider. The costs of a delayed or abrupt transition would be higher, and the economic and social costs of unmitigated climate change would be the highest of all.
                </p>

                <p>
                  A coordinated, orderly transition would help mitigate these risks and create new opportunities for growth. The task ahead is immense, but the transition to a net-zero economy is both necessary and achievable.
                </p>
              </div>

              {/* Author Bios */}
              <div className="mt-20 pt-12 border-t border-slate-200">
                <h3 className="text-xl font-serif font-bold text-slate-900 mb-8">About the authors</h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Mekala Krishnan</strong> is a partner at the McKinsey Global Institute, based in Boston. <strong>Hamid Samandari</strong> is a senior partner in McKinsey's New York office.
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Jonathan Woetzel</strong> is a senior partner in the Shanghai office and a director of the McKinsey Global Institute. <strong>Sven Smit</strong> is a senior partner in the Amsterdam office and co-chair of MGI.
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
                      <p className="text-sm text-slate-700 leading-relaxed">Capital spending on physical assets for energy and land-use systems would need to rise by $3.5 trillion annually to reach net-zero by 2050.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0"></div>
                      <p className="text-sm text-slate-700 leading-relaxed">The transition would be front-loaded, with spending rising to 9% of global GDP between 2026 and 2030.</p>
                    </li>
                    <li className="flex gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-2 shrink-0"></div>
                      <p className="text-sm text-slate-700 leading-relaxed">Developing countries would need to invest about 1.5 times as much as advanced economies as a share of GDP.</p>
                    </li>
                  </ul>
                </div>

                {/* Download Report */}
                <div className="border border-slate-200 p-8">
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-4">Download the full report</h3>
                  <p className="text-sm text-slate-600 mb-6">Get detailed analysis on the economic transformation required for the net-zero transition.</p>
                  <button className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 text-sm font-bold hover:bg-emerald-800 transition-colors">
                    <Download className="w-4 h-4" /> Download PDF (12MB)
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
