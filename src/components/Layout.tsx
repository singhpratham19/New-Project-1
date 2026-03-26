import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Lock, ArrowRight, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-12">
              <Link to="/" className="font-serif text-3xl font-bold tracking-tight text-emerald-950">esgAAstra</Link>
              
              <div className="hidden lg:flex items-center space-x-8">
                <Link to="/" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors">Home</Link>
                <Link to="/insights" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors">Insights</Link>
                
                {/* Capabilities Dropdown */}
                <div className="relative group h-20 flex items-center">
                  <Link to="/services" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors flex items-center gap-1">
                    Capabilities
                    <ChevronDown className="w-4 h-4" />
                  </Link>
                  <div className="absolute top-20 left-0 w-72 bg-white border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 flex flex-col py-2">
                    <Link to="/services/category/esg-strategy-reporting" className="px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-700">ESG Strategy & Reporting</Link>
                    <Link to="/services/category/climate-environment" className="px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-700">Climate & Environment</Link>
                    <Link to="/services/category/social-supply-chain" className="px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-700">Social & Supply Chain</Link>
                    <Link to="/services/category/governance-sustainable-finance" className="px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-700">Governance & Sustainable Finance</Link>
                    <Link to="/services/category/technology-capacity-building" className="px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-emerald-700">Technology & Capacity Building</Link>
                  </div>
                </div>

                <Link to="/industries" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors">Industries</Link>
                <Link to="/tools" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors">ESG Tools</Link>
                <Link to="/careers" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors">Careers</Link>
                <Link to="/about" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors">About Us</Link>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <Link to="/portal" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors flex items-center gap-1.5">
                <Lock className="w-4 h-4" /> Client Login
              </Link>
              <Link to="/contact" className="bg-emerald-900 text-white px-6 py-2.5 rounded-none text-sm font-semibold hover:bg-emerald-800 transition-colors flex items-center gap-2">
                Book a Consultation
              </Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-900 hover:text-emerald-700">
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-lg absolute w-full">
            <Link to="/" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-700">Home</Link>
            <Link to="/insights" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-700">Insights</Link>
            
            <div className="space-y-2">
              <Link to="/services" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-700">Capabilities</Link>
              <div className="pl-4 space-y-2 border-l-2 border-slate-100 ml-2">
                <Link to="/services/category/esg-strategy-reporting" className="block text-sm font-semibold text-slate-600 hover:text-emerald-700">ESG Strategy & Reporting</Link>
                <Link to="/services/category/climate-environment" className="block text-sm font-semibold text-slate-600 hover:text-emerald-700">Climate & Environment</Link>
                <Link to="/services/category/social-supply-chain" className="block text-sm font-semibold text-slate-600 hover:text-emerald-700">Social & Supply Chain</Link>
                <Link to="/services/category/governance-sustainable-finance" className="block text-sm font-semibold text-slate-600 hover:text-emerald-700">Governance & Sustainable Finance</Link>
                <Link to="/services/category/technology-capacity-building" className="block text-sm font-semibold text-slate-600 hover:text-emerald-700">Technology & Capacity Building</Link>
              </div>
            </div>

            <Link to="/industries" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-700">Industries</Link>
            <Link to="/tools" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-700">ESG Tools</Link>
            <Link to="/careers" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-700">Careers</Link>
            <Link to="/about" className="block text-lg font-serif font-bold text-slate-900 hover:text-emerald-700">About Us</Link>
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <Link to="/portal" className="w-full text-slate-900 px-5 py-3 text-sm font-bold border border-slate-300 flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" /> Client Login
              </Link>
              <Link to="/contact" className="w-full bg-emerald-900 text-white px-5 py-3 text-sm font-bold hover:bg-emerald-800 transition-colors flex items-center justify-center gap-2">
                Book a Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-1 pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-300 py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
            <div className="lg:col-span-2">
              <span className="font-serif text-3xl font-bold text-white mb-6 block">esgAAstra</span>
              <p className="text-sm leading-relaxed mb-8 max-w-sm text-slate-400">
                India's premier ESG consulting firm, empowering businesses to achieve sustainable growth, regulatory compliance, and long-term value creation.
              </p>
              
              <div className="max-w-sm">
                <h5 className="text-white font-bold mb-4 text-sm">Subscribe to our Insights</h5>
                <div className="flex">
                  <input type="email" placeholder="Email address" className="bg-transparent border-b border-slate-700 text-white px-0 py-2 text-sm flex-1 focus:outline-none focus:border-emerald-500" />
                  <button className="text-emerald-500 hover:text-emerald-400 px-4 py-2 font-bold text-sm transition-colors">Subscribe</button>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Capabilities</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/services/brsr-compliance-reporting" className="hover:text-white transition-colors">BRSR Reporting</Link></li>
                <li><Link to="/services/carbon-footprint-net-zero" className="hover:text-white transition-colors">Net Zero Strategy</Link></li>
                <li><Link to="/services/esg-strategy-roadmap" className="hover:text-white transition-colors">ESG Strategy</Link></li>
                <li><Link to="/services/investor-esg-due-diligence" className="hover:text-white transition-colors">ESG Due Diligence</Link></li>
                <li><Link to="/services/csr-strategy-implementation" className="hover:text-white transition-colors">CSR Advisory</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Industries</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/industries" className="hover:text-white transition-colors">Manufacturing</Link></li>
                <li><Link to="/industries" className="hover:text-white transition-colors">BFSI</Link></li>
                <li><Link to="/industries" className="hover:text-white transition-colors">Pharma & Healthcare</Link></li>
                <li><Link to="/industries" className="hover:text-white transition-colors">IT & Technology</Link></li>
                <li><Link to="/industries" className="hover:text-white transition-colors">Real Estate</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">About Us</h4>
              <ul className="space-y-4 text-sm">
                <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Leadership Team</Link></li>
                <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Connect</h4>
              <ul className="space-y-4 text-sm mb-8">
                <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</a></li>
                <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2"><Mail className="w-4 h-4" /> Email Us</Link></li>
              </ul>
              <div className="text-sm text-slate-400">
                <p className="mb-2 text-white font-bold">Offices</p>
                <p>Mumbai (HQ)</p>
                <p>Delhi NCR</p>
                <p>Bengaluru</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-slate-500">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
              <p>&copy; {new Date().getFullYear()} esgAAstra Consulting Pvt. Ltd. All rights reserved.</p>
              <span className="hidden md:inline">|</span>
              <p>GSTIN: 22AAAAA0000A1Z5</p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
