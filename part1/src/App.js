import React from 'react';

const Header = (prop) =>{
  return (  
    <div>
      <p>{prop.course}</p>  
    </div>
  )
}
const Part = (prop) =>{
  return(
    <li>{prop.part}{prop.exercise}</li>
  )
}

const Content = () =>{   
  return ( 
    <div>
     <Part part={"Fundamentals of React :"} exercise={10}/>
     <Part part={"Using props to pass data :"} exercise={7}/>
     <Part part={"State of a component :"} exercise={14}/>
     </div>        
  )
}

const App = () => {
  const course = "Fundamental of fuckery";

  return (
    <div>
      <Header course={course}/>
      <Content />       
    </div>  
  )
}

export default App;
