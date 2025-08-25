import React from "react";
import { useState } from "react";
import RevealOnScroll from "../Ui/RevealOnScroll";
import { Cloud, Network, Cybersecurity, HackTheBox, PreSecurity } from "../assets";

function Achievements() {
  const [achievements] = useState([
    {
      image: Cloud,
      name: "Cloud Essentials",
      brief:
        "A comprehensive course providing a solid foundation in cloud computing concepts, services, and architectures.",
    },
    {
      image: Network,
      name: "Introduction to Networking",
      brief:
        "A course covering the fundamentals of computer networking, including protocols, topologies, and network design principles.",
    },
    {
      image: Cybersecurity,
      name: "Introduction to Cybersecurity",
      brief:
        "A course introducing cybersecurity principles, common threats, and best practices for securing information systems.",
    },
    {
      image: HackTheBox,
      name: "Hack The Box Meetup PH #2",
      brief:
        "An event focused on blue team strategies, exploring SOC workflows and incident response. Gained insights from speaker Keinaz D. on defending against threats and community-driven knowledge sharing.",
    },
    {
      image: PreSecurity,
      name: "TryHackMe Pre-Security",
      brief:
        "A beginner-friendly learning path demystifying cybersecurity. Gained skills in cybersecurity analysis and Linux, covering fundamentals like cybersecurity basics, networking principles and vulnerabilities, common web attacks, and Linux operating system usage.",
    },
  ]);

  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center font-mono justify-center py-20 bg-gray-900"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-teal-400 to-blue-600 bg-clip-text text-transparent text-center">
            Badges & Achievements
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/50 hover:shadow-[0_6px_16px_rgba(59,130,246,0.4)] hover:-translate-y-2 transition-all duration-300 bg-gray-800/30 backdrop-blur-sm"
              >
                <div className="w-28 h-28 mb-4 flex items-center justify-center">
                  <img
                    src={achievement.image}
                    alt={`${achievement.name}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-semibold text-xl text-white mb-3">
                  {achievement.name}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {achievement.brief}
                </p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Achievements;