import Image from "next/image";
import {
  ShieldCheck,
  Users,
  Settings,
  ShoppingCart,
  BookOpen,
  Award,
  Scale,
  HardHat,
  ChevronRight,
  ClipboardList,
  Layers,
} from "lucide-react";

export default function AdministrationPage() {
  const pillars = [
    {
      title: "Principal",
      desc: "Leading the administrative and academic vision of the institution.",
      icon: <Award className="w-6 h-6" />,
    },
    {
      title: "HODs",
      desc: "Ensuring academic quality and standard in their respective departments.",
      icon: <Layers className="w-6 h-6" />,
    },
    {
      title: "Class Teachers/Mentors",
      desc: "Direct monitoring and guidance for student academic growth.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Teaching Staff",
      desc: "Delivering high-quality education and research excellence.",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  const committees = [
    {
      title: "College Development Committee",
      desc: "Oversees all academic matters and broad institutional development policies.",
      icon: <Settings />,
    },
    {
      title: "Purchase Committee",
      desc: "Responsible for procurement of equipment, chemicals, and infrastructure aids.",
      icon: <ShoppingCart />,
    },
    {
      title: "Discipline Committee",
      desc: "Ensures a harmonious and orderly environment across the campus.",
      icon: <ShieldCheck />,
    },
    {
      title: "Anti-Ragging Cel",
      desc: "Maintaining a zero-tolerance policy towards any form of ragging.",
      icon: <Scale />,
    },
    {
      title: "Prevention of Sexual Harassment",
      desc: "Ensuring a safe and respectful workspace for all students and staff.",
      icon: <ShieldCheck />,
    },
    {
      title: "Maintenance Committee",
      desc: "Overseeing campus infrastructure, repairs, and facility upgrades.",
      icon: <HardHat />,
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white pb-20">
      {/* Hero Section */}
      <section className="relative w-full py-28 bg-[#0b4f81] overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/College-Development-Committee_SSR-768x922.jpg"
            alt="SSR Administration"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b4f81]/95 to-[#0b4f81]/80"></div>

          {/* Abstract Shapes */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ef5b2d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            Governance & Management
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            General Administration
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            A systematically structured framework ensuring academic quality,
            participative management, and institutional transparency.
          </p>
          <div className="w-24 h-1.5 bg-[#ef5b2d] mx-auto mt-10 rounded-full shadow-[0_0_15px_rgba(239,91,45,0.4)]"></div>
        </div>
      </section>

      {/* Participative Management Info */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl border border-slate-100 max-w-6xl mx-auto backdrop-blur-sm animate-in zoom-in duration-700 delay-300">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-7/12 space-y-6">
              <div className="flex items-center gap-3 text-[#ef5b2d] font-bold tracking-wider uppercase text-sm">
                <ClipboardList size={20} />
                Strategic Approach
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0b4f81]">
                Participative Management System
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                The institutional administration is built on the principle of
                participative management. Every role is defined through a{" "}
                <strong className="text-slate-800">
                  systematically prepared duty list
                </strong>
                , ensuring that outcomes are monitored and assessed at the end
                of every session.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-slate-700 font-medium">
                  <ChevronRight size={18} className="text-[#ef5b2d]" />
                  Internal Assessment
                </div>
                <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200 text-slate-700 font-medium">
                  <ChevronRight size={18} className="text-[#ef5b2d]" />
                  Transparent Audits
                </div>
              </div>
            </div>
            <div className="lg:w-5/12 relative aspect-square rounded-[2rem] overflow-hidden shadow-xl">
              <Image
                src="/College-Development-Committee_SSR-768x922.jpg" // Using an existing relevant-looking image context
                alt="Institutional Overview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b4f81]/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#0b4f81]">
            The Four Pillars of Excellence
          </h2>
          <div className="w-20 h-1 bg-[#ef5b2d] mx-auto rounded-full"></div>
          <p className="text-slate-500">
            The academic quality and standards are maintained through our core
            administrative hierarchy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 bg-blue-50 text-[#0b4f81] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0b4f81] group-hover:text-white transition-colors">
                {pillar.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Administration Image Placeholder / Organogram */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-slate-50 rounded-[3rem] p-12 border-2 border-dashed border-slate-200 text-center relative overflow-hidden group">
            <div className="absolute inset-0 opacity-5 bg-[size:24px_24px] bg-[radial-gradient(#0b4f81_1px,transparent_1px)]"></div>
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 bg-[#0b4f81] text-white px-6 py-2 rounded-full text-sm font-bold animate-pulse">
                <Layers size={18} />
                Administrative Organogram
              </div>
              <h3 className="text-3xl font-bold text-[#0b4f81]">
                Institutional Schematic Representation
              </h3>
              <div className="max-w-5xl mx-auto py-12 px-4">
                {/* Top Level: Management */}
                <div className="flex justify-center mb-12 relative">
                  <div className="bg-[#0b4f81] text-white p-6 rounded-2xl shadow-xl border border-white/20 w-72 relative z-10 transition-transform hover:scale-105 duration-300">
                    <h4 className="font-bold text-lg mb-1">
                      SSR Memorial Trust
                    </h4>
                    <p className="text-xs text-blue-200">
                      Governance & Finance
                    </p>
                  </div>
                  {/* Vertical Line */}
                  <div className="absolute top-full left-1/2 w-0.5 h-12 bg-slate-200 -translate-x-1/2"></div>
                </div>

                {/* Level 2: Principal & CDC */}
                <div className="flex justify-center mb-12 relative">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-[#ef5b2d]/30 w-72 relative z-10 transition-transform hover:scale-105 duration-300">
                    <h4 className="font-bold text-[#0b4f81] text-lg mb-1">
                      CDC & Principal
                    </h4>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">
                      Academic & Admin Head
                    </p>
                  </div>
                  {/* Level Flow Lines */}
                  <div className="absolute top-full left-1/2 w-0.5 h-12 bg-slate-200 -translate-x-1/2"></div>
                  <div className="absolute top-full left-1/4 right-1/4 h-0.5 bg-slate-200 shadow-sm"></div>
                </div>

                {/* Level 3: Three Main Branches */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                  {/* Branch 1: Finance & Purchase */}
                  <div className="space-y-4">
                    <div className="absolute top-0 left-[16.6%] w-0.5 h-8 bg-slate-200 -translate-y-full hidden md:block"></div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-t-4 border-t-amber-500 shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-bold text-slate-800 text-sm">
                        Finance & Administration
                      </h5>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Purchase Committee, Budgeting
                      </p>
                    </div>
                  </div>

                  {/* Branch 2: The Four Pillars (Academics) */}
                  <div className="space-y-4 relative">
                    <div className="absolute top-0 left-1/2 w-0.5 h-8 bg-slate-200 -translate-y-full hidden md:block"></div>
                    <div className="bg-[#0b4f81]/5 p-5 rounded-xl border-2 border-[#0b4f81]/40 border-t-4 border-t-[#0b4f81] shadow-md hover:shadow-lg transition-all ring-4 ring-white">
                      <h5 className="font-bold text-[#0b4f81] text-sm">
                        Academic Pillars
                      </h5>
                      <p className="text-[11px] text-slate-500 mt-1">
                        HODs → Mentors → Staff
                      </p>
                    </div>
                  </div>

                  {/* Branch 3: Support Units */}
                  <div className="space-y-4">
                    <div className="absolute top-0 right-[16.6%] w-0.5 h-8 bg-slate-200 -translate-y-full hidden md:block"></div>
                    <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 border-t-4 border-t-[#ef5b2d] shadow-sm hover:shadow-md transition-all">
                      <h5 className="font-bold text-slate-800 text-sm">
                        Administrative Units
                      </h5>
                      <p className="text-[11px] text-slate-500 mt-1">
                        Office, Library, Exam Dept
                      </p>
                    </div>
                  </div>
                </div>

                {/* Final Level: Committees */}
                <div className="mt-16 bg-white/50 border border-slate-100 p-6 rounded-3xl">
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "Discipline",
                      "Anti-Ragging",
                      "Maintenance",
                      "Sexual Harassment Prevention",
                    ].map((comm) => (
                      <span
                        key={comm}
                        className="px-4 py-2 bg-white rounded-full text-[10px] font-bold text-slate-600 shadow-sm border border-slate-100 uppercase tracking-tighter"
                      >
                        {comm} Committee
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A comprehensive breakdown of the reporting hierarchy from the
                Management down to the departmental committees.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold text-[#0b4f81]">
            Specialized Administrative Committees
          </h2>
          <div className="w-20 h-1 bg-[#ef5b2d] mx-auto rounded-full"></div>
          <p className="text-slate-500">
            Dedicated bodies overseeing specific domains of campus life and
            institutional operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {committees.map((committee, idx) => (
            <div
              key={idx}
              className="flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-lg transition-all group"
            >
              <div className="shrink-0 w-12 h-12 bg-orange-50 text-[#ef5b2d] rounded-xl flex items-center justify-center group-hover:bg-[#ef5b2d] group-hover:text-white transition-colors shadow-sm">
                {committee.icon}
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-[#0b4f81] transition-colors">
                  {committee.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {committee.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Support Staff Banner */}
      <section className="py-12 container mx-auto px-4 max-w-7xl">
        <div className="bg-[#0b4f81] rounded-[2.5rem] p-12 text-white overflow-hidden relative group">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
            <div className="text-center lg:text-left space-y-4 flex-grow">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Academic Administration Support
              </h2>
              <p className="text-blue-100 text-lg opacity-80 max-w-xl">
                Our Office Staff, Library Staff, and Exam Department play a
                vital role in maintaining the academic rigor and administrative
                efficiency of SSR College.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20">
                  Office Staff
                </span>
                <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20">
                  Library Staff
                </span>
                <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold border border-white/20">
                  Exam Department
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <button className="px-10 py-4 bg-[#ef5b2d] text-white font-bold rounded-full hover:bg-white hover:text-[#ef5b2d] transition-all shadow-xl shadow-black/20 flex items-center gap-3">
                View Faculty Directory
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
