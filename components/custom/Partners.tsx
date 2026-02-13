import Image from "next/image";

const partners = [
  { name: "Aqsa", src: "/images/Aqsa.png" },
  {
    name: "Laddha Advisors",
    src: "/images/Laddha-Advisors-e1628329735875.png",
  },
  {
    name: "Enjay IT Solutions",
    src: "/images/Enjay-It-Solution-Bhilad-e1628315764295.png",
  },
  { name: "Eco Support", src: "/images/Eco-support-3-e1628316362981.png" },
  {
    name: "Classic Colours",
    src: "/images/Classic-Colours-e1628316147126.png",
  },
];

export default function Partners() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full bg-[#0b4f81]/10 text-[#0b4f81] font-semibold text-sm tracking-wide uppercase mb-4">
            Collaboration
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            Our Industry Partners
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading organizations to provide our students
            with the best opportunities and industry exposure.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative w-full h-24 flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="relative w-full h-full filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={partner.src}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
