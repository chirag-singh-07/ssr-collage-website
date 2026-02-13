import Image from "next/image";
import { Quote, Mail, GraduationCap, Award } from "lucide-react";

export default function PrincipalsDesk() {
  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-[#0b4f81] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/college_campus_modern_building_1770918889272.png"
            alt="College Campus"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b4f81]/95 via-[#0b4f81]/80 to-[#0b4f81]/60"></div>

          {/* Animated Background Shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef5b2d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10">
            Leadership
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Principal's Desk
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
            "Education is the most powerful weapon which you can use to change
            the world."
          </p>
          <div className="w-24 h-1 bg-[#ef5b2d] mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(239,91,45,0.5)]"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Decorative background elements for the page */}
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#0b4f81]/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#ef5b2d]/5 rounded-full blur-3xl -z-10"></div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Principal's Image Column (Sticky Sidebar) */}
            <div className="w-full lg:w-4/12 shrink-0 animate-in slide-in-from-left duration-700">
              <div className="lg:sticky lg:top-24 space-y-8">
                <div className="relative group">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 border-2 border-[#ef5b2d]/20 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>

                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2 ring-1 ring-slate-900/5">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-100">
                      <Image
                        src="/images/principal-265x300.jpg"
                        alt="Dr. Rajeev Singh"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#0b4f81]/90 to-transparent opacity-80"></div>

                      {/* Name Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                        <h2 className="text-2xl font-bold">Dr. Rajeev Singh</h2>
                        <p className="text-white/80 text-sm font-medium uppercase tracking-wider mt-1">
                          Principal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact & Info Card */}
                <div className="bg-white rounded-xl shadow-lg border border-slate-100 p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#0b4f81]/10 text-[#0b4f81] rounded-lg">
                      <GraduationCap size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">
                        Qualification
                      </h3>
                      <p className="text-slate-600 text-sm">M.Com, MBA, Ph.D</p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-slate-100"></div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#ef5b2d]/10 text-[#ef5b2d] rounded-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800">Contact</h3>
                      <a
                        href="mailto:principalssracs@gmail.com"
                        className="text-slate-600 text-sm hover:text-[#ef5b2d] transition-colors break-all"
                      >
                        principalssracs@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Content Column */}
            <div className="w-full lg:w-8/12 animate-in slide-in-from-bottom duration-700 delay-200">
              <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-12 ring-1 ring-slate-900/5">
                {/* Background Pattern inside card */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#0b4f81_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none rounded-3xl"></div>

                <div className="relative prose prose-lg prose-slate max-w-none">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-12 h-1 bg-[#ef5b2d] rounded-full"></span>
                    <h3 className="text-2xl font-bold text-[#0b4f81] m-0 font-serif">
                      Message from the Principal
                    </h3>
                  </div>

                  <div className="relative mb-10 p-8 bg-[#0b4f81]/5 rounded-2xl border-l-4 border-[#0b4f81]">
                    <Quote className="absolute top-4 left-4 text-[#0b4f81]/20 w-8 h-8 transform rotate-180" />
                    <p className="text-lg text-slate-700 italic m-0 relative z-10 font-serif leading-relaxed">
                      "It is with great pleasure that I welcome you to our
                      college website. SSR College of ACS is a vibrant
                      educational community of exemplary standards, with
                      commitment to quality education, and rigorous academic
                      environment, since its inception."
                    </p>
                  </div>

                  <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#ef5b2d] first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                    Our College is affiliated to{" "}
                    <strong>Savitribai Phule Pune University, Pune</strong>, one
                    of the leading universities in India. Our team of devoted
                    teachers strongly promote academic achievement among our
                    students. We strive to inculcate core values among students
                    to carve responsible citizens out of them.
                  </p>

                  <p>
                    We guide our students to be successful professionals to
                    perform at their best capacity working in different avenues
                    and levels. In addition to quality education, the college
                    provides continuous support and assistance to the students
                    in achieving their career goals. We have MOU’s with various
                    training placement partners who happily support us to
                    nurture and cultivate successful individuals.
                  </p>

                  {/* Feature Box */}
                  <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                      <Award className="text-[#ef5b2d] mb-3 h-8 w-8" />
                      <h4 className="font-bold text-[#0b4f81] mb-2">
                        Academic Excellence
                      </h4>
                      <p className="text-sm text-slate-600">
                        Expanding the pool of knowledge and creation of ideas
                        through excellence.
                      </p>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                      <GraduationCap className="text-[#0b4f81] mb-3 h-8 w-8" />
                      <h4 className="font-bold text-[#0b4f81] mb-2">
                        Holistic Growth
                      </h4>
                      <p className="text-sm text-slate-600">
                        A range of cultural, artistic, sporting and social
                        opportunities.
                      </p>
                    </div>
                  </div>

                  <p>
                    Apart from the vibrant and distinctive environment for
                    studies, we have a lush green campus and necessary
                    amenities. We always focus on quality to develop the belief
                    that <strong>SSRions are second to none</strong>. Students
                    can study Commerce, Business Management, Computer
                    Application, and Arts or Science at UG or PG level.
                  </p>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-lg font-medium text-slate-700 italic m-0 text-center md:text-left">
                      "I wish you success in the journey of this college."
                    </p>

                    <div className="text-center md:text-right shrink-0">
                      <p className="font-serif text-3xl text-[#0b4f81] font-bold italic mb-1 signature-text">
                        Dr. Rajeev Singh
                      </p>
                      <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                        Principal, SSR ACS College
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
