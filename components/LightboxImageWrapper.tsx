import Image from "next/image";
import { ContainerRect, SlideImage } from "yet-another-react-lightbox/*";
import {
  isImageFitCover,
  isImageSlide,
  useController,
} from "yet-another-react-lightbox/core";

export default function LightboxImageWrapper(image: SlideImage, _offset: number, rect: ContainerRect) {
  const { getLightboxProps } = useController();
  const cover =
    isImageSlide(image) &&
    isImageFitCover(image, getLightboxProps().carousel.imageFit);

  const imageHeight = image.height || rect.height;
  const imageWidth = image.width || rect.width;

  const width =
    !cover || !image.height || !image.width
      ? Math.round(
          Math.min(rect.width, (rect.height / imageHeight) * imageWidth)
        )
      : rect.width;

  const height =
    !cover || !image.height || !image.width
      ? Math.round(
          Math.min(rect.height, (rect.width / imageWidth) * imageHeight)
        )
      : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt=""
        src={image.src}
        loading="eager"
        draggable={false}
        style={{ objectFit: cover ? "cover" : "contain" }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
      />
    </div>
  );
}
