import React from "react";
import image from "../assets/image.jpg";
import {Highlight} from "react-marker";
import './FlexboxPage.css';

console.log(image);

const Body = () => {
    return (
      <div>
        <div class="container" style={{marginTop:'40px'}}>
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
                  <div class="col-sm-auto"><mark>UI/UX Design</mark></div>
                  <div class="col-sm-auto"><mark id="bg1">Graphic Design</mark></div>
                  <div class="col-sm-auto"><mark id="bg2">Tutoring</mark></div>
                  <div class="col-sm-auto"><mark id="bg3">Game Development</mark></div>
                </div>
            </div>
          </div>
        </div>

        <div class="container2-csm" style={{paddingTop:'60px'}}>
          <h4>Work</h4>
        </div>

        <div class="container-sm" id="addShadow" style={{marginTop:'50px'}}>
          <div class="row d-flex justify-content-around">
          <div class="col-sm-auto" style={{alignItems: 'right'}}>
            </div>
            <div class="col-sm-auto" style={{alignItems: 'right'}}>
            <h4>Tourism Website</h4>
            </div>
            <div class="col-sm-auto">
            <h6>Technologies</h6>
          <p>ba ba</p>
          <h6>Overview</h6>
          <p>ba ba</p>
            </div>
            <div class="col-sm-auto" style={{alignItems: 'right'}}>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Body;