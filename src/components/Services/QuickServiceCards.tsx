// import { HoverEffect, type ItemsTypes } from "./Ui/CardHoverEffect";

// import embroidery from "@assets/images/gallery/embroidery/2.webp";
// import screenPrint from "@assets/images/gallery/screen-print/2.webp";
// import digitalPrint from "@assets/images/gallery/digital/15.webp";
// import engraving from "@assets/images/gallery/engraving/3.webp";
// import patches from "@assets/images/gallery/patches/13.webp";

import patiopads from "@assets/images/services/service-patiopads.jpg";
import sidewalk from "@assets/images/services/services-commercialSIDEwalk.jpg";
import hottub from "@assets/images/services/services-hottubpad.jpg";
import sideExt from "@assets/images/services/services-sidewalkextensions.jpg";
import stamped from "@assets/images/services/services-stampedDecorative.jpg";

import cn from "@utils/cn";
import { HoverEffect, type ItemsTypes } from "@components/Ui/CardHoverEffect";
import { DirectionAwareHover } from "@components/Ui/DirectionAwareHover";

export const QuickServiceCards = ({ className }: { className?: string }) => {
  const serviceItems = [
    {
      title: "Patio Pads",
      description: "",
      link: "/services#patio",
      imgData: patiopads,
    },
    {
      title: "Commercial Sidewalk",
      description: "",
      link: "/services#side-walk",
      imgData: sidewalk,
    },
    {
      title: "Hot Tub Pad",
      description: "",
      link: "/services#hottub",
      imgData: hottub,
    },
    {
      title: "Sidewalk Extentions",
      description: "",
      link: "/services#side-ext",
      imgData: sideExt,
    },
    {
      title: "Stamped Decorative",
      description: "",
      link: "/services#stamped",
      imgData: stamped,
    },
  ];

  return (
    <section
      className={cn("@container relative bg-transparent p-0", className)}
    >
      <div className="pt-16">
        <div className="mx-auto max-w-225 xl:max-w-full">
          <h2 className="cs-title font-acumin text-header text-body-light px-2 text-center font-black text-balance">
            Premium Decoration Services for Your Brand
          </h2>
        </div>
        {/* max-w-7xl */}
        <div className="mx-auto">
          <div className="relative flex h-[40rem] items-center justify-center">
            <DirectionAwareHover imageUrl={patiopads.src}>
              <p className="text-xl font-bold">In the mountains</p>
              <p className="text-sm font-normal">$1299 / night</p>
            </DirectionAwareHover>
          </div>
        </div>
      </div>
    </section>
  );
};
