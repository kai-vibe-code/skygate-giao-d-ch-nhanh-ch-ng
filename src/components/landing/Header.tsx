import { Button } from "@/components/ui/button";
import { Fuel } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Fuel className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">SkyGate</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-foreground/70 hover:text-primary transition-colors">Tính năng</a>
          <a href="#partners" className="text-foreground/70 hover:text-primary transition-colors">Đối tác</a>
          <a href="#how-it-works" className="text-foreground/70 hover:text-primary transition-colors">Hướng dẫn</a>
        </nav>
        <Button className="hidden md:flex">Tải App</Button>
      </div>
    </header>
  );
};

export default Header;
