import Link from "next/link";

const divisions = [
  { name: "Volatus Unmanned Service", href: "#" },
  { name: "Volatus Drones Canada", href: "#" },
  { name: "Volatus Drones", href: "#" },
  { name: "Volatus Aérospatial", href: "#" },
  { name: "Drone Delivery Canada", href: "#" },
  { name: "Canadian Air National", href: "#" },
  { name: "Synergy Aviation", href: "#" },
  { name: "iRed", href: "#" },
  { name: "UAVHUB", href: "#" },
  { name: "The Drone Mentor", href: "#" },
  { name: "Drones In Ed", href: "#" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Drone Pilot Application", href: "/pilot-application" },
];

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: "linkedin" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "YouTube", href: "#", icon: "youtube" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-50 border-t border-dark-300 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a
                href="tel:1-833-VOLATUS"
                className="block hover:text-neon-purple transition-colors"
              >
                1-833-VOLATUS
              </a>
              <a
                href="tel:833-865-2887"
                className="block hover:text-neon-purple transition-colors"
              >
                833-865-2887
              </a>
              <Link
                href="/pilot-application"
                className="block hover:text-neon-purple transition-colors"
              >
                Drone Pilot Application
              </Link>
            </div>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Our Divisions</h3>
            <ul className="space-y-2">
              {divisions.map((division) => (
                <li key={division.name}>
                  <Link
                    href={division.href}
                    className="hover:text-neon-purple transition-colors text-sm"
                  >
                    {division.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-neon-purple transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Stay Connected</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for updates</p>
            <form className="mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-dark-200 border border-dark-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-purple focus:border-neon-purple mb-2"
              />
              <div className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id="newsletter-consent"
                  className="mr-2"
                />
                <label htmlFor="newsletter-consent" className="text-xs">
                  I agree to be contacted for news and promotions
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-neon hover:shadow-neon-purple text-white font-medium py-2 px-4 rounded-lg transition-all"
              >
                SUBSCRIBE
              </button>
            </form>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-dark-200 border border-dark-300 hover:bg-gradient-neon hover:shadow-neon-purple rounded-full flex items-center justify-center transition-all"
                  aria-label={social.name}
                >
                  <span className="text-sm font-semibold">
                    {social.icon === "linkedin" && "in"}
                    {social.icon === "twitter" && "tw"}
                    {social.icon === "facebook" && "fb"}
                    {social.icon === "youtube" && "yt"}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-300 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Volatus Aerospace. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm hover:text-neon-purple transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm hover:text-neon-purple transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

