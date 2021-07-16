import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
    <div style={{width: '800px'}}>
        <Nav fixed="top"  className="justify-content-justify" activeKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Bimali Wickramasinghe</Nav.Link>
    </Nav.Item>
    <Nav.Item style={{paddingLeft: '30px'}}>
      <Nav.Link eventKey="link-2">Work</Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <NavDropdown title="Play" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Illustrations</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Games</NavDropdown.Item>
      </NavDropdown>
    </Nav.Item>
  </Nav>
      
    </div>
  );
}

export default App;
