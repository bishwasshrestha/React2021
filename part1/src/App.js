import React from 'react';

const exercises = [10, 7, 14]
const parts = ["Fundamentals of React :", "Using props to pass data :", "State of a component :"]
const Header = (prop) =>{
  return (  
    <div>
      <p>
        {prop.course}
      </p>  
    </div>
  )
}
const Part = (prop) =>{
  return(
    <li>
      {prop.part}{prop.exercise}
    </li>
  )
}

const Content = () =>{   
  return ( 
    <div>
     <Part part={parts[0]} exercise={exercises[0]}/>
     <Part part={parts[1]} exercise={exercises[1]}/>
     <Part part={parts[2]} exercise={exercises[2]}/>
     </div>        
  )
}

const Total = () =>{
  return(
    <div>
      <p> 
        Number of Exercises : {exercises[0]+exercises[1]+exercises[2]}
      </p>
    </div>
  )
}

const App = () => {
  const course = "Half stack application development";
  return (
    <div>
      <Header course={course}/>
      <Content />   
      <Total/>    
    </div>  
  )
}

export default App;
