import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiEye, FiTarget, FiNavigation, FiBriefcase, FiShoppingCart, FiDollarSign, FiBattery, FiTruck } from 'react-icons/fi';

// AboutHero Component
function AboutHero() {
  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-slate-800 overflow-hidden" style={{marginTop: '0'}}>
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=500&fit=crop)'}}
      ></div>
      
      {/* Accent overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/60 to-slate-800/60"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32"></div>
      
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fadeInUp">
          <div className="mb-6">
            <span className="inline-block bg-blue-400/20 border border-blue-400/40 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-6">About Our Company</span>
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-blue-200 to-blue-50 bg-clip-text text-transparent">Capraise Advisors</span>
          </h1>
          
          <p className="text-xl text-blue-50 mb-8 leading-relaxed font-light">Delivering excellence in investment banking and strategic advisory since our inception.</p>
          
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-block">
                 Get in Touch
            </Link>
          
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// WhoWeAre Component
function WhoWeAre() {
  return (
    <section className="pt-10 pb-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="motion-fade-in">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Capraise Advisors is a multi-disciplinary investment banking and advisory firm headquartered in Hyderabad, India. We specialize in delivering comprehensive financial and strategic solutions that help clients realize their long-term objectives and create sustainable value.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              With a strong track record and a client-centric approach, Capraise Advisors partners with individuals, businesses, and institutions across the globe, offering tailored advisory services backed by deep industry knowledge and execution excellence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our team consists of highly skilled professionals drawn from diverse backgrounds, including Chartered Accountants, Company Secretaries, Certified Public Accountants, former bankers, management professionals, and legal experts.
            </p>
          </div>
          <div className="motion-fade-in bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition h-fit">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Core Values</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Integrity</p>
                  <p className="text-gray-600 text-sm">Honest and ethical in all dealings</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Client-Centric</p>
                  <p className="text-gray-600 text-sm">Your success is our priority</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Excellence</p>
                  <p className="text-gray-600 text-sm">Committed to superior execution</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="font-bold text-slate-900">Innovation</p>
                  <p className="text-gray-600 text-sm">Creative and forward-thinking solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// MissionVision Component
function MissionVision() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">

      {/* Decorative Background Circles */}
      <div className="absolute top-10 left-20 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-blue-300 opacity-20 rounded-full blur-2xl"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-20 relative">

        {/* Vision Circle */}
        <div className="relative z-10 transform hover:scale-110 transition duration-500 animate-float">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex flex-col items-center justify-center text-center p-6 shadow-2xl">
            <FiEye className="text-4xl text-gray-900 mb-2" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              OUR VISION
            </h3>
            <p className="text-sm text-gray-800">
             To be the trusted one-stop advisory partner for entrepreneurs and businesses worldwide—driving success through integrity, expertise, and consistently exceptional outcomes.
            </p>
          </div>

          <div className="absolute inset-0 rounded-full border-4 border-yellow-400 scale-110"></div>
        </div>

        {/* Diagonal Divider */}
        <div
          className="absolute w-28 h-[130%] bg-white opacity-90"
          style={{
            transform: "rotate(35deg)",
            left: "50%",
            top: "-15%"
          }}
        ></div>

        {/* Mission Circle */}
        <div className="relative z-10 transform hover:scale-110 transition duration-500 animate-float delay-200">
          <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-200 to-blue-400 flex flex-col items-center justify-center text-center p-6 shadow-2xl">
            <FiTarget className="text-4xl text-blue-900 mb-2" />
            <h3 className="text-xl font-bold text-blue-900 mb-2">
              OUR MISSION
            </h3>
            <p className="text-sm text-blue-900">
              To deliver strategic financial solutions that enable our clients to focus on building and growing their businesses. We aim to maximize value through insightful advisory, innovative thinking, and uncompromising professional standards, while contributing positively to our clients, stakeholders, and communities.
            </p>
          </div>

          <div className="absolute inset-0 rounded-full border-4 border-blue-400 scale-110"></div>
        </div>

      </div>

      {/* Floating Animation */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>

    </section>
  );
}

