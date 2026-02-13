import Image from "next/image";
import {
  Trophy,
  GraduationCap,
  Star,
  Award,
  Search,
  Users,
  Briefcase,
  Quote,
  ArrowRight,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Achievers - SSR College",
  description:
    "Celebrating the brilliant minds and exceptional talents of SSR College students who excel in academics, sports, placements, and cultural activities.",
};

export default function StudentAchieversPage() {
  const achievers = [
    {
      id: 1,
      name: "Rahul Sharma",
      achievement: "University Gold Medalist - B.Com",
      category: "Academics",
      image: "/images/person-1.png",
      year: "Batch 2023",
      description:
        "Secured 1st rank across the university with a record breaking CGPA.",
    },
    {
      id: 2,
      name: "Priya Patel",
      achievement: "National Level Badminton Champion",
      category: "Sports",
      image: "/images/person-2.png",
      year: "Batch 2022",
      description:
        "Represented the UT at the National Games and secured bronze medal.",
    },
    {
      id: 3,
      name: "Aman Verma",
      achievement: "Placed at Google (SWE)",
      category: "Placements",
      image: "/images/person-3.png",
      year: "Batch 2023",
      description:
        "B.Sc Computer Science student who secured a package of 18 LPA.",
    },
    {
      id: 4,
      name: "Sneha Reddy",
      achievement: "Best Cadet - NCC",
      category: "Service",
      image: "/images/person-4.png",
      year: "Batch 2021",
      description:
        "Honored at the Republic Day Parade for outstanding discipline and leadership.",
    },
    {
      id: 5,
      name: "Karan Johar",
      achievement: "Regional Youth Festival Winner",
      category: "Cultural",
      image: "/images/person-5.png",
      year: "Batch 2023",
      description:
        "Won gold in Solo Singing and Drama at the State level competition.",
    },
    {
      id: 6,
      name: "Meera Singh",
      achievement: "Published Researcher",
      category: "Research",
      image: "/images/person-1.png",
      year: "Batch 2022",
      description:
        "Published a paper on 'AI in Agriculture' in an international journal.",
    },
  ];

  const stats = [
    {
      label: "University Ranks",
      value: "25+",
      icon: <GraduationCap size={24} />,
    },
    { label: "National Athletes", value: "10+", icon: <Trophy size={24} /> },
    {
      label: "Premium Placements",
      value: "150+",
      icon: <Briefcase size={24} />,
    },
    { label: "Scholarships Awarded", value: "500+", icon: <Award size={24} /> },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-28 bg-[#0b4f81] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-gallery/gallery-2.jpg.jpeg"
            alt="SSR Student Success"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b4f81]/95 to-[#0b4f81]/80"></div>

          {/* Decorative Ornaments */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ef5b2d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            <Star size={16} className="text-[#ef5b2d] fill-[#ef5b2d]" />
            The Hall of Fame
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Student Achievers
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Celebrating the brilliant minds and exceptional talents that make
            SSR College a hub of excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-[2rem] shadow-xl border border-slate-100 flex flex-col items-center text-center group hover:bg-[#ef5b2d] transition-all duration-300"
            >
              <div className="w-14 h-14 bg-orange-50 text-[#ef5b2d] rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-[#ef5b2d] transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-[#0b4f81] mb-1 group-hover:text-white transition-colors">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider group-hover:text-white/80 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter & Search Header */}
      <section className="py-20 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0b4f81]">
              Meet Our Stars
            </h2>
            <div className="w-20 h-1 bg-[#ef5b2d] rounded-full"></div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", "Academics", "Sports", "Placements", "Cultural"].map(
              (cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${cat === "All" ? "bg-[#0b4f81] text-white border-[#0b4f81] shadow-lg" : "bg-white text-slate-600 border-slate-200 hover:border-[#ef5b2d] hover:text-[#ef5b2d]"}`}
                >
                  {cat}
                </button>
              ),
            )}
          </div>
        </div>

        {/* Achievers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievers.map((achiever) => (
            <div
              key={achiever.id}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 animate-in slide-in-from-bottom duration-700"
            >
              {/* Image & Badge */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={achiever.image}
                  alt={achiever.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0b4f81]/80 via-transparent to-transparent opacity-60"></div>

                <div className="absolute top-6 right-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest text-[#ef5b2d] border border-orange-100 shadow-sm">
                  {achiever.category}
                </div>
              </div>

              {/* Content Panel */}
              <div className="p-8 space-y-4 relative">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-[#0b4f81] group-hover:text-[#ef5b2d] transition-colors">
                    {achiever.name}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-lg">
                    {achiever.year}
                  </span>
                </div>
                <div className="font-bold text-slate-800 flex items-center gap-2">
                  <Trophy size={18} className="text-[#ef5b2d]" />
                  {achiever.achievement}
                </div>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 italic">
                  "{achiever.description}"
                </p>

                <div className="pt-4 border-t border-slate-50 flex justify-between items-center">
                  <button className="text-xs font-bold text-[#0b4f81] uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                    Success Story <ArrowRight size={14} />
                  </button>
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-600">
                      RT
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
                      <Users size={12} className="text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Motivational Banner */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="bg-slate-900 rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden flex flex-col items-center text-center space-y-8">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ef5b2d]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

          <Quote
            size={60}
            className="text-[#ef5b2d]/20 absolute top-10 left-10"
          />

          <h2 className="text-3xl md:text-5xl font-bold max-w-3xl relative z-10 leading-tight">
            "Your achievement is the{" "}
            <span className="text-[#ef5b2d]">greatest pride</span> of our
            institution."
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl relative z-10 font-light">
            We encourage every student to push their boundaries, innovate, and
            lead. At SSR, we don't just teach; we ignite potential.
          </p>

          <div className="relative z-10 flex gap-4">
            <button className="px-10 py-4 bg-[#ef5b2d] text-white font-bold rounded-full hover:bg-white hover:text-[#ef5b2d] transition-all shadow-xl shadow-black/40">
              Read Alumni Stories
            </button>
            <button className="px-10 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Join SSR College
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
