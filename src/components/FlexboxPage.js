import React from "react";
import Nav from 'react-bootstrap/Nav';
import './FlexboxPage.css';

const FlexboxPage = () => {
    return (
      <div>
        <div class="container3" style={{marginTop:'50px', paddingBottom: '20px', color:'black'}}>
          <div class="d-flex">
            <div class="mr-auto p-2">
            <Nav.Item style={{color:'black'}}><p id="myName">Bimali Wickramasinghe<br/>
                <span style={{color:'grey', fontSize:'12px'}}>Software Engineering Undergraduate</span>
                </p>
              </Nav.Item>
            </div>
          </div>
          <div>
        </div>
        </div> 
      </div>
    );
}
export default FlexboxPage;