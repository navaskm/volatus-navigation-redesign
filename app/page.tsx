import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-dark-50 via-dark-100 to-dark-50 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/10 via-neon-blue/10 to-neon-pink/10"></div>
        <div className="container mx-auto px-4 py-24 lg:py-32 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Advanced Drone Solutions
              <br />
              <span className="text-glow-purple text-transparent bg-clip-text bg-gradient-to-r from-neon-purple via-neon-blue to-neon-pink">
                for Modern Industries
              </span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Leading provider of comprehensive drone equipment, professional services, and expert training
              solutions. Empowering businesses with cutting-edge aerial technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/equipment"
                className="bg-gradient-neon hover:shadow-neon-purple text-white px-8 py-3 rounded-lg font-semibold transition-all text-center"
              >
                Explore Equipment
              </Link>
              <Link
                href="/service"
                className="bg-dark-200 border-2 border-neon-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-300 hover:shadow-neon-purple transition-all text-center"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-dark-50 to-transparent"></div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your industry needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Equipment Card */}
            <div className="bg-dark-200 border border-dark-300 rounded-xl p-8 hover:shadow-neon-purple hover:border-neon-purple transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-blue rounded-lg flex items-center justify-center mb-6 shadow-neon-purple">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Equipment</h3>
              <p className="text-gray-400 mb-6">
                Premium drones, specialist payloads, software solutions, and accessories from leading manufacturers.
                Vetted and tested for professional use.
              </p>
              <Link
                href="/equipment"
                className="text-neon-purple font-semibold hover:text-neon-blue inline-flex items-center"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service Card */}
            <div className="bg-dark-200 border border-dark-300 rounded-xl p-8 hover:shadow-neon-blue hover:border-neon-blue transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center mb-6 shadow-neon-blue">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional Services</h3>
              <p className="text-gray-400 mb-6">
                Expert inspection services, bespoke aerial solutions, and cargo delivery services. Certified
                pilots and cutting-edge technology.
              </p>
              <Link
                href="/service"
                className="text-neon-blue font-semibold hover:text-neon-cyan inline-flex items-center"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Academy Card */}
            <div className="bg-dark-200 border border-dark-300 rounded-xl p-8 hover:shadow-neon-pink hover:border-neon-pink transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-neon-pink to-neon-purple rounded-lg flex items-center justify-center mb-6 shadow-neon-pink">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Academy</h3>
              <p className="text-gray-400 mb-6">
                Comprehensive pilot training and specialist certification programs. Industry-leading curriculum
                for both beginners and advanced operators.
              </p>
              <Link
                href="/academy"
                className="text-neon-pink font-semibold hover:text-neon-purple inline-flex items-center"
              >
                Learn More
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-dark-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Serving Multiple Industries</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for diverse industry needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              "Oil & Gas",
              "Energy & Utilities",
              "Construction & Engineering",
              "Defense",
              "Forestry & Conservation",
              "Government Agencies",
              "Infrastructure & Transportation",
              "Mining & Aggregate",
              "Precision Agriculture",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-dark-200 border border-dark-300 rounded-lg p-6 text-center hover:shadow-neon-purple hover:border-neon-purple transition-all cursor-pointer"
              >
                <h3 className="font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/industries"
              className="inline-block bg-gradient-neon hover:shadow-neon-purple text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Choose Volatus Aerospace?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Certified Expertise",
                  description: "All our pilots and technicians are fully certified and continuously trained on the latest technologies.",
                },
                {
                  title: "Cutting-Edge Technology",
                  description: "Access to the latest drone equipment and payload systems from industry-leading manufacturers.",
                },
                {
                  title: "Comprehensive Solutions",
                  description: "From equipment sales to training and professional services, we provide end-to-end solutions.",
                },
                {
                  title: "Industry Experience",
                  description: "Years of experience serving diverse industries with proven track records and satisfied clients.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-neon rounded-lg flex items-center justify-center shadow-neon-purple">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-dark-100 via-dark-50 to-dark-100 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 via-neon-blue/20 to-neon-pink/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-6 text-glow-purple">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Contact us today to discuss how our drone solutions can benefit your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-neon hover:shadow-neon-purple text-white px-8 py-3 rounded-lg font-semibold transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/service"
              className="bg-dark-200 border-2 border-neon-purple text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-300 hover:shadow-neon-purple transition-all"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
