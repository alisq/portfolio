
import './css/app.css';
import projects from './data.json';
import Teaser from './components/teaser'
import { useState } from 'react';



function App() {

   const [openId, setOpenId] = useState(null);
    const handleToggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id))
    }


  return (
    <div className="App">
     
      <table>
{
        projects.map((item, index) => (
          <Teaser 
            id={item.id}
            title={item.title}
            year={item.year}
            media={item.media}
            pics={item.pics}
            desc={item.desc}
            isOpen={openId === item.id}
            onToggle={() => handleToggle(item.id)}
          />
        ))
      } 
      </table>
    </div>
  );
}

export default App;
