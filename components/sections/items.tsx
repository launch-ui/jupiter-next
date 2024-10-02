import { Box } from "lucide-react";
import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Section } from "@/components/ui/section";
import { Beam } from "../ui/beam";

export default function Items() {
  return (
    <Section>
      <div className="max-w-container flex flex-col items-center gap-6 sm:gap-20 mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold max-w-[560px] text-center leading-tight sm:leading-tight">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 sm:gap-4 auto-rows-fr">
          <Item>
            <ItemIcon>
              <Beam>
                <Box className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Box className="w-8 h-8" />
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Box className="w-8 h-8" />
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Box className="w-8 h-8" />
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Box className="w-8 h-8" />
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Box className="w-8 h-8" />
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Box className="w-8 h-8" />
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Box className="w-8 h-8" />
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 complient, following best practices
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
