import React from 'react';

function Careers() {

  return (
    <div className="pt-14">

      {/* Hero */}
      <section className="py-10 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-blue-800 mb-4 motion-fade-in">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto motion-fade-in" style={{animationDelay: '0.2s'}}>
            Be part of a dynamic team changing the investment banking landscape.
          </p>
        </div>
      </section>


      {/* Why Join Us */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto mb-8">
            <div className="bg-white p-10 rounded-lg border border-blue-200 shadow-md">

              <h2 className="text-3xl font-bold text-blue-800 mb-4 text-center">
                Why Should You Join Us?
              </h2>

              <p className="text-center text-xl text-blue-600 font-semibold mb-6 italic">
                "Join the house of passion & skilled team for revolutionary success"
              </p>

              <p className="text-gray-700 leading-relaxed mb-6">
                We believe that the work we undertake should affect people's lives as well as the environment.
                We constantly strive to combine the best minds, skills, and priorities in order to succeed at that.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <p className="text-gray-800 text-lg font-semibold">
                  If you believe that your contribution can match our desire to perform incredible feats
                  and make a lasting impression, get in touch with us now.
                </p>
              </div>

            </div>
          </div>


          {/* What We Offer */}
          <h3 className="text-3xl font-bold text-center text-blue-800 mb-6">
            What We Offer
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left Timeline */}
            <div className="space-y-8 relative">

              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center z-10">⚙️</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Career Growth</h4>
                  <p className="text-gray-600 text-sm">
                    Opportunities to grow professionally and work on impactful projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center z-10">📊</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Skill Development</h4>
                  <p className="text-gray-600 text-sm">
                    Continuous learning through training, certifications, and mentorship.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center z-10">👥</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Collaborative Culture</h4>
                  <p className="text-gray-600 text-sm">
                    Work in a supportive environment that values teamwork and innovation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center z-10">📈</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Performance Rewards</h4>
                  <p className="text-gray-600 text-sm">
                    Competitive compensation and recognition for outstanding performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 relative">
                <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center z-10">🌍</div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">Meaningful Impact</h4>
                  <p className="text-gray-600 text-sm">
                    Work that contributes to business growth and societal development.
                  </p>
                </div>
              </div>

            </div>


            {/* Right Image */}
            <div className="flex justify-center relative">

              <div className="absolute w-80 h-80 bg-cyan-500 rounded-full right-0"></div>

              <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600"
                  alt="Work"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>

          </div>

        </div>
      </section>



      {/* Life at Capraise */}
      <section className="py-12 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h3 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Life at Capraise
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400"
                className="rounded-lg w-full h-40 object-cover mb-4"
                alt="Culture"
              />
              <h4 className="text-xl font-bold text-blue-800 mb-3">Culture & Values</h4>
              <p className="text-gray-700 text-sm">
                Integrity, excellence, innovation, and collaboration define our work culture.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <img
                src="https://www.talentsapphire.com/uploads/1213/1694852593.jpg"
                className="rounded-lg w-full h-40 object-cover mb-4"
                alt="Skills"
              />
              <h4 className="text-xl font-bold text-blue-800 mb-3">Skills Development</h4>
              <p className="text-gray-700 text-sm">
                We encourage continuous learning through mentorship, training, and certifications.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <img
                src="https://images.presentationgo.com/2025/06/diverse-business-team-collaboration.jpg"
                className="rounded-lg w-full h-40 object-cover mb-4"
                alt="Team"
              />
              <h4 className="text-xl font-bold text-blue-800 mb-3">Team Environment</h4>
              <p className="text-gray-700 text-sm">
                Supportive, collaborative, and inclusive workplace culture.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Careers;