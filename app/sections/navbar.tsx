import Navigation from "./navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";

export default function Navbar() {
  return (
    <header className="px-4">
      <div className="max-w-container mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a href="#" className="text-xl font-bold">
              Jupiter
            </a>
            <Navigation />
          </NavbarLeft>
          <NavbarRight>
            <a href="#" className="text-sm">
              Sign in
            </a>
            <Button variant="default">Get Started</Button>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
