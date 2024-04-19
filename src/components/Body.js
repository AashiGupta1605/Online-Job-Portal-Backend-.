import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import bgimg1 from '../Images/bgimg1.jpg';
import bgimg2 from '../Images/bgimg2.jpg';
import bgimg3 from '../Images/bgimg3.jpg';
//import bgimg4 from '../Images/bgimg4.avif';

const Body = () => {
  return (
    <div>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgimg1}
          alt="First slide"
          width={750} height={380} 
        />
        <Carousel.Caption>
        <div class="text-center">
          <h1><b><u><font color="#1e3f66">Welcome to Job Portal</font></u></b></h1><h6>.</h6>
          <font color="#e3242b"><h3><b>Find Your Next Dream Job</b></h3></font>
          <font color="#d90166"><h4><i>TechJobs Job Board. Connecting the Best Jobs with Top Talent</i></h4></font>
          <h4>.</h4>
        </div> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgimg2}
          width={750} height={380} 
          alt="Second slide"
        />
        <Carousel.Caption>
        <h1><b><u><font color="#b1f2ff">Welcome to Job Portal</font></u></b></h1> <h3>.</h3>
        <font color="#e3242b"><h3><b>Find Your Next Dream Job</b></h3></font>
          <font color="#f8f8ff"><h4><i>TechJobs Job Board. Connecting the Best Jobs with Top Talent</i></h4></font>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={bgimg3}
          width={750} height={380} 
          alt="Third slide"
        />
        <Carousel.Caption>
        <h1><b><u><font color="red">Welcome to Job Portal</font></u></b></h1><h6>.</h6>
        <font color="#f5f580"><h4><b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Find Your Next Dream Job</b></h4></font>
          <font color="azure"><h4><i>TechJobs Job Board. Connecting the Best Jobs with Top Talent</i></h4></font>
          <h1>.</h1>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Body