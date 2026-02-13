import Image from "next/image";
import { Star, Quote } from "lucide-react";

export default function StudentFeedback() {
  const testimonials = [
    {
      name: "Ishita Sharma",
      role: "B.Sc Student",
      image: "/images/ishita_thum.jpg.jpeg",
      text: "SSR College has provided me with the perfect platform to explore my potential. The faculty is incredibly supportive, and the campus environment fosters both academic and personal growth.",
      rating: 5,
    },
    {
      name: "Rajesh Kumar",
      role: "B.Com Graduate",
      image: "/images/rajesh_thum.jpg.jpeg",
      text: "The practical exposure and industry-oriented curriculum helped me secure a great job right after graduation. I am proud to be an alumnus of this prestigious institution.",
      rating: 5,
    },
    {
      name: "Chandan Singh",
      role: "M.Com Student",
      image: "/images/chandan_thum.jpg.jpeg",
      text: "From cultural fests to academic seminars, life at SSR is always happening. It's not just a college; it's a place where memories are made and careers are shaped.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-[#ef5b2d]/10 text-[#ef5b2d] font-semibold text-sm tracking-wide uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-[#0b4f81] mb-6">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from the students who have
            experienced the SSR journey firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_4px_25px_rgb(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gray-100 group-hover:text-[#ef5b2d]/20 transition-colors duration-300">
                <Quote className="w-12 h-12 fill-current" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-8 leading-relaxed relative z-10 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-[#ef5b2d] p-0.5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b4f81] group-hover:text-[#ef5b2d] transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
