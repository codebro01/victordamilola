import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/core/theme-provider';
import { Toaster } from "@/components/ui/toaster";
import Navbar from '@/components/core/navbar';
import Footer from '@/components/core/footer';

export const metadata: Metadata = {
  title: 'Victor Damilola - JavaScript Developer Portfolio',
  description: 'Portfolio of Victor Damilola, Victor Damilola,  a skilled JavaScript developer specializing in React, Next.js, Node.js, and more.',
  keywords: [
    'web designer.ng', 
    'web designer nigeria', 
    'Best web designer in Nigeria', 
    'Javascript developer', 
    'typescript developer', 
    'react developer', 
    'Frontend developer', 
    'backend developer', 
    'fullstack developer', 
    'Web developer in Nigeria',
    'React developer Lagos',
    'Next.js expert Nigeria',
    'Fullstack JavaScript developer',
    'Freelance web designer in Nigeria',
    'Victor Damilola',
    'Node.js developer in Lagos',
    'Best Nigerian developer',
    'Church website Nigeria',
    'Affordable website designer',
    'UI/UX expert Nigeria',
    'MERN stack developer Nigeria',
    'Tech talent in Lagos',
    'Custom website developer',
    'Remote Nigerian developer',
    'Software engineer Nigeria',
    'Hire a Nigerian web developer',
    'Nigerian software portfolio',
    'Lagos-based developer',
    'SEO expert Nigeria',
    'Victor Damilola portfolio',
    'Top developer for SMEs in Nigeria',
    'Digital solutions Nigeria',
    'React Next.js portfolio',
    'Freelance React developer Nigeria',
    'Node API developer Nigeria',
    'Modern web design Nigeria',
    'Church tech Nigeria',
    'Startup web developer Nigeria',
    'Youth-friendly developer Nigeria',
    'Frontend developer Nigeria',
    'Backend developer Lagos',
    'Remote software engineer Nigeria',
    'Nigeria-based tech talent',
    'Best website design Lagos',
    'Nigerian coding enthusiast',
    'Victor the dev Nigeria',
    'Affordable web app Nigeria',
    'Nigerian dev with global reach',
    'Hire freelance developer Nigeria',
    'Experienced developer Lagos',
    'Best Nigerian tech portfolio',
    'Custom React sites Nigeria',
    'Web apps for Nigerian startups',
    'Nigerian dev for churches',
    'Top-rated dev Nigeria',
    'UI/UX portfolio Lagos',
    'JavaScript engineer Nigeria',
    'Victor Damilola JavaScript',
    'Victor Damilola', 
    'Victor', 
    'Damilola', 
    'codebro',
  ],
  openGraph: {
    title: 'Victor Damilola – Web Developer in Nigeria',
    description: 'Hire a reliable, modern fullstack developer in Nigeria. View the portfolio of Victor Damilola.',
    url: 'https://www.victordamilola.vercel.app',
    siteName: 'Victor Damilola Portfolio',
    images: [
      {
        url: 'https://www.victordamilola.vercel.app/img/vd.jpg', // you should create a custom banner image
        width: 1200,
        height: 630,
        alt: 'Victor Damilola – JavaScript Developer',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victor Damilola – JavaScript Developer Portfolio',
    description: 'Typescript | React | Next.js | Node.js developer from Nigeria – modern, clean, efficient.',
    creator: '@victordamilola',
    images: ['https://www.victordamilola.vercel.app/img/vd.jpg'],
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
