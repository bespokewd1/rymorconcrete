// import { BentoGrid, BentoGridItem } from "./Ui/BentoGrid";
import { BentoGrid, BentoGridItem } from "@components/Ui/BentoGrid";
import cn from "@utils/cn";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  spanClass: string;
  imgClass: string;
};

export default function GalleryBentoReact({
  images,
}: {
  images: GalleryImage[];
}) {
  return (
    <section className="">
      <div
        className={cn([
          "corner-squircle mx-auto max-w-7xl bg-white py-18 xl:px-18",
          "rounded-t-[75px] rounded-b-none lg:rounded-t-[100px]",
          "supports-[corner-shape:squircle]:rounded-t-[150px] supports-[corner-shape:squircle]:rounded-b-none lg:supports-[corner-shape:squircle]:rounded-t-[200px]",
        ])}
      >
        <span className="cs-topper text-center">Our Portfolio</span>
        <h2 className="cs-title text-center">Our Work</h2>
        <BentoGrid className={cn(["mx-auto px-4 md:px-6 xl:px-0"])}>
          {images.map((img, i) => (
            <BentoGridItem
              key={i}
              image={img}
              className={img.spanClass}
              imgClass={img.imgClass}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
