import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
const [formData, setFormData] = useState({
name: '',
email: '',
phone: '',
company: '',
message: ''
})

const [submitted, setSubmitted] = useState(false)
const [submittedData, setSubmittedData] = useState({})

const handleChange = (e) => {
const { name, value } = e.target
setFormData(prev => ({
...prev,
[name]: value
}))
}

const handleSubmit = (e) => {
e.preventDefault()
console.log('Contact form submitted:', formData)

// Store submitted data for modal display
setSubmittedData(formData)

// Show success message
setSubmitted(true)

// Reset form
setFormData({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

// Auto-hide success message after 5 seconds
setTimeout(() => {
  setSubmitted(false)
}, 5000)
}

return ( 
  <div className="bg-white">
    
    {/* Success Modal */}
    {submitted && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-md w-full p-8 shadow-2xl text-center animate-in fade-in duration-300">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <FiCheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
          <p className="text-gray-700 mb-6">
            Thank you for reaching out to Capraise Advisors. We have received your message and will get back to you as soon as possible.
          </p>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6 text-left">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Name:</span> {submittedData.name}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              <span className="font-semibold">Email:</span> {submittedData.email}
            </p>
            {submittedData.phone && (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Phone:</span> {submittedData.phone}
              </p>
            )}
            {submittedData.company && (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Company:</span> {submittedData.company}
              </p>
            )}
          </div>
          
          <p className="text-sm text-gray-500 mb-4">
            Expected response time: 24-48 hours
          </p>
          
          <button
            onClick={() => setSubmitted(false)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Dismiss
          </button>
        </div>
      </div>
    )}

    {/* Hero Section */}
    <section className="pt-16 pb-6 bg-gradient-to-br from-blue-50 to-blue-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl font-bold text-blue-800 mb-4">Get In Touch</h1>
      <p className="text-xl text-blue-700 max-w-3xl mx-auto">
        Let's discuss how we can help your business succeed
      </p>
    </div>
  </section>


  {/* Contact Information */}
  <section className="py-6 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center min-h-[400px]">

      {/* Left Side */}
      <div className="flex flex-col justify-center h-full md:pl-24 lg:pl-32">

        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h2>

        <div className="flex items-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-blue-500 text-blue-600 mr-4">
            <FiMapPin size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Address:</h4>
            <p className="text-gray-600">Hyderabad, India</p>
          </div>
        </div>

        <div className="flex items-center mb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-green-500 text-green-600 mr-4">
            <FiPhone size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Contact Numbers:</h4>
            <p className="text-gray-600">+91-XXXXXXXXXX</p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-orange-500 text-orange-600 mr-4">
            <FiMail size={24} />
          </div>
          <div>
            <h4 className="font-semibold text-lg">Email Address:</h4>
            <p className="text-gray-600">info@capraise.com</p>
          </div>
        </div>

      </div>


      {/* Right Image */}
      <div className="relative flex justify-center items-center h-[420px]">

        <div className="absolute right-0 top-0 w-[80%] h-full bg-gradient-to-b from-blue-900 to-blue-700 rounded-l-[120px]"></div>

        <div className="absolute right-0 bottom-0 w-[70%] h-[60%] bg-gradient-to-br from-blue-500 to-blue-300 rounded-l-[100px]"></div>

        <div className="relative z-10 bg-white p-3 rounded-[30px] shadow-2xl">
          <img
            src="https://st5.depositphotos.com/9999814/66329/i/450/depositphotos_663291694-stock-photo-two-business-people-shake-hand.jpg"
            alt="Business people shaking hands"
            className="w-72 h-72 object-cover rounded-[25px]"
          />
        </div>

      </div>

    </div>
  </section>


  {/* Contact Form */}
  <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
    <div className="max-w-4xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Send us a Message
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                className="w-full px-4 py-2 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg"
              />

            </div>

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded-lg"
              />

              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full px-4 py-2 border rounded-lg"
              />

            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Message"
              required
              className="w-full px-4 py-2 border rounded-lg"
            />

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg flex justify-center items-center gap-2 hover:bg-blue-700">
              <FiSend />
              Send Message
            </button>

          </form>

        </div>


        {/* Info Box */}
        <div className="bg-blue-600 text-white p-8 rounded-lg">

          <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>

          <ul className="space-y-4 text-sm">

            <li>✓ Expert advisory on investment banking matters</li>
            <li>✓ Tailored solutions for your business needs</li>
            <li>✓ Access to our investor network</li>
            <li>✓ Strategic growth guidance</li>

          </ul>

        </div>

      </div>

    </div>
  </section>


  {/* Map */}
  <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">

    <div className="max-w-7xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
        Find Us On The Map
      </h2>

      <div className="rounded-lg overflow-hidden shadow-lg">

        <iframe
          title="Capraise Advisors Location - Hyderabad"
          src="https://www.google.com/maps?q=Hyderabad&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </div>

    </div>

  </section>


  {/* Social */}
  <section className="pt-6 pb-12 text-center">

    <h2 className="text-3xl font-bold mb-6 text-gray-900">
      Connect With Us
    </h2>

    <p className="text-gray-700 mb-6">
      Follow us on social media for updates
    </p>

    <a
      href="https://www.instagram.com/capraiseadvisors/"
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg"
    >
      📸 Instagram
    </a>

  </section>

</div>


)
}
