import React from "react";
import "./Testimony.css";
import Img from "../../assets/Group 89 (1) (1).png";
import Grid from "@material-ui/core/Grid";

const Testimony = () => {
  return (
    <div className='testimony'>
      <div className='testimony-content'>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <div className='testimony-image'>
              <img src={Img} alt='img' />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='customer-content'>
              <div className='customer-text'>
                <h1>Tolu & Joy’s Experience</h1>
                <span>CUSTOMER</span>
                <p>
                  I had the best experience shopping with vasiti. Usability of
                  the website was great, very good customer service, an all
                  round great experience. I would definately be coming back! I
                  had the best experience shopping with vasiti. Usability of the
                  website was great, very good customer service, an all round
                  great experience. I would definately be coming back!
                </p>

                <div className='button'>
                  <h1> SHARE YOUR OWN STORY! </h1>
                  <svg
                    width='297'
                    height='12'
                    viewBox='0 0 297 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125'
                      stroke='#FF5C00'
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Testimony;
