import { ModeToggle } from "../../ui/mode-toggle";
import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "../../ui/footer";
import LaunchUI from "../../logos/launch-ui";
import { siteConfig } from "@/config/site";

export default function FooterSection() {
  return (
    <footer className="w-full bg-background px-4">
      <div className="mx-auto max-w-container">
        <Footer>
          <FooterContent>
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <LaunchUI />
                <h3 className="text-xl font-bold">Launch UI</h3>
              </div>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Product</h3>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                Changelog
              </a>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                Documentation
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Company</h3>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                About
              </a>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                Careers
              </a>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                Blog
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-md pt-1 font-semibold">Contact</h3>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
                Discord
              </a>
              <a
                href={siteConfig.url}
                className="text-sm text-muted-foreground"
              >
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
            <div className="flex items-center gap-4">
              <a href={siteConfig.url}>Privacy Policy</a>
              <a href={siteConfig.url}>Terms of Service</a>
              <ModeToggle />
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
