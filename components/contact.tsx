import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Sparkles } from "lucide-react"

export default function CompactContact() {
  return (
    <section className="py-16 px-4 ">
      <div className="max-w-4xl mx-auto">
        {/* Creative Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <Sparkles className="w-8 h-8 text-purple-400 animate-pulse" />
          </div>
          <h2 className="text-3xl font-bold bg-purple-700 bg-clip-text text-transparent mb-2">
            Let's Create Magic
          </h2>
          <p className="text-gray-600">Drop me a line and let's build something amazing</p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Contact Info */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5" />
                    <span className="text-sm">musiadkhan39@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5" />
                    <span className="text-sm">+92 3377518298</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">Karachi ,Sindh</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm mb-4 opacity-90">Follow me on</p>
                  <div className="flex space-x-3">
                    <a
                      href="https://github.com/usaidkhan123"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/muhammad-usaid-khan-0b47082ba/"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-8">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors"
                />

                <textarea
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-colors resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Quick CTA */}
        {/* <div className="text-center mt-8">
          <p className="text-gray-600 text-sm mb-4">Prefer a quick chat?</p>
          <button className="px-4 py-2 border border-purple-200 text-purple-600 hover:bg-purple-50 rounded-md transition-colors font-medium">
            Schedule a 15-min call
          </button>
        </div> */}
      </div>
    </section>
  )
}
