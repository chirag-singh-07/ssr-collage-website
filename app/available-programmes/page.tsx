import Image from "next/image";
import {
  GraduationCap,
  BookOpen,
  Clock,
  ArrowRight,
  Monitor,
  Briefcase,
  Beaker,
  Globe,
} from "lucide-react";

export default function AvailableProgrammesPage() {
  const programmes = [
    {
      id: "bba",
      title: "Bachelor of Business Administration (BBA)",
      degree: "Undergraduate",
      duration: "3 Years",
      icon: <Briefcase className="w-6 h-6" />,
      description:
        "Prepare for a successful career in management with our comprehensive BBA program. Focus on leadership, business strategy, finance, and marketing.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      accent: "bg-blue-600",
    },
    {
      id: "bca",
      title: "Bachelor of Computer Applications (BCA)",
      degree: "Undergraduate",
      duration: "3 Years",
      icon: <Monitor className="w-6 h-6" />,
      description:
        "Master the world of technology with our BCA course. Learn programming languages, software development, web technologies, and database management.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      accent: "bg-indigo-600",
    },
    {
      id: "bcom",
      title: "Bachelor of Commerce (B.Com)",
      degree: "Undergraduate",
      duration: "3 Years",
      icon: <Globe className="w-6 h-6" />,
      description:
        "Build a strong foundation in commerce, accounting, and economics. Our B.Com program equips students with essential financial and business skills.",
      color: "bg-green-50 text-green-600 border-green-100",
      accent: "bg-green-600",
    },
    {
      id: "bsc",
      title: "Bachelor of Science (B.Sc)",
      degree: "Undergraduate",
      duration: "3 Years",
      icon: <Beaker className="w-6 h-6" />,
      description:
        "Explore the wonders of science with specializations in Physics, Chemistry, Mathematics, and Microbiology. Practical labs and research opportunities included.",
      color: "bg-purple-50 text-purple-600 border-purple-100",
      accent: "bg-purple-600",
    },
    {
      id: "ba",
      title: "Bachelor of Arts (BA)",
      degree: "Undergraduate",
      duration: "3 Years",
      icon: <BookOpen className="w-6 h-6" />,
      description:
        "Dive into humanities and social sciences. Our BA program offers subjects like English, History, Economics, and Psychology enhancing critical thinking.",
      color: "bg-orange-50 text-orange-600 border-orange-100",
      accent: "bg-orange-600",
    },
    {
      id: "msc",
      title: "Master of Science (M.Sc)",
      degree: "Postgraduate",
      duration: "2 Years",
      icon: <Beaker className="w-6 h-6" />,
      description:
        "Advance your scientific knowledge with our M.Sc program. Choose from Computer Science, Organic Chemistry, or Microbiology for deeper research and expertise.",
      color: "bg-teal-50 text-teal-600 border-teal-100",
      accent: "bg-teal-600",
    },
    {
      id: "mcom",
      title: "Master of Commerce (M.Com)",
      degree: "Postgraduate",
      duration: "2 Years",
      icon: <Globe className="w-6 h-6" />,
      description:
        "Specialized postgraduate degree focusing on advanced accounting, taxation, and business administration for future corporate leaders.",
      color: "bg-rose-50 text-rose-600 border-rose-100",
      accent: "bg-rose-600",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-[#0b4f81] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/books-500x500.jpg.jpeg"
            alt="SSR College Programmes"
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
            Academic Excellence
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Available Programmes
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Discover a wide range of undergraduate and postgraduate courses
            designed to shape your future.
          </p>
          <div className="w-24 h-1 bg-[#ef5b2d] mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(239,91,45,0.5)] animate-in scale-x-0 fill-mode-forwards duration-1000 delay-300"></div>
        </div>
      </section>

      {/* Programmes Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programmes.map((prog, index) => (
              <div
                key={prog.id}
                className="group relative bg-white rounded-3xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col h-full animate-in fade-in slide-in-from-bottom-5"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top Accent Line */}
                <div
                  className={`absolute top-0 left-0 w-full h-2 ${prog.accent}`}
                ></div>

                {/* Header: Icon & Duration */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-4 rounded-2xl ${prog.color} group-hover:bg-[#0b4f81] group-hover:text-white transition-colors duration-300`}
                  >
                    {prog.icon}
                  </div>
                  <span className="flex items-center gap-1 text-xs font-semibold bg-slate-50 px-3 py-1 rounded-full text-slate-500 border border-slate-100">
                    <Clock size={12} /> {prog.duration}
                  </span>
                </div>

                {/* Title & Degree Badge */}
                <div className="mb-4">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    {prog.degree}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-800 group-hover:text-[#0b4f81] transition-colors leading-tight">
                    {prog.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-8 grow">
                  {prog.description}
                </p>

                {/* Action Area */}
                <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-400">
                    Full Time
                  </span>
                  <button className="text-sm font-bold text-[#ef5b2d] flex items-center gap-2 group-hover:gap-3 transition-all">
                    Course Details <ArrowRight size={16} />
                  </button>
                </div>

                {/* Decor Circle */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-slate-50 rounded-full group-hover:scale-150 transition-transform duration-500 -z-10"></div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="group relative bg-[#0b4f81] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full justify-center items-center text-center overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-size-[16px_16px]"></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mx-auto mb-6 backdrop-blur-sm">
                  <GraduationCap size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Start Your Journey
                </h3>
                <p className="text-white/80 mb-8 max-w-xs mx-auto">
                  Ready to take the next step? Apply now for the upcoming
                  academic session.
                </p>
                <button className="px-8 py-3 bg-[#ef5b2d] text-white font-bold rounded-full hover:bg-white hover:text-[#ef5b2d] transition-colors shadow-lg shadow-orange-900/20">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
