import React from "react";
import image from "../assets/image.jpg";
import AVACADO from "../assets/AVACADO.jpg";
import VEG from "../assets/VEG.jpg";
import CUP2 from "../assets/CUP2.jpg";
import MOM6 from "../assets/MOM6.jpg";
import SLEEPY from "../assets/SLEEPY.jpg";
import COMIC from "../assets/COMIC.jpg";
import COVOID from "../assets/COVOID.jpg";
import SANTA from "../assets/SANTA.png";
import tourism from "../assets/tourism.png";
import code from "../assets/code.png";
import HappySmileLogo from "../assets/HappySmileLogo.jpg";
import './FlexboxPage.css';
import { SocialIcon } from 'react-social-icons';

console.log(image);

const Body = () => {
    return (
      <div>
        <div class="container" style={{marginTop:'10px', paddingBottom:'40px'}}>
          <div class="row justify-content-md-center">
            <div class="col-sm-auto">
            <img src={image} alt="Bimali Wickramasinghe" style={{width: '275px'}}/>
            </div>
            <div class="col-sm-auto">
              <h1>Hi, I'm Bimali</h1><br/>
                I am a third year BSc (Hons) in Software Engineering undergraduate <br/>
                at University of Kelaniya, Sri Lanka. I currently do my studies on Game <br/>
                Development, Web Centric and Data Science domains. I am a creative, <br/>
                solution-oriented, and fast learning individual with an intention to <br/>
                guide my knowledge to create a better world. <br/><br/>
                My passion<br/><br/>
                <div class="row">
                  <div class="col-sm-auto"><mark id="bg4">UI/UX Design</mark></div>
                  <div class="col-sm-auto"><mark id="bg1">Graphic Design</mark></div>
                  <div class="col-sm-auto"><mark id="bg2">Tutoring</mark></div>
                  <div class="col-sm-auto"><mark id="bg3">Game Development</mark></div>
                </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="container2-csm" style={{paddingTop:'40px'}}>
          <h3 path='work' style={{paddingBottom:'20px'}}>Work</h3>
          <div class="row1" id="addShadow" style={{padding:'40px', marginTop:'20px'}} >
            <div class="column2">
              <h4>'Happy Smile' Blog Website</h4>
              <img class="zoom" src={HappySmileLogo}/>
            </div>
            <div class="column2" style={{paddingTop:'30px', paddingLeft:'40px'}}>
              <h6 style={{fontWeight: 'bold'}}>Technologies</h6>
              <p>React, Bootstrap, JSX</p>
              <h6 style={{fontWeight: 'bold'}}>Overview</h6>
              <p>'Happy Smile' is a psychological blog website 
              that helps people to develop their mental health</p>  
            </div>
          </div>

          <div class="row1" id="addShadow" style={{padding:'40px', marginTop:'20px'}} >
            <div class="column2">
              <h4>Tourism Website</h4>
              <img class="zoom" src={tourism}/>
            </div>
            <div class="column2" style={{paddingTop:'30px', paddingLeft:'40px'}}>
              <h6 style={{fontWeight: 'bold'}}>Technologies</h6>
              <p>HTML, CSS, JS</p>
              <h6 style={{fontWeight: 'bold'}}>Overview</h6>
              <p>Tourism website is a website made from scratch 
              as a project for 'Web Application Development' 
              course in the university</p>  
            </div>
          </div>

          <div class="row1" id="addShadow" style={{padding:'40px', marginTop:'20px'}} >
            <div class="column2">
              <h4>University Information System</h4>
              <img class="zoom" src={code}/>
            </div>
            <div class="column2" style={{paddingTop:'30px', paddingLeft:'40px'}}>
              <h6 style={{fontWeight: 'bold'}}>Technologies</h6>
              <p>Java, MySQL</p>
              <h6 style={{fontWeight: 'bold'}}>Overview</h6>
              <p>University management systemwas done as a university 
              as a project for 'Object Oriented Programing' 
              course in the university. It manages student, lecturers ans subject data</p>
              <a href={'https://github.com/BimaliWickramasinghe/University_Management_System'} target="_blank">Visit Reposirory</a>  
            </div>
          </div>
        </div>     

        <div class="container2-csm" style={{paddingTop:'80px'}}>
          <h3 path='ill' path="/ill">Illustrations <a href="https://www.pinterest.com/Bwicky_/poems/" target="_blank" style={{fontSize:'20px'}}>_bwicky</a></h3>
          <div class="row1" style={{paddingTop:'20px'}}>
            <div class="column">
              <img class="zoom" src={AVACADO}/>
              <img class="zoom" src={VEG}/>
              <img class="zoom"src={CUP2}/>
            </div>
            <div class="column">
              <img class="zoom" src={COVOID}/>
              <img class="zoom" src={MOM6}/>
              <img class="zoom" src={SLEEPY}/>   
            </div>
            <div class="column">
              <img class="zoom" src={COMIC}/>
              <img class="zoom" src={SANTA}/>
            </div>
          </div>
        </div>
        
        <div class="footer">
          <h4>Connect With Me!</h4><br/>
          <SocialIcon url="https://github.com/BimaliWickramasinghe" target="_blank" style={{margin:'10px'}}/>
          <SocialIcon url="https://bimalics.medium.com" target="_blank" style={{margin:'10px'}}/>
          <SocialIcon url="https://linkedin.com/in/bimali-wickramasinghe-3a5984181" target="_blank" style={{margin:'10px'}}/>
        </div>
      </div>
    );
}
export default Body;