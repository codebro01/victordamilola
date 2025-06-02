"use client";

import Image from "next/image";
import Link from "next/link";
import { BLOG_POSTS_DATA } from "@/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import RevealOnScroll from "@/components/motion/reveal-on-scroll";

const BlogSection = () => {
  return (
    <section id="blog" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
            Latest Articles
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {BLOG_POSTS_DATA.map((post, index) => (
            <RevealOnScroll key={post.slug} animationClass="animate-fade-in-up" delayClass={`animation-delay-${index * 200}`}>
              <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-xl bg-card">
                <CardHeader>
                   <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={post.image}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-500 group-hover:scale-105"
                      data-ai-hint={post.aiHint}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                  <CardTitle className="font-headline text-xl text-primary hover:underline">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-foreground/70">{post.summary}</CardDescription>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button variant="link" asChild className="text-primary hover:text-primary/80 px-0">
                    <Link href={`/blog/${post.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
        {/* Optional: Link to a full blog page if more posts exist */}
        {/* <div className="mt-12 text-center">
          <Button variant="outline" asChild>
            <Link href="/blog">View All Posts</Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default BlogSection;
