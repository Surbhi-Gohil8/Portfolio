import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Surbhi Gohil',
  description: 'Personal portfolio showcasing my projects, skills, and experience as a web developer.',
  keywords: [
    'portfolio', 
    'web developer', 
    'frontend developer', 
    'react', 
    'nextjs', 
    'typescript',
    'tailwind css',
    'fullstack developer'
  ],
  authors: [{ name: 'Surbhi Gohil', url: 'https://yourwebsite.com' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourwebsite.com',
    title: 'Your Name | Web Developer',
    description: 'Personal portfolio showcasing my projects, skills, and experience as a web developer.',
    siteName: 'Your Name Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Your Name | Web Developer',
    description: 'Personal portfolio showcasing my projects, skills, and experience as a web developer.',
    creator: '@yourtwitter',
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-white transition-colors duration-200 min-h-screen`}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
