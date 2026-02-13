import Image from "next/image";
import { Quote, Mail, Award, Clock } from "lucide-react";

export default function PillarsOfStrength() {
  return (
    <main className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full py-20 bg-[#0b4f81] overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero-banner.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Pillars of Strength
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            The visionary leadership and unwavering commitment that drives the
            excellence of SSR College.
          </p>
          <div className="w-24 h-1 bg-[#ef5b2d] mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Image Column */}
            <div className="w-full lg:w-5/12 group sticky top-24">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 bg-white p-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src="/images/Pillar-of-Strength-02-724x1024.jpg" // Using the exact image found
                    alt="Late Shri. Mohan S. Delkar" // Commonly associated with SSR College
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent pointer-events-none"></div>
                </div>

                {/* Name Badge */}
                <div className="absolute bottom-6 left-6 right-6 text-center lg:text-left">
                  <div className="md:hidden lg:block bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border-l-4 border-[#ef5b2d]">
                    <h3 className="text-xl font-bold text-[#0b4f81] leading-tight">
                      Late Shri. Mohan S. Delkar
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mt-1 uppercase tracking-wider">
                      Founder Chairman
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Background Elements */}
              <div className="absolute -z-10 -top-6 -right-6 w-full h-full border-2 border-[#ef5b2d]/20 rounded-2xl hidden lg:block"></div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#ef5b2d_2px,transparent_2px)] bg-[size:24px_24px] opacity-20 hidden lg:block"></div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-7/12 space-y-8">
              {/* Quote Block */}
              <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <Quote className="absolute top-6 left-6 text-[#ef5b2d]/20 w-12 h-12 rotate-180" />
                <p className="relative z-10 text-xl md:text-2xl text-slate-700 font-serif italic leading-relaxed text-center px-4">
                  "Education is not just about academic excellence, but about
                  character building and empowering the youth to lead the nation
                  towards a brighter future."
                </p>
                <div className="mt-6 flex justify-center">
                  <div className="h-1 w-12 bg-slate-200 rounded-full"></div>
                </div>
              </div>

              {/* Biography Section */}
              <div className="prose prose-lg text-slate-600 max-w-none">
                <h2 className="text-3xl font-bold text-[#0b4f81] mb-6 flex items-center gap-3">
                  <span className="w-2 h-8 bg-[#ef5b2d] rounded-full inline-block"></span>
                  A Visionary Leader
                </h2>
                <p className="mb-6">
                  SSR College stands as a testament to the vision and dedication
                  of our Founder Chairman,{" "}
                  <strong>Late Shri. Mohan S. Delkar</strong>. His dream was to
                  bring world-class education to the doorstep of every student
                  in Dadra & Nagar Haveli, ensuring that no aspiring mind is
                  left behind due to a lack of opportunities.
                </p>
                <p className="mb-6">
                  Established with the mission of fostering holistic
                  development, the institution has grown into a premier center
                  of learning under his guidance. He believed that education is
                  the most powerful tool to transform society and uplift the
                  community.
                </p>

                <h3 className="text-2xl font-bold text-[#0b4f81] mb-4 mt-8">
                  Key Contributions
                </h3>
                <ul className="space-y-4 list-none pl-0">
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-[#ef5b2d]/30 transition-colors">
                    <div className="p-2 bg-[#0b4f81]/10 rounded-lg text-[#0b4f81]">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Infrastructure Development
                      </h4>
                      <p className="text-sm">
                        Pioneered the construction of state-of-the-art
                        educational campuses with modern amenities.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-[#ef5b2d]/30 transition-colors">
                    <div className="p-2 bg-[#ef5b2d]/10 rounded-lg text-[#ef5b2d]">
                      <Award size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Community Upliftment
                      </h4>
                      <p className="text-sm">
                        Initiated numerous scholarship programs and support
                        systems for underprivileged students.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-[#ef5b2d]/30 transition-colors">
                    <div className="p-2 bg-[#0b4f81]/10 rounded-lg text-[#0b4f81]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Legacy of Excellence
                      </h4>
                      <p className="text-sm">
                        Laid a strong foundation of values and ethics that
                        continues to guide the institution today.
                      </p>
                    </div>
                  </li>
                </ul>

                <p className="mt-8 italic text-slate-500 border-l-4 border-slate-200 pl-4 py-2 bg-white/50">
                  His legacy continues to inspire generations of students and
                  faculty members to strive for excellence and serve the nation
                  with dedication.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section - Optional Additional Info */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#0b4f81] mb-12">
            Continuing the Legacy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#ef5b2d] text-2xl font-bold border border-slate-100">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Quality Education
              </h3>
              <p className="text-slate-600 text-sm">
                Upholding the highest standards of academic excellence.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#0b4f81] text-2xl font-bold border border-slate-100">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Innovation
              </h3>
              <p className="text-slate-600 text-sm">
                Fostering a culture of research and creative thinking.
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm text-[#ef5b2d] text-2xl font-bold border border-slate-100">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Service</h3>
              <p className="text-slate-600 text-sm">
                Committing to the welfare of society and nation building.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
