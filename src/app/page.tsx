'use client';

import { useEffect } from 'react';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { Contact } from '@/components/contact';
import { Toaster } from 'sonner';

export default function Home() {
  // Smooth scroll for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleAnchorClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
          e.preventDefault();
          const id = target.getAttribute('href');
          if (id && id !== '#') {
            const element = document.querySelector(id);
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              });
            }
          }
        }
      };

      document.addEventListener('click', handleAnchorClick);
      return () => document.removeEventListener('click', handleAnchorClick);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
      <Toaster position="top-center" richColors />
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="bg-slate-50 dark:bg-slate-900/50 py-8 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 dark:text-slate-400 text-sm">
          <p> 2025 Surbhi Gohil. All rights reserved.</p>
          <p className="mt-2">
            Built with  using{' '}
            <a
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Next.js
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
