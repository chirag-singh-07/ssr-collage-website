import Image from "next/image";
import {
  Trophy,
  Dumbbell,
  Target,
  Medal,
  Users,
  Flame,
  ChevronRight,
  TrendingUp,
  MapPin,
  Clock,
} from "lucide-react";

export default function SportsGymkhanaPage() {
  const facilities = [
    {
      title: "Fitness Gymnasium",
      description:
        "State-of-the-art gym equipped with modern strength and cardio machines for students and staff.",
      icon: <Dumbbell className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "Indoor Sports",
      description:
        "Dedicated spaces for Table Tennis, Chess, Carrom, and Yoga for mental and physical wellness.",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Outdoor Arena",
      description:
        "Large playgrounds for Cricket, Football, Volleyball, and Basketball with professional markings.",
      icon: <Flame className="w-8 h-8" />,
      color: "from-red-500 to-red-700",
    },
    {
      title: "Athletics Track",
      description:
        "Standard running track for track and field events and regular athletic training sessions.",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-emerald-700",
    },
  ];

  const sportsHighlights = [
    {
      title: "Annual Sports Meet 'Kshitij'",
      desc: "Our flagship annual event where different departments compete for the prestigious championship trophy.",
      tag: "Flagship Event",
    },
    {
      title: "Inter-Collegiate Success",
      desc: "Consecutive victories in regional volleyball and cricket tournaments over the last three years.",
      tag: "Competitive",
    },
    {
      title: "Professional Coaching",
      desc: "Guidance from experienced physical directors to hone the skills of budding athletes.",
      tag: "Expertise",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-32 bg-[#0b4f81] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/photo-gallery/gallery-2.jpg.jpeg"
            alt="SSR Sports & Gymkhana"
            fill
            className="object-cover opacity-20 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b4f81]/90 via-[#0b4f81]/80 to-[#0b4f81]/70"></div>

          {/* Energy Decorations */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#ef5b2d]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 text-white/90 font-bold text-xs tracking-[0.2em] uppercase backdrop-blur-md border border-white/20 animate-in fade-in slide-in-from-top duration-700">
            <Flame size={14} className="text-[#ef5b2d] animate-pulse" />
            Spirit of Athletics
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter animate-in slide-in-from-bottom duration-700">
            Sports & <span className="text-[#ef5b2d]">Gymkhana</span>
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Fostering discipline, teamwork, and physical excellence. We believe
            a healthy mind resides in a healthy body.
          </p>
          <div className="flex justify-center gap-4 pt-4 animate-in fade-in duration-1000 delay-300">
            <button className="px-8 py-4 bg-[#ef5b2d] text-white font-bold rounded-full hover:bg-white hover:text-[#ef5b2d] transition-all shadow-2xl flex items-center gap-3 group">
              Join the Team{" "}
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm">
              View Achievements
            </button>
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 container mx-auto px-4 -mt-20 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((fac, idx) => (
            <div
              key={idx}
              className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 group hover:-translate-y-4 transition-all duration-500 overflow-hidden relative"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 bg-linear-to-br ${fac.color} opacity-5 rounded-bl-[4rem]`}
              ></div>

              <div className="space-y-6 relative z-10">
                <div
                  className={`w-16 h-16 bg-slate-50 text-slate-800 rounded-2xl flex items-center justify-center transition-colors duration-500 group-hover:bg-[#0b4f81] group-hover:text-white shadow-sm`}
                >
                  {fac.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0b4f81]">
                  {fac.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {fac.description}
                </p>
                <div className="pt-4 flex items-center gap-2 text-[#ef5b2d] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats & Spirit Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#0b4f81] rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2"></div>

            <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 text-[#ef5b2d] font-bold tracking-[0.2em] uppercase text-sm">
                  <Trophy size={24} />
                  Champions' Choice
                </div>
                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Where Talent Meets{" "}
                  <span className="text-[#ef5b2d]">Opportunity</span>
                </h2>
                <div className="space-y-6">
                  {sportsHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex gap-6 items-start p-6 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                    >
                      <div className="shrink-0 p-3 bg-[#ef5b2d] rounded-xl shadow-lg">
                        <Medal className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="font-bold text-lg">{item.title}</h4>
                          <span className="text-[10px] bg-[#ef5b2d] px-2 py-1 rounded-full font-bold">
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-sm text-blue-100/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-4 bg-[#ef5b2d]/30 rounded-[3rem] blur-2xl group-hover:bg-[#ef5b2d]/50 transition-colors"></div>
                <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
                  <Image
                    src="/images/news-and-events/news-1.jpg.jpeg"
                    alt="Sports Championship"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0b4f81]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 flex gap-12">
                    <div className="text-center">
                      <div className="text-4xl font-black text-[#ef5b2d]">
                        50+
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                        Trophies
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-[#ef5b2d]">
                        100%
                      </div>
                      <div className="text-[10px] font-bold uppercase tracking-widest text-white/60">
                        Energy
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Map / Presence */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-4xl font-bold text-[#0b4f81]">
              Find the <span className="text-[#ef5b2d]">Gymkhana</span>
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Our sports facilities are spread across the campus to ensure easy
              access for all departments. The main office for sports
              administration is located in the Gymkhana wing.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="p-2 bg-slate-100 rounded-lg text-[#ef5b2d]">
                  <MapPin size={20} />
                </div>
                Main Building, GF, Room 102
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="p-2 bg-slate-100 rounded-lg text-[#ef5b2d]">
                  <Clock size={20} />
                </div>
                Mon - Sat: 6:00 AM - 8:00 PM
              </li>
              <li className="flex items-center gap-4 text-slate-700 font-medium">
                <div className="p-2 bg-slate-100 rounded-lg text-[#ef5b2d]">
                  <Users size={20} />
                </div>
                Open to all SSR Students
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-[16/10] bg-slate-200 rounded-[2rem] overflow-hidden shadow-lg relative cursor-pointer group">
              <Image
                src="/images/photo-gallery/gallery-2.jpg.jpeg"
                alt="Basketball Court"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg">
                Basketball Court
              </div>
            </div>
            <div className="aspect-[16/10] bg-slate-200 rounded-[2rem] overflow-hidden shadow-lg relative cursor-pointer group">
              <Image
                src="/images/photo-gallery/gallery-2.jpg.jpeg"
                alt="Cricket Ground"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
              <div className="absolute bottom-6 left-6 text-white font-bold text-lg">
                Cricket Ground
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="bg-[#ef5b2d] rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-black">
              Ready to Compete?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto text-lg font-light">
              Registration for the Inter-Collegiate annual sports championship
              is now open. Enroll yourself and your team today!
            </p>
            <button className="px-12 py-4 bg-white text-[#ef5b2d] font-bold rounded-full hover:bg-slate-900 hover:text-white transition-all shadow-xl">
              Register for Kshitij 2024
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
