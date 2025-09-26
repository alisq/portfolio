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

function MediaCarousel({ pics = [], flickityOptions = {}, id }) {
  const options = { ...defaultFlickityOptions, ...flickityOptions };

  return (
    <>
      <Flickity
        className={"carousel big-carousel"}
        elementType={"div"}
        options={options}
        disableImagesLoaded
        reloadOnUpdate
        static
      >
        {pics.map((pic, i) => (
          <div className="slide" key={i}>
            {/\.(jpg|jpeg|png|gif|webp|bmp|svg)$/i.test(pic.url) ? (
              <img
                src={`/portfolio/media/${id}/${pic.url}`}
                alt={pic.alt || `Artwork image ${i + 1}`}
              />
            ) : /\.(mp4|webm|ogg)$/i.test(pic.url) ? (
              <video
                muted={true}
                controls={false}
                autoPlay={true}
                loop={true}
                src={`/portfolio/media/${id}/${pic.url}`}
                alt={pic.alt || `Artwork video ${i + 1}`}
                style={{ maxWidth: "100%" }}
              />

            ) : null}
            <p className="caption">{pic.desc}</p>
          </div>
        ))}
      </Flickity>

      {/* Simple inline version (for small screens) */}
      <div className="small-carousel">
        {pics.map((pic, i) => (
          <img
            key={i}
            src={`/portfolio/media/${pic.url}`}
            alt={pic.alt || `Artwork image ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
export default MediaCarousel;
