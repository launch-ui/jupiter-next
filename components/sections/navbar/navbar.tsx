import Navigation from "./navigation";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-background text-foreground">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl font-bold">
            Mercury
          </a>
          <Navigation />
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-sm">
            Sign in
          </a>
          <Button variant="default">Get Started</Button>
        </div>
      </nav>
    </header>
  );
}
