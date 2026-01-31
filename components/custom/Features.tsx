import { BookOpen, Globe, Microscope } from "lucide-react";

const featuresData = [
  {
    title: "Certificate Courses",
    description:
      "College is planning to start various certificate courses in different branches.",
    icon: BookOpen,
    color: "bg-[#8cc63f]", // Vibrant Green
    delay: "delay-100",
  },
  {
    title: "College Laboratories",
    description:
      "College has fully Wi-Fi enable Class rooms & laboratories for students and researchers. All the labs has state-of-the-art facilities",
    icon: Microscope,
    color: "bg-[#29abe2]", // Vibrant Cyan/Blue
    delay: "delay-200",
  },
  {
    title: "Faculties",
    description:
      "Here at SSR College of Arts, Commerce and Science have team of committed, qualified well experienced teaching staff for boosting the",
    icon: Globe,
    color: "bg-[#f15a24]", // Vibrant Orange
    delay: "delay-300",
  },
];

const Features = () => {
  return (
    <section className="relative z-20 -mt-10 lg:-mt-20 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl rounded-none overflow-hidden">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className={`${feature.color} text-white p-10 lg:p-12 flex flex-col items-center text-center transition-transform duration-300 hover:z-10 hover:scale-105 group`}
            >
              <div className="mb-6 p-4 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm">
                <feature.icon size={48} className="text-white drop-shadow-md" />
              </div>

              <h3 className="text-2xl font-bold mb-4 tracking-wide">
                {feature.title}
              </h3>

              <p className="text-white/90 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
