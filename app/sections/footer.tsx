import { Footer, FooterColumn, FooterBottom } from "@/components/ui/footer";
import { Section } from "@/components/ui/section";

export default function FooterSection() {
  return (
    <Section>
      <Footer>
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold">Mercury</h3>
          </div>
          <FooterColumn>
            <h3 className="text-lg font-semibold">Product</h3>
            <a href="#" className="text-sm">
              Changelog
            </a>
            <a href="#" className="text-sm">
              Documentation
            </a>
          </FooterColumn>
          <FooterColumn>
            <h3 className="text-lg font-semibold">Company</h3>
            <a href="#" className="text-sm">
              About
            </a>
            <a href="#" className="text-sm">
              Careers
            </a>
            <a href="#" className="text-sm">
              Blog
            </a>
          </FooterColumn>
          <FooterColumn>
            <h3 className="text-lg font-semibold">Contact</h3>
            <a href="#" className="text-sm">
              Discord
            </a>
            <a href="#" className="text-sm">
              Twitter
            </a>
            <a href="#" className="text-sm">
              Github
            </a>
          </FooterColumn>
        </div>
        <FooterBottom>
          <div className="text-sm">
            © 2024 Mikołaj Dobrucki. All rights reserved
          </div>
          <div className="flex gap-4">
            <a href="#" className="text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-sm">
              Terms of Service
            </a>
          </div>
        </FooterBottom>
      </Footer>
    </Section>
  );
}
