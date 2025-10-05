"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Code, Cpu, Layout, Smartphone, Server } from 'lucide-react';
import profilepic from "../../public/profilePic.jpg";
const skills = [
  { name: 'Frontend', icon: Layout, items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', icon: Server, items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
  { name: 'Languages', icon: Smartphone, items: ['c','c++','Python','java'] },
  { name: 'Other', icon: Cpu, items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-64 h-64 lg:w-80 lg:h-80"
          >
            <div className="absolute inset-0 bg-blue-600 rounded-2xl -z-10 rotate-6" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800">
              <Image
                src={profilepic} // Replace with your image
                alt="Profile picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-left"
          >
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              A little about me
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-300">
  <p>
    I'm a passionate software developer and a 3rd-year student currently pursuing my degree in 
    Computer Science and Engineering. I enjoy designing and building 
    efficient, scalable, and user-friendly applications that make an impact.
  </p>

  <p>
    My journey in software development started during my college years, where I began exploring 
    programming, web technologies, and real-world problem-solving through projects and internships. 
    Since then, I’ve worked on several hands-on projects that strengthened my skills in both frontend 
    and backend development.
  </p>

  <p>
    Beyond coding, I love learning about new technologies, improving my problem-solving abilities, 
    and collaborating with others on innovative ideas. I believe in continuous learning and strive 
    to grow into a well-rounded software engineer capable of building meaningful digital experiences.
  </p>
</div>

          </motion.div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center mb-10">
            My Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <skill.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                  {skill.name}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center">
                      <Code className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-slate-600 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
