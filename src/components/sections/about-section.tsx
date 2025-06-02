"use client";

import Image from "next/image";
import { SKILLS } from "@/constants";
import RevealOnScroll from "@/components/motion/reveal-on-scroll";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
            About Me
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <RevealOnScroll animationClass="animate-fade-in">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-lg shadow-xl">
               <Image
                src="https://placehold.co/600x600.png"
                alt="Victor Damilola working"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint="developer coding"
              />
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll animationClass="animate-fade-in-up" delayClass="animation-delay-200">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80">
                Hello! I&apos;m Victor Damilola, a passionate JavaScript Developer dedicated to building innovative and efficient web solutions. With a strong foundation in modern web technologies, I specialize in creating dynamic user interfaces and robust backend systems.
              </p>
              <p className="text-foreground/70">
                My journey in web development has equipped me with expertise in the MERN stack (MongoDB, Express.js, React, Node.js), Next.js for server-side rendering and static site generation, and PostgreSQL for relational database management. I&apos;m also proficient in designing and consuming RESTful APIs and GraphQL endpoints, and have experience integrating third-party services like Mailchimp.
              </p>
              <p className="text-foreground/70">
                I thrive on challenges and am constantly learning to stay at the forefront of technology. My goal is to leverage my skills to contribute to impactful projects and create exceptional digital experiences.
              </p>
              
              <Card className="mt-8 bg-secondary/30">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-primary">Core Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-sm bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
