import React from "react";
import Grid from "@material-ui/core/Grid";
import "./Hero.css";
import Img from "../../assets/Group 81.png";

const Hero = () => {
  return (
    <div className='hero'>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <div className='hero-text'>
            <h1>
              Amazing <br />
              Experiences From Our <br />
              Wonderful Customers
            </h1>
            <p>
              Here is what customers and vendors are saying about <br />
              us, you can share your storis with us too
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className='hero-image'>
            <img src={Img} alt='img' />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Hero;
