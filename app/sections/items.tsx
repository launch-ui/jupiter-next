import { Box } from "lucide-react";
import {
  Item,
  ItemIcon,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";
import { Section } from "@/components/ui/section";

export default function Items() {
  return (
    <Section>
      <div className="max-w-[1280px] flex flex-col items-center gap-20 mx-auto">
        <h2 className="text-5xl font-semibold max-w-[480px] text-center leading-tight">
          Everyting you need. Nothing you don’t.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
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
