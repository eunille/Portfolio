import profile from "../assets/profile.jpg";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/resume.pdf";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-8 lg:gap-12 bg-gray-900 px-6"
    >
      <div className="text-center z-10">
        <img
          className="w-[120px] mt-8 lg:w-[280px] rounded-2xl border-2 border-white/10 shadow-[0_6px_16px_rgba(59,130,246,0.3)] object-cover object-bottom hover:-translate-y-2 transition-all duration-300"
          src={profile}
          alt="Eunille Jan's Profile"
        />
      </div>
      <div className="text-center font-mono z-10 max-w-lg">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent leading-tight">
          I am Eunille
        </h1>
        <p className="text-gray-200 text-lg md:text-xl mb-8 leading-relaxed mx-auto">
          👋 Full Stack Web Developer proficient in React and ExpressJS, building scalable web applications. Cybersecurity Enthusiast learning SOC Level 1 skills, passionate about defensive strategies and innovative tech solutions.
        </p>
        <div className="flex justify-center items-center space-x-4">
          <a
            className="bg-gradient-to-r flex items-center from-teal-400 to-blue-600 py-3 px-6 rounded-2xl font-medium text-white hover:-translate-y-2 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)] transition-all duration-300"
            href={resume}
            download
          >
            <span>Download Resume</span>
            <FiDownload className="ml-3 text-xl" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;