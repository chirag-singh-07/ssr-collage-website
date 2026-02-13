import Image from "next/image";
import {
  BookOpen,
  Calendar,
  CheckCircle,
  GraduationCap,
  Users,
} from "lucide-react";

export default function BAProgramPage() {
  const highlights = [
    "Diverse electives in Literature, History, and Political Science",
    "Focus on critical thinking and communication skills",
    "Opportunities for creative writing and journalism",
    "Expert faculty with research backgrounds",
    "Regular seminars and cultural workshops",
  ];

  const curriculum = [
    {
      year: "Year 1",
      subjects: [
        "English Literature & Language",
        "Introduction to Sociology",
        "Microeconomics",
        "Political Theory",
        "History of Modern India",
        "Environmental Studies",
      ],
    },
    {
      year: "Year 2",
      subjects: [
        "Advanced English Composition",
        "Social Psychology",
        "Macroeconomics",
        "Indian Political System",
        "World History",
        "Communication Skills",
      ],
    },
    {
      year: "Year 3",
      subjects: [
        "Literary Criticism",
        "Research Methodology",
        "Public Administration",
        "Development Economics",
        "International Relations",
        "Project Work",
      ],
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
            alt="Bachelor of Arts"
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
            Arts & Humanities
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Bachelor of Arts (BA)
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Explore the depths of human culture, society, and expression. A
            comprehensive program to shape critical thinkers and creative minds.
          </p>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full inline-flex items-center gap-6 px-6 py-3 mt-8 animate-in slide-in-from-bottom duration-700 delay-200">
            <div className="flex items-center gap-2 text-white">
              <Calendar size={18} className="text-[#ef5b2d]" />
              <span className="text-sm font-semibold">3 Years</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white">
              <GraduationCap size={18} className="text-[#ef5b2d]" />
              <span className="text-sm font-semibold">Undergraduate</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2 text-white">
              <Users size={18} className="text-[#ef5b2d]" />
              <span className="text-sm font-semibold">60 Seats</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Course */}
            <section className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-[#0b4f81] mb-6 flex items-center gap-2">
                <BookOpen className="text-[#ef5b2d]" /> About the Program
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
                <p>
                  The Bachelor of Arts (BA) program at SSR College provides a
                  strong foundation in humanities and social sciences. It is
                  designed to foster intellectual curiosity, analytical
                  thinking, and cultural awareness among students.
                </p>
                <p>
                  Students can choose from a wide range of electives including
                  English, Economics, History, Political Science, and
                  Psychology. The curriculum blends theoretical knowledge with
                  practical applications through seminars, debates, and research
                  projects.
                </p>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="text-2xl font-bold text-[#0b4f81] mb-6">
                Program Highlights
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow"
                  >
                    <CheckCircle
                      className="text-green-500 shrink-0 mt-1"
                      size={20}
                    />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-2xl font-bold text-[#0b4f81] mb-6">
                Curriculum Overview
              </h2>
              <div className="space-y-6">
                {curriculum.map((year, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                  >
                    <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 font-bold text-slate-800 flex justify-between items-center">
                      {year.year}
                      <span className="text-xs font-normal text-slate-500 bg-white px-2 py-1 rounded border border-slate-200">
                        2 Semesters
                      </span>
                    </div>
                    <div className="p-6">
                      <ul className="grid md:grid-cols-2 gap-y-2 gap-x-4">
                        {year.subjects.map((subject, subIndex) => (
                          <li
                            key={subIndex}
                            className="flex items-center gap-2 text-slate-600 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-[#ef5b2d] rounded-full"></div>
                            {subject}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* CTA Card */}
            <div className="bg-[#0b4f81] rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Admissions Open 2025
              </h3>
              <p className="text-white/80 mb-6 relative z-10 text-sm">
                Start your journey in Arts & Humanities. Apply now for the
                upcoming academic session.
              </p>
              <button className="w-full py-3 bg-[#ef5b2d] text-white font-bold rounded-xl hover:bg-white hover:text-[#ef5b2d] transition-all shadow-lg relative z-10">
                Apply Now
              </button>
            </div>

            {/* Related Courses */}
            <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-4">
                Related Programs
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="/available-programmes/b-com"
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg group-hover:bg-[#0b4f81] group-hover:text-white transition-colors">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-700 group-hover:text-[#0b4f81]">
                        B.Com
                      </h4>
                      <p className="text-xs text-slate-500">
                        Commerce & Accounting
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="/available-programmes/b-b-a"
                    className="group flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    <div className="bg-orange-100 text-orange-600 p-2 rounded-lg group-hover:bg-[#ef5b2d] group-hover:text-white transition-colors">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-slate-700 group-hover:text-[#0b4f81]">
                        BBA
                      </h4>
                      <p className="text-xs text-slate-500">Business Admin</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
