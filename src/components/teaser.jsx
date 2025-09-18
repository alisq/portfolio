import {useState} from "react";

function Teaser({id, title, year, media, pics, desc, isOpen, onToggle}){
    const [isHovered, setIsHovered] = useState(false);
    const [coords, setCoords] = useState({x:0, y:0})
    const handleMouseMove = (e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        };

    return(
        <>
        <tr className={`artist-card ${isHovered ? "hovered" : ""} ${isOpen ? "active" : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove} 
            onClick={onToggle} 
            >
            <td className="title_cell"><strong>{title}</strong></td>
            <td>{year}</td>
            <td>{media}</td>
        </tr>
          {isHovered && (
        
         <div
          className="hover_preview"
          style={{
            
            top: coords.y + 15,   // offset so it’s not directly under cursor
            left: coords.x + 15
            
          }}
        >
          <img
            src={'../public/media/'+pics[0]}
            
            
          />
        </div>
        
      )}

</>
    )
}

export default Teaser;


