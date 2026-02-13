import Image from "next/image";
import { Camera, ZoomIn } from "lucide-react";

const galleryImages = [
  {
    src: "/images/gallery-2-500x500.jpg.jpeg",
    alt: "Students Gathering",
    size: "tall",
  },
  {
    src: "/images/IMG_9534-500x500.jpg.jpeg",
    alt: "Campus Event",
    size: "wide",
  },
  {
    src: "/images/JG6A0859-500x500.jpg.jpeg",
    alt: "Award Ceremony",
    size: "small",
  },
  {
    src: "/images/Reading-Sapce-500x500.jpeg",
    alt: "Reading Space",
    size: "tall",
  },
  {
    src: "/images/DSC_0096-500x500.jpg.jpeg",
    alt: "Cultural Fest",
    size: "small",
  },
  {
    src: "/images/photo_2021-06-10_12-49-30.jpg.jpeg",
    alt: "College Building",
    size: "wide",
  },
];

export default function Gallery() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#ef5b2d]/10 text-[#ef5b2d] font-semibold text-sm tracking-wide uppercase mb-4">
            Our Gallery
          </span>
          <h2 className="text-4xl font-bold text-[#0b4f81] mb-6">
            Life at SSR College
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the vibrant campus life, academic excellence, and cultural
            diversity that makes our college unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          {galleryImages.map((image, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden rounded-xl shadow-lg cursor-pointer ${
                image.size === "tall"
                  ? "md:row-span-2"
                  : image.size === "wide"
                    ? "md:col-span-2"
                    : ""
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">
                    {image.alt}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">View Full Size</p>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-[#0b4f81] bg-white border-2 border-[#0b4f81] rounded-full hover:bg-[#0b4f81] hover:text-white transition-all duration-300 group">
            <Camera className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            View All Photos
          </button>
        </div>
      </div>
    </section>
  );
}
