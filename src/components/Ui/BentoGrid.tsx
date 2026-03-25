import cn from "@utils/cn";

type BentoImage = {
  src: string;
  width: number;
  height: number;
  alt?: string;
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-flow-row-dense grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image,
  alt = "Gallery image",
  imgClass = "",
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: BentoImage;
  alt?: string;
  imgClass?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 rounded-xl bg-white p-0 transition duration-200",
        className,
      )}
    >
      {image ? (
        <div className="h-full w-full flex-1 overflow-hidden">
          <img
            src={image.src}
            alt={image.alt ?? alt}
            width={image.width}
            height={image.height}
            className={cn([
              "h-full w-full object-cover object-center transition duration-500 group-hover/bento:scale-105",
              imgClass,
            ])}
            loading="lazy"
            decoding="async"
          />
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between p-4">
          {header}
          <div className="transition duration-200 group-hover/bento:translate-x-2">
            {icon}
            <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
              {title}
            </div>
            <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
              {description}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
