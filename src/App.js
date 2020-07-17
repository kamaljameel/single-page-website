import React,{useState} from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Servic from './Servic';
import About from './About';
import Contact from './Contact';
import Navbar from "./Navbar";
import Footer from'./Footer';
import {Switch , Route , Redirect} from "react-router-dom";



import './App.css';

const App=()=> {
  // const [state ,setState] = useState('');
  // const [add , setAdd] = useState([]);
  // const input=(e)=>{
  //   setState(e.target.value);
  // };
  // const additem=()=>{
  //   setAdd((old)=>{
  //     return [...old,state];
  //   });
  //   if (setState('')) {
  //     return state;
  //   }
    
  // };
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/servic" component={Servic}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/"/>
   
    </Switch>
    <Footer/>
    </>
    

         
    
    // //     <h2>first</h2>
    // //     <input type='text' name='number' placeholder='enter text' onChange={input} value={state} /> ..
    // //     <button onClick={additem}>add item</button>
    // //     <ol>
    // //     {
    // //     add.map((env)=>{
    // //       return <li>{env}</li>;
    // //     })}
          
    // //     </ol>
        
      
     
   );
}

export default App;
