import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 w-full h-full">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Blobs */}
        <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] rounded-full bg-[#0b4f81]/5 blur-3xl opacity-70" />
        <div className="absolute top-[40%] -left-[10%] w-[400px] h-[400px] rounded-full bg-[#ef5b2d]/5 blur-3xl opacity-60" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-in fade-in slide-in-from-bottom-5 duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0b4f81]/10 text-[#0b4f81] text-sm font-semibold tracking-wide uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ef5b2d] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ef5b2d]"></span>
              </span>
              Welcome to SSR ACS College
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-slate-900 tracking-tight">
              Empowering Minds, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0b4f81] to-[#0a436f]">
                Shaping Futures.
              </span>
            </h1>

            <p className="text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience excellence in education with our state-of-the-art
              facilities, dedicated faculty, and a curriculum designed to foster
              innovation and leadership.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Button
                size="lg"
                className="bg-[#ef5b2d] hover:bg-[#d44d21] text-white px-8 h-14 text-base rounded-full shadow-lg shadow-orange-500/25 transition-all hover:-translate-y-1 w-full sm:w-auto"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#0b4f81] text-[#0b4f81] hover:bg-[#0b4f81]/5 px-8 h-14 text-base rounded-full w-full sm:w-auto font-medium"
              >
                Admission Open
                <BookOpen className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-200">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#0b4f81] mb-1">
                  25+
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  Years Excellence
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#0b4f81] mb-1">
                  50+
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  Courses Offered
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#0b4f81] mb-1">
                  10k+
                </div>
                <div className="text-sm text-slate-500 font-medium">
                  Happy Students
                </div>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative animate-in fade-in slide-in-from-right-5 duration-1000 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 group">
              {/* Main Hero Image - 16:9 Aspect Ratio */}
              <div className="aspect-video relative bg-slate-200">
                <Image
                  src="/images/hero-banner.jpeg"
                  alt="SSR College Campus"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b4f81]/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-bounce duration-[3000ms] hidden md:block border border-slate-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#ef5b2d]/10 flex items-center justify-center text-[#ef5b2d]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                    Accredited by
                  </p>
                  <p className="text-lg font-bold text-[#0b4f81]">
                    NAAC 'A' Grade
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Dots */}
            <div className="absolute -z-10 -top-6 -right-6">
              <div className="grid grid-cols-6 gap-2">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#ef5b2d]/40"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
