import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32 -z-10" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef5b2d]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Column */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-[#ef5b2d]/10 text-[#ef5b2d] font-semibold text-sm tracking-wide uppercase">
                About Us
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0b4f81] leading-tight">
                Empowering Minds, <br />
                <span className="text-[#ef5b2d]">Transforming Lives</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                SSR College of Arts, Commerce and Science stands as a beacon of
                excellence in education. With a legacy of nurturing talent and
                fostering innovation, we are committed to providing a holistic
                learning environment that prepares students for the challenges
                of tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "State-of-the-art Infrastructure",
                "Experienced Faculty",
                "Holistic Development",
                "Industry Partnerships",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 group">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#0b4f81]/5 flex items-center justify-center group-hover:bg-[#0b4f81] transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-[#0b4f81] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#0b4f81] border border-transparent rounded-full hover:bg-[#093e66] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0b4f81]"
              >
                Discover More
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-8 pt-8 border-t border-gray-100">
              <div>
                <p className="text-4xl font-bold text-[#0b4f81]">25+</p>
                <p className="text-sm text-gray-500 font-medium">
                  Years of Excellence
                </p>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div>
                <p className="text-4xl font-bold text-[#ef5b2d]">5000+</p>
                <p className="text-sm text-gray-500 font-medium">
                  Successful Alumni
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative group perspective-1000">
            {/* Main Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:rotate-1 z-10">
              <Image
                src="/images/IMG_5304-scaled.jpg.jpeg"
                alt="College Campus"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#0b4f81]/10 mix-blend-multiply transition-opacity duration-300 hover:opacity-0"></div>
            </div>

            {/* Floating Cards/Decorations */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 animate-float-slow hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-bold text-gray-900">#1 Ranked</p>
                  <p className="text-xs text-gray-500">In the District</p>
                </div>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-dots-pattern opacity-10 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#ef5b2d] rounded-2xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
