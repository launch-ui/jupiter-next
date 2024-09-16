import {
  Footer,
  FooterColumn,
  FooterBottom,
  FooterContent,
} from "@/components/ui/footer";

export default function FooterSection() {
  return (
    <footer className="px-4">
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent>
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold">Mercury</h3>
            </div>
            <FooterColumn>
              <h3 className="text-sm font-semibold">Product</h3>
              <a href="#" className="text-sm">
                Changelog
              </a>
              <a href="#" className="text-sm">
                Documentation
              </a>
            </FooterColumn>
            <FooterColumn>
              <h3 className="text-sm font-semibold">Company</h3>
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
              <h3 className="text-sm font-semibold">Contact</h3>
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
          </FooterContent>
          <FooterBottom>
            <div>© 2024 Mikołaj Dobrucki. All rights reserved</div>
            <div className="flex gap-4">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
