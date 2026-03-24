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
      title: "Concrete Driveways",
      link: "/services#driveways",
      imgData: hottub,
      icon: IconRoad,
    },
    {
      title: "Patio Pads & Outdoor Spaces",
      link: "/services#patio",
      imgData: patiopads,
      icon: IconBuildingWarehouse,
    },
    {
      title: "Stamped & Decorative Concrete",
      link: "/services#stamped",
      imgData: stamped,
      icon: IconSparkles,
    },
    {
      title: "Sidewalks & Walkways",
      link: "/services#sidewalks",
      imgData: sideExt,
      icon: IconWalk,
    },
    {
      title: "Parking Lots (Commercial)",
      link: "/services#parking-lots",
      imgData: sidewalk,
      icon: IconParking,
    },
    {
      title: "Repairs & Resurfacing",
      link: "/services#repairs",
      imgData: construction,
      icon: IconTool,
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <DirectionAwareHover
                  key={index}
                  imageUrl={item.imgData.src}
                  href={item.link}
                  // Overriding the default fixed w/h to match the grid cell
                  className="h-64 w-full md:h-80 md:w-full"
                >
                  <div className="flex flex-col gap-2">
                    <Icon className="h-8 w-8 text-white" stroke={1.5} />
                    <p className="text-xl font-bold text-balance text-white">
                      {item.title}
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
