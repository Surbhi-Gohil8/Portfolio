"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Surbhi Gohil
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-8">
          Transforming concepts into code.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
          I&apos;m a passionate software developer specializing in building exceptional digital solutions. Currently, I&apos;m focused on creating reliable, scalable, and human-centered applications.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              View my work
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 dark:border-slate-700 text-base font-medium rounded-md text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              Get in touch
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-20"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-2">SCROLL DOWN</p>
          <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full mx-auto flex justify-center p-1">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-1 h-2 bg-slate-400 dark:bg-slate-500 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
