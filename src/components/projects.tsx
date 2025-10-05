"use client"

import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import Image from 'next/image';
import project1 from "../../public/project1.png";
import project2 from "../../public/project2.png";
import project3 from '../../public/image.png'
const projects = [
  {
    title: 'AI-Powered InterPrep',
    description: 'AI-Powered InterPrep is a modern web application built with React.js and Next.js, styled with Tailwind CSS, designed to help users efficiently prepare for interviews and assessments. It leverages MongoDB for data management, offering personalized task tracking, progress monitoring, and a seamless, interactive user experience.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS', 'MongoDB'],
    image: <Image
                    src={project1} // Replace with your image
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />,
    github: 'https://github.com/Surbhi-Gohil8/InterPrep',
    demo: 'https://inter-prep-zcdu.vercel.app/',
  },
  {
    title: 'Breast Cancer Detector',
    description: 'A Breast Cancer Detector built with Python and Streamlit, leveraging data analysis libraries like NumPy and Pandas. The application allows users to input medical data and predicts breast cancer risk using machine learning models trained on Kaggle datasets. Data storage and management are handled with MongoDB.',
    tags: ['Python','Streamlit','numpy','pandas','kaggle','mongodb'],
    image: <Image
                    src={project2} // Replace with your image
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />,
    github: 'https://github.com/Surbhi-Gohil8/breast-cancer-detector',
    demo: 'https://breast-cancer-ks51.onrender.com/',
  },
  {
    title: 'My Personal Website',
    description: 'My Personal Website is a modern, fully responsive web application built with Next.js and TypeScript, styled using Tailwind CSS. It serves as a personal portfolio and interactive showcase, highlighting projects, skills, and professional achievements with a sleek, user-friendly interface.',
    tags: ['Next.js','Typescript','TailwindCSS'],
    image: <Image
                    src={project3} // Replace with your image
                    alt="Profile picture"
                    fill
                    className="object-cover"
                    priority
                  />,
    github: 'https://github.com/Surbhi-Gohil8/Portfolio',
    demo: 'https://analytics-demo.vercel.app',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48 bg-slate-200 dark:bg-slate-700 border border-gray-200">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Code2 className="w-16 h-16 text-slate-400" />
                </div>
               {project.image}   
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://github.com/Surbhi-Gohil8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
