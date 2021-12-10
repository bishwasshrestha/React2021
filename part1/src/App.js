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

const Statistics = (props) =>{
  const header = 'Statistics'
  const {good, bad, neutral, totalClicks, scoreCard} = props  

  if(totalClicks>0)
  //Only return if any feedback has been recorded
    return (     
      <div>
        <Header header={header}/>     
        <p>Good: {good}</p>
        <p>Bad: {bad}</p>
        <p>Neutral:{neutral}</p>
        <p>All: {totalClicks}</p>
        <p>average: {scoreCard/totalClicks}</p>
        <p>positive: {(good/totalClicks)*100} %</p>    
      </div>
  )
  return (
    <div>
       <Header header={header}/>     
      <h3>
        No Feedback available!
      </h3> 
    </div>
  )
}

const App = () => {
 const header = 'Give Feedback'

  const [goodClicks, setGood] = useState(0)
  const [badClicks, setBad] = useState(0)
  const [neutralClicks, setNeutral] = useState(0)
  const [allClicks, setAll] = useState([])

const handleGoodClicks =() => {
  setAll(allClicks.concat(1))
  setGood(goodClicks + 1)
}

const handleBadClicks =() => {
  setAll(allClicks.concat(-1))
  setBad(badClicks+1)
}

const handleNeutralClicks =() => {
  setNeutral(neutralClicks+1)
  setAll(allClicks.concat(0))
}

let scoreCard
if(allClicks.length >0){
  scoreCard = allClicks.reduce((acc, cur) => acc + cur)
}

  return (
    <div>
     <Header header= {header}/>
     <Button name='Good' handleClicks = {handleGoodClicks}/>
     <Button name='Neutral' handleClicks ={handleNeutralClicks}/>
     <Button name='Bad' handleClicks={handleBadClicks}/>     
     <Statistics good={goodClicks} bad={badClicks} neutral={neutralClicks} scoreCard={scoreCard} totalClicks={allClicks.length} />    
    </div>  
  )
  
}

export default App;
