import React from 'react';

// const exercises = [10, 7, 14]
// const parts = ["Fundamentals of React :", "Using props to pass data :", "State of a component :"]
const Header = (prop) =>{
  return (  
    <div>
      <p>
        {prop.course}
      </p>  
    </div>
  )
}

const Content = (prop) =>{   
  let part = prop.part
  let exercise = prop.exercise
  return ( 
    <div>
      <li>
       {part} : {exercise}
      </li>  
    </div>   
  )
}

const Total = (prop) =>{
  return(
    <div>
      <p> 
        Number of Exercises : {prop.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = "Half stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  }
  const part2 = {
    name:"Using props to pass data",
    exercises: 7
  }
  const part3 = {
    name:"State of a component",
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content part ={part1.name} exercise = {part1.exercises} /> 
      <Content part ={part2.name} exercise = {part2.exercises} /> 
      <Content part ={part3.name} exercise = {part3.exercises} />   
      <Total total = {(part1.exercises + part2.exercises + part3.exercises)}/>    
    </div>  
  )
}

export default App;
