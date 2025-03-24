import profile from "../assets/profile.jpg";
import { FiDownload } from "react-icons/fi";
import resume from "../assets/resume.pdf";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15 "
    >
      <div className="text-center z-10 px-4">
        <img
          className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w-[250px] object-cover object-bottom hover:translate-y-1 transition-all "
          src={profile}
          alt="Profile Image"
        />
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl lg:max-w[500px] font-semibold mb-6 px-1 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-right ">
          I am Eunille
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto">
          👋 Hi, I'm Eunille Jan! 🚀 Aspiring Tech Enthusiast | CS Student | ☁️
          Certified Cloud Essentials, 
          Project Management | 🎨 UI/UX Design 📚 Passionate about learning &
          building innovative solutions!
        </p>
        <div className="flex justify-center items-center space-x-4">
          
          <a
            className="bg-gradient-to-r flex flex-row from-teal-500 to-indigo-600 py-3 px-6 rounded hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]  font-medium transition relative overflow-hidden "
            href={resume}
            download
          >
            <p>Resume </p>
            <span className="h-5 ml-3 text-2xl text-white">
              <FiDownload />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
