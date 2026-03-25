import { motion } from 'motion/react';
import { Lock } from 'lucide-react';

export default function Portal() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  return (
    <div className="min-h-[80vh] bg-slate-50 flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8">
      <motion.div {...fadeIn} className="max-w-md w-full bg-white p-10 border border-slate-200 shadow-xl">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-800">
            <Lock className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-center text-3xl font-serif font-bold text-slate-900 mb-2">Client Portal</h2>
        <p className="text-center text-slate-600 mb-8">Sign in to access your ESG reports and dashboards.</p>
        
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
            <input type="email" required className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <input type="password" required className="w-full border border-slate-300 px-4 py-3 focus:outline-none focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-emerald-700 focus:ring-emerald-700 border-slate-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">Remember me</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-bold text-emerald-700 hover:text-emerald-800">Forgot password?</a>
            </div>
          </div>
          <button type="button" className="w-full bg-emerald-900 text-white px-8 py-4 font-bold hover:bg-emerald-800 transition-colors">
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
}
