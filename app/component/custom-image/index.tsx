import emptyImage from "@/app/asset/img/empty.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

type CustomImageType = Partial<ImageProps>;

const CustomImage = ({ src, alt, ...rest }: CustomImageType) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImport | undefined>(src);

  return (
    <Image
      alt={alt ?? ""}
      src={imgSrc ?? emptyImage}
      {...rest}
      onError={() => {
        setImgSrc(emptyImage);
      }}
    />
  );
};

export default CustomImage;
