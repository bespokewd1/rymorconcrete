import cn from "@utils/cn";
import { AnimatePresence, motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { navigate } from "astro:transitions/client";

import { useState } from "react";

export type ItemsTypes = {
  title: string;
  description: string;
  link: string;
  imgData: ImageMetadata;
  className?: string;
};

export const HoverEffect = ({
  items,
  className,
}: {
  items: ItemsTypes[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-10",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className={cn(
            "group relative block h-full w-full p-2 lg:col-span-2",
            item.className,
          )}
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          aria-label={`Link to ${item.title} service page`}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="bg-accent-light absolute inset-0 block h-full w-full rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardImg imgMetadata={item.imgData} alt={item.title} />
            <CardTitle className="text-title">{item.title}</CardTitle>
            <CardDescription className="text-body flex-1">
              {item.description}
            </CardDescription>
            <span className="text-accent-primary text-body inline-flex items-center gap-2 font-semibold">
              Learn More
              <IconArrowRight
                width={20}
                height={20}
                className="size-5 transition-transform group-hover:translate-x-1"
              />
            </span>
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "border-accent-primary relative z-20 h-full w-full overflow-hidden rounded-2xl border-4 bg-white p-4 shadow-sm group-hover:border-slate-700",
        className,
      )}
    >
      <div className="relative z-50 h-full">
        <div className="flex h-full flex-col justify-center">{children}</div>
      </div>
    </div>
  );
};

export const CardImg = ({
  className,
  imgMetadata,
  alt,
}: {
  className?: string;
  imgMetadata: ImageMetadata;
  alt: string;
}) => {
  return (
    <div className={cn("h-48 w-full overflow-hidden rounded-lg", className)}>
      <img
        src={imgMetadata.src}
        height={imgMetadata.height}
        width={imgMetadata.width}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-500"
      />
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        "group-hover:text-accent-primary text-title mt-4 font-bold tracking-wide text-black",
        className,
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "text-body mt-2 pb-4 leading-relaxed tracking-wide text-black/90",
        className,
      )}
    >
      {children}
    </p>
  );
};
