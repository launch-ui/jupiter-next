import { ModeToggle } from "@/components/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";
import Jupiter from "@/components/logos/jupiter";
import { siteConfig } from "@/config/site";

export default function FooterSection() {
  return (
    <footer className="px-4">
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex gap-2 items-center">
                <Jupiter />
                <h3 className="text-xl font-bold">Jupiter</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md font-semibold pt-1">Product</h3>
              <a href="#" className="text-sm text-muted-foreground">
                Changelog
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Documentation
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md font-semibold pt-1">Company</h3>
              <a href="#" className="text-sm text-muted-foreground">
                About
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Careers
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md font-semibold pt-1">Contact</h3>
              <a href="#" className="text-sm text-muted-foreground">
                Discord
              </a>
              <a href="#" className="text-sm text-muted-foreground">
                Twitter
              </a>
              <a
                href={siteConfig.links.github}
                className="text-sm text-muted-foreground"
              >
                Github
              </a>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div>© 2024 Mikołaj Dobrucki. All rights reserved</div>
            <div className="flex gap-4 items-center">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
