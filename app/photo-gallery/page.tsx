import Image from "next/image";
import { Camera, ZoomIn } from "lucide-react";

export default function PhotoGalleryPage() {
  const categories = [
    "All",
    "Campus Life",
    "Events",
    "Sports",
    "Infrastructure",
  ];

  const photos = [
    {
      id: 1,
      src: "/images/college_event_auditorium_1770918933459.png",
      category: "Events",
      title: "Annual Day Celebrations",
      size: "large",
    },
    {
      id: 2,
      src: "/images/IMG_7960-scaled.jpg.jpeg",
      category: "Sports",
      title: "Cricket Tournament Finals",
      size: "medium",
    },
    {
      id: 3,
      src: "/images/lab-microscope.png",
      category: "Infrastructure",
      title: "Science Laboratory",
      size: "small",
    },
    {
      id: 4,
      src: "/college_campus_modern_building_1770918889272.png",
      category: "Campus Life",
      title: "Main Campus Building",
      size: "large",
    },
    {
      id: 5,
      src: "/images/DSC_0096-500x500.jpg.jpeg",
      category: "Events",
      title: "Cultural Fest Dance",
      size: "medium",
    },
    {
      id: 6,
      src: "/images/scholarship-1.jpg.jpeg",
      category: "Events",
      title: "Scholarship Distribution",
      size: "small",
    },
    {
      id: 7,
      src: "/images/books-500x500.jpg.jpeg",
      category: "Infrastructure",
      title: "Library Resources",
      size: "medium",
    },
    {
      id: 8,
      src: "/images/principal-265x300.jpg",
      category: "Campus Life",
      title: "Principal Address",
      size: "small",
    },
  ];

  return (
    <main className="bg-slate-50 min-h-screen selection:bg-[#ef5b2d] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full py-24 bg-[#0b4f81] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/DSC_0096-500x500.jpg.jpeg"
            alt="SSR College Gallery"
            fill
            className="object-cover opacity-20 blur-sm"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#0b4f81]/95 via-[#0b4f81]/80 to-[#0b4f81]/60"></div>

          {/* Animated Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ef5b2d]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white/90 font-semibold text-sm tracking-wide uppercase mb-6 backdrop-blur-md border border-white/10 animate-in fade-in zoom-in duration-500">
            Memory Lane
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-in slide-in-from-bottom duration-700">
            Photo Gallery
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed font-light animate-in slide-in-from-bottom duration-700 delay-100">
            Capturing the essence of campus life, vibrant events, and
            unforgettable moments at SSR College.
          </p>
          <div className="w-24 h-1 bg-[#ef5b2d] mx-auto mt-8 rounded-full shadow-[0_0_10px_rgba(239,91,45,0.5)] animate-in scale-x-0 fill-mode-forwards duration-1000 delay-300"></div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Categories Filter (Visual only for now) */}
          <div className="flex flex-wrapjustify-center gap-4 mb-12 animate-in slide-in-from-bottom duration-700 delay-200 justify-center">
            {categories.map((cat, index) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  index === 0
                    ? "bg-[#ef5b2d] text-white shadow-lg shadow-orange-500/30"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className="break-inside-avoid relative group rounded-2xl overflow-hidden bg-slate-200 cursor-pointer animate-in fade-in zoom-in duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                    <div className="w-12 h-12 bg-[#ef5b2d] rounded-full flex items-center justify-center text-white mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ZoomIn size={24} />
                    </div>
                    <span className="text-[#ef5b2d] text-xs font-bold uppercase tracking-wider mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                      {photo.category}
                    </span>
                    <h3 className="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 bg-white border border-slate-200 text-[#0b4f81] font-bold rounded-full hover:bg-[#0b4f81] hover:text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto group">
              <Camera
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              View All Photos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
