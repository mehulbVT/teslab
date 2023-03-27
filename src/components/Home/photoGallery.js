import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import research1 from "../../Assets/research1.jpg";
import research2 from "../../Assets/research2.jpg";
import research3 from "../../Assets/research3.jpg";
import research4 from "../../Assets/research4.jpeg";
import research5 from "../../Assets/research5.png";
import research6 from "../../Assets/research6.png";
import research7 from "../../Assets/research7.jpg";

const images = [
  {
    src: research1,
    width: 2160,
    height: 1200,
    caption: "",
  },
  {
    src: research2,
    width: 2160,
    height: 1080,
    caption: "",
  },
  {
    src: research3,
    width: 2160,
    height: 1080,
    caption: "",
  },
  {
    src: research4,
    width: 2160,
    height: 1080,
    caption: "",
  },
  {
    src: research5,
    width: 2160,
    height: 1080,
    caption: "",
  },
  {
    src: research6,
    width: 2160,
    height: 1080,
    caption: "",
  },
  {
    src: research7,
    width: 2160,
    height: 1080,
    caption: "",
  },
];

export default function PhotoGallery() {
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => {
    console.log("Image clicked:", index, item);
    setIndex(index);
  };
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  );
}
