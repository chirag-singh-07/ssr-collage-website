import Image from "next/image";
import {
  Target,
  Rocket,
  History,
  CheckCircle2,
  Lightbulb,
  ShieldCheck,
  Users2,
  Trophy,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vision & Mission - SSR College",
  description:
    "Discover SSR College's vision to be a Centre of Excellence and our mission to nurture creativity, research orientation, and leadership in students.",
};

const VisionMissionPage = () => {
  const objectives = [
    {
      title: "Quality Education",
      description:
        "To provide quality education to students from various parts of the society, making them academically and technically competent.",
    },
    {
      title: "Infrastructure Growth",
      description:
        "To continuously improve existing infrastructural facilities of the college to support modern learning.",
    },
    {
      title: "Intellectual Development",
      description:
        "To create higher levels of intellectual abilities through rigorous academic and research programs.",
    },
    {
      title: "Centers of Excellence",
      description:
        "To create centers of excellence for research and development and for sharing knowledge and its application.",
    },
    {
      title: "Character Building",
      description:
        "To lay emphasis on character building by imbibing strong moral character and dignified living.",
    },
    {
      title: "Teaching & Research",
      description:
        "To lay emphasis on holistic teaching, research, and extension activities for societal benefit.",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white pb-20">
      {/* Hero Section */}
      <section className="relative w-full py-28 bg-[#0b4f81] overflow-hidden">
        {/* Background Image / Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/college_campus_modern_building_1770918889272.png"
            alt="SSR College Campus"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b4f81]/95 via-[#0b4f81]/80 to-[#0b4f81]/60"></div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ef5b2d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            Purpose & Drive
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Vision & Mission
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            SSR College is dedicated to excellence in education, research, and
            character building, serving as a beacon of knowledge in DNH.
          </p>
          <div className="w-24 h-1.5 bg-[#ef5b2d] mx-auto mt-10 rounded-full shadow-[0_0_15px_rgba(239,91,45,0.4)] animate-in scale-x-0 fill-mode-forwards duration-1000 delay-300"></div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="relative z-20 -mt-16 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-left duration-700 delay-400">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0b4f81] mb-8 group-hover:bg-[#0b4f81] group-hover:text-white transition-colors duration-300">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0b4f81] mb-6">
              Our Vision
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                To emerge as a{" "}
                <strong className="text-slate-800">
                  "Centre of Excellence"
                </strong>{" "}
                and{" "}
                <strong className="text-slate-800">
                  "Global Hub for Knowledge"
                </strong>{" "}
                with cutting-edge research & development skills to create
                entrepreneurs capable of contributing in different fields.
              </p>
              <p>
                To emerge as a brand name and synonym of Education for students
                at global level.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-slate-100 group hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-right duration-700 delay-400">
            <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-[#ef5b2d] mb-8 group-hover:bg-[#ef5b2d] group-hover:text-white transition-colors duration-300">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-[#0b4f81] mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                To nurture the students with{" "}
                <strong className="text-slate-800">
                  creativity, research orientation,
                </strong>{" "}
                and the finest qualities of leadership in order to excel in work
                and life with servitude for the society.
              </p>
              <p>
                We strive to empower the local tribal community and residents of
                Dadra and Nagar Haveli through accessible, high-quality higher
                education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story / Background Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/college_campus_modern_building_1770918889272.png"
              alt="SSR College Legacy"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0b4f81]/20 hover:bg-transparent transition-colors duration-500"></div>
          </div>

          <div className="space-y-8 animate-in slide-in-from-bottom duration-700 delay-500">
            <div className="flex items-center gap-3 text-[#ef5b2d] font-bold tracking-wider uppercase text-sm">
              <History size={20} />
              The SSR Legacy
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#0b4f81] leading-tight">
              Fulfilling a Visionary Dream
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p>
                Dadra and Nagar Haveli is a vibrant industrial hub, a melting
                pot where people from various states and cultures live together.
                SSR College serves as the common thread for this diverse
                community.
              </p>
              <p>
                Our institution was established to fulfill the dream of{" "}
                <strong className="text-slate-800 underline decoration-[#ef5b2d]/30 underline-offset-4">
                  Late Shree Sanjibhai Rupjibhai Delkar
                </strong>
                , a renowned freedom fighter and first Member of Parliament from
                DNH.
              </p>
              <p>
                His vision was furthered by{" "}
                <strong className="text-slate-800 underline decoration-[#ef5b2d]/30 underline-offset-4">
                  Late Shree Mohan S. Delkar
                </strong>{" "}
                (Founder Chairman of SSR Memorial Trust), aiming to empower the
                people of DNH and Tribal areas through the transformative power
                of education.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-slate-100 px-6 py-3 rounded-xl flex items-center gap-3 text-[#0b4f81] font-semibold border border-slate-200">
                <Users2 size={24} className="text-[#ef5b2d]" />
                Empowering Communities
              </div>
              <div className="bg-slate-100 px-6 py-3 rounded-xl flex items-center gap-3 text-[#0b4f81] font-semibold border border-slate-200">
                <Trophy size={24} className="text-[#ef5b2d]" />
                Centre of Excellence
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-24 bg-white border-y border-slate-100 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-[#0b4f81]">
              Objectives for Leadership
            </h2>
            <div className="w-20 h-1 bg-[#ef5b2d] mx-auto rounded-full"></div>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Strategic goals that guide our daily operations and long-term
              academic growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:border-[#ef5b2d]/20 hover:bg-white hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-[#ef5b2d] mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#0b4f81] mb-4">
                  {obj.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-[2rem] bg-[#0b4f81] text-white flex flex-col lg:flex-row items-center justify-between gap-8 animate-in zoom-in duration-700">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-[#ef5b2d] rounded-2xl flex items-center justify-center shadow-lg">
                <ShieldCheck size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  Incorruptible & Dignified Life
                </h3>
                <p className="text-blue-100 opacity-80">
                  Inspiring students to lead with character and strong morals.
                </p>
              </div>
            </div>
            <button className="px-8 py-3 bg-white text-[#0b4f81] font-bold rounded-full hover:bg-[#ef5b2d] hover:text-white transition-all shadow-xl shadow-black/20">
              Learn More About Us
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default VisionMissionPage;
