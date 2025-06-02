import Link from "next/link";
import { SOCIAL_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/50 text-foreground/80">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm">
          &copy; {currentYear} Victor Damilola. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link) => (
            <Link href={link.href} key={link.label} target="_blank" rel="noopener noreferrer" passHref legacyBehavior>
              <Button variant="ghost" size="icon" aria-label={link.label} asChild>
                <a><link.icon className="h-5 w-5" /></a>
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
