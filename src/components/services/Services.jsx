import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiBriefcase, FiDollarSign, FiTrendingUp, FiZap, FiBox, FiUsers } from 'react-icons/fi';

// ServiceHero Component
function ServiceHero() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-6 motion-fade-in">Our Services</h1>
        <p className="text-xl text-blue-700 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>Comprehensive financial and strategic solutions tailored to your unique business needs.</p>
      </div>
    </section>
  );
}

// Main Services Data
const clientSegmentsData = {
  'venture-capitalists': {
    title: 'Venture Capitalists & PE Firms',
    icon: FiBriefcase,
    shortDesc: 'Strategic partners in growth equity investments and portfolio management',
    category: 'Who We Serve',
    description: 'We provide comprehensive support to venture capitalists and private equity firms in identifying, evaluating, and managing investment opportunities. Our services help you build strong portfolios and maximize returns through strategic partnerships.',
    overview: 'Our team assists with deal sourcing, due diligence, fund structuring, portfolio management, and strategic consulting. We leverage our extensive network to connect you with quality deal flow and help navigate complex investment landscapes.We assist VC and PE firms throughout the investment lifecycle—from deal sourcing and due diligence to portfolio management and exit strategies. Our deep industry insights and strong network enable us to connect investors with high-potential companies and emerging opportunities.',
    image: 'https://cdn.prod.website-files.com/66311b66e5ffd46956cf369b/66b141a052bb8aff3c125822_g68.png'
  },
  'angel-investors': {
    title: 'Angel Investors & HNIs',
    icon: FiDollarSign,
    shortDesc: 'Wealth management and investment advisory for high net worth individuals',
    category: 'Who We Serve',
    description: 'We deliver personalized wealth management and investment advisory services tailored to high net worth individuals and angel investors. Our team helps you identify promising opportunities and optimize your investment portfolio.',
    overview: 'We provide investment analysis, portfolio diversification strategies, tax-efficient planning, and deal introductions to promising startups and growth companies. Our approach ensures your investments align with your financial goals.Angel Investors and High Net Worth Individuals (HNIs) play a vital role in supporting early-stage and growth-stage businesses by providing capital, strategic guidance, and industry connections. At Capraise Advisors, we help angel investors and HNIs identify high-potential investment opportunities and build well-diversified portfolios aligned with their financial goals and risk appetite.',
    image: 'https://images.squarespace-cdn.com/content/v1/6553a295a49b8d1cc294179f/1715809188117-ERP39TA7Z0NP0AGL3SO9/wealth-management.jpg'
  },
  'startups': {
    title: 'Startups & Entrepreneurs',
    icon: FiTrendingUp,
    shortDesc: 'Fundraising guidance and business scaling support for growing companies',
    category: 'Who We Serve',
    description: 'We are committed to helping startups and entrepreneurs navigate the challenging journey of building successful companies. Our comprehensive advisory services cover fundraising, growth strategy, and operational excellence.',
    overview: 'From business planning and pitch deck creation to investor introductions and term sheet negotiation, we provide end-to-end support. Our team helps you build scalable businesses and attract the right investors for your vision.We support startups at every stage of their journey—from idea validation and business planning to fundraising, market entry, and growth strategy. Our team works closely with entrepreneurs to develop strong business models, prepare investor-ready pitch decks, and connect them with the right investors including angel investors, venture capital firms, and private equity funds.',
    image: 'https://png.pngtree.com/thumb_back/fw800/background/20251102/pngtree-diverse-team-celebrating-a-successful-project-launch-with-confetti-in-modern-image_20204333.webp'
  },
  'incubators': {
    title: 'Incubators & Accelerators',
    icon: FiZap,
    shortDesc: 'Advisory support for ecosystem players driving innovation',
    category: 'Who We Serve',
    description: 'We collaborate with incubators and accelerators to strengthen the entrepreneurial ecosystem. Our services help acceleration programs enhance their value proposition and support portfolio companies effectively.',
    overview: 'We provide curriculum development, mentor network access, investor connect programs, and strategic advisory for your portfolio companies. Our expertise helps create a thriving innovation ecosystem and successful exits.Incubators and accelerators play a critical role in nurturing early-stage startups and strengthening the entrepreneurial ecosystem. At Capraise Advisors, we collaborate with incubators and accelerator programs to support startups with the financial, strategic, and operational guidance required to scale successfully.',
    image: 'https://miro.medium.com/v2/resize%3Afit%3A1400/1%2AXbIWjQmujQppRFYVw_z7bA.jpeg'
  },
  'corporations': {
    title: 'Established Corporations',
    icon: FiBox,
    shortDesc: 'Strategic advisory for expansion, restructuring, and optimization',
    category: 'Who We Serve',
    description: 'We support established corporations in navigating complex business transformations. Our advisory services cover strategic expansion, M&A transactions, restructuring, and operational optimization.',
    overview: 'From identifying acquisition targets and managing M&A processes to restructuring operations and optimizing capital structures, we help corporations create value. Our team brings industry expertise and proven execution capabilities.Established corporations often face complex challenges while pursuing growth, expansion, and long-term value creation. At Capraise Advisors, we work closely with corporates to provide strategic financial advisory and transaction support that helps businesses adapt, grow, and remain competitive in dynamic markets.',
    image: 'https://www.investopedia.com/thmb/b9tGOj-_kOWs1JZbQBxQ0frzpoc%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/SemivarianceMeaningFormulasandCalculationsGettyImages-1598549989-8a9f862c2362495aaca28aa5b59435ad.jpg'
  },
  'family-offices': {
    title: 'Family Offices',
    icon: FiUsers,
    shortDesc: 'Comprehensive wealth and investment management services',
    category: 'Who We Serve',
    description: 'We provide sophisticated wealth management and investment advisory services tailored to family offices. Our approach integrates financial planning, investment management, and governance support.',
    overview: 'We assist with investment strategy, asset allocation, ESG considerations, succession planning, and family governance. Our experienced team helps preserve and grow multi-generational wealth while addressing complex family dynamics.Family offices manage and preserve the wealth of high-net-worth families across generations. At Capraise Advisors, we provide tailored advisory services that help family offices effectively manage their investments, optimize asset allocation, and achieve long-term financial goals.',
    image: 'https://archello.s3.eu-central-1.amazonaws.com/images/2022/10/12/alcove-design-consultants-private-wealth-management-client-offices-archello.1665593958.3422.jpg'
  }
};

