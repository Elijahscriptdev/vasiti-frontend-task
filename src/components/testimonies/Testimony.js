import React from "react";
import "./Testimony.css";
import Img from "../../assets/Group 89 (1) (1).png";
import Test1 from "../../assets/Ellipse 22.png";
import Test2 from "../../assets/Ellipse 23.png";
import Test3 from "../../assets/Ellipse 24.png";
import Test4 from "../../assets/Ellipse 22 (1).png";
import Test5 from "../../assets/Ellipse 23 (1).png";
import Test6 from "../../assets/Ellipse 24 (1).png";
import Grid from "@material-ui/core/Grid";

const Testimony = () => {
  return (
    <div className='testimony'>
      <div className='testimony-content'>
        <div className='testimony-container'>
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
                    had the best experience shopping with vasiti. Usability of
                    the website was great, very good customer service, an all
                    round great experience. I would definately be coming back!
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

      <div className='testimonies'>
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6} md={4}>
            <div className='single-testimony'>
              <img src={Test1} alt='img' />
              <h1>Joseph Ike</h1>
              <div className='customers-fluid'>
                <span className='customer-location'>In Ikeja</span>
                <span className='customers-blue'>CUSTOMER</span>
              </div>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className='single-testimony'>
              <img src={Test2} alt='img' />
              <h1>Adetola Fashina</h1>
              <div className='customers-fluid'>
                <span className='customer-location'>Ibadan</span>
                <span className='customers-blue'>CUSTOMER</span>
              </div>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deser unt ut voluptate aute id deserunt nisi. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className='single-testimony'>
              <img src={Test3} alt='img' />
              <h1>Emmanuel Fayemi</h1>
              <div className='customers-fluid'>
                <span className='customer-location'>In Akoka</span>
                <span className='customers-blue'>CUSTOMER</span>
              </div>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Elit aute irure
                tempor cupidatat incididunt sint deser unt ut voluptate aute id
                deserunt nisi. Amet minim mollit non deserunt ullamco est sit
                aliqua dolor do amet sint.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className='single-testimony'>
              <img src={Test4} alt='img' />
              <h1>Chisom Obilor</h1>
              <div className='customers-fluid'>
                <span className='customer-location'>In Magodo</span>
                <span className='customers-green'>VENDOR</span>
              </div>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className='single-testimony'>
              <img src={Test5} alt='img' />
              <h1>Adunoluwa Adeyemi</h1>
              <div className='customers-fluid'>
                <span className='customer-location'>Iwo Road</span>
                <span className='customers-green'>VENDOR</span>
              </div>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deser unt ut voluptate aute id deserunt nisi. Amet minim mollit
                non deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className='single-testimony'>
              <img src={Test6} alt='img' />
              <h1>Chidi Okeke</h1>
              <div className='customers-fluid'>
                <span className='customer-location'>In Somolu</span>
                <span className='customers-green'>VENDOR</span>
              </div>
              <p>
                Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et.
                Sunt qui esse pariatur duis deserunt mollit dolore cillum minim
                tempor enim. Elit aute irure tempor cupidatat incididunt sint
                deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat
                nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
                pariatur duis deserunt mollit dolore cillum minim tempor enim.
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Testimony;
