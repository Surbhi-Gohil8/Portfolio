"use client"

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'SDE Intern',
    company: 'Lumovate Intelligence',
    period: 'Mar-2025 --- Sep-2025',
    description: 'Worked on software development projects, contributing to full-stack solutions and improving system efficiency.',
    icon: Briefcase,
    type: 'work',
  },
  {
    id: 2,
    title: 'Web Developer',
    company: 'CodSoft',
    period: 'sep-2024 --- oct-2024',
    description: 'Developed and maintained web applications using modern JavaScript frameworks and cloud technologies.',
    icon: Briefcase,
    type: 'work',
  },
  {
    id: 3,
    title: 'B.Tech in Computer Science and Engineering',
    company: 'Parul Institute of Engineering and Technology',
    period: '2023 - Present',
    description: 'Focused on software development, building projects with modern programming languages and web technologies.',
    icon: GraduationCap,
    type: 'education',
  }
  

];

const certifications = [
  'REST API by Hackerrank',
  'Building and Deploying intelligent ai agent',
  'Smart Coder by smart interviews',
  'Deloitte Australia-Technology Job Simulation'
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-0.5 h-full bg-slate-200 dark:bg-slate-700 -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex ${isEven ? 'flex-row' : 'flex-row-reverse'} items-center`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="p-6 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="ml-3 text-sm font-medium text-blue-600 dark:text-blue-400">
                          {experience.type === 'work' ? 'Work Experience' : 'Education'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {experience.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 font-medium mb-2">
                        {experience.company}
                      </p>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">
                        {experience.period}
                      </p>
                      <p className="text-slate-600 dark:text-slate-300">
                        {experience.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <div className="w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-slate-900 z-10" />
                  </div>

                  {/* Empty space to balance the layout */}
                  <div className="w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white text-center mb-10">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((certification, index) => (
              <motion.div
                key={certification}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  <Award className="w-5 h-5" />
                </div>
                <span className="ml-3 text-slate-700 dark:text-slate-300">
                  {certification}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