const mainServicesData = {
  fundraising: {
    title: 'Fundraising',
    icon: FiDollarSign,
    shortDesc: 'Capital raising and investment advisory services',
    description:'our fundraising services encompass a wide range of capital raising and investment advisory solutions designed to help businesses secure the necessary funding for growth.As a result of our strong connections with financial institutions, NBFCs, venture capital funds, private equity funds, and banks from diverse sectors.',
    overview:'We select the most valuable & promising asset class by examining the facts after conducting thorough research of the business to properly understand the client\'s requirement. As a result of our strong connections with financial institutions, NBFCs, venture capital funds, private equity funds, and banks from diverse sectors, we are able to meet the specific funding needs that arise for businesses at different stages of their journey. Capraise assists the company throughout the procedure with every critical aspect in order to accomplish a smooth transaction closure.',
    subServices: [
      {
        title: 'Debt Syndication',
        image: 'https://plus.unsplash.com/premium_photo-1664475153009-d550abeb0ac1?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
        description: 'We help clients choose the right debt instruments, structure financing deals, and negotiate good terms with lenders. Our team has an abundant amount of experience with setting up syndicated loans, project financing, acquisition financing, and working capital arrangements.',
        features: ['Structuring and arranging debt syndication transactions', 'Identifying and engaging suitable lenders', 'Managing due diligence and documentation', 'Supporting legal, document and regulatory processes', 'End-to-end transaction support', 'Debt refinancing advisory']
      },
      {
        title: 'Private Equity Syndication',
        image: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=400&h=250&fit=crop',
        description: 'We as investment bankers play a critical role in facilitating syndication in the world of private equity. We serve as a bridge between institutional investors looking for investment possibilities and private equity firms looking for funding.',
        detailedContent: true,
        sections: [
          {
            title: 'Services for VCs',
            items: [
              'Deal sourcing',
              'Due diligence',
              'Deal structuring',
              'Portfolio management',
              'Strategic consulting',
              'Fund Accounting'
            ]
          },
          {
            title: 'Services for Startups',
            items: [
              'Fundraising (equity/debt)',
              'Business plan development',
              'Pitch deck creation',
              'Investor Outreach & Engagement',
              'Financial Analysis & Modeling'
            ]
          }
        ]
      },
      {
        title: 'Mergers & Acquisitions',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
        description: 'We offer professional advice at every stage of the M&A process, from deal structuring to transaction execution. By providing thorough due diligence, valuation analysis, negotiation support, and transaction structuring, our team of qualified specialists make sure that our clients maximise value and accomplish their strategic goals.',
        features: ['Identifying targets for mergers and acquisitions','Due diligence', 'Valuation,structuring & negotiation support', 'Documentation & legal advice', 'Post-merger integration support', 'Advisory for divestitures, spin-offs, etc']
      },
    ]
  },
  restructuring: {
    title: 'Restructuring',
    icon: FiTrendingUp,
    shortDesc: 'Strategic organizational and financial restructuring',
    description: 'Restructuring involves the strategic reorganization of a company\'s operational, financial, or organizational framework to improve performance and sustainability. It is typically undertaken to enhance efficiency, realign business strategy, or address financial stress',
    overview:'Restructuring involves the strategic reorganization of a companys operational, financial, or organizational framework to improve performance and sustainability. It is typically undertaken to enhance efficiency, realign business strategy, or address financial stress.',
     subServices: [      {
        title: 'Financial Restructuring',
        image: 'https://en.pimg.jp/104/733/769/1/104733769.jpg',
        description: 'We assist in the process of altering the capital structure of a business with the goal of enhancing its financial stability and lowering financial risks. It might entail altering loan conditions, extending the time between payments, or turning debt into equity.',
      },
      {
        title: 'Operational Restructuring',
        image: 'https://e.bellrockgroup.co.uk/hubfs/analytics-blog-image-cafm-software.png',
        description: 'We assist a company to restructure its operations in order to be more effective and efficient. To increase efficiency and cut expenses, it could entail streamlining procedures, rearranging departments, outsourcing non-core tasks, or implementing new technology.',
      },
      {
        title: 'Organizational Restructuring',
        image: 'https://static.wixstatic.com/media/db8f69_da17c7e92fd94cc2998504f8445a53cb~mv2.png/v1/fill/w_1000%2Ch_558%2Cal_c%2Cq_90%2Cusm_0.66_1.00_0.01/db8f69_da17c7e92fd94cc2998504f8445a53cb~mv2.png',
        description: 'We help businesses that are undergoing reorganisation that entails adjusting their internal organisational structure and reporting lines. This could mean decentralising decision-making, combining or removing departments, forming new divisions or teams, or putting new management structures in place.',
      },
      {
        title: 'Strategic Restructuring',
        image: 'https://www.investopedia.com/thmb/RoS2FygndcnDcyiXdAYxd-rfvT8%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/Turnaround-9bc0404e004a4988ab52097481fbaa15.jpg',
        description: 'Strategic restructuring, which entails reinventing a company\'s complete business strategy, including its markets, products, and competitive positioning, is assisted by our experienced team. . It could entail selling non-core businesses, buying new companies, expanding into new markets, or refocusing on promising new opportunities.',
        features: ['Providing guidance and support for companies facing financial distress', 'Advising companies that are looking to improve their financial performance', 'Guidance for operational restructuring, cost optimisation strategies, spin offs and divestitures','Legal support']
      }
    ]
  },
  advisory: {
    title: 'Advisory',
    icon: FiBriefcase,
    shortDesc: 'Comprehensive strategic advisory services',
    description: 'Our professionals assist businesses in several areas, such as capital structuring, financial planning and analysis, risk management, and fundraising. In order to meet financial goals, we evaluate the company\'s financial situation, look for areas that may be improved, and develop specialised methods.',
    
    subServices: [
      {
        title: 'Startup Advisory',
        image: 'https://siift.ai/_next/image?q=70&url=https%3A%2F%2Fsiift-website-media.s3.amazonaws.com%2Fblog%2Ff179fba8-170d-4ed8-b011-77c96553f7c8.webp&w=3840',
        description: 'Our startup advisory refers to the specialised services and direction offered to business owners and start-up firms to assist them in navigating the difficulties of launching and expanding a new enterprise. In order to help startups with all facets of their business development, our seasoned professionals and consultants give their skills, knowledge of the sector, and networks.Startup Advisory services help entrepreneurs transform innovative ideas into scalable and successful businesses. From validating business concepts to securing funding and scaling operations, our advisory team provides strategic guidance at every stage of the startup journey.We work closely with founders to understand their vision, market opportunity, and growth objectives, offering practical insights and structured support to navigate the complexities of building a startup.We help founders evaluate and refine their ideas by analyzing market demand, competition, and feasibility to ensure a strong foundation before launching.',
        detailedContent: true,
        sections: [
          {
            title: 'Business Planning',
            description: 'Our professionals assist entrepreneurs in creating an uncompromising plan for the development and sustainability of their startups.'
          },
          {
            title: 'Fundraising and Investment',
            description: 'Our knowledgeable team helps entrepreneurs create presentation decks, financial projections, and investment strategies that are investor-ready. We offer advice on various methods to raise funds, including grants from the government, angel investors, and venture capital firms. Our professionals also assist in negotiating investment terms or facilitate introductions to possible investors.'
          },
          {
            title: 'Market Entry and Go-to-Market Strategy',
            description: 'Our Startup advisors help define market entry strategies and develop go-to-market plans. They provide insights on customer acquisition, pricing strategies, distribution channels, and marketing tactics. They assist in identifying target customers, understanding market dynamics, and positioning the startup\'s product or service effectively.'
          },
          {
            title: 'Operations and Scalability',
            description: 'Our specialists help startups set up scalable procedures and optimise their business operations. On organisational structure, resource allotment, supply chain management, and operational effectiveness, we offer direction. Additionally, we assist startups in getting ready for expansion by handling increased consumer demand, growing staff, and scaling up production.'
          },
          {
            title: 'Product Development and Innovation',
            description: 'The development and launch of a product or service, including market fit study, prototyping, testing, and iteration, is guided by our advisors. Additionally, we support startups by helping them to prioritise features, improve their product offerings, and make sure they are meeting the needs of customers.'
          },
          {
            title: 'Legal and Regulatory Compliance',
            description: 'Our experts guide entrepreneurs through the maze of legal and regulatory obligations. We offer direction on establishing corporate entities, safeguarding intellectual property, drafting contracts, and adhering to rules that are relevant to the industry.'
          }
        ]
      },
      {
        title: 'Capital Market Advisory',
        image: 'https://www.investopedia.com/thmb/n1lNb-i4PsH94bNYtRIiw7iaa4Q%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/ThirdMarketWhatitMeansHowitWorksGettyImages-1489360080-e215d6f54f0b4ed899584a1c1b7f0eba.jpg  ',
        description: 'Our team offers expert services to help companies navigate the complexity of the financial markets, raise capital, and strengthen their capital structure. We help companies by determining their finance needs, developing funding strategies, and providing guidance on a variety of capital market operations and opportunities.',
        features: ['Capital raising strategies', 'IPO advisory', 'Debt financing', 'Equity offerings', 'Investor relations', 'Valuation services','Market Research and Trends','Legal Support','Networking and Capital Structure Optimisation.']
      },
      {
        title: 'Corporate Advisory',
        image: 'https://plus.unsplash.com/premium_photo-1661400668364-80e71610c557?auto=format&fit=crop&fm=jpg&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&ixlib=rb-4.1.0&q=60&w=3000',
        description: 'Our specialists provide a wide range of specialised services to businesses by supporting them in operational effectiveness, strategic decision-making, and overall performance. In order to offer perspectives, direction, and recommendations on all facets of the business operations and strategy, we closely collaborate with corporate management and stakeholders.',
        features: ['Strategic planning', 'Financial and strategic analysis', ' Valuation', ' Restructuring', 'Quarterly/Half-Yearly/Annual Results', 'Business Expansion Advisory','Investor Relations and Stakeholder Management']
      },
      {
        title: 'Family Office Advisory',
        image: 'https://cdn.prod.website-files.com/67e45314c1db7f566b36f9ad/68a5cdf97cad5e7b4a4dc416_family-main.jpg',
        description: 'The services we provide are tailored to the unique requirements and goals of our clients. Our professionals use their in-depth understanding of the business world, their grasp of finance, and their strategic perceptions to help corporate management make wise decisions and achieve long-term success. Our family office advisory services are highly personalised and tailored to each family\'s specific requirements and preferences.',
        features: ['Wealth management', 'Investment management', 'Tax guidance', 'Estate planning', 'Philanthropic services', 'Concierge services']
      },
      {
        title: 'Special Situations Advisory',
        image: 'https://static.wixstatic.com/media/db8f69_b00ecfbe476647aab1e07a014a748353~mv2.jpg/v1/fill/w_1000%2Ch_666%2Cal_c%2Cq_85%2Cusm_0.66_1.00_0.01/db8f69_b00ecfbe476647aab1e07a014a748353~mv2.jpg',
        description: 'We offer professional consulting services to businesses or investors who are dealing with unusual or complex situations and need advice and knowledge on a strategic level. Distressed circumstances, mergers and acquisitions, restructurings, divestitures, litigation, or other significant events can create exceptional conditions that need for specialised knowledge and customised solutions. We aid in providing special answers to the required problem.',
        features: ['Distressed situations', 'Mergers and Acquisitions (M&A)', 'Capital structure optimization', 'Crisis management', 'Litigation and Dispute Resolution', 'Special Investments','Crisis Management','Risk Assessment and Mitigation']
      }
    ]
  }
};

