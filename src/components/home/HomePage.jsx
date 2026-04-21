import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiDollarSign, FiRefreshCw, FiBarChart2, FiBriefcase, FiTrendingUp, FiGlobe, FiCheck, FiZap, FiBox, FiUsers } from 'react-icons/fi';

// HeroSection Component
function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const carouselImages = [
        { src: '/images/Banner.jpg', alt: 'Business Meeting' },
        { src: '/images/Businesses.jpg', alt: 'Business Success' },
        { src: '/images/funding.jpg', alt: 'Funding Solutions' },
        { src: '/images/Restructuring.jpg', alt: 'Restructuring Services' },
        { src: '/images/Advisory.jpg', alt: 'Advisory Services' }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
    };

    return (
        <section className="relative min-h-screen pt-32 pb-16 bg-gradient-to-br from-blue-900 via-blue-900 to-blue-900 overflow-hidden">
            {/* Premium overlays */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-700 rounded-full blur-3xl opacity-25"></div>
            </div>

            {/* Decorative top accent */}
            <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center h-full">
                    {/* Content Section */}
                    <div>
                        {/* Premium Tag */}
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-blue-500/40 rounded-full bg-blue-500/5 backdrop-blur-sm motion-fade-in">
                            <svg className="w-3 h-3 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-xs text-blue-300 font-medium">Premium Advisory Services</span>
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-4xl lg:text-5xl font-serif text-white mb-4 leading-tight motion-fade-in animation-delay-200">
                            Strategic Financial Solutions for Global Success<br />

                        </h1>

                        {/* Divider */}
                        <div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-blue-400 mb-4"></div>

                        {/* Description */}
                        <p className="text-sm text-gray-300 mb-8 leading-relaxed max-w-lg motion-fade-in animation-delay-400">
                            Multi-disciplinary investment banking and advisory firm specializing in comprehensive financial and strategic solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 motion-fade-in animation-delay-600">
                            <Link
                                to="/contact"
                                className="group px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                            >
                                Schedule Consultation
                            </Link>

                            <Link
                                to="/about"
                                className="px-6 py-2 border-2 border-blue-500/50 text-blue-300 text-sm hover:border-blue-400 hover:text-blue-200 hover:bg-blue-500/10 font-semibold transition-all duration-300"
                            >
                                Our Story
                            </Link>
                        </div>
                    </div>

                    {/* Image Section with Carousel */}
                    <div className="relative motion-float">
                        <div className="relative group">
                            {/* Premium frame effect */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-blue-500 to-emerald-600 opacity-0 group-hover:opacity-20 blur-2xl transition duration-500 -z-10"></div>

                            {/* Inner frame */}
                            <div className="relative p-1 bg-gradient-to-br from-blue-500/30 to-transparent rounded-lg overflow-hidden">
                                {/* Carousel Images */}
                                <div className="relative w-full h-72 lg:h-96 rounded-lg overflow-hidden">
                                    {carouselImages.map((image, idx) => (
                                        <img
                                            key={idx}
                                            src={image.src}
                                            alt={image.alt}
                                            className={`absolute w-full h-full object-cover rounded-lg transition-opacity duration-500 ${idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                                }`}
                                        />
                                    ))}
                                </div>

                                {/* Carousel Navigation Buttons */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full transition-all duration-300 group-hover:scale-110"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>

                                <button
                                    onClick={nextImage}
                                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-blue-600 p-2 rounded-full transition-all duration-300 group-hover:scale-110"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Carousel Dots */}
                                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                                    {carouselImages.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentImageIndex(idx)}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Corner accents */}
                            <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-blue-500 transition group-hover:border-blue-400 group-hover:w-12 group-hover:h-12 duration-500"></div>
                            <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-blue-500 transition group-hover:border-blue-400 group-hover:w-12 group-hover:h-12 duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
function HighlightsSection() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="motion-float">
                        <div className="relative group">
                            <img
                                src="/images/Businesses.jpg"
                                alt="Success Stories"
                                className="relative rounded-2xl w-full h-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="pl-4 lg:pl-8">
                        <h1 className="text-2xl lg:text-5xl font-bold text-slate-900 mb-8 motion-fade-in leading-tight">
                            Transforming<br />
                            <span className="text-blue-600">Businesses</span><br />
                            Worldwide
                        </h1>

                        <p className="text-base text-gray-700 leading-relaxed mb-6 motion-fade-in animation-delay-200">
                            At Capraise Advisors, we are committed to transforming businesses by delivering strategic financial solutions that drive sustainable growth and long-term value. Our expertise spans investment banking, fundraising, restructuring, and advisory services, enabling us to support organizations at every stage of their business journey.

                            With a strong understanding of global markets and industry dynamics, we help businesses navigate complex financial challenges, unlock new opportunities, and achieve their strategic objectives. Our team works closely with clients to design customized solutions that align with their vision and growth ambitions.

                            Through innovation, deep industry expertise, and a client-focused approach, Capraise Advisors continues to empower businesses worldwide to scale, adapt, and succeed in an ever-evolving economic landscape.
                        </p>

                        <p className="text-base text-gray-700 leading-relaxed mb-10 motion-fade-in animation-delay-400">
                            Our integrated team of experts brings deep industry knowledge and execution excellence to every engagement.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}



function ServicesPreview() {
    const services = [
        {
            id: 'fundraising',
            icon: FiDollarSign,
            title: 'Fundraising',
            description: 'Debt syndication, private equity syndication, and M&A advisory to meet your funding needs.',
            image: '/images/funding.jpg',
            delay: '0s'
        },
        {
            id: 'restructuring',
            icon: FiRefreshCw,
            title: 'Restructuring',
            description: 'Financial, operational, organizational, and strategic restructuring for sustainable growth.',
            image: '/images/Restructuring.jpg',
            delay: '0.2s'
        },
        {
            id: 'advisory',
            icon: FiBarChart2,
            title: 'Advisory',
            description: 'Startup, capital market, corporate, family office, and special situations advisory.',
            image: '/images/Advisory.jpg',
            delay: '0.4s'
        }
    ];

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {services.map((service, idx) => {
                        const IconComponent = service.icon;
                        return (
                            <div
                                key={idx}
                                className="motion-fade-in bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-blue-200 hover:shadow-lg transition"
                                style={{ animationDelay: service.delay }}
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="rounded-lg w-full h-48 object-cover mb-4"
                                />
                                <div className="text-4xl mb-4 text-blue-600">
                                    <IconComponent size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-700 mb-4">{service.title}</h3>
                                <p className="text-gray-700 mb-4">{service.description}</p>
                                <Link to={`/services?service=${service.id}`} className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</Link>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}

// WhyChooseUs Component
function WhyChooseUs() {
    const reasons = [
        {
            icon: FiCheck,
            title: 'Tailored Services',
            description: 'Experts in facilitating complicated financial transactions and help clients navigate challenging procedures',
            delay: '0s'
        },
        {
            icon: FiTrendingUp,
            title: 'Analytical Approach',
            description: 'We carefully examine the financial standing, market developments, and expansion possibilities of businesses to offer insightful information for decision-making',
            delay: '0.2s'
        },
        {
            icon: FiGlobe,
            title: 'Robust Network',
            description: 'Our extensive network helps connect clients with the appropriate prospects and resources such as important stakeholders, including regulators, corporate executives, and investors',
            delay: '0.4s'
        },
        {
            icon: FiTrendingUp,
            title: 'One-on-One Services',
            description: 'Customised business process structure for individual clients with personalized solutions',
            delay: '0.2s'
        },
        {
            icon: FiGlobe,
            title: 'Leading Team of Experts',
            description: 'Experienced CAs, CSs, CPAs, MBAs, ex-bankers, lawyers, and more',
            delay: '0.4s'
        }
    ];

    return (
        <section className="py-2 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4 motion-fade-in">Why Choose Capraise?</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto motion-fade-in" style={{ animationDelay: '0.1s' }}>We deliver excellence through expertise, innovation, and personalized service</p>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent mx-auto mt-8"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {reasons.map((reason, idx) => {

                        return (
                            <div
                                key={idx}
                                className="motion-fade-in group relative p-8 rounded-2xl border border-gray-200 bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300"
                                style={{ animationDelay: reason.delay }}
                            >
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform">
                                    {idx + 1}
                                </div>

                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-transparent rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{reason.title}</h3>
                                <p className="text-gray-600 leading-relaxed mb-6">{reason.description}</p>
                                <ul className="space-y-3">
                                    <li className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Expert consultation
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Proven track record
                                    </li>
                                    <li className="flex items-center text-gray-700">
                                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                                        Dedicated support
                                    </li>
                                </ul>
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity duration-300"></div>
                            </div>
                        );
                    })}
                </div>
                <div className="mt-20 pt-6 border-t border-gray-200 text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 motion-fade-in">Ready to Elevate Your Financial Strategy?</h3>
                    <p className="text-lg text-gray-600 mb-10 motion-fade-in" style={{ animationDelay: '0.1s' }}>Let's explore how Capraise can help you achieve your goals</p>
                    <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg motion-fade-in" style={{ animationDelay: '0.2s' }}>
                        Schedule a Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
function CTASection() {
    return (
        <section className="relative py-6 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-600 text-white overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4 motion-fade-in leading-tight">Ready to Transform Your Business?</h2>
                <p className="text-lg text-blue-50 mb-8 max-w-2xl mx-auto motion-fade-in animation-delay-200">Let's discuss how Capraise Advisors can help you achieve your financial goals.</p>
                <div className="motion-fade-in animation-delay-400">
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold text-base transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    >
                        Contact Us Today →
                    </Link>
                </div>
            </div>
        </section>
    );
}
function WhoWeServe() {
    const clients = [
        {
            id: 'venture-capitalists',
            icon: FiBriefcase,
            title: 'Venture Capitalists & PE Firms',
            description: 'Strategic partners in growth equity investments and portfolio management'
        },
        {
            id: 'angel-investors',
            icon: FiDollarSign,
            title: 'Angel Investors & HNIs',
            description: 'Wealth management and investment advisory for high net worth individuals'
        },
        {
            id: 'startups',
            icon: FiTrendingUp,
            title: 'Startups & Entrepreneurs',
            description: 'Fundraising guidance and business scaling support for growing companies'
        },
        {
            id: 'incubators',
            icon: FiZap,
            title: 'Incubators & Accelerators',
            description: 'Advisory support for ecosystem players driving innovation'
        },
        {
            id: 'corporations',
            icon: FiBox,
            title: 'Established Corporations',
            description: 'Strategic advisory for expansion, restructuring, and optimization'
        },
        {
            id: 'family-offices',
            icon: FiUsers,
            title: 'Family Offices',
            description: 'Comprehensive wealth and investment management services'
        }
    ];

    return (
        <section className="py-6 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-slate-900 mb-4 motion-fade-in">Who We Serve</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto motion-fade-in" style={{ animationDelay: '0.2s' }}>
                        We provide tailored solutions for diverse client segments across the financial ecosystem
                    </p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-400 mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {clients.map((client, idx) => {
                        const IconComponent = client.icon;
                        return (
                            <Link
                                key={idx}
                                to={`/services?service=${client.id}`}
                                className="motion-fade-in group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300 relative cursor-pointer"
                                style={{ animationDelay: `${idx * 0.08}s` }}
                            >
                                {/* Top accent bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg mb-4 group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300">
                                    <IconComponent className="w-7 h-7 text-blue-600 group-hover:text-blue-700 transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {client.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {client.description}
                                </p>
                                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm mt-4 group-hover:text-blue-700 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    Explore Services
                                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </Link>
                        );
                    })}
                </div>
                <div className="mt-16 pt-8 border-t border-gray-200 text-center">
                    <h3 className="text-3xl font-bold text-slate-900 mb-4 motion-fade-in">Don't See Your Profile?</h3>
                    <p className="text-lg text-gray-600 mb-8 motion-fade-in" style={{ animationDelay: '0.1s' }}>
                        Every business is unique. Let's explore how Capraise can help your organization thrive.
                    </p>
                    <a href="/contact" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg motion-fade-in" style={{ animationDelay: '0.2s' }}>
                        Start a Conversation
                    </a>
                </div>
            </div>
        </section>
    );
}

function HomePage() {
    return (
        <div className="w-full overflow-x-hidden">
            <HeroSection />
            <ServicesPreview />
            <WhyChooseUs />
            <WhoWeServe />
            <HighlightsSection />
            <CTASection />
        </div>
    );
}

export default HomePage;
export { HeroSection, HighlightsSection, ServicesPreview, WhyChooseUs, CTASection, WhoWeServe };
