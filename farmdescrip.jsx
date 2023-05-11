import React from 'react';
import './farmdescrip.css';

function App() {
  return (
    <body>
      <div className='title'>
      <p>About Farm</p>
      </div>
      <div className="container">
        <div className="box">
          <div className="column1">
            <div className="header-green">
              <p id="greent">Farm Description</p>
            </div>
            <div className="text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis posuere, nulla eu sagittis aliquet, leo dolor volutpat mi, in aliquam arcu sem eu magna. Ut lacinia commodo mi, sit amet mollis libero. Vivamus nunc mauris, tempor a faucibus tincidunt, volutpat et leo.</p>
            </div>
          </div>
          <div className="divider"></div>
          <div className="column2">
            <div className="header-green">
              <p id="greent">Contact Information</p>
            </div>
            <ul>
              <li>Phone &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+245 667 354 677</li>
              <li>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;farm@domain.com</li>
              <li>Location &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NY Village</li>
            </ul>
          </div>
        </div>
      </div>
      
    </body>
  );
}

export default App;