// Main Services Cards Component
const ServicesGridRef = React.createRef();

function MainServicesGrid({ onSelectService }) {
  const services = Object.entries(mainServicesData).map(([key, data]) => ({
    id: key,
    ...data
  }));

  return (
    <div ref={ServicesGridRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {services.map((service, idx) => {
        const IconComponent = service.icon;
        return (
          <div
            key={service.id}
            id={`service-${service.id}`}
            onClick={() => onSelectService(service.id)}
            className="motion-fade-in group bg-white p-8 rounded-lg border border-blue-200 hover:border-blue-500 hover:bg-blue-50 hover:shadow-xl transition-all duration-300 cursor-pointer"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-6 group-hover:from-blue-200 group-hover:to-blue-100 transition-all">
              <IconComponent className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {service.description}
            </p>
            <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
              Explore Services →
            </div>
          </div>
        );
      })}
    </div>
  );
}

// Sub Service Detail Modal Component
function SubServiceDetailModal({ subService, onClose }) {
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [subService]);

  if (!subService) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden"
      onClick={onClose}
    >
      <div className="flex items-center justify-center h-full p-4">
        <div
          ref={scrollContainerRef}
          className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 flex justify-between items-start flex-shrink-0">
          <div>
            <h2 className="text-3xl font-bold">{subService.title}</h2>
            <p className="text-blue-100 mt-2">{subService.description}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-800 rounded-full p-2 transition-colors flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 min-h-0 p-8">
          {subService.detailedContent && subService.sections ? (
            <div className="space-y-6">
              {subService.sections.map((section, sidx) => (
                <div key={sidx} className="bg-gray-50 p-6 rounded-lg border border-gray-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h3>
                  {section.items ? (
                    <ul className="space-y-2">
                      {section.items.map((item, iidx) => (
                        <li key={iidx} className="flex items-start text-sm text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-700 leading-relaxed">{section.description}</p>
                  )}
                </div>
              ))}
            </div>
          ) : subService.features ? (
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Our Services</h3>
              <ul className="space-y-3">
                {subService.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start text-sm text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-300">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      </div>
    </div>
  );
}

// Service Detail Modal Component
function ServiceDetailModal({ serviceId, onClose, onSelectSubService }) {
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [serviceId]);

  const service = mainServicesData[serviceId];
  if (!service) return null;

  const IconComponent = service.icon;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden"
      onClick={onClose}
    >
      <div className="flex items-center justify-center h-full p-4">
        <div
          ref={scrollContainerRef}
          className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 flex justify-between items-start flex-shrink-0">
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-lg">
              <IconComponent className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">{service.title}</h2>
              <p className="text-blue-100 mt-2">{service.shortDesc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:bg-blue-800 rounded-full p-2 transition-colors flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Overview */}
        {service.overview && (
          <div className="bg-blue-50 border-b border-blue-200 p-8 flex-shrink-0">
            <p className="text-gray-700 leading-relaxed">{service.overview}</p>
          </div>
        )}

        {/* Sub Services Grid */}
        <div className="flex-1 min-h-0 p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">Our {service.title} Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.subServices.map((subService, idx) => {
              const isClickable = subService.title === 'Startup Advisory' || subService.detailedContent;
              return (
                <div
                  key={idx}
                  onClick={() => isClickable && onSelectSubService(subService)}
                  className={`bg-white border border-gray-200 rounded-lg overflow-hidden transition-shadow ${
                    isClickable ? 'hover:shadow-lg cursor-pointer' : ''
                  }`}
                >
                  <img
                    src={subService.image}
                    alt={subService.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{subService.title}</h4>
                    <p className="text-gray-700 mb-4 text-sm leading-relaxed">{subService.description}</p>
                    
                    {/* Features for services without detailed content */}
                    {!isClickable && subService.features && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-xs font-semibold text-gray-700 mb-3">our Services</div>
                        <ul className="space-y-2">
                          {subService.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {isClickable && (
                      <div className="flex items-center text-blue-600 font-semibold text-sm">
                        View Details →
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

// Venture Services Grid Component
function VentureServicesGrid({ onSelectService }) {
  const ventureServices = Object.entries(clientSegmentsData).map(([id, data]) => ({
    id,
    ...data
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ventureServices.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === ventureServices.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getVisibleCards = () => {
    const visibleCount = 3;
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % ventureServices.length;
      cards.push(ventureServices[index]);
    }
    return cards;
  };

  return (
    <div>
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Who We Serve</h2>
        <p className="text-gray-600">Tailored solutions for diverse client segments across the financial ecosystem</p>
      </div>
      <div className="relative">
        <button
          onClick={goToPrevious}
          className="absolute -left-16 top-1/2 transform -translate-y-1/2 z-20 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute -right-16 top-1/2 transform -translate-y-1/2 z-20 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Cards Grid - 3 visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {getVisibleCards().map((service, idx) => {
            const IconComponent = service.icon;
            const isActive = service.id === ventureServices[currentIndex].id;
            return (
              <div
                key={service.id}
                onClick={() => {
                  const index = ventureServices.findIndex(s => s.id === service.id);
                  setCurrentIndex(index);
                }}
                className={`group relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer transform ${
                  isActive
                    ? 'bg-blue-500 text-white shadow-xl scale-105 border-2 border-blue-600'
                    : 'bg-white text-slate-900 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg'
                }`}
              >
                {/* Image Background */}
                <div className="relative h-40 overflow-hidden bg-gray-200">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-300 ${isActive ? 'scale-110 opacity-50' : 'group-hover:scale-105'}`}
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 ${isActive ? 'bg-blue-600/80' : 'bg-gradient-to-t from-black/40 to-transparent'}`}></div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-5 text-center">
                  <div className={`text-xs font-semibold mb-2 px-2 py-1 rounded-full inline-block transition-colors duration-300 ${
                    isActive ? 'bg-white/30 text-white' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {service.category}
                  </div>
                  <div className={`text-4xl mb-3 transition-all duration-300 ${isActive ? 'text-white scale-110' : 'text-blue-600 group-hover:scale-110'}`}>
                    <IconComponent size={40} />
                  </div>
                  <h3 className={`text-base font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-slate-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-xs leading-snug transition-colors duration-300 ${isActive ? 'text-blue-50' : 'text-gray-600'}`}>
                    {service.shortDesc}
                  </p>

                  {isActive && (
                    <div className="mt-4 pt-3 border-t border-white/30">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.id);
                        }}
                        className="w-full py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  )}
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="flex justify-center gap-3 mt-12">
        {ventureServices.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? 'w-8 h-3 bg-blue-600'
                : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Venture Service Detail Modal
function VentureServiceDetailModal({ serviceId, onClose }) {
  const scrollContainerRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [serviceId]);

  const service = clientSegmentsData[serviceId];
  
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-hidden">
      <div className="flex items-center justify-center h-full p-4">
        <div ref={scrollContainerRef} className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto flex flex-col">
          <div className="sticky top-0 flex justify-between items-center p-6 border-b bg-white rounded-t-lg flex-shrink-0">
          <h2 className="text-3xl font-bold text-slate-900">{service.title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="p-6 flex-1 min-h-0">
          <p className="text-gray-700 leading-relaxed mb-8">
            {service.overview}
          </p>

          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Features</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Expert consultation and guidance
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Proven track record in this field
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Dedicated support from experienced professionals
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Customized solutions for your needs
              </li>
              <li className="flex items-center text-gray-700">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Comprehensive market insights and analysis
              </li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              Get Started
            </a>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

// Main ServicesPage Component
function ServicesPage() {
  const [searchParams] = useSearchParams();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubService, setSelectedSubService] = useState(null);
  const [selectedVentureService, setSelectedVentureService] = useState(null);

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    
    // Check if it's a main service and scroll to it
    if (serviceParam && mainServicesData[serviceParam]) {
  setTimeout(() => {
    const serviceCard = document.getElementById(`service-${serviceParam}`);
    if (serviceCard) {
      serviceCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 200);
}
    else if (serviceParam && clientSegmentsData[serviceParam]) {
      setTimeout(() => {
        const ventureServicesSection = document.getElementById('venture-services-section');
        if (ventureServicesSection) {
          ventureServicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }, [searchParams]);

  return (
    <div className="pt-14">
      <ServiceHero />

      {/* Main Services Section */}
      <section id="main-services-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MainServicesGrid onSelectService={setSelectedService} />
        </div>
      </section>

      {/* Venture Services Section */}
      <section id="venture-services-section" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <VentureServicesGrid onSelectService={setSelectedVentureService} />
        </div>
      </section>

      {selectedService && (
        <ServiceDetailModal
          serviceId={selectedService}
          onClose={() => setSelectedService(null)}
          onSelectSubService={setSelectedSubService}
        />
      )}

      {selectedSubService && (
        <SubServiceDetailModal
          subService={selectedSubService}
          onClose={() => setSelectedSubService(null)}
        />
      )}

      {selectedVentureService && (
        <VentureServiceDetailModal
          serviceId={selectedVentureService}
          onClose={() => setSelectedVentureService(null)}
        />
      )}
    </div>
  );
}

export default ServicesPage;
