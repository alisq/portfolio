import { useState, useEffect, useRef } from "react";
import parse from "html-react-parser";
import MediaCarousel from "./mediaCarousel";

function Teaser({ id, title, year, media, pics, desc, link, isOpen, onToggle }) {
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const teaserRef = useRef(null);

  const handleMouseMove = (e) => {
    setCoords({ x: e.clientX, y: e.clientY });
  };

  // scroll to teaser when it becomes active
  useEffect(() => {
    let timeout;
    if (isOpen && teaserRef.current) {
      timeout = setTimeout(() => {
        teaserRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300); // delay in ms
    }
    return () => clearTimeout(timeout); // cleanup
  }, [isOpen]);

  return (
    <>
      <tr
        ref={teaserRef}
        className={`teaser_row ${isHovered ? "hovered" : ""} ${isOpen ? "active" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={() => onToggle(id, isOpen)}
      >
        <td className="title_cell"><strong>{title}</strong></td>
        <td>{year}</td>
        <td>{media}</td>
        <td><div className="close">&times;</div></td>
      </tr>

      {isHovered && (
        <div
          className="hover_preview"
          style={{ top: coords.y, left: coords.x }}
        >
          {pics.length > 0 ? (
            <img src={`https://alisq.github.io/portfolio/media/${pics[0].url}`} />
          ) : null}
        </div>
      )}

      <tr className={`hidden_content ${isOpen ? "active" : ""}`}>
        <td colSpan="10">
          <div className="expanded">
            <div className="leftContent">
              {parse(desc)}
              {link !== "" && (
                <p>
                  <br />
                  <a
                    className="link"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.replace("https://", "").replace("www.", "")}
                  </a>
                </p>
              )}
            </div>
            <div className="media">
              <div className="artwork">
                <MediaCarousel pics={pics} />
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr className="rule"><td colSpan="10"></td></tr>
    </>
  );
}

export default Teaser;
