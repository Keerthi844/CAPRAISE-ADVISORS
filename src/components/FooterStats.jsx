import React from 'react';
import { FiUsers, FiTrendingUp, FiAward, FiStar } from 'react-icons/fi';

function FooterStats() {
  const stats = [
    { value: '500+', label: 'Clients Served', icon: FiUsers },
    { value: '₹5000Cr', label: 'Transactions Managed', icon: FiTrendingUp },
    { value: '20+', label: 'Years Experience', icon: FiAward },
    { value: '100%', label: 'Client Satisfaction', icon: FiStar }
  ];

  return (
    <section className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className="motion-scale group relative p-5 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-700/40 to-slate-800/40 hover:border-blue-500/80 hover:from-slate-700/60 hover:to-slate-800/60 transition-all duration-300 text-center backdrop-blur-sm"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon Circle */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-full mb-3 group-hover:from-blue-500/40 group-hover:to-blue-400/20 transition-all duration-300">
                  <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                
                {/* Stats Content */}
                <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-300 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-emerald-200 transition-all mb-1">{stat.value}</p>
                <p className="text-slate-400 font-medium text-xs md:text-sm group-hover:text-slate-300 transition-colors">{stat.label}</p>
                
                {/* Bottom glow on hover */}
                <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 rounded-b-xl transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FooterStats;

