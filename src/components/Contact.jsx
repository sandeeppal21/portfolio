import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { ImGithub } from "react-icons/im";
import { FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_dt00xa6",
        "template_ntf5xvi",
        formRef.current,
        "FnSOCZgDMmSOKhotd"
      )
      .then(() => {
        setLoading(false);
        formRef.current.reset();

        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thanks for reaching out. I’ll get back to you soon.",
          background: "#0B021C",
          color: "#ffffff",
          confirmButtonColor: "#7b2cbf",
        });
      })
      .catch(() => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          background: "#0B021C",
          color: "#ffffff",
          confirmButtonColor: "#7b2cbf",
        });
      });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0B021C] pt-28 sm:pt-40 pb-12"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6a1fa155,transparent_65%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8">
        {/* HEADING */}
        <h2 className="text-center text-[36px] sm:text-[48px] font-semibold mb-16 sm:mb-24">
          <span className="bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6] bg-clip-text text-transparent">
            Contact
          </span>
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h3 className="text-[#6fe7f3] text-[20px] sm:text-[22px] font-semibold mb-4">
              Drop me a message
            </h3>

            <p className="text-white/70 max-w-md mx-auto lg:mx-0 text-sm leading-relaxed mb-10">
              I’m a Full-Stack MERN Developer who builds scalable, modern web
              applications using MongoDB, Express, React, and Node.js.
              Have a project or opportunity in mind? Let’s connect.
            </p>

            <div className="space-y-6 text-white/80 text-sm max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6] flex items-center justify-center text-black">
                  <IoCallSharp />
                </div>
                <span>+91 9756018005</span>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6] flex items-center justify-center text-black">
                  <MdEmail />
                </div>
                <span>sandeeppal2109@gmail.com</span>
              </div>

              <div className="flex items-center gap-4 justify-center lg:justify-start">
                <div className="w-9 h-9 rounded-full bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6] flex items-center justify-center text-red-600">
                  <FaLocationDot />
                </div>
                <span>Noida, India</span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 sm:p-8 shadow-[0_0_80px_#7b2cbf40]">
            <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
              <input type="hidden" name="to_name" value="Sandeep Pal" />

              <div>
                <label className="text-white/70 text-sm">Name</label>
                <input
                  name="name"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="text-white/70 text-sm">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                />
              </div>

              <div>
                <label className="text-white/70 text-sm">Message</label>
                <textarea
                  name="message"
                  rows="4"
                  required
                  className="w-full mt-2 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full sm:w-auto
                  px-8 py-3 rounded-full font-medium
                  bg-gradient-to-r from-[#6fe7f3] to-[#a16ad6]
                  text-black transition-all duration-300
                  hover:scale-105 hover:shadow-[0_0_40px_#7b2cbf99]
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-6 sm:gap-0 justify-between items-center text-white/50 text-sm">
          <span>© 2026 Sandeep Pal. All rights reserved.</span>

          <div className="flex gap-6 text-white/70">
            <a href="https://linkedin.com/in/sandeep-p-b1b319285" target="_blank">
              <FaLinkedin className="text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://github.com/sandeeppal21" target="_blank">
              <ImGithub className="text-2xl hover:scale-110 transition" />
            </a>
            <a href="https://instagram.com/rajapal07" target="_blank">
              <FaInstagramSquare className="text-2xl hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
