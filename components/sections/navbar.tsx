import Navigation from "../ui/navigation";
import { Button } from "../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";
import Jupiter from "../logos/jupiter";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 px-4 backdrop-blur-lg">
      <div className="mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a href="#" className="flex items-center gap-2 text-xl font-bold">
              <Jupiter />
              Jupiter
            </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <a href="#" className="text-sm">
              Sign in
            </a>
            <Button variant="default">Get Started</Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="#"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Jupiter</span>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Components
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
