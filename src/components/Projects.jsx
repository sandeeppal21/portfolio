export default function Projects() {
const projects = [
  {
    title: "Airbnb Clone",
    desc: "A full-stack web application inspired by Airbnb, featuring user authentication, property listings, reviews, and seamless frontend–backend integration.",
    image: "/projects/airbnb.jpg",
    tech: ["Node.js", "ExpressJs", "Ejs", "mongoDB", "CLoudinary"],
    code: "https://github.com/sandeeppal21/traveling-project",
    live: "#",
  },
  {
    title: "YouTube Clone",
    desc: "A YouTube clone showcasing videos with category-based filtering, user interactions, and an engaging viewing experience. All built using React.js and Tailwind CSS for a sleek, responsive design.",
    image: "/projects/youtube.jpg",
    tech: ["React.js", "JavaScript", "Tailwind"],
    code: "https://github.com/sandeeppal21/youtube-clone",
    live: "https://sandeeppal21.github.io/youtube-clone/",
  },
  {
    title: "Weather App",
    desc: "A simple React-based weather app that fetches real-time data via an API and displays key details like temperature, humidity, and min/max values, along with dynamic weather icons for an attractive UI.",
    image: "/projects/weather.jpg",
    tech: ["React", "OpenWeather API", "Material UI"],
    code: "https://github.com/sandeeppal21/weather-code",
    live: "https://sandeeppal21.github.io/weather-app/", 
  },
];


  return (
    <section id="work" className="relative py-48 overflow-hidden bg-[#0B021C]">

      {/* RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6a1fa155,transparent_65%)]" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* TITLE */}
        <h2 className="text-center text-[48px] font-semibold mb-24">
          <span className="bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {projects.map((project, i) => (
            <div
              key={i}
              className="
                group rounded-3xl overflow-hidden
                bg-white/10 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_60px_#7b2cbf25]
                transition-all duration-500
                hover:scale-[1.04]
                hover:shadow-[0_0_120px_#7b2cbf70]
              "
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full h-52 object-cover
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />
              </div>

              {/* BODY */}
              <div className="p-6">

                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {project.desc}
                </p>

                {/* TECH TAGS */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs
                      bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6]
                      text-black font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-6 text-sm text-white/80">
                  <a href={project.code} target="_blank" className="hover:text-[#6fe7f3] transition">
                    🐙 Code
                  </a>
                  <a href={project.live} target="_blank" className="hover:text-[#a16ad6] transition">
                    🔗 Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
