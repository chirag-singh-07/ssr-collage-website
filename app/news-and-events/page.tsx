import Image from "next/image";
import {
  Calendar,
  Clock,
  MapPin,
  ArrowRight,
  Bell,
  Download,
  Newspaper,
} from "lucide-react";

export default function NewsAndEventsPage() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Cultural Fest 'Utsav 2025'",
      date: "Aug 15, 2025",
      time: "10:00 AM - 05:00 PM",
      location: "College Auditorium",
      category: "Cultural",
      image: "/images/college_event_auditorium_1770918933459.png",
      description:
        "Join us for a day filled with music, dance, and drama as we celebrate our annual cultural festival.",
    },
    {
      id: 2,
      title: "Science Exhibition",
      date: "Sep 05, 2025",
      time: "09:00 AM - 02:00 PM",
      location: "Science Block",
      category: "Academic",
      image: "/images/lab-microscope.png",
      description:
        "Showcasing innovative projects and research by our talented science students.",
    },
    {
      id: 3,
      title: "Inter-College Cricket Tournament",
      date: "Oct 10, 2025",
      time: "08:00 AM - 04:00 PM",
      location: "College Ground",
      category: "Sports",
      image: "/images/IMG_7960-scaled.jpg.jpeg",
      description:
        "Cheer for our team as they compete against the best colleges in the region.",
    },
  ];

  const latestNews = [
    {
      id: 1,
      title: "SSR Students Secure Top Ranks in University Exams",
      date: "July 20, 2025",
      category: "Achievement",
      image: "/images/scholarship-1.jpg.jpeg",
      excerpt:
        "We are proud to announce that 5 of our students have secured top 10 university ranks in the recent final year examinations.",
    },
    {
      id: 2,
      title: "Inauguration of New Computer Lab",
      date: "June 15, 2025",
      category: "Infrastructure",
      image: "/images/IMG_9534-500x500.jpg.jpeg",
      excerpt:
        "A state-of-the-art computer lab with 100+ latest workstations was inaugurated by the Principal today.",
    },
    {
      id: 3,
      title: "Guest Lecture on 'Future of AI'",
      date: "May 28, 2025",
      category: "Seminar",
      image: "/images/DSC_0096-500x500.jpg.jpeg",
      excerpt:
        "Renowned industry expert Mr. A. Sharma delivered an insightful session on Artificial Intelligence and its impact on careers.",
    },
  ];

  const notices = [
    {
      id: 1,
      title: "Admission Open for Academic Year 2025-26",
      date: "July 01, 2025",
      isNew: true,
    },
    {
      id: 2,
      title: "Examination Schedule - September 2025",
      date: "July 12, 2025",
      isNew: true,
    },
    {
      id: 3,
      title: "Notice regarding Scholarship Applications",
      date: "June 25, 2025",
      isNew: false,
    },
    {
      id: 4,
      title: "Holiday Declaration - Independence Day",
      date: "August 10, 2025",
      isNew: false,
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-[#0b4f81] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/college_event_auditorium_1770918933459.png"
            alt="SSR College Events"
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
            Stay Updated
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            News & Events
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Keep up with the vibrant campus life, academic achievements, and
            upcoming activities at SSR College.
          </p>
          <div className="w-24 h-1 bg-[#ef5b2d] mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(239,91,45,0.5)] animate-in scale-x-0 fill-mode-forwards duration-1000 delay-300"></div>
        </div>
      </section>

      <div className="container mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content Column (Events & News) */}
          <div className="lg:col-span-2 space-y-16">
            {/* Upcoming Events Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[#0b4f81] flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-[#ef5b2d]" />
                  Upcoming Events
                </h2>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#ef5b2d] hover:underline flex items-center gap-1"
                >
                  View All <ArrowRight size={16} />
                </a>
              </div>

              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col md:flex-row hover:-translate-y-1"
                  >
                    {/* Event Image */}
                    <div className="md:w-2/5 relative h-48 md:h-auto overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#0b4f81] shadow-sm">
                        {event.category}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="md:w-3/5 p-6 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-3">
                        <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                          <Calendar size={14} className="text-[#ef5b2d]" />
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                          <Clock size={14} className="text-[#ef5b2d]" />
                          {event.time}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#0b4f81] transition-colors">
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                        <MapPin size={16} className="text-slate-400" />
                        {event.location}
                      </div>

                      <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                        {event.description}
                      </p>

                      <button className="self-start text-sm font-semibold text-[#0b4f81] group-hover:text-[#ef5b2d] transition-colors inline-flex items-center gap-1">
                        Event Details <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Latest News Section */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-[#0b4f81] flex items-center gap-3">
                  <Newspaper className="w-8 h-8 text-[#ef5b2d]" />
                  Latest News
                </h2>
                <a
                  href="#"
                  className="text-sm font-semibold text-[#ef5b2d] hover:underline flex items-center gap-1"
                >
                  Read More <ArrowRight size={16} />
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {latestNews.map((news) => (
                  <div
                    key={news.id}
                    className="group bg-white rounded-2xl border border-slate-100 hover:border-[#0b4f81]/20 p-5 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-48 rounded-xl overflow-hidden mb-5">
                      <Image
                        src={news.image}
                        alt={news.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-60"></div>
                      <div className="absolute bottom-3 left-3 text-white text-xs font-medium bg-[#ef5b2d] px-2 py-1 rounded-md">
                        {news.category}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-3 font-medium">
                      <Calendar size={14} />
                      {news.date}
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-[#0b4f81] transition-colors">
                      {news.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4">
                      {news.excerpt}
                    </p>
                    <a
                      href="#"
                      className="text-sm font-semibold text-[#0b4f81] hover:text-[#ef5b2d] transition-colors"
                    >
                      Read Full Story &rarr;
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Column (Notice Board) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Notice Board Card */}
              <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="bg-[#0b4f81] p-6 text-white flex items-center justify-between">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <Bell size={20} className="animate-bounce" />
                    Notice Board
                  </h3>
                  <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                    Live
                  </span>
                </div>

                <div className="p-2">
                  <div className="max-h-[400px] overflow-y-auto pr-2 custom-scrollbar space-y-2 p-4">
                    {notices.map((notice) => (
                      <div
                        key={notice.id}
                        className="group p-4 rounded-xl bg-slate-50 border-l-4 border-slate-200 hover:border-[#ef5b2d] hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer"
                      >
                        <div className="flex justify-between items-start mb-2">
                          {notice.isNew && (
                            <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full uppercase tracking-wide animate-pulse">
                              New
                            </span>
                          )}
                          <span className="text-xs text-slate-400 font-medium ml-auto">
                            {notice.date}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-slate-700 group-hover:text-[#0b4f81] transition-colors line-clamp-2">
                          {notice.title}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#0b4f81] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0 duration-300">
                          <Download size={14} /> Download PDF
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                  <button className="text-sm font-semibold text-[#ef5b2d] hover:text-[#0b4f81] transition-colors">
                    View All Notices
                  </button>
                </div>
              </div>

              {/* Quick Links / Categories */}
              <div className="bg-[#0b4f81] rounded-2xl p-6 text-white relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-colors"></div>
                <h3 className="text-lg font-bold mb-4 relative z-10">
                  Categories
                </h3>
                <ul className="space-y-3 relative z-10">
                  {[
                    "Academic",
                    "Examination",
                    "Sports",
                    "Cultural",
                    "Placement",
                  ].map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="flex items-center justify-between text-white/80 hover:text-white hover:pl-2 transition-all duration-300 border-b border-white/10 pb-2 last:border-0"
                      >
                        {cat} <ArrowRight size={14} className="opacity-50" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
