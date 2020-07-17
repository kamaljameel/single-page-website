import React from 'react';
import lap from "../src/image/laptop.jpg";
import blur from "../src/image/blur.jpg";
import {NavLink} from "react-router-dom";





 const Common =({name,visit,imgsrc,btname}) => {

	return (
		<>
		<section>
			<div className="container-fluid nav bg">
		<div className="row">
		<div className="col-10 mx-auto">
		

		
		<div className="row">
		<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center ">
		<h1>{name} <strong>KAMAL JAMEEL</strong> </h1>
		<h2 className="my-3">
		We are the team of talented developer making websites
		</h2>
		<div className="mt-3">
		<NavLink to={visit}  className="btn btn-success">{btname}</NavLink>
		</div>
			
		</div>
		<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
		<img src={imgsrc} className="img-fluid" alt="laptop"/>
			
		</div>
		</div>

		</div>
		</div>


		</div>


		</section>
		<div className="img-fluid my-4">
			<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item slider active">
      <img src={blur} className="d-block w-100 img-fluid " alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'white',fontSize:'40px',background:'rgba(0,0,0,.8)',width:'40%',margin:'auto' }}>First slide label</h5>
        <p style={{color:'white',fontSize:'20px', background:'rgba(3,0,0,.8)',width:'40%',margin:'auto',marginTop:'4px' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <div className="mt-1">
    <NavLink to="/contact"  className="btn btn-success">Contact now</NavLink>
    </div>
      </div>
    </div>
    <div className="carousel-item slider">
      <img src={lap} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
         <h5 style={{color:'white',fontSize:'40px',background:'rgba(0,0,0,.8)',width:'40%',margin:'auto' }}>Second slide label</h5>
        <p style={{color:'white',fontSize:'20px', background:'rgba(3,0,0,.8)',width:'40%',margin:'auto',marginTop:'4px' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <NavLink to="/contact"  className="btn btn-success mt-1">Contact now</NavLink>
      </div>
    </div>
    <div className="carousel-item slider">
      <img src={blur} className="d-block w-100 img-fluid" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5 style={{color:'white',fontSize:'40px',background:'rgba(0,0,0,.8)',width:'40%',margin:'auto' }}>Third slide label</h5>
        <p style={{color:'white',fontSize:'20px', background:'rgba(3,0,0,.8)',width:'40%',margin:'auto',marginTop:'4px' }}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        <NavLink to="/contact"  className="btn btn-success mt-1">Contact now</NavLink>
      </div>
    </div>
  </div>
  <a className="carousel-control-prev " href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon text-dark" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
		</div>



		</>





   );
}
export default Common;