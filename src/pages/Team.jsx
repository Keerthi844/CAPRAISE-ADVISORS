import React from 'react';

function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Kaushik Krishna',
      title: 'Vice President, Tata Group',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      description:
        'Dynamic business leader with proven expertise in new business development, M&A, joint ventures, and product launches. Specializes in quality assurance, customer advocacy, and process excellence.',
      expertise: ['Business Development', 'M&A', 'Product Launch', 'P&L Management']
    },
    {
      id: 2,
      name: 'Devender Kodam',
      title: 'CFO, Capraise Advisors',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop',
      description:
        'Qualified Chartered Accountant with experience across accounting, auditing, taxation, business valuation, debt syndication and private equity advisory. Managing Partner of D K M H and Company.',
      expertise: ['Accounting', 'Auditing', 'Taxation', 'Business Valuation']
    },
    {
      id: 3,
      name: 'Lokesh',
      title: 'Practice Director',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop',
      description:
        'Accomplished Practice Director with extensive experience in leading IT consulting operations, strategic client engagements, and business transformation initiatives.',
      expertise: ['IT Consulting', 'Client Relations', 'Strategic Planning', 'Business Transformation']
    }
  ];

  return (<div className="bg-white pt-14">
    {/* Hero */}
    <section className="py-8 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-blue-800 mb-4 motion-fade-in">
          Our Leadership Team
        </h1>
        <p className="text-xl text-blue-700 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>
          Meet the experienced professionals driving Capraise Advisors' vision and success.
        </p>
      </div>
    </section>

    {/* Team Members */}
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-gradient-to-b from-blue-50 to-white p-8 rounded-lg border border-blue-200 hover:shadow-xl transition"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-blue-300"
              />

              <h3 className="text-2xl font-bold text-blue-800 text-center mb-1">
                {member.name}
              </h3>

              <p className="text-blue-600 text-center font-semibold mb-4">
                {member.title}
              </p>

              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                {member.description}
              </p>

              <div className="flex flex-wrap gap-2 justify-center">
                {member.expertise.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>

    {/* Team Culture */}
    <section className="py-14 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-blue-800 mb-12 text-center">
          Why Our Team Stands Out
        </h2>

        <div className="grid gap-12">

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
              alt="Expert Credentials"
              className="rounded-lg w-full md:w-1/2 h-72 object-cover shadow-lg"
            />

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                Expert Credentials
              </h3>
              <p className="text-gray-700">
                Our team at Capraise Advisors is composed of highly qualified professionals with strong academic and professional credentials. We bring together Chartered Accountants (CAs), Company Secretaries (CSs), Certified Public Accountants (CPAs), MBA graduates, and experienced legal professionals who possess deep expertise across finance, strategy, compliance, and corporate advisory.

                With diverse professional backgrounds and extensive industry exposure, our experts are equipped to handle complex financial transactions, regulatory requirements, and strategic business decisions. Their technical knowledge, combined with practical experience, enables us to deliver reliable insights and high-quality advisory services to our clients.
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600"
              alt="Global Experience"
              className="rounded-lg w-full md:w-1/2 h-72 object-cover shadow-lg"
            />

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                Global Experience
              </h3>

              <p className="text-gray-700">
                Our team brings extensive global experience across diverse industries, markets, and financial environments. With professionals who have worked with leading international organizations, Big 5 accounting firms, global banks, and multinational corporations, we possess deep insights into complex business landscapes and cross-border transactions.

This broad exposure enables us to understand global market trends, regulatory frameworks, and investment opportunities while delivering strategies that align with international best practices. Our experience working with clients across different regions allows us to provide well-informed advisory services tailored to both local and global business needs.
                </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600"
              alt="Integrated Approach"
              className="rounded-lg w-full md:w-1/2 h-72 object-cover shadow-lg"
            />

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                Integrated Approach
              </h3>

              <p className="text-gray-700">
                Our team combines diverse backgrounds and expertise to provide holistic, practical, and results-driven advisory solutions tailored to each client's needs.At Capraise Advisors, we believe that successful outcomes require more than isolated expertise—they require an integrated approach that combines diverse perspectives, industry insights, and strategic thinking. Our multidisciplinary team works collaboratively to evaluate every aspect of a client’s business, from financial performance and market dynamics to operational efficiency and long-term growth opportunities.
              </p>
            </div>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600"
              alt="Client Culture"
              className="rounded-lg w-full md:w-1/2 h-72 object-cover shadow-lg"
            />

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-blue-800 mb-3">
                Client-Centric Culture
              </h3>

              <p className="text-gray-700">
                We prioritize long-term relationships with our clients by understanding their challenges and delivering solutions that create sustainable value.
                At Capraise Advisors, our clients are at the center of everything we do. We believe that building strong, long-term relationships is the foundation of delivering meaningful results. Our team takes the time to understand each client’s business, goals, and challenges in depth, allowing us to provide tailored solutions that align with their strategic vision.

                We maintain open communication, transparency, and responsiveness throughout every engagement. By combining our expertise with a deep commitment to client success, we ensure that our advisory services deliver practical insights and measurable value.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>

  </div>


  );
}

export default Team;
