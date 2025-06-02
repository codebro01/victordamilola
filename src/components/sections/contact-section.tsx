"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SOCIAL_LINKS } from "@/constants";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import RevealOnScroll from "@/components/motion/reveal-on-scroll";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data:", data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: "default", 
    });
    reset();
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <RevealOnScroll>
          <h2 className="mb-12 text-center font-headline text-3xl font-bold text-primary sm:text-4xl">
            Get In Touch
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <RevealOnScroll animationClass="animate-fade-in-up">
            <div className="space-y-6 rounded-lg bg-card p-6 shadow-lg md:p-8">
              <h3 className="font-headline text-2xl font-semibold text-primary">Contact Information</h3>
              <p className="text-foreground/70">
                Feel free to reach out for collaborations, project inquiries, or just to say hi!
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:victor.damilola@example.com" className="text-foreground/80 hover:text-primary break-all">
                      victor.damilola@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                   <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-foreground/80">(Placeholder) +123 456 7890</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                   <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-foreground/80">Lagos, Nigeria (Remote Work Available)</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 border-t pt-6">
                <h4 className="font-semibold mb-2 text-primary">Connect with me</h4>
                <div className="flex space-x-3">
                  {SOCIAL_LINKS.filter(link => link.label !== "Email").map((link) => (
                    <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      <Button variant="outline" size="icon" className="border-primary/50 text-primary hover:bg-primary/10">
                         <link.icon className="h-5 w-5" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animationClass="animate-fade-in-up" delayClass="animation-delay-200">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-lg bg-card p-6 shadow-lg md:p-8">
              <div>
                <Label htmlFor="name" className="font-medium">Full Name</Label>
                <Input id="name" {...register("name")} placeholder="Your Name" className="mt-1" />
                {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="email" className="font-medium">Email Address</Label>
                <Input id="email" type="email" {...register("email")} placeholder="your.email@example.com" className="mt-1" />
                {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email.message}</p>}
              </div>
              <div>
                <Label htmlFor="subject" className="font-medium">Subject</Label>
                <Input id="subject" {...register("subject")} placeholder="Subject of your message" className="mt-1" />
                {errors.subject && <p className="mt-1 text-sm text-destructive">{errors.subject.message}</p>}
              </div>
              <div>
                <Label htmlFor="message" className="font-medium">Message</Label>
                <Textarea id="message" {...register("message")} placeholder="Your message..." rows={5} className="mt-1" />
                {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message.message}</p>}
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
