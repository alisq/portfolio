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

 
  return (pics.length == 1) ? (
    
       <div className="single-image">
      
        <img
          
          src={`https://alisq.github.io/portfolio/media/${pics[0].url}`}
          alt={pics[0].alt}
        />
    </div>
    
  ) : (
  <>
    {/* Flickity version (for wide screens) */}
    <Flickity
      className={"carousel big-carousel"}
      elementType={"div"}
      options={options}
      disableImagesLoaded
      reloadOnUpdate
      static
    >
      {pics.map((pic, i) => (
        <div className="slide">
        <img
          key={i}
          src={`https://alisq.github.io/portfolio/media/${pic.url}`}
          alt={pic.alt || `Artwork image ${i + 1}`}
        />
        <p className="caption">{pic.desc}</p>
        </div>
      ))}
    </Flickity>

    {/* Simple inline version (for small screens) */}
    <div className="small-carousel">
      {pics.map((pic, i) => (
        <img
          key={i}
          src={`https://alisq.github.io/portfolio/media/${pic.url}`}
          alt={pic.alt || `Artwork image ${i + 1}`}
        />
      ))}
    </div>
  </>
);

}

export default MediaCarousel;
