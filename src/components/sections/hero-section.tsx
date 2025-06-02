
"use client";

import { Button } from "@/components/ui/button";
import { SKILLS, START_DATE_EXPERIENCE, SOCIAL_LINKS } from "@/constants";
import useYearsOfExperience from "@/hooks/use-years-of-experience";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, Download, Code2 } from "lucide-react";
import RevealOnScroll from "@/components/motion/reveal-on-scroll";

const HeroSection = () => {
  const yearsOfExperience = useYearsOfExperience(START_DATE_EXPERIENCE);

  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-gradient-to-br from-background to-secondary/30 dark:from-background dark:to-neutral-900 py-16 md:py-24"
    >
      <div className="container mx-auto grid grid-cols-1 items-center gap-12 px-4 text-center md:grid-cols-2 md:px-6 md:text-left">
        <div className="space-y-6">
          <RevealOnScroll animationClass="animate-fade-in-up">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
              Victor Damilola
            </h1>
          </RevealOnScroll>
          <RevealOnScroll animationClass="animate-fade-in-up" delayClass="animation-delay-200">
            <p className="text-xl text-foreground/80 md:text-2xl">
              JavaScript Developer
              {yearsOfExperience !== null && ` | ${yearsOfExperience}+ Years of Experience`}
            </p>
          </RevealOnScroll>
          <RevealOnScroll animationClass="animate-fade-in-up" delayClass="animation-delay-400">
            <p className="max-w-xl text-foreground/70 md:mx-0 mx-auto">
              Crafting seamless digital experiences with modern web technologies. Specializing in React, Next.js, Node.js, and building scalable full-stack applications.
            </p>
          </RevealOnScroll>
          <RevealOnScroll animationClass="animate-fade-in-up" delayClass="animation-delay-600">
            <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
              {SKILLS.slice(0, 5).map((skill) => ( // Show first 5 prominent skills
                <span
                  key={skill}
                  className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </RevealOnScroll>
          <RevealOnScroll animationClass="animate-fade-in-up" delayClass="animation-delay-600">
             <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/victor-damilola-resume.pdf" download> {/* Replace with actual resume path */}
                  Download CV <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </RevealOnScroll>
           <RevealOnScroll animationClass="animate-fade-in" delayClass="animation-delay-600">
            <div className="mt-8 flex justify-center space-x-4 md:justify-start">
              {SOCIAL_LINKS.map((link) => (
                <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  <link.icon className="h-6 w-6 text-foreground/70 transition-colors hover:text-primary" />
                </Link>
              ))}
            </div>
          </RevealOnScroll>
        </div>
        
        <RevealOnScroll animationClass="animate-fade-in" delayClass="animation-delay-400" className="hidden md:block">
          <div className="relative mx-auto h-80 w-80 lg:h-96 lg:w-96">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Victor Damilola Portrait"
              width={400}
              height={400}
              priority
              className="rounded-full object-cover shadow-xl border-4 border-primary/20"
              data-ai-hint="developer portrait"
            />
             <div className="absolute -bottom-4 -right-4 animate-pulse rounded-full bg-accent p-3 shadow-lg">
              <Code2 className="h-6 w-6 text-accent-foreground" />
            </div>
          </div>
        </RevealOnScroll>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 animate-bounce text-primary/50 hover:text-primary" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
