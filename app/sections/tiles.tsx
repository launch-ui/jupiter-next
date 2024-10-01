import { Box } from "lucide-react";
import {
  Tile,
  TileVisual,
  TileTitle,
  TileDescription,
  TileContent,
} from "@/components/ui/tile";
import { Section } from "@/components/ui/section";

export default function Tiles() {
  return (
    <Section>
      <div className="max-w-container flex flex-col items-center gap-6 sm:gap-12 mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold">
          Build a better website, faster.
        </h2>
        <div className="grid grid-cols-12 gap-4 auto-rows-fr">
          <Tile className="col-span-12 md:col-span-6 lg:col-span-5">
            <TileContent>
              <TileTitle>You’re in control</TileTitle>
              <TileDescription>
                <p>
                  This is not a component library. It&apos;s a collection of
                  re-usable components that you can copy and paste into your
                  apps.
                </p>
                <p>
                  This way you always have full control over design and code.
                </p>
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Box className="w-48 h-48 opacity-10" />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-7">
            <TileContent>
              <TileTitle>Fits right into your stack</TileTitle>
              <TileDescription>
                <p>
                  Jupiter is built with modern technologies that fit right into
                  any react-based project using familiar tools such as Tailwind
                  CSS and shadcn/ui.
                </p>
                <p>No bloat, no extra dependencies, no risk of conflicts.</p>
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Box className="w-48 h-48 opacity-10" />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-7">
            <TileContent>
              <TileTitle>Fully customizable</TileTitle>
              <TileDescription>
                Tailwind and a carefully-built theme of CSS variables allow you
                to customize the template with no effort and risk. 5 color
                schemes are already included.
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Box className="w-48 h-48 opacity-10" />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-5">
            <TileContent>
              <TileTitle>Data-agnostic</TileTitle>
              <TileDescription>
                All the data are separate from presentation so you can easily
                edit it in seconds. Connect all content to a CMS of your choice
                when you’re ready.
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Box className="w-48 h-48 opacity-10" />
            </TileVisual>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
