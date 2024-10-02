import {
  Tile,
  TileVisual,
  TileTitle,
  TileDescription,
  TileContent,
} from "@/components/ui/tile";
import { Section } from "@/components/ui/section";
import Placeholder from "../ui/placeholder";

export default function BentoGrid() {
  return (
    <Section>
      <div className="max-w-container flex flex-col items-center gap-6 sm:gap-12 mx-auto">
        <h2 className="text-3xl sm:text-5xl font-semibold">
          Build a better website, faster.
        </h2>
        <div className="grid grid-cols-12 gap-4 auto-rows-fr">
          <Tile className="col-span-12 md:col-span-6 lg:col-span-5">
            <TileContent>
              <TileTitle>100+ sections and components</TileTitle>
              <TileDescription>
                All the elements you need to build a modern, responsive, and
                accessible landing page.
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Placeholder />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-7">
            <TileContent>
              <TileTitle>You&apos;re in control</TileTitle>
              <TileDescription>
                <p className="max-w-[460px]">
                  This is not a component library. It&apos;s a collection of
                  re-usable components that you can copy and paste into your
                  apps.
                </p>
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Placeholder />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-7">
            <TileContent>
              <TileTitle>Fits right into your stack</TileTitle>
              <TileDescription>
                <p className="max-w-[460px]">
                  Built with modern web technologies and tools that fit right
                  into any React project.
                </p>
                <p>No bloat, no extra dependencies, no risk of conflicts.</p>
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Placeholder />
            </TileVisual>
          </Tile>
          <Tile className="col-span-12 md:col-span-6 lg:col-span-5">
            <TileContent>
              <TileTitle>Data-agnostic</TileTitle>
              <TileDescription>
                <p>
                  All the data is separate from components so you can edit it in
                  seconds or make it dynamic.
                </p>
                <p>Easily connect to a CMS of your choice.</p>
              </TileDescription>
            </TileContent>
            <TileVisual>
              <Placeholder />
            </TileVisual>
          </Tile>
        </div>
      </div>
    </Section>
  );
}
