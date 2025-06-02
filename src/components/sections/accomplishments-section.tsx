"use client";

import { ACCOMPLISHMENTS_DATA } from "@/constants";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import RevealOnScroll from "@/components/motion/reveal-on-scroll";
import { Award, Zap, Mic } from "lucide-react"; // Example icons

// Helper to get an icon component based on a string name
const getIcon = (iconName?: string) => {
  switch (iconName) {
    case "Award":
      return <Award className="h-8 w-8 text-primary" />;
    case "Zap":
      return <Zap className="h-8 w-8 text-primary" />;
    case "Mic":
      return <Mic className="h-8 w-8 text-primary" />;
    default: // A generic icon if no match
      return <Award className="h-8 w-8 text-primary" />; 
  }
};


const AccomplishmentsSection = () => {
  return (
    <section id="accomplishments" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
            My Accomplishments
          </h2>
        </RevealOnScroll>

        <div className="space-y-8">
          {ACCOMPLISHMENTS_DATA.map((accomplishment, index) => (
            <RevealOnScroll key={accomplishment.title} animationClass="animate-fade-in-up" delayClass={`animation-delay-${index * 100}`}>
              <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-card">
                <CardContent className="p-6">
                  <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                    <div className="flex-shrink-0 rounded-md bg-primary/10 p-3">
                       {getIcon(accomplishment.icon)}
                    </div>
                    <div className="flex-grow">
                      <CardTitle className="mb-1 font-headline text-xl text-primary">{accomplishment.title}</CardTitle>
                      <CardDescription className="text-foreground/70">{accomplishment.description}</CardDescription>
                    </div>
                    <div className="mt-2 text-sm font-medium text-accent md:mt-0 md:ml-auto md:text-right">
                      {accomplishment.year}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccomplishmentsSection;
