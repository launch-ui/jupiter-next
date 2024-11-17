import { Section } from "../../ui/section";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/accordion";

export default function FAQ() {
  return (
    <Section>
      <div className="mx-auto flex max-w-container flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          Questions and Answers
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-[800px]">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is Launch UI easy to customise?</AccordionTrigger>
            <AccordionContent>
              Yes, Launch UI is built with Tailwind CSS, making it easy to
              customize.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Is Launch UI optimized for search engines?
            </AccordionTrigger>
            <AccordionContent>
              Yes, Launch UI is built with SEO best practices in mind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              How does Launch UI compare to no-code tools?
            </AccordionTrigger>
            <AccordionContent>
              Launch UI offers more flexibility and control compared to no-code
              tools.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Why not just coding a website yourself?
            </AccordionTrigger>
            <AccordionContent>
              Launch UI saves you time and effort by providing pre-built
              components and sections.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can I get a refund if I don&apos;t like it?
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
