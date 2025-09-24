
import './css/app.css';
import TeaserList from './components/teaserList'

import { Routes, Route } from "react-router-dom";



function App() {



  return (
    <div className="App">
        <table className="noBorder">
          <tr>
            <td>
              <h1>Ali S. Qadeer</h1>
            </td>
            <td>
              <h1 className="right"><span className="zp">Recent Work</span></h1>
              </td>
          </tr>
        </table>
           <Routes>
      <Route path="/" element={<TeaserList />} />
      <Route path="/work/:teaserId" element={<TeaserList />} />
    </Routes>
                <table className="noBorder">
          <tr>
            <td>
              <h1><span className="dg">ali.shamas.qadeer@gmail.com</span></h1>
            </td>
            <td>
              <h1><span className="sem">All fonts on this site designed by yours truly.</span></h1>
              </td>
          </tr>
        </table>
    </div>
  );
}

export default App;
