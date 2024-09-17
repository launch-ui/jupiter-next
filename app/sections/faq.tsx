import { Section } from "@/components/ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <Section>
      <div className="max-w-container text-center flex flex-col items-center gap-8 mx-auto">
        <h2 className="text-5xl font-semibold">Questions and Answers</h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is Jupiter easy to customise?</AccordionTrigger>
            <AccordionContent>
              Yes, Jupiter is built with Tailwind CSS, making it easy to
              customize.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is Jupiter optimized for search engines?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Jupiter is built with SEO best practices in mind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How does Jupiter compare to no-code tools?
            </AccordionTrigger>
            <AccordionContent>
              Jupiter offers more flexibility and control compared to no-code
              tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Why not just coding a website yourself?
            </AccordionTrigger>
            <AccordionContent>
              Jupiter saves you time and effort by providing pre-built
              components and sections.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I get a refund if I don't like it?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we offer a 30-day money-back guarantee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What features will be added in the future?
            </AccordionTrigger>
            <AccordionContent>
              We plan to add more components and templates based on user
              feedback.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Section>
  );
}
