import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-[linear-gradient(100deg,#14052f_0%,#6a1fa1_55%,#5c6fae_100%)]" />

      {/* GRID OVERLAY */}
      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* NAV BAR */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-10 pt-6">
        <div className="relative bg-white/10 backdrop-blur-md rounded-2xl px-6 sm:px-10 py-4 flex justify-between items-center">
          {/* Center notch (hidden on mobile) */}
          <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-6 bg-[#14052f] rounded-b-xl" />

          <div className="flex gap-6 sm:gap-12 text-xs sm:text-sm tracking-wide">
            <button onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })} className="text-white/90 hover:text-white">
              HOME
            </button>
            <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })} className="text-white/70 hover:text-white">
              ABOUT
            </button>
          </div>

          <div className="flex gap-6 sm:gap-12 text-xs sm:text-sm tracking-wide">
            <button onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })} className="text-white/70 hover:text-white">
              WORK
            </button>
            <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="text-white/70 hover:text-white">
              CONTACT
            </button>
          </div>
        </div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-10 pt-20 sm:pt-28 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-[42px] sm:text-[54px] lg:text-[64px] font-bold mb-3">
            Hi, I’m Sandeep
          </h1>

          <h2 className="text-[22px] sm:text-[28px] lg:text-[32px] font-semibold mb-6">
            <span className="text-[#6fe7f3]">Full-Stack</span>{" "}
            <span className="text-[#a16ad6]">Developer.</span>
          </h2>

          <p className="text-white/70 max-w-md mx-auto lg:mx-0 text-sm sm:text-[15px] leading-relaxed mb-8 whitespace-pre-line">
{`Full-Stack MERN Developer
Building scalable web applications
With clean architecture & modern practices,
Driven by a thoughtful, vibe-based approach`}
          </p>

          <div className="flex justify-center lg:justify-start items-center gap-5">
            {/* HIRE ME */}
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="
                text-base sm:text-lg px-6 sm:px-7 py-3 rounded-full font-bold
                bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6]
                transition-all duration-300
                hover:scale-105
                hover:shadow-[0_0_50px_#7b2cbf99]
              "
            >
              Hire me!
            </button>

            {/* LINKEDIN */}
            <a
              href="https://linkedin.com/in/sandeep-p-b1b319285"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-11 h-11 sm:w-12 sm:h-12 rounded-full
                border border-white/30
                flex items-center justify-center
                text-white/80
                transition-all duration-300
                hover:text-white
                hover:scale-110
                hover:shadow-[0_0_30px_#7b2cbf70]
              "
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative rounded-3xl transition-all duration-500 hover:scale-[1.03] group">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6fe7f3] to-[#a16ad6] opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-60" />
            <img
              src="/profile.png"
              alt="Sandeep"
              className="relative z-10 w-[260px] sm:w-[320px] lg:w-[380px] h-auto object-cover rounded-3xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
