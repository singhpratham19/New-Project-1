import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, ArrowLeft } from 'lucide-react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { servicesData } from '../data/services';
import { getCategoryFromSlug } from '../utils/categorySlugs';

export default function ServiceCategory() {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const categoryName = categorySlug ? getCategoryFromSlug(categorySlug) : undefined;

  if (!categoryName) {
    return <Navigate to="/services" replace />;
  }

  const categoryServices = servicesData.filter(s => s.category === categoryName);

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden bg-slate-950">
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2000&auto=format&fit=crop" 
            alt={categoryName} 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
        </motion.div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl"
          >
            <motion.div variants={staggerItem} className="mb-6">
              <Link to="/services" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-bold uppercase tracking-widest">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Capabilities
              </Link>
            </motion.div>
            <motion.h1 variants={staggerItem} className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              {categoryName}
            </motion.h1>
            <motion.p variants={staggerItem} className="text-lg md:text-xl text-slate-300 leading-relaxed font-light max-w-3xl">
              Explore our specialized services and solutions within {categoryName}.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {categoryServices.map((service) => (
              <Link to={`/services/${service.id}`} key={service.id} className="group block">
                <div className="relative p-6 -m-6 rounded-lg transition-all duration-300 hover:bg-slate-50 hover:shadow-[0_0_40px_rgba(0,0,0,0.08)] hover:z-10 h-full flex flex-col border border-transparent hover:border-slate-100">
                  <div className="aspect-[3/2] overflow-hidden mb-6 rounded-md">
                    <img 
                      src={service.img} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4 flex items-start justify-between group-hover:text-emerald-700 transition-colors">
                    <span className="pr-4">{service.title}</span>
                    <ChevronRight className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={2.5} />
                  </h3>
                  <p className="text-slate-600 text-base leading-relaxed line-clamp-4 flex-grow">
                    {service.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
