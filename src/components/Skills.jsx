export default function Skills() {
  const skills = [
    "mongo",
    "react",
    "css",
    "node",
    "javascript",
    "html",
    "bootstrap",
    "tailwind",
    "express",
  ];

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#0B021C]
      py-24 sm:py-32 lg:py-56"
    >
      {/* BACKGROUND RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6a1fa155,transparent_65%)]" />

      {/* ================= DESKTOP VERSION ================= */}
      <div className="hidden lg:block">
        {/* TOP ICONS + CURVES */}
        <div className="relative w-[720px] h-[220px] mx-auto">
          {/* SVG CURVES */}
          <svg className="absolute inset-0" viewBox="0 0 720 220" fill="none">
            {[80, 150, 220, 290, 360, 430, 500, 570, 640].map((x, i) => (
              <path
                key={i}
                d={`M ${x} 40 C ${x} 120, 360 140, 360 200`}
                stroke="rgba(180,120,255,0.35)"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </svg>

          {/* ICONS */}
          {skills.map((skill, i) => {
            const xPositions = [
              80, 150, 220, 290, 360, 430, 500, 570, 640,
            ];

            return (
              <div
                key={skill}
                style={{ left: xPositions[i] }}
                className="
                  group absolute top-[20px] -translate-x-1/2
                  w-14 h-14 rounded-full
                  bg-[#1a0c33]
                  flex items-center justify-center
                  transition-all duration-300
                  hover:scale-125
                  hover:bg-[#2a1455]
                  hover:shadow-[0_0_45px_#7b2cbf]
                "
              >
                {/* GLOW RING */}
                <div
                  className="
                    absolute inset-0 rounded-full
                    bg-gradient-to-br from-[#6fe7f3] to-[#a16ad6]
                    opacity-0 blur-xl
                    transition-opacity duration-300
                    group-hover:opacity-60
                  "
                />

                {/* ICON */}
                <img
                  src={`/skills/${skill}.png`}
                  alt={skill}
                  className="
                    relative z-10
                    w-8 h-8 object-contain
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
              </div>
            );
          })}
        </div>

        {/* CENTER ORBITS */}
        <div className="relative mt-28 flex justify-center">
          <svg width="520" height="200" viewBox="0 0 520 200" fill="none">
            <ellipse
              cx="260"
              cy="100"
              rx="240"
              ry="55"
              stroke="rgba(180,120,255,0.35)"
            />
            <ellipse
              cx="260"
              cy="100"
              rx="190"
              ry="40"
              stroke="rgba(180,120,255,0.25)"
            />
          </svg>

          {/* CENTER LOGO */}
          <div
            className="
              absolute top-[20px] w-28 h-28 rounded-full
              bg-gradient-to-br from-[#6fe7f3] to-[#a16ad6]
              flex items-center justify-center
              shadow-[0_0_120px_40px_#7b2cbf]
            "
          >
            <span className="text-5xl font-semibold text-white">Σ</span>
          </div>
        </div>
      </div>

      {/* ================= MOBILE / TABLET VERSION ================= */}
      <div className="lg:hidden relative z-10">
        <h2 className="text-center text-[32px] sm:text-[38px] font-semibold mb-14">
          <span className="bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6] bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <div className="grid grid-cols-3 sm:grid-cols-4 gap-8 max-w-md ml-6 px-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                group relative
                w-16 h-16 rounded-xl
                bg-white/5 backdrop-blur
                flex items-center justify-center
                transition-all duration-300
                hover:scale-125
                hover:bg-[#2a1455]
                hover:shadow-[0_0_40px_#7b2cbf]
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute inset-0 rounded-xl
                  bg-gradient-to-br from-[#6fe7f3] to-[#a16ad6]
                  opacity-0 blur-xl
                  transition-opacity duration-300
                  group-hover:opacity-60
                "
              />

              {/* ICON */}
              <img
                src={`/skills/${skill}.png`}
                alt={skill}
                className="
                  relative z-10
                  w-10 h-10 object-contain
                  transition-transform duration-300
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
