import React from "react";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";

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

  if (!Array.isArray(pics) || pics.length === 0) return null;

  return (
    <>
      {/* Flickity version (for wide screens) */}
      {pics.length > 1 && (
        <Flickity
          className={"carousel big-carousel"}
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
      )}

      {/* Simple inline version (for small screens) */}
      <div className="small-carousel">
        {pics.map((pic, i) => (
          <img
            key={i}
            src={`https://alisq.github.io/portfolio/public/media/${pic.url}`}
            alt={pic.alt || `Artwork image ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}

export default MediaCarousel;
