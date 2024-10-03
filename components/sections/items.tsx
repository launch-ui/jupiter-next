import {
  BlocksIcon,
  Box,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
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
                <ScanFaceIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Accessibility first</ItemTitle>
            <ItemDescription>
              Fully WCAG 2.0 compliant, made with best a11y practices
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Beam>
                <MonitorSmartphoneIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Responsive design</ItemTitle>
            <ItemDescription>
              Looks and works great on any device and screen size
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Beam>
                <EclipseIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Light and dark mode</ItemTitle>
            <ItemDescription>
              Seamless switching between color schemes, 6 themes included
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Beam>
                <BlocksIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Easy to customize</ItemTitle>
            <ItemDescription>
              Flexible options to match your product or brand
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Beam>
                <FastForwardIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Top-level performance</ItemTitle>
            <ItemDescription>
              Made for lightning-fast load times and smooth interactions
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Beam>
                <RocketIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Production ready</ItemTitle>
            <ItemDescription>
              Thoroughly tested and launch-prepared
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Beam>
                <LanguagesIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>Made for localisation</ItemTitle>
            <ItemDescription>
              Easy to implement support for multiple languages and regions
            </ItemDescription>
          </Item>
          <Item>
            <ItemIcon>
              <Beam>
                <SquarePenIcon className="w-8 h-8" />
              </Beam>
            </ItemIcon>
            <ItemTitle>CMS friendly</ItemTitle>
            <ItemDescription>
              Built to work with your any headless content management system
            </ItemDescription>
          </Item>
        </div>
      </div>
    </Section>
  );
}
