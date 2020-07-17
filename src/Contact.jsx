import React from 'react';
import lap from "../src/image/laptop.jpg";
import blur from "../src/image/blur.jpg";




 const Contact =() => {

	return (
		<>
		<h1 className="text-center pb-3">contact page</h1>
		<div className='container'>
		<div className='row'>
		<div className='col-md-3'></div>
		<div className='col-md-6'>
		<form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" className="form-control" id="inputEmail4"/>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Password</label>
      <input type="password" className="form-control" id="inputPassword4"/>
    </div>
  </div>
  <div className="form-group">
    <label for="inputAddress">Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div className="form-group">
    <label for="inputAddress2">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label for="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
		</div>
		<div className='col-md-3'></div>
		</div>

		</div>
		 <div className='mx-auto justify-content-center' style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>

		<div className="card">
		<div className="front">	
			<img src={lap} className="img-fluid" style={{height:'170px'}} alt='..'/><br/>
			<h4>Mouse hover here to <span style={{textTransform: 'bold',color: 'red'}}>Flip</span></h4>
			
		</div>
		<div className="back" style={{backgroundColor: 'purple', height: '100%', color: 'white'}}>
			<h2>kamal jameel</h2>
			<h3>front end developer</h3>
			<h3>nowshera</h3>
		</div>
		</div>
			<div className="card">
		<div className="front">	
			<img src={lap} className="img-fluid" style={{height:'170px'}} alt='..'/><br/>
			<h4>Mouse hover here to <span style={{textTransform: 'bold',color: 'red'}}>Flip</span></h4>
			
		</div>
		<div className="back" style={{backgroundColor: 'purple', height: '100%', color: 'white'}}>
			<h2>kamal jameel</h2>
			<h3>front end developer</h3>
			<h3>nowshera</h3>
		</div>
		</div>
			<div className="card">
		<div className="front">	
			<img src={lap} className="img-fluid" style={{height:'170px'}} alt='..'/><br/>
			<h4>Mouse hover here to <span style={{textTransform: 'bold',color: 'red'}}>Flip</span></h4>
			
		</div>
		<div className="back" style={{backgroundColor: 'purple', height: '100%', color: 'white'}}>
			<h2>kamal jameel</h2>
			<h3>front end developer</h3>
			<h3>nowshera</h3>
		</div>
		</div>
		</div>


		</>





   );
}
export default Contact;