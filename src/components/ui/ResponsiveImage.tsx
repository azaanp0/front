import { forwardRef, useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { generateSvgPlaceholder } from "@/utils/generateSvgPlaceholder";

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  alt?: string;
};

const ResponsiveImage = forwardRef<HTMLImageElement, Props>(
  (
    {
      src,
      alt = "",
      className,
      loading = "lazy",
      decoding = "async",
      sizes,
      ...props
    },
    ref,
  ) => {
    const [errored, setErrored] = useState(false);
    const [useSvgFallback, setUseSvgFallback] = useState(false);
    const width = props.width ? Number(props.width) : 400;
    const height = props.height ? Number(props.height) : 300;
    const fallback = generateSvgPlaceholder("سحر", width, height);
    const placeholderSrc = "/images/promo.png";

    return (
      <img
        ref={ref}
        src={useSvgFallback ? fallback : errored ? placeholderSrc : src}
        alt={alt}
        className={cn("block max-w-full", className)}
        loading={loading}
        decoding={decoding}
        sizes={sizes ?? "100vw"}
        {...props}
        onError={(event) => {
          if (!errored) {
            setErrored(true);
          } else if (!useSvgFallback) {
            setUseSvgFallback(true);
          }
          if (props.onError) props.onError(event);
        }}
      />
    );
  },
);

ResponsiveImage.displayName = "ResponsiveImage";

export default ResponsiveImage;
