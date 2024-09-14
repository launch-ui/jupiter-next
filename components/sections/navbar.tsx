import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="bg-background text-foreground">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center space-x-4">
          <a href="#" className="text-xl font-bold">
            Mercury
          </a>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Product</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#">Overview</NavigationMenuLink>
                  <NavigationMenuLink href="#">Features</NavigationMenuLink>
                  <NavigationMenuLink href="#">Pricing</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#">Blog</NavigationMenuLink>
                  <NavigationMenuLink href="#">Guides</NavigationMenuLink>
                  <NavigationMenuLink href="#">Support</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink href="#">About</NavigationMenuLink>
                  <NavigationMenuLink href="#">Careers</NavigationMenuLink>
                  <NavigationMenuLink href="#">Contact</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
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
