import Image from "next/image";
import {
  Trophy,
  Medal,
  Award,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
  Zap,
} from "lucide-react";

export default function AchievementsAwardsPage() {
  const categories = [
    {
      title: "Institutional Accreditations",
      icon: <Award className="w-8 h-8 text-[#ef5b2d]" />,
      achievements: [
        {
          title: "NAAC Accreditation",
          desc: "Accredited with Grade 'A' by the National Assessment and Accreditation Council.",
          date: "Re-accredited 2023",
        },
        {
          title: "ISO 9001:2015 Certified",
          desc: "Standard certification for Quality Management System in education.",
          date: "Ongoing Compliance",
        },
        {
          title: "Best College Award",
          desc: "Recognized as the best performing college in the DNH region for academic excellence.",
          date: "2022-23",
        },
      ],
    },
    {
      title: "Sports & Athletics",
      icon: <Trophy className="w-8 h-8 text-[#0b4f81]" />,
      achievements: [
        {
          title: "Inter-Collegiate Champions",
          desc: "Won the overall championship in the Regional Sports Meet for three consecutive years.",
          date: "2021, 2022, 2023",
        },
        {
          title: "National Level Athletes",
          desc: "Two of our students represented the UT at the National Khelo India Games.",
          date: "2023",
        },
      ],
    },
  ];

  const milestones = [
    {
      year: "2023",
      title: "NAAC Grade 'A'",
      description:
        "Successfully achieved 'A' grade accreditation, benchmarking our quality against national standards.",
    },
    {
      year: "2021",
      title: "Best Infrastructure Award",
      description:
        "Recognized for providing state-of-the-art laboratory and campus facilities in the region.",
    },
    {
      year: "2019",
      title: "Research Excellence",
      description:
        "Faculties and students published over 50 research papers in peer-reviewed journals.",
    },
    {
      year: "2017",
      title: "Youth Festival Winners",
      description:
        "Secured first position in the Inter-University Cultural Youth Festival.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-28 bg-[#0b4f81] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/college_campus_modern_building_1770918889272.png"
            alt="SSR Achievements"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b4f81]/95 to-[#0b4f81]/80"></div>

          {/* Animated Particles/Ornaments */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ef5b2d] rounded-full animate-ping"></div>
          <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-white/20 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-4 h-4 bg-[#ef5b2d]/40 rounded-full blur-sm"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            <Star size={16} className="text-[#ef5b2d] fill-[#ef5b2d]" />
            Celebrating Excellence
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Achievements & Awards
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Honoring the dedication of our students, faculty, and institution in
            setting new benchmarks of success.
          </p>
        </div>
      </section>

      {/* Accolades Grid */}
      <section className="py-24 container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[2.5rem] p-10 shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-slate-50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#0b4f81]">
                  {cat.title}
                </h2>
              </div>
              <div className="space-y-8">
                {cat.achievements.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="flex gap-6 items-start relative pl-6 border-l-2 border-slate-100 group-hover:border-[#ef5b2d]/30 transition-colors"
                  >
                    <div className="absolute -left-1.5 top-2 w-3 h-3 bg-slate-200 rounded-full border-2 border-white group-hover:bg-[#ef5b2d] transition-colors"></div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-2">
                        {item.desc}
                      </p>
                      <span className="text-[11px] font-bold text-[#ef5b2d] uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-100">
                        {item.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Award Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ef5b2d]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#0b4f81]/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-4 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-flex items-center gap-3 text-[#ef5b2d] font-bold tracking-widest uppercase text-sm">
                <Medal size={24} />
                Global Recognition
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Benchmark of Quality in Higher Education
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                SSR College has consistently been ranked among the top
                educational institutions in the region. Our commitment to
                maintaining an "A" Grade standard reflects in our pedagogy,
                research, and placement tracks.
              </p>

              <div className="grid grid-cols-2 gap-8 pt-4">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#ef5b2d]">95%</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">
                    Success Rate
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-[#ef5b2d]">50+</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wide">
                    Awards Won
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative group">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src="/images/photo-gallery/gallery-2.jpg.jpeg"
                  alt="Students Receiving Award"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white font-bold text-xl italic leading-tight">
                    "Excellence is not an act, but a habit. We take pride in our
                    collective journey of success."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline of Success */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#0b4f81]">
            Milestones of Glory
          </h2>
          <div className="w-20 h-1 bg-[#ef5b2d] mx-auto rounded-full"></div>
          <p className="text-slate-500">
            Tracing our path of institutional growth and academic triumph.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className="relative p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 text-8xl font-black text-slate-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                {ms.year}
              </div>
              <div className="text-3xl font-bold text-[#0b4f81] mb-4">
                {ms.year}
              </div>
              <h3 className="text-xl font-bold text-[#ef5b2d] mb-4 leading-tight">
                {ms.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {ms.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-[#0b4f81] font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                Read More <Zap size={14} className="text-[#ef5b2d]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hall of Fame CTA */}
      <section className="py-20 bg-[#0b4f81] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Join the Legacy of Achievers
          </h2>
          <p className="text-blue-100/70 max-w-2xl mx-auto text-lg mb-10 font-light">
            Every year, we welcome thousands of curious minds. Be part of the
            next chapter of SSR College's success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-[#ef5b2d] text-white font-bold rounded-full hover:bg-white hover:text-[#ef5b2d] transition-all shadow-xl shadow-black/20 flex items-center gap-3">
              Explore Admissions
              <TrendingUp size={20} />
            </button>
            <button className="px-10 py-4 bg-transparent text-white border-2 border-white/20 font-bold rounded-full hover:bg-white/10 transition-all flex items-center gap-3">
              Academic Programmes
              <Globe size={20} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
