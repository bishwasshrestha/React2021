import React, {useState} from 'react';

// const exercises = [10, 7, 14]
// const parts = ["Fundamentals of React :", "Using props to pass data :", "State of a component :"]
const Header = (prop) =>{
 
  const header = prop.header
  return (  
    <div>
      <h1>
        {header}
      </h1>  
    </div>
  )
}

const Button = (prop) =>{
  return(
    <button onClick={prop.handleClicks}>{prop.name}</button>
  )
}

const App = () => {
 const header = 'Give Feedback'
 const body = 'Statistics'
  const [goodClicks, setGood] = useState(0)
  const [badClicks, setBad] = useState(0)
  const [neutralClicks, setNeutral] = useState(0)

  
const handleGoodClicks =() => {
  setGood(goodClicks+1)
}

const handleBadClicks =() => {
  setBad(badClicks+1)
}

const handleNeutralClicks =() => {
  setNeutral(neutralClicks+1)
}

  return (
    <div>
     <Header header= {header}/>
     <Button name='Good' handleClicks = {handleGoodClicks}/>
     <Button name='Neutral' handleClicks ={handleNeutralClicks}/>
     <Button name='Bad' handleClicks={handleBadClicks}/>     
     <Header header={body}/>
     <p>Good: {goodClicks}</p>
     <p>Bad: {badClicks}</p>
     <p>Neutral:{neutralClicks}</p>
    </div>  
  )
}

export default App;
