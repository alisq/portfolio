import {useState} from "react";
import parse from 'html-react-parser';
const Flickity = require('react-flickity-component');
// Or for ES2015 module
// import Flickity from 'react-flickity-component'

const flickityOptions = {
    initialIndex: 2
}


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
            <td><div className="close">&times;</div></td>
        </tr>
          {isHovered && (
        
         <div
          className="hover_preview"
          style={{
            
            top: coords.y + 15,   // offset so it’s not directly under cursor
            left: coords.x + 15
            
          }}
        >
     

            {pics.length > 0 ? (
          
            <img src={'https://alisq.github.io/portfolio/public/media/'+pics[0].url} />
          
        
      ) : null}
        </div>
        
      )}

       <tr className={`hidden_content ${isOpen ? "active" : ""}`}>
          <td colSpan="10">

            <div className="expanded">
                    

            
                { parse(desc) }

        <div className="media">

    <div className="artwork">
<Flickity
      className={'carousel'}                
      elementType={'div'}                   
      options={flickityOptions}
      disableImagesLoaded
      reloadOnUpdate
      static
    >
      {Array.isArray(pics) && pics.length > 0 ? (
            
        pics.map((pic, i) => {
          
          return (
            <img
              key={i}
              src={'https://alisq.github.io/portfolio/public/media/'+pic.url}
              alt={pic.alt || `Artwork image ${i + 1}`}
            />
          );
        })
        
      ):null}
      </Flickity>
    </div>
  
        </div>
                
</div>
            </td></tr>
<tr className="rule"><td colSpan="10"></td></tr>
</>
    )
}

export default Teaser;


