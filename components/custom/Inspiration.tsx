import Image from "next/image";
import { Quote } from "lucide-react";

const inspirations = [
  {
    name: "Swami Vivekananda",
    title: "Spiritual Leader",
    image: "/images/Swami-Vivekanand-287x343.jpg.jpeg",
    quote: "Arise, awake, and stop not till the goal is reached.",
    description:
      "His teachings on education emphasize character building and the manifestation of perfection already in man.",
  },
  {
    name: "Mahatma Gandhi",
    title: "Father of the Nation",
    image: "/images/mahatma-gandhi-medium-300x343.jpg.jpeg",
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    description:
      "He believed that education should bring out the best in child and man-body, mind and spirit.",
  },
  {
    name: "Dr. A.P.J. Abdul Kalam",
    title: "Missile Man of India",
    image: "/images/Dr-APJ-Abdul-Kalam-scaled-e1624008672945.jpg.jpeg",
    quote:
      "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
    description:
      "A visionary scientist and leader who inspired the youth to dream big and contribute to the nation's development.",
  },
  {
    name: "Dr. Homi Bhabha",
    title: "Father of Indian Nuclear Programme",
    image: "/images/Homi-Jahangir-Bhabha.jpg.jpeg",
    quote:
      "For, each man can do best and excel in only that thing of which he is passionately fond.",
    description:
      "A pioneer who laid the foundation for India's scientific progress and institutional building.",
  },
];

export default function Inspiration() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative Elements */}

      <div
        className="absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(#0b4f81 0.5px, transparent 0.5px), radial-gradient(#0b4f81 0.5px, #f8fafc 0.5px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-linear-to-b from-[#0b4f81]/5 to-transparent rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-linear-to-t from-[#ef5b2d]/5 to-transparent rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white shadow-sm border border-[#ef5b2d]/20 text-[#ef5b2d] font-bold text-xs tracking-wider uppercase mb-6 animate-fade-in-up">
            Guiding Lights
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0b4f81] mb-6 tracking-tight">
            Our Inspiration
          </h2>
          <div className="w-24 h-1.5 bg-[#ef5b2d] mx-auto rounded-full mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are guided by the vision and values of these great personalities
            who have shaped the nation and the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inspirations.map((person, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 border border-slate-100"
            >
              {/* Header Decoration */}
              <div className="h-2 w-full bg-linear-to-r from-[#0b4f81] to-[#093e66] group-hover:from-[#ef5b2d] group-hover:to-[#ff7f50] transition-all duration-500"></div>

              <div className="relative pt-10 px-8 z-10 text-center pb-6">
                {/* Decorative Ring */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[170px] h-[170px] rounded-full border border-dashed border-gray-300 animate-spin-slow group-hover:border-[#ef5b2d]/30 transition-colors duration-500"></div>

                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:shadow-[#ef5b2d]/20 transition-all duration-500 z-10">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
              </div>

              <div className="p-8 text-center z-10 grow flex flex-col bg-white">
                <h3 className="text-2xl font-bold text-[#0b4f81] mb-2 group-hover:text-[#ef5b2d] transition-colors duration-300">
                  {person.name}
                </h3>
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-6">
                  {person.title}
                </p>

                <div className="mt-auto relative">
                  <Quote className="absolute -top-6 left-0 text-[#0b4f81]/5 w-10 h-10 transform -scale-x-100" />
                  <blockquote className="italic text-gray-700 text-base mb-6 relative z-10 leading-relaxed">
                    "{person.quote}"
                  </blockquote>

                  <div className="w-12 h-px bg-gray-200 mx-auto mb-6 group-hover:bg-[#ef5b2d]/30 transition-colors duration-300"></div>

                  <p className="text-sm text-gray-500 leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
