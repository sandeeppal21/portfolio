export default function About() {
  return (
    <section id="about" className="relative pt-48 pb-40 overflow-hidden bg-[#0B021C]">

      {/* BACKGROUND RADIAL GLOW (SAME AS SKILLS & CONTACT) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6a1fa155,transparent_65%)]" />

      {/* GRID OVERLAY (RIGHT SIDE) */}
      <div
        className="absolute top-0 right-0 h-full w-1/2
        bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)]
        bg-[size:48px_48px]"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-[52px] font-semibold mb-14">
          <span className="bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6] bg-clip-text text-transparent">
            About
          </span>
        </h2>

        <p className="text-white/80 text-[16px] leading-relaxed mb-3">
         Hi, I’m Sandeep, a dedicated MERN Stack Developer with a strong foundation in building scalable, full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
        </p>
        <p className="text-white/80 text-[16px] leading-relaxed mb-3">
        I’m currently working as a MERN Stack Developer (Full-time) at World Wide Web, a startup where I actively contribute to the development of a client-based Eyewear E-commerce Website. My responsibilities include developing new features, optimizing application performance, and collaborating with cross-functional teams to deliver high-quality, production-ready solutions. This role has given me valuable real-world industry experience and exposure to scalable application development.
        </p>
        <p className="text-white/80 text-[16px] leading-relaxed mb-3">
         During my B.Tech in Computer Science and Engineering, I worked on several projects that strengthened my technical expertise and problem-solving skills, including:
        </p>
        <p className="text-white/80 text-[16px] leading-relaxed mb-3">
         Airbnb Clone (Node.js, Express.js, MongoDB, EJS)
A full-stack web application inspired by Airbnb, developed using Node.js, Express.js, MongoDB, and EJS. The project includes user authentication, property listings, image uploads via Cloudinary, and complete CRUD functionality. This project helped me gain strong experience in backend development, MVC architecture, server-side rendering, and database design.

        </p>
        <p className="text-white/80 text-[16px] leading-relaxed mb-3">
         YouTube Clone (React.js + API Integration)
A video streaming application built using React.js with API integration, enabling users to browse, explore, and watch videos. The project strengthened my understanding of component-based architecture, API consumption, and dynamic data rendering in React.

        </p>
        <p className="text-white/80 text-[16px] leading-relaxed">
        
I am passionate about building user-friendly, efficient, and scalable web applications. My goal is to continue growing as a Full-Stack Developer, work on challenging projects, and contribute to building innovative digital products with real-world impact.

        </p>
      </div>
    </section>
  );
}
