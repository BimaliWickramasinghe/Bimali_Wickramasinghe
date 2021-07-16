import React from "react";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import './FlexboxPage.css';

const FlexboxPage = () => {
    return (
      <div>
        <div class="container3" style={{marginTop:'20px', paddingBottom: '20px', color:'black'}}>
          <div class="d-flex">
            <div class="mr-auto p-2">
            <Nav.Item>
                <Nav.Link href="/home" style={{color:'black'}}>BIMALI WICKRAMASINGHE</Nav.Link>
              </Nav.Item>
            </div>
            <div class="p-2">
            <Nav.Item>
                <Nav.Link href="/home" style={{color:'black'}}>Work</Nav.Link>
              </Nav.Item>
            </div>
            <div class="p-2">
            <NavDropdown id="nav-dropdown" title="Play" >
                  <NavDropdown.Item href="#action/3.1">Illustrations</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Games</NavDropdown.Item>
                </NavDropdown>
            </div>
          </div>
        </div>
      </div>
    );
}
export default FlexboxPage;