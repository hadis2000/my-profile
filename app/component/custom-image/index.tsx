import emptyImage from "@/app/asset/img/empty.png";
import Image, { ImageProps } from "next/image";

type CustomImageType = Partial<ImageProps>;

const CustomImage = ({ src, alt, ...rest }: CustomImageType) => {
  return <Image alt={alt ?? ""} src={src ?? emptyImage} {...rest} />;
};

export default CustomImage;
