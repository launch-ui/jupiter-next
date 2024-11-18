import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Questions and Answers
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              Why building a great landing page is critical for your business?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                In today&apos;s AI-driven world, standing out is harder than
                ever. While anyone can build a product, a professional landing
                page makes the difference between success and failure.
              </p>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Launch UI helps you ship faster without compromising on quality.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>
              Why use Launch UI instead of a no-code tool?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                No-code tools lock you into their ecosystem with recurring fees
                and limited control. They often come with performance issues and
                make it difficult to integrate with your product.
              </p>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                You can&apos;t even change your hosting provider and basic
                things like web analytics come as extra costs and paid add-ons.
              </p>
              <p className="mb-4 max-w-[600px] text-muted-foreground">
                What might seem like a convenient solution today could paint you
                into a corner tomorrow, limiting your ability to scale and
                adapt. Launch UI gives you full control of your code while
                maintaining professional quality.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              How Launch UI is different from other components libraries and
              templates?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Launch UI stands out with premium design quality and delightful
                touches of custom animations and illustrations.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                All components are carefully crafted to help position your
                product as a professional tool, avoiding the generic template
                look.
              </p>
              <p className="mb-4 max-w-[640px] text-balance text-muted-foreground">
                Unlike many libraries that rely on outdated CSS practices and
                old dependencies, Launch UI is built with modern technologies
                and best practices in mind.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              Why exactly does it mean that &quot;The code is yours&quot;?
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                The basic version of Launch UI is open-source and free forever,
                under a do-whatever-you-want license.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                The pro version that contains more components and options is a
                one-time purchase that gives you lifetime access to all current
                and future content. Use it for unlimited personal and commercial
                projects - no recurring fees or restrictions.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                For complete details about licensing and usage rights, check out{" "}
                <Link href="/pricing" className="text-primary underline">
                  the pricing page
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Are Figma files included?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Yes! The complete Launch UI template is available for free on
                the{" "}
                <Link
                  href="https://www.figma.com/community/file/1420131743903900629/launch-ui-landing-page-components-ui-kit"
                  className="text-primary underline"
                >
                  Figma community
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Can I get a discount?</AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                Actually, yes! I&apos;m looking for beta testers and great
                examples of Launch UI in action to feature on the website.
                Here&apos;s the deal: you provide feedback to help me improve
                the product, and in return, you get a huge discount plus a solid
                backlink for your product.
              </p>
              <p className="mb-4 max-w-[580px] text-muted-foreground">
                If this interests you, don&apos;t hesitate to{" "}
                <Link
                  href={siteConfig.links.email}
                  className="text-primary underline"
                >
                  reach out by email
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