// WeAspireToServe Component
function WeAspireToServe() {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardDetails = {
    'VCs/PEs': {
      description: 'Venture Capitalists and Private Equity firms looking to invest in promising startups and growth companies',
      features: ['Portfolio diversification', 'Growth opportunities', 'Strategic partnerships', 'Exit planning'],
      image: "https://images.openai.com/static-rsc-3/oVkO9kU7vvFmmWiZTesUNvlchUS4RskNLzegUwr7nhphKJN-0R9qNeuX97uzwB9WEXdhVzP2l_Yc9r5bVbGUYPPgNrAAF6SN1UgXsCgEf-0?purpose=inline",
      details: 'Our platform connects VCs and PEs with high-potential investment opportunities. We provide comprehensive due diligence support, market analysis, and deal structuring expertise to maximize returns on your investments.',
      additionalContent: 'With access to our curated deal pipeline, you gain early visibility into emerging market trends and innovative startups. Our advisory team assists with portfolio management, risk assessment, and valuation services, ensuring strategic alignment with your investment thesis.'
    },
    'Angel Investors': {
      description: 'Individual investors providing early-stage funding and mentorship to emerging entrepreneurs',
      features: ['Seed funding', 'Business mentoring', 'Industry connections', 'Long-term growth support'],
      image: "https://www.leaderbank.com/sites/default/files/2024-05/AdobeStock_479612135.jpeg",
      details: 'Connect with pre-screened startups and emerging businesses. Our platform provides detailed investment summaries, founder profiles, and risk assessments to help you make informed investment decisions.',
      additionalContent: 'We facilitate mentorship relationships, providing networking events where you can directly engage with founders. Track your investments, monitor progress metrics, and receive regular updates on portfolio company performance and growth milestones.'
    },
    'HNIs': {
      description: 'High Net Worth Individuals seeking investment opportunities with significant returns',
      features: ['Wealth management', 'Diversified portfolios', 'Exclusive deals', 'Professional guidance'],
      image: "https://bizcivitas.com/flagship.jpg",
      details: 'Access exclusive investment opportunities curated specifically for high net worth individuals. Benefit from personalized advisory services and a diversified portfolio of premium investment options.',
      additionalContent: 'Our wealth advisors create customized investment strategies tailored to your financial goals and risk preferences. Enjoy priority access to premium deals, private investment rounds, and exclusive networking events with industry leaders and fellow HNIs.'
    },
    'Startups': {
      description: 'Innovative companies seeking funding, resources, and guidance to scale their operations',
      features: ['Access to capital', 'Business development', 'Mentorship programs', 'Networking opportunities'],
      image: "https://plus.unsplash.com/premium_photo-1661632764374-af0347b17e7d?fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE2fHx8ZW58MHx8fHx8&ixlib=rb-4.1.0&q=60&w=3000",
      details: 'Accelerate your growth with access to investor networks, strategic mentorship, and capital funding. Our comprehensive support ecosystem helps startups navigate challenges and scale efficiently.',
      additionalContent: 'From pitch preparation to investor relations, we guide you through every stage of fundraising. Access our network of experienced mentors, learn scaling strategies, and connect directly with investors actively looking for opportunities in your sector.'
    },
    'Incubators': {
      description: 'Organizations providing infrastructure and support to nurture early-stage ventures',
      features: ['Workspace provision', 'Training programs', 'Investor connections', 'Regulatory support'],
      image: "https://media.licdn.com/dms/image/v2/D5612AQGAUEhXBQzncg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1722748080542?e=2147483647&t=i0F6UNjwn7J4VnhiehGexXZpz8hQF9PdtIqQWqqLlYg&v=beta",
      details: 'Partner with us to provide your ventures with enhanced investor access, specialized training modules, and regulatory guidance. Strengthen your incubation programs with our comprehensive support.',
      additionalContent: 'We offer white-label advisory services, curriculum development for entrepreneurship training, and direct investor introductions for your portfolio companies. Our expertise in legal compliance and business regulations ensures your ventures meet all regulatory requirements.'
    },
    'Accelerators': {
      description: 'Programs designed to rapidly scale startups through intensive mentoring and funding',
      features: ['Fast-track growth', 'Investor pitching', 'Expert guidance', 'Funding acceleration'],
      image: "https://images.openai.com/static-rsc-3/RJ3C8-FR070VmAA04uwEuY7c3Aj-G2dM52MGXdYkjPiOFSzFCzLw1ndITyDYkOknaD9EGa4IkgOaeS0uV18qNW1Z-ANX0A6EqKRuj_m5bDo?purpose=fullsize&v=1",
      details: 'Leverage our extensive network of investors, mentors, and industry experts to accelerate your program\'s success. We provide investor introduction services, pitch coaching, and growth strategy consulting.',
      additionalContent: 'Our accelerator partnerships include access to demo day support, investor relations management, and post-acceleration growth strategy. We help you build a strong alumni network and provide ongoing support for your companies even after program completion.'
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 sm:mb-12 text-center motion-fade-in">We Aspire to Serve</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-4">
          {Object.keys(cardDetails).map((item, idx) => (
            <div
              key={item}
              onClick={() => setSelectedCard(item)}
              className="motion-fade-in group p-3 sm:p-6 bg-blue-600 text-white rounded-lg border border-blue-700 hover:bg-white hover:text-blue-600 hover:border-blue-400 hover:shadow-xl transition-all text-center cursor-pointer min-h-[60px] sm:min-h-[80px] flex items-center justify-center"
              style={{animationDelay: `${idx * 0.08}s`}}
            >
              <p className="text-xs sm:text-sm font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCard && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden"
          onClick={() => setSelectedCard(null)}
        >
          <div className="flex items-center justify-center w-full h-full p-4 pt-20 sm:pt-16">
            <div
              className="bg-white rounded-lg w-full max-w-2xl max-h-[calc(100vh-120px)] overflow-y-auto flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 sm:p-6 flex justify-between items-center flex-shrink-0 gap-2 z-10">
                <h3 className="text-lg sm:text-2xl font-bold line-clamp-2">{selectedCard}</h3>
                <button
                  onClick={() => setSelectedCard(null)}
                  className="text-white hover:bg-blue-800 rounded-full p-2 transition-colors flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              
              {/* Image */}
              <div className="w-full h-40 sm:h-56 flex-shrink-0">
                <img 
                  src={cardDetails[selectedCard].image} 
                  alt={selectedCard}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="flex-1 p-4 sm:p-6 pt-6 sm:pt-8 overflow-y-auto">
                <h4 className="text-base sm:text-lg font-bold text-slate-900 mb-3">Overview</h4>
                <p className="text-xs sm:text-sm text-slate-700 mb-4 leading-relaxed">{cardDetails[selectedCard].description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-slate-900 mb-3 text-sm sm:text-base">Key Features:</h4>
                  <ul className="space-y-2">
                    {cardDetails[selectedCard].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-slate-700">
                        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-blue-50 p-3 sm:p-4 rounded-lg border border-blue-200 mb-4">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Our Services</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{cardDetails[selectedCard].details}</p>
                </div>
                
                <div className="bg-emerald-50 p-3 sm:p-4 rounded-lg border border-emerald-200">
                  <h4 className="font-semibold text-slate-900 mb-2 text-sm sm:text-base">Additional Benefits</h4>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{cardDetails[selectedCard].additionalContent}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

// OurApproach Component
function OurApproach() {
  const industries = [
    {
      id: 1,
      title: 'Travel and Aviation Consulting',
      description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
      icon: FiNavigation
    },
    {
      id: 2,
      title: 'Business Services Consulting',
      description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
      icon: FiBriefcase
    },
    {
      id: 3,
      title: 'Consumer Products Consulting',
      description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
      icon: FiShoppingCart
    },
    {
      id: 4,
      title: 'Financial Services Consulting',
      description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
      icon: FiDollarSign
    },
    {
      id: 5,
      title: 'Energy and Environment Consulting',
      description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
      icon: FiBattery
    },
    {
      id: 6,
      title: 'Surface Transport & Logistics Consulting',
      description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
      icon: FiTruck
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 motion-fade-in">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">INDUSTRIES</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto"></div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, idx) => {
            const IconComponent = industry.icon;
            return (
              <div
                key={industry.id}
                className="motion-fade-in group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex flex-col">
                  {/* Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-12 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full group-hover:w-14 transition-all duration-300"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// AboutCTA Component
function AboutCTA() {
  return (
    <section className=" pb-2 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center motion-fade-in">
        <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to Work With Us?</h2>
        <p className="text-xl text-gray-600 mb-8">Get in touch with our team to discuss how we can help you achieve your financial and business goals.</p>
        <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
          Get in Touch
        </a>
      </div>
    </section>
  );
}

export { AboutHero, WhoWeAre, MissionVision, WeAspireToServe, OurApproach, AboutCTA };
