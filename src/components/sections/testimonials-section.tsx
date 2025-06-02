"use client";

import Image from "next/image";
import { TESTIMONIALS_DATA } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import RevealOnScroll from "@/components/motion/reveal-on-scroll";
import { Star } from "lucide-react"; // Using Star as a generic positive icon

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
            What Others Say
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <RevealOnScroll key={testimonial.name} animationClass="animate-fade-in-up" delayClass={`animation-delay-${index * 200}`}>
              <Card className="h-full bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
                <CardContent className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={testimonial.aiHint}
                    />
                  </div>
                  <p className="mb-4 text-lg italic text-foreground/80">&quot;{testimonial.quote}&quot;</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.title}</p>
                     <div className="mt-2 flex justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
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

export default TestimonialsSection;
