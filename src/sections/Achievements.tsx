import React from "react";
import { useState } from "react";
import RevealOnScroll from "../Ui/RevealOnScroll";
import Cloud from "../assets/Cloud.png";
import Networks1 from "../assets/Networks1.png";
import Cybersecurity from "../assets/Cybersecurity.png";


function Achievements() {
  const [achievements] = useState([
    {
      image: Cloud,
      name: "Cloud Essentials",
      brief:
        "Cloud Essentials is a comprehensive course that provides a solid foundation in cloud computing concepts and services.",
    },

    {
      image: Networks1,
      name: "INTRODUCTION TO NETWORKING",
      brief:
        "Introduction to Network is a course that covers the fundamentals of computer networking, including protocols, topologies, and network design.",
    },
    {
        image: Cybersecurity,
        name: "INTRODUCTION TO Cybersecurity",
        brief:
          "Introduction to Cybersecurity is a course that covers the basics of cybersecurity principles, threats, and best practices for protecting information systems.",
      },
  ]);
  return (
    <section
      id="achievements"
      className="min-h-screen flex items-center font-mono justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="max-w-3xl text-4xl font-semibold mb-12 bg-gradient-to-r from-teal-500 to-indigo-600 bg-clip-text text-transparent text-center ">
            Badges & Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="p-6 rounded-xl flex flex-col items-center text-center border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 transition-all hover:bg-cyan-900 "
              >
                <h3 className="font-semibold text-xl mb-4">
                  {achievement.name}
                </h3>
                <p className="text-gray-300 mb-4">{achievement.brief} </p>
                <div className="flex flex-wrap sm:items-center justify-center gap-2 mb-4">
                  <div className="flex flex-col text-center my-5 py-3 justify-center gap-3 border-2 border-white/10 hover:border-blue-500/30 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]  cursor-pointer rounded-xl px-10 ">
                    
                   
                      {" "}
                      <img
                        src={achievement.image}
                        alt={`${achievement.name}Image `}  />
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export default Achievements;
