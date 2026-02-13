"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 selection:bg-[#ef5b2d] selection:text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0b4f81]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#ef5b2d]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="text-center max-w-2xl relative z-10 animate-in fade-in zoom-in duration-500">
        <h1 className="text-[10rem] md:text-[15rem] font-bold leading-none select-none relative mb-4">
          <span className="absolute inset-0 bg-gradient-to-br from-[#0b4f81] to-[#0b4f81]/50 bg-clip-text text-transparent blur-sm transform translate-y-2 opacity-50">
            404
          </span>
          <span className="relative bg-gradient-to-br from-[#0b4f81] to-[#0b4f81]/80 bg-clip-text text-transparent drop-shadow-sm">
            404
          </span>
        </h1>

        <div className="space-y-6 -mt-8 relative z-20 bg-white/60 backdrop-blur-sm p-8 rounded-3xl border border-white/50 shadow-xl">
          <h2 className="text-2xl md:text-4xl font-bold text-slate-800 tracking-tight">
            Page Not Found
          </h2>
          <p className="text-slate-600 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Oops! It seems like you've wandered off the campus map. The page you
            are looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/"
              className="px-8 py-3 bg-[#0b4f81] text-white font-semibold rounded-full hover:bg-[#093e6b] hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <Home
                size={20}
                className="group-hover:-translate-y-1 transition-transform"
              />
              Return Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="px-8 py-3 bg-white text-slate-600 font-semibold rounded-full border border-slate-200 hover:bg-slate-50 hover:border-[#ef5b2d] hover:text-[#ef5b2d] transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center group"
            >
              <ArrowLeft
                size={20}
                className="group-hover:-translate-x-1 transition-transform"
              />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
