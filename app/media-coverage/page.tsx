import Image from "next/image";
import {
  Newspaper,
  Globe,
  Video,
  ExternalLink,
  Calendar,
  Share2,
  TrendingUp,
  Bookmark,
  Search,
} from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Coverage - SSR College",
  description:
    "Stay updated with the latest press releases, news mentions, and media coverage of SSR College's achievements and impact in the community.",
};

export default function MediaCoveragePage() {
  const categories = [
    "All",
    "Print Media",
    "Digital News",
    "Press Releases",
    "Video Coverage",
  ];

  const features = [
    {
      id: 1,
      source: "DNH Times",
      title: "SSR College Achievements: A Journey to NAAC Grade 'A'",
      date: "October 15, 2023",
      image: "/images/news-and-events/news-1.jpg.jpeg",
      snippet:
        "The institution has set a new benchmark in the region by securing the highest accreditation grade...",
      type: "Print Media",
    },
    {
      id: 2,
      source: "Silvassa News Network",
      title:
        "Industrial Visit: Bridging the Gap Between Academics and Industry",
      date: "September 02, 2023",
      image: "/images/news-and-events/news-2.jpg.jpeg",
      snippet:
        "Students of B.B.A and B.Sc Computer Science explored the manufacturing hubs of DNH...",
      type: "Digital News",
    },
  ];

  const newsItems = [
    {
      source: "Prabhat Express",
      title: "Annual Sports Meet 'Kshitij' Concludes with Grand Finale",
      date: "Dec 12, 2023",
      type: "Print Media",
    },
    {
      source: "DNH Mirror",
      title: "SSR College Announces Scholarship for Tribal Students",
      date: "Nov 28, 2023",
      type: "Digital News",
    },
    {
      source: "Education Today",
      title: "How SSR College is Transforming Higher Education in DNH",
      date: "Nov 15, 2023",
      type: "Digital News",
    },
    {
      source: "VTV Gujarati",
      title: "Video: Highlights of the SSR Memorial Day Celebrations",
      date: "Oct 05, 2023",
      type: "Video Coverage",
    },
    {
      source: "State Express",
      title: "New Science Wing Inaugurated at SSR Campus",
      date: "Sep 20, 2023",
      type: "Print Media",
    },
    {
      source: "Tech News India",
      title: "M.Sc Computer Science Program at SSR Garners Industry Praise",
      date: "Aug 14, 2023",
      type: "Digital News",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full py-28 bg-[#0b4f81] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/news-and-events/event-2.jpg.jpeg"
            alt="SSR Media Coverage"
            fill
            className="object-cover opacity-10 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-b from-[#0b4f81]/95 to-[#0b4f81]/80"></div>

          {/* Animated Background Decor */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            <Newspaper size={16} className="text-[#ef5b2d]" />
            SSR In The Spotlight
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Media Coverage
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Stay updated with the latest mentions, press releases, and news
            coverage of SSR College's impact and achievements.
          </p>
        </div>
      </section>

      {/* Featured Mentions */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {features.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-slate-100 flex flex-col md:flex-row group hover:shadow-2xl transition-all duration-500 animate-in slide-in-from-bottom duration-700"
            >
              <div className="md:w-5/12 relative aspect-video md:aspect-auto">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="md:w-7/12 p-8 lg:p-10 space-y-4 flex flex-col justify-center">
                <div className="flex items-center justify-between text-[11px] font-black uppercase tracking-[0.2em] text-[#ef5b2d]">
                  <span className="bg-orange-50 px-3 py-1 rounded-full">
                    {item.type}
                  </span>
                  <span className="text-slate-400">{item.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-[#0b4f81] group-hover:text-[#ef5b2d] transition-colors leading-tight">
                  {item.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {item.snippet}
                </p>
                <div className="pt-4 flex items-center gap-4">
                  <span className="font-bold text-slate-800 text-xs italic">
                    Source: {item.source}
                  </span>
                  <button className="p-2 text-[#0b4f81] hover:text-[#ef5b2d] transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Main List & Filters */}
      <section className="py-24 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* List Section */}
          <div className="lg:w-8/12 space-y-8">
            <div className="flex items-center justify-between border-b border-slate-200 pb-6">
              <h3 className="text-2xl font-bold text-[#0b4f81]">All Reports</h3>
              <div className="hidden md:flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`text-xs font-bold px-4 py-2 rounded-full border transition-all ${cat === "All" ? "bg-[#0b4f81] text-white border-[#0b4f81]" : "bg-white text-slate-500 border-slate-100 hover:border-[#ef5b2d] hover:text-[#ef5b2d]"}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {newsItems.map((news, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-100 hover:border-[#ef5b2d]/20 hover:shadow-lg transition-all flex flex-col sm:flex-row items-center justify-between gap-6 group"
                >
                  <div className="flex items-center gap-5 w-full">
                    <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-[#0b4f81] group-hover:bg-[#ef5b2d] group-hover:text-white transition-colors shadow-sm">
                      {news.type === "Video Coverage" ? (
                        <Video size={20} />
                      ) : (
                        <Newspaper size={20} />
                      )}
                    </div>
                    <div className="space-y-1 grow">
                      <h4 className="font-bold text-slate-800 group-hover:text-[#0b4f81] transition-colors line-clamp-1">
                        {news.title}
                      </h4>
                      <div className="flex items-center gap-3 text-[10px] font-semibold text-slate-400">
                        <span className="flex items-center gap-1 group-hover:text-[#ef5b2d] transition-colors">
                          <Globe size={10} /> {news.source}
                        </span>
                        <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
                        <span className="flex items-center gap-1">
                          <Calendar size={10} /> {news.date}
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="sm:shrink-0 px-6 py-2 bg-slate-50 text-slate-600 font-bold text-xs rounded-full hover:bg-[#ef5b2d] hover:text-white transition-all border border-slate-100 uppercase tracking-widest">
                    View Article
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-8 text-center">
              <button className="px-10 py-4 bg-white text-[#0b4f81] font-bold rounded-full border-2 border-slate-100 hover:border-[#ef5b2d] hover:text-[#ef5b2d] transition-all shadow-sm">
                Load More Mentions
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-4/12 space-y-8">
            {/* Search Card */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 space-y-6">
              <h4 className="font-bold text-[#0b4f81] flex items-center gap-2">
                <Search size={18} className="text-[#ef5b2d]" />
                Find Coverage
              </h4>
              <div className="relative">
                <input
                  type="text"
                  placeholder="e.g. NAAC Grade, Admissions..."
                  className="w-full bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#ef5b2d]/30"
                />
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#ef5b2d] p-8 rounded-[2.5rem] text-white shadow-xl shadow-orange-900/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <TrendingUp
                size={40}
                className="text-white/20 mb-6 group-hover:scale-110 transition-transform"
              />
              <h4 className="text-2xl font-bold mb-2">Expanding Reach</h4>
              <p className="text-orange-100 text-sm font-light mb-8">
                With over <strong className="text-white">100+</strong> national
                and regional media mentions in the last year alone.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-xl font-bold">50+</div>
                  <div className="text-[9px] uppercase font-bold tracking-widest opacity-60">
                    Print Media
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
                  <div className="text-xl font-bold">12k+</div>
                  <div className="text-[9px] uppercase font-bold tracking-widest opacity-60">
                    Digital Reach
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="bg-[#0b4f81] p-8 rounded-[2.5rem] text-white shadow-xl shadow-blue-900/10 space-y-6">
              <div className="p-3 bg-white/10 rounded-2xl w-fit">
                <Share2 size={24} />
              </div>
              <h4 className="text-xl font-bold">Media Inquiries</h4>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                Are you a member of the press? Contact our communications
                department for interviews or campus visits.
              </p>
              <button className="w-full py-4 bg-white text-[#0b4f81] font-bold rounded-2xl hover:bg-[#ef5b2d] hover:text-white transition-all shadow-lg">
                Contact Press Cell
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Press Kit Callout */}
      <section className="container mx-auto px-4 max-w-7xl pt-12">
        <div className="bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden group">
          <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left space-y-2">
              <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
                <Bookmark className="text-[#ef5b2d]" />
                Institutional Press Kit
              </h3>
              <p className="text-slate-400 font-light max-w-xl">
                Download high-resolution campus photos, logos, and leadership
                profiles for media publication.
              </p>
            </div>
            <button className="px-10 py-4 bg-[#ef5b2d] text-white font-bold rounded-full hover:bg-white hover:text-[#ef5b2d] transition-all shadow-xl shadow-black/40 flex items-center gap-3">
              Download Press Kit (ZIP)
              <Share2 size={18} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
