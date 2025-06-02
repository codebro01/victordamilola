"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { NAV_LINKS } from "@/constants";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      let currentSection = "";
      NAV_LINKS.forEach(link => {
        const section = document.querySelector(link.href) as HTMLElement;
        if (section && section.offsetTop <= window.scrollY + 100) {
          currentSection = link.href;
        }
      });
      setActiveLink(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Set initial active link

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinkItem = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={onClick}
        className={`font-medium transition-colors hover:text-primary ${
          activeLink === href ? "text-primary" : "text-foreground/80"
        }`}
      >
        {label}
      </a>
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" passHref legacyBehavior>
          <a className="flex items-center gap-2 text-xl font-bold font-headline text-primary">
            <Code2 className="h-7 w-7" />
            Victor Damilola
          </a>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLinkItem key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] bg-background p-6">
                <div className="mb-6 flex justify-between items-center">
                   <Link href="/" passHref legacyBehavior>
                    <a className="flex items-center gap-2 text-lg font-bold font-headline text-primary">
                      <Code2 className="h-6 w-6" />
                      Victor D.
                    </a>
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                       <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-6">
                  {NAV_LINKS.map((link) => (
                     <SheetClose asChild key={link.href}>
                       <NavLinkItem href={link.href} label={link.label} />
                     </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
