import React from 'react';

// const exercises = [10, 7, 14]
// const parts = ["Fundamentals of React :", "Using props to pass data :", "State of a component :"]
const Header = (prop) =>{
 
  const header = prop.course
  return (  
    <div>
      <p>
        {header.name}
      </p>  
    </div>
  )
}

const Content = (prop) =>{
  const course = prop.part.parts; 
  const content = course.map((item, index) => 
    <li key={index}>
      {item.name} : {item.exercises}
    </li>)

  return ( 
    <div>      
      {content}      
    </div>   
  )
}

const Total = (prop) =>{
  
  const total = prop.total.parts;   
  const exercises = total.map(item => item.exercises);
  const totalExercises = exercises.reduce((acc, cur) => {
    return acc + cur;
  });
 
  return(
    <div>
      <p key = {'totalExercises'}> 
        Number of Exercises : {totalExercises}
      </p>
    </div>
  )
}

const App = () => {
  const course ={

   name: "Half stack application development",

   parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      }, 
      {
        name:"Using props to pass data",
        exercises: 7
      },
      {
        name:"State of a component",
        exercises: 14
      }
     ]
  }

  return (
    <div>
      <Header course={course}/>
      <Content part ={course}/>       
      <Total total = {course}/>    
    </div>  
  )
}

export default App;
