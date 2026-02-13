import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b4f81] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl z-0 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef5b2d]/10 rounded-full blur-3xl z-0 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-[#0b4f81] font-bold text-xl">S</span>
              </div>
              <h3 className="text-xl font-bold tracking-wide">SSR ACS</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              SSR College of Arts, Commerce and Science is committed to
              providing quality education and fostering holistic development.
              Join us in shaping a brighter future.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#ef5b2d] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ef5b2d] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Prioritizing", href: "/principals-desk" },
                { name: "About Us", href: "/about" },
                { name: "Academic Programs", href: "/available-programmes" },
                { name: "Admission", href: "/admission" },
                { name: "Gallery", href: "/photo-gallery" },
                { name: "Alumni", href: "/alumni" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#ef5b2d] hover:pl-2 transition-all duration-300 flex items-center gap-2 text-sm group"
                  >
                    <ArrowRight className="w-3 h-3 text-[#ef5b2d] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ef5b2d] rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 group">
                <div className="mt-1 p-2 rounded-full bg-white/10 group-hover:bg-[#ef5b2d] transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 leading-relaxed">
                  SSR College of Arts, Commerce & Science,
                  <br />
                  Sayli-Silvassa Road, Silvassa - 396230,
                  <br />
                  Dadra & Nagar Haveli (U.T.)
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#ef5b2d] transition-colors duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-300 hover:text-white transition-colors">
                  +91 90811 60001 / 2 / 3 / 4 / 5 / 9
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded-full bg-white/10 group-hover:bg-[#ef5b2d] transition-colors duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a
                  href="mailto:ssrcollege@gmail.com"
                  className="text-gray-300 hover:text-[#ef5b2d] transition-colors break-all"
                >
                  ssrcollegeacs2006@rediffmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Map */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Locate Us
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#ef5b2d] rounded-full"></span>
            </h3>
            <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white/10 h-48 group relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3740.7516669926445!2d73.044033!3d20.251919!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be09b1f28787c33%3A0x6b86673523f9829f!2sSSR%20College%20of%20Arts%2C%20Commerce%20and%20Science%2C%20Silvassa!5e0!3m2!1sen!2sin!4v1709403348123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <a
                  href="https://maps.app.goo.gl/XXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-xs font-semibold flex items-center gap-1 hover:text-[#ef5b2d] transition-colors"
                >
                  View Larger Map <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {currentYear} SSR ACS College. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-use"
              className="hover:text-white transition-colors"
            >
              Terms of Use
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
          <p className="flex items-center gap-1">
            Designed with <span className="text-red-500 animate-pulse">❤</span>{" "}
            by{" "}
            <a
              href="#"
              className="font-semibold text-white hover:text-[#ef5b2d] transition-colors"
            >
              SSR Tech Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
