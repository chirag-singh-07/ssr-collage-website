import Image from "next/image";
import {
  Heart,
  Users,
  Briefcase,
  Trophy,
  ShieldCheck,
  Scale,
  GraduationCap,
  MessageCircle,
  Activity,
  Calendar,
  Award,
} from "lucide-react";

export default function WhySSRPage() {
  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-[#0b4f81] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/college_campus_modern_building_1770918889272.png"
            alt="SSR College Campus"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b4f81]/95 via-[#0b4f81]/80 to-[#0b4f81]/60"></div>

          {/* Animated Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef5b2d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            Excellence & Values
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Why Choose SSR?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Education that goes beyond the classroom—building character,
            careers, and community.
          </p>
          <div className="w-24 h-1 bg-[#ef5b2d] mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(239,91,45,0.5)] animate-in scale-x-0 fill-mode-forwards duration-1000 delay-300"></div>
        </div>
      </section>

      {/* Core Value - Value Education */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ef5b2d] to-transparent opacity-30"></div>
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 order-2 md:order-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-slate-50 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-video relative">
                  <Image
                    src="/images/books-500x500.jpg.jpeg"
                    alt="Value Education"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0b4f81]/20 mix-blend-multiply"></div>
                </div>
              </div>
              {/* Floating Icon */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce duration-[3s]">
                <Heart className="w-8 h-8 text-[#ef5b2d] fill-current" />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2 space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0b4f81]">
                Value Education
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At SSR Campus, our teaching and non-teaching staff possess sound
                moral values and are dedicated to cultivating moral sense and
                value consciousness among students.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[#ef5b2d]/10 rounded-full text-[#ef5b2d]">
                    <Users size={16} />
                  </div>
                  <span className="text-slate-700">
                    Dedicated staff mentorship
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[#ef5b2d]/10 rounded-full text-[#ef5b2d]">
                    <Heart size={16} />
                  </div>
                  <span className="text-slate-700">
                    Moral value integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-[#ef5b2d]/10 rounded-full text-[#ef5b2d]">
                    <Activity size={16} />
                  </div>
                  <span className="text-slate-700">
                    Daily thought and meditation sessions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Sections - Alternating */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-4 space-y-24">
          {/* Orientation Programme */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0b4f81]/10 text-[#0b4f81] text-sm font-semibold">
                <Calendar size={16} />
                <span>New Beginnings</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">
                Orientation Programme
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                An Orientation Programme for newly admitted students is held at
                the beginning of the academic session. We guide them about the
                Code of Conduct, academic structure, infrastructure facilities,
                and upcoming events to ensure a smooth transition into college
                life.
              </p>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative z-10">
                <Image
                  src="/college_event_auditorium_1770918933459.png"
                  alt="Orientation Programme"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -z-10 bottom-6 -right-6 w-full h-full border-2 border-[#ef5b2d] rounded-2xl"></div>
            </div>
          </div>

          {/* Placement Assistance */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ef5b2d]/10 text-[#ef5b2d] text-sm font-semibold">
                <Briefcase size={16} />
                <span>Career Growth</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">
                Placement Assistance
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                Our Training & Placement Assistance cell provides regular career
                guidance, training, and placement opportunities. We are
                committed to ensuring our final year students are industry-ready
                and connected with top recruiters.
              </p>
              <button className="text-[#0b4f81] font-bold hover:text-[#ef5b2d] underline underline-offset-4 transition-colors">
                View Placement Records
              </button>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative z-10">
                <Image
                  src="/images/scholarship-1.jpg.jpeg"
                  alt="Placement Assistance"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -z-10 top-6 -left-6 w-full h-full bg-[#0b4f81]/5 rounded-2xl"></div>
            </div>
          </div>

          {/* Sports & Games */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                <Trophy size={16} />
                <span>Physical Education</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">
                Sports & Games
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                True education educates the body, mind, and spirit. To develop a
                balanced personality, our Department of Physical Education
                conducts intramural sports activities, fostering teamwork,
                discipline, and endurance.
              </p>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative z-10">
                <Image
                  src="/images/IMG_7960-scaled.jpg.jpeg"
                  alt="Sports Activities"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -z-10 -bottom-6 -left-6 w-32 h-32 bg-[radial-gradient(#ef5b2d_2px,transparent_2px)] [background-size:20px_20px]"></div>
            </div>
          </div>

          {/* Competitions */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold">
                <Award size={16} />
                <span>Talent & Culture</span>
              </div>
              <h2 className="text-3xl font-bold text-slate-800">
                Competitions & Events
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                For holistic development, we organize diverse competitions
                including Elocution, Debate, Creative Writing, Quiz, Poster
                Making, Rangoli, and Musical performances. These events nurture
                creativity and confidence.
              </p>
            </div>
            <div className="lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative z-10">
                <Image
                  src="/images/DSC_0096-500x500.jpg.jpeg"
                  alt="College Competitions"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 to-transparent"></div>
                <p className="absolute bottom-4 left-4 text-white font-medium">
                  Cultural Fest 2024
                </p>
              </div>
              <div className="absolute -z-10 top-6 -right-6 w-full h-full border-2 border-[#0b4f81]/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Other Services */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0b4f81] mb-6">
              Support & Community
            </h2>
            <div className="w-16 h-1 bg-[#ef5b2d] mx-auto rounded-full"></div>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              We provide a robust support system to ensure every
              stakeholder&apos;s well-being and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Counseling Cell */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-[#0b4f81] mb-6 group-hover:bg-[#0b4f81] group-hover:text-white transition-colors">
                <MessageCircle size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Counseling Cell
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Providing regular support for academic difficulties, emotional
                needs, career queries, and mental health well-being.
              </p>
            </div>

            {/* PTM */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-[#ef5b2d] mb-6 group-hover:bg-[#ef5b2d] group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Parent Teacher Meeting
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Annual meetings to foster collaboration between parents and
                teachers, gathering feedback for student betterment.
              </p>
            </div>

            {/* Alumni */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <GraduationCap size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Alumni Association
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Connecting ex-students to their alma mater, facilitating
                scholarships, guest lectures, and placement networks.
              </p>
            </div>

            {/* Grievance */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Scale size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Grievance Redressal
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Addressing concerns regarding college functioning. Students can
                appeal or use suggestion boxes for resolution.
              </p>
            </div>

            {/* Anti-Ragging */}
            <div className="group bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 flex gap-6 items-start">
                <div className="w-14 h-14 shrink-0 bg-red-100 rounded-xl flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    Anti-Ragging Policy
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Ragging is strictly banned. We follow a zero-tolerance
                    policy with strict actions against offenders. We are
                    committed to a safe and fear-free campus environment in
                    accordance with UGC Regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
