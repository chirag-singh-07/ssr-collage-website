import { BookOpen, Globe, Microscope, ArrowRight } from "lucide-react";

const featuresData = [
  {
    title: "Certificate Courses",
    description:
      "College is planning to start various certificate courses in different branches to enhance employability.",
    icon: BookOpen,
    color: "bg-[#8cc63f]", // Vibrant Green
    delay: "delay-100",
  },
  {
    title: "College Laboratories",
    description:
      "Fully Wi-Fi enabled classrooms & laboratories with state-of-the-art facilities for research.",
    icon: Microscope,
    color: "bg-[#29abe2]", // Vibrant Cyan/Blue
    delay: "delay-200",
  },
  {
    title: "Faculties",
    description:
      "A dedicated team of committed, qualified, and experienced teaching staff to guide every student.",
    icon: Globe,
    color: "bg-[#f15a24]", // Vibrant Orange
    delay: "delay-300",
  },
];

const Features = () => {
  return (
    <section className="relative z-20 py-16 lg:py-24 px-4 bg-white">
      <div className="container max-w-7xl mx-auto">
        {/* Section Header (Optional, but adds structure) */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-[#0b4f81]">SSR ACS College?</span>
          </h2>
          <div className="w-24 h-1 bg-[#ef5b2d] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} relative p-8 lg:p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 text-white overflow-hidden group  hover:text-black`}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Circle */}
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-300">
                  <feature.icon
                    size={32}
                    className="text-white group-hover:text-current transition-colors duration-300"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold mb-4 tracking-tight">
                  {feature.title}
                </h3>

                <p className="text-white/90 leading-relaxed font-medium mb-8 grow">
                  {feature.description}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-bold uppercase tracking-wider text-sm hover:gap-3 transition-all duration-300 opacity-90 hover:opacity-100"
                >
                  Read More
                  <ArrowRight size={16} />
                </a>
              </div>

              {/* Watermark Icon */}
              <feature.icon
                strokeWidth={1.5}
                className="absolute -bottom-4 -right-4 w-48 h-48 opacity-10 rotate-12 group-hover:scale-110 group-hover:rotate-0 transition-all duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
