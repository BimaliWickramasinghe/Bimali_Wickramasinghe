import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './FlexboxPage.css';
import { Switch, Route, Link } from 'react-router-dom';
import Body from "./body";

const FlexboxPage = () => {
    return (
      <div>
        <div class="container3" style={{marginTop:'20px', paddingBottom: '20px', color:'black'}}>
          <div class="d-flex">
            <div class="mr-auto p-2">
            <Nav.Item style={{color:'black'}}><p id="myName">BIMALI WICKRAMASINGHE<br/>
                <span style={{color:'grey', fontSize:'12px'}}>Software Engineering Undergraduate</span>
                </p>
              </Nav.Item>
            </div>
            {/* <div class="p-2">
            <Nav.Item>
                <Nav.Link as={Link} to="/work" style={{color:'black'}}>Work</Nav.Link>
              </Nav.Item>
            </div>
            <div class="p-2">
            <Nav.Item>
                <Nav.Link as={Link} to="/ill" style={{color:'black'}}>Illustrations</Nav.Link>
              </Nav.Item>
            </div> */}
          </div>

          <div>
        </div>

        </div>
    
        
      </div>
    );
}
export default FlexboxPage;