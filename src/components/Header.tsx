import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-green-600">Hariom Chemicals</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-green-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-green-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-green-600 transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("blissful")}
              className="text-foreground hover:text-green-600 transition-colors"
            >
              Blissful Collection
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-green-600 transition-colors"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="bg-green-600 hover:bg-green-700">
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-green-600 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-green-600 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-green-600 transition-colors text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("blissful")}
              className="text-foreground hover:text-green-600 transition-colors text-left"
            >
              Blissful Collection
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-green-600 transition-colors text-left"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full bg-green-600 hover:bg-green-700">
              Get Quote
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
