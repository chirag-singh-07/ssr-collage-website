import Image from "next/image";
import {
  Calendar,
  Flag,
  Rocket,
  Award,
  BookOpen,
  Users,
  Building,
  Star,
  ChevronRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "College Milestones - SSR College",
  description:
    "Explore the journey of SSR College from its foundation to becoming a Centre of Excellence with NAAC Grade 'A' accreditation.",
};

export default function CollegeMilestonePage() {
  const milestones = [
    {
      year: "2023",
      title: "NAAC Accreditation - Grade 'A'",
      description:
        "A major milestone in our journey toward academic excellence, being recognized with 'A' grade by NAAC.",
      icon: <Award className="w-6 h-6" />,
      image: "/images/college_campus_modern_building_1770918889272.png",
      color: "bg-blue-600",
      accent: "border-blue-200",
    },
    {
      year: "2021",
      title: "Launch of Post-Graduate Programs",
      description:
        "Expanded our academic horizon by introducing M.Sc and M.Com programs to serve higher research needs.",
      icon: <Rocket className="w-6 h-6" />,
      image: "/images/lab-microscope.png",
      color: "bg-orange-500",
      accent: "border-orange-200",
    },
    {
      year: "2018",
      title: "Silver Jubilee Celebration",
      description:
        "Celebrating 25 years of empowering minds and transforming lives in Dadra and Nagar Haveli.",
      icon: <Star className="w-6 h-6" />,
      image: "/images/photo-gallery/gallery-2.jpg.jpeg",
      color: "bg-[#0b4f81]",
      accent: "border-blue-900/20",
    },
    {
      year: "2014",
      title: "State-of-the-Art Science Block",
      description:
        "Inauguration of the new science wing with advanced laboratories and research facilities.",
      icon: <Building className="w-6 h-6" />,
      image: "/images/college_campus_modern_building_1770918889272.png",
      color: "bg-teal-600",
      accent: "border-teal-200",
    },
    {
      year: "2006",
      title: "Introduction of BBA & BCA",
      description:
        "Modernizing our curriculum with professional management and computer application courses.",
      icon: <BookOpen className="w-6 h-6" />,
      image: "/images/available-programmes/b-b-a-ca.jpg.png",
      color: "bg-indigo-600",
      accent: "border-indigo-200",
    },
    {
      year: "2003",
      title: "SSR Memorial Trust Establishment",
      description:
        "The formal foundation of the trust that paved the way for higher education in the region.",
      icon: <Flag className="w-6 h-6" />,
      image: "/images/news-and-events/event-2.jpg.jpeg",
      color: "bg-rose-600",
      accent: "border-rose-200",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-28 bg-[#0b4f81] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/college_campus_modern_building_1770918889272.png"
            alt="SSR College Legacy"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b4f81]/95 to-[#0b4f81]/80"></div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ef5b2d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            College Milestones
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Tracing the footprint of our institution from a visionary dream to a
            centre of excellence.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24 container mx-auto px-4 max-w-6xl">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-10 bottom-10 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24 relative">
          {milestones.map((ms, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
            >
              {/* Content Panel */}
              <div className="w-full md:w-1/2 animate-in slide-in-from-bottom duration-700">
                <div
                  className={`p-8 lg:p-10 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 relative group hover:shadow-2xl transition-all duration-500`}
                >
                  {/* Year Badge */}
                  <div
                    className={`absolute -top-6 ${idx % 2 === 0 ? "md:right-10" : "md:left-10"} left-10 md:left-auto px-6 py-2 ${ms.color} text-white font-bold rounded-2xl shadow-lg z-20`}
                  >
                    {ms.year}
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3 text-[#ef5b2d]">
                      {ms.icon}
                      <span className="font-bold tracking-widest uppercase text-xs">
                        Achievement
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0b4f81] group-hover:text-[#ef5b2d] transition-colors">
                      {ms.title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                      {ms.description}
                    </p>

                    <button className="flex items-center gap-2 text-[#0b4f81] font-bold text-sm uppercase tracking-wider pt-4 group-hover:gap-3 transition-all">
                      Related Story <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Central Point */}
              <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-slate-50 shadow-lg hidden md:flex items-center justify-center z-10 transition-transform group-hover:scale-110">
                <div
                  className={`w-4 h-4 rounded-full ${ms.color} animate-pulse`}
                ></div>
              </div>

              {/* Image Panel */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video lg:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-700 delay-200">
                  <Image
                    src={ms.image}
                    alt={ms.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Legacy Banner */}
      <section className="container mx-auto px-4 max-w-7xl pt-12">
        <div className="bg-[#0b4f81] rounded-[3rem] p-12 text-white relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest border border-white/20">
                <Flag size={14} className="text-[#ef5b2d]" />
                The Foundation
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
                Dedicated to the Dream of Sanjibhai Delkar
              </h2>
              <p className="text-blue-100/80 text-lg font-light leading-relaxed">
                Every milestone we achieve is a tribute to the visionary goal of
                empowering the people of Dadra and Nagar Haveli through
                high-quality education.
              </p>
              <div className="flex gap-4 pt-4">
                <button className="px-8 py-3 bg-[#ef5b2d] hover:bg-white hover:text-[#0b4f81] text-white font-bold rounded-full transition-all shadow-xl">
                  Back to History
                </button>
                <button className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full border border-white/20 transition-all">
                  View Gallery
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center animate-in slide-in-from-bottom duration-700 delay-300">
                <div className="text-4xl font-bold text-[#ef5b2d] mb-2 font-serif tracking-tighter">
                  20+
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold">
                  Years of Excellence
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center animate-in slide-in-from-bottom duration-700 delay-400">
                <div className="text-4xl font-bold text-[#ef5b2d] mb-2 font-serif tracking-tighter">
                  5000+
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold">
                  Alumni Worldwide
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center animate-in slide-in-from-bottom duration-700 delay-500">
                <div className="text-4xl font-bold text-[#ef5b2d] mb-2 font-serif tracking-tighter">
                  15+
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold">
                  Departments
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 text-center animate-in slide-in-from-bottom duration-700 delay-600">
                <div className="text-4xl font-bold text-[#ef5b2d] mb-2 font-serif tracking-tighter">
                  1st
                </div>
                <div className="text-[10px] text-white/60 uppercase tracking-widest font-bold">
                  In D&NH Region
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
