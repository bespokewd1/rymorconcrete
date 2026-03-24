import {
  IconBuildingWarehouse,
  IconParking,
  IconRoad,
  IconSparkles,
  IconTool,
  IconWalk,
} from "@tabler/icons-react";

import patiopads from "@assets/images/services/service-patiopads.jpg";
import sidewalk from "@assets/images/services/services-commercialSIDEwalk.jpg";
import hottub from "@assets/images/services/services-hottubpad.jpg";
import sideExt from "@assets/images/services/services-sidewalkextensions.jpg";
import stamped from "@assets/images/services/services-stampedDecorative.jpg";
import construction from "@assets/images/services/construction.jpg";

import cn from "@utils/cn";
import { DirectionAwareHover } from "@components/Ui/DirectionAwareHover";

export const QuickServiceCards = ({ className }: { className?: string }) => {
  const serviceItems = [
    {
      title: "Concrete Flatwork",
      description:
        "We install high-quality driveways, garage pads, sidewalks, and concrete surfaces built for durability and performance.",
      link: "/services#driveways",
      imgData: hottub,
      icon: IconRoad,
    },
    {
      title: "Decorative & Stamped Concrete",
      description:
        "Enhance your space with custom stamped concrete, exposed aggregate, and modern finishes designed to elevate curb appeal.",
      link: "/services#patio",
      imgData: patiopads,
      icon: IconBuildingWarehouse,
    },
    {
      title: "Patio Pads & Outdoor Spaces",
      link: "/services#stamped",
      description:
        "Create the perfect outdoor area with professionally installed concrete patios, including custom designs and finishes.",
      imgData: stamped,
      icon: IconSparkles,
    },
    {
      title: "Commercial Concrete",
      link: "/services#sidewalks",
      description:
        "From parking lots to walkways, we provide reliable concrete solutions for commercial properties.",
      imgData: sideExt,
      icon: IconWalk,
    },
  ] as const;

  return (
    <section
      className={cn(
        "@container relative bg-transparent p-4 pb-16 md:px-8",
        className,
      )}
    >
      <div className="pt-16">
        <div className="mx-auto mb-12 max-w-225 xl:max-w-full">
          <h2 className="cs-title font-acumin text-header text-body-light px-2 text-center text-4xl font-black text-balance">
            Our Concrete Services
          </h2>
        </div>

        {/* Mobile First Grid Container */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {serviceItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <DirectionAwareHover
                  key={index}
                  imageUrl={item.imgData.src}
                  href={item.link}
                  // Overriding the default fixed w/h to match the grid cell
                  className="h-64 w-full md:h-90 md:w-full"
                >
                  <div className="flex flex-col gap-2">
                    <div className="inline-flex items-center gap-2">
                      <Icon className="h-8 w-8 text-white" stroke={1.5} />
                      <h3 className="text-xl font-bold text-balance text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-pretty text-white/80">
                      {item.description}
                    </p>
                  </div>
                </DirectionAwareHover>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
