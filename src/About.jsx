import React from 'react';
import Common from './Common';
import blur from "../src/image/blur.jpg";



 const About =() => {

	return (
		<>
		<h1 className="text-center pb-3">About page</h1>
		<Common name='welcome to about page' imgsrc={blur} visit='/contact' btname='Contact now'  

		 />


		</>





   );
}
export default About;