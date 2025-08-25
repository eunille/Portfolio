import RevealOnScroll from "../Ui/RevealOnScroll";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "ExpressJS",
    "TailwindCSS",
    "Node.js",
    "AWS",
    "Cybersecurity Fundamentals",
    "Linux",
  ];

  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-20 bg-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="p-8 mb-8 rounded-2xl border-2 border-white/10 hover:border-blue-500/50 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-all duration-300 bg-gray-800/30 backdrop-blur-sm">
            <p className="text-gray-200 text-lg leading-relaxed">
              Full Stack Web Developer proficient in React and ExpressJS, passionate about building scalable web applications. Also a Cybersecurity Enthusiast actively learning to become a SOC Level 1 analyst, with a focus on defensive strategies and threat analysis.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl p-6 border-2 border-white/10 hover:border-blue-500/50 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-all duration-300 bg-gray-800/30 backdrop-blur-sm">
              <h3 className="text-2xl text-center font-bold mb-8 text-white">
                💼 Skills
              </h3>
              <div className="flex justify-center flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-300"
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 rounded-2xl border-2 border-white/10 hover:border-blue-500/50 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-all duration-300 bg-gray-800/30 backdrop-blur-sm">
              <h3 className="text-2xl text-center font-bold mb-8 text-white">
                📚 Education
              </h3>
              <ul className="pl-5 list-disc list-inside text-lg text-gray-200">
                <li>
                  <strong>B.S. in Computer Science</strong>
                </li>
                <li>Focus: Web Development, Cloud Computing, Cybersecurity</li>
              </ul>
            </div>
          </div>
          <div className="p-6 rounded-2xl border-2 border-white/10 hover:border-blue-500/50 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-all duration-300 bg-gray-800/30 backdrop-blur-sm">
            <h3 className="text-2xl text-center font-bold mb-8 text-white">
              💻 Work Experience
            </h3>
            <ul className="pl-5 list-disc list-inside text-lg text-gray-200">
              <li>
                <strong>Full Stack Development Projects</strong> – Building and deploying web applications using React, ExpressJS, and Node.js
              </li>
              <li>
                <strong>Cybersecurity Training</strong> – Actively pursuing SOC Level 1 skills through hands-on labs and certifications (e.g., TryHackMe Pre-Security)
              </li>
            </ul>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default About;