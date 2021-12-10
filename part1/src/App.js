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
  const [allClicks, setAll] = useState([])

  console.log(allClicks)

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
  console.log(scoreCard)
}

const totalClicks = allClicks.length
console.log(totalClicks)
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
     <p>All: {totalClicks}</p>
     <p>average: {scoreCard/totalClicks}</p>
     <p>positive: {goodClicks/totalClicks} %</p>
    </div>  
  )
}

export default App;
