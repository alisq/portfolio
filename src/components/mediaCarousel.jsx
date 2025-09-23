import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css"; // make sure you import the styles

const defaultFlickityOptions = {
  cellAlign: "left",
  contain: true,
  lazyLoad: true,
  imagesLoaded: true,
  initialIndex: 1,
  wrapAround: true,

};

function MediaCarousel({ pics = [], flickityOptions = {} }) {
  const options = { ...defaultFlickityOptions, ...flickityOptions };

  if (!Array.isArray(pics) || pics.length === 0) {
    return null; // nothing to show
  }

  return pics.length > 1 ? (
    <Flickity
      className={"carousel"}
      elementType={"div"}
      options={options}
      disableImagesLoaded
      reloadOnUpdate
      static
    >
      {pics.map((pic, i) => (
        <img
          key={i}
          src={`https://alisq.github.io/portfolio/public/media/${pic.url}`}
          alt={pic.alt || `Artwork image ${i + 1}`}
        />
      ))}
    </Flickity>
  ) : (
    <img
      src={`https://alisq.github.io/portfolio/public/media/${pics[0].url}`}
      alt={pics[0].alt || "Artwork image"}
    />
  );
}

export default MediaCarousel;
