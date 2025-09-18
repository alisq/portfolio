import {useState} from "react";
import parse from 'html-react-parser';

function Teaser({id, title, year, media, pics, desc, isOpen, onToggle}){
    const [isHovered, setIsHovered] = useState(false);
    const [coords, setCoords] = useState({x:0, y:0})
    const handleMouseMove = (e) => {
          setCoords({ x: e.clientX, y: e.clientY });
        };

    return(
        <>
        <tr className={`teaser_row ${isHovered ? "hovered" : ""} ${isOpen ? "active" : ""}`}
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
            src={'https://alisq.github.io/portfolio/public/media/'+pics[0]}
            
            
          />
        </div>
        
      )}

       <tr
          className={`hidden_content ${isOpen ? "active" : ""}`}
          onClick={onToggle}><td colspan="10">

            <div className="expanded">
            
          
              
                
                <p>{ parse(desc) }</p>
              
           <img
            src={'https://alisq.github.io/portfolio/public/media/'+pics[0]}
            
            
          />
           <img
            src={'https://alisq.github.io/portfolio/public/media/'+pics[0]}
            
            
          />
           <img
            src={'https://alisq.github.io/portfolio/public/media/'+pics[0]}
            
            
          />
           <img
            src={'https://alisq.github.io/portfolio/public/media/'+pics[0]}
            
            
          />
          </div>
            </td></tr>
<tr className="rule"><td colspan="10"></td></tr>
</>
    )
}

export default Teaser;


