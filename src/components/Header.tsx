import { Button } from "@/components/ui/button";
import logo from '../assets/logo_m.png'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" style={{ width: "120px", height: "auto" }} />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              home
            </a>
            <a href="#visa" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              visa
            </a>
            <a href="#country" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              country
            </a>
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              about us
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              contact us
            </a>
            <Button className="rounded-full bg-primary hover:bg-primary/90 text-white px-6">
            Get An Appointment
          </Button>
          </nav>

          
        </div>

        <div className="mt-4 flex gap-6 text-sm font-medium border-t border-border pt-4">
          <a href="#business-visa" className="text-muted-foreground hover:text-foreground transition-colors">
            business visa
          </a>
          <a href="#tourist-visa" className="text-primary hover:text-primary/80 transition-colors border-b-2 border-primary pb-1">
            tourist visa
          </a>
          <a href="#study-visa" className="text-muted-foreground hover:text-foreground transition-colors">
            study visa
          </a>
          <a href="#work-visa" className="text-muted-foreground hover:text-foreground transition-colors">
            work visa
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
