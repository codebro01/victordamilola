"use client";

import Image from "next/image";
import Link from "next/link";
import { PROJECTS_DATA } from "@/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import RevealOnScroll from "@/components/motion/reveal-on-scroll";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
            My Projects
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS_DATA.map((project, index) => (
            <RevealOnScroll key={project.title} animationClass="animate-fade-in-up" delayClass={`animation-delay-${index * 200}`}>
              <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-card">
                <CardHeader>
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md">
                    <Image
                      src={project.image}
                      alt={project.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={project.aiHint}
                    />
                  </div>
                  <CardTitle className="font-headline text-xl text-primary">{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-accent/20 text-accent-foreground hover:bg-accent/30 dark:bg-accent/50 dark:text-gray-300">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-foreground/70">{project.description}</CardDescription>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t pt-4">
                  {project.repoLink && project.repoLink !== "#" && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" /> Code
                      </Link>
                    </Button>
                  )}
                  {project.liveLink && project.liveLink !== "#" && (
                    <Button variant="default" size="sm" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
