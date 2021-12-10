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

const StatisticLine = (props) =>{
  return (
    <tbody>
      <tr>
        <td>{props.name}</td>
        <td>{props.value}</td>
      </tr>    
    </tbody>
  )
}

const Statistics = (props) => {
  const {goodClicks, badClicks, neutralClicks, totalClicks, scoreCard} = props
  const header = 'Statistics'
  if(totalClicks>0)
    return (
      <div>
        <Header header ={header}/>
        <table style = {{margin:10}}>
        <StatisticLine name='Good' value={goodClicks}/>
        <StatisticLine name='Bad' value={badClicks}/>
        <StatisticLine name='Neutral' value={neutralClicks}/>
        <StatisticLine name='All' value={totalClicks}/>
        <StatisticLine name='Average' value={scoreCard/totalClicks}/>
        <StatisticLine name='Positive' value={(goodClicks/totalClicks)*100 +'%'}/>
        </table>
      </div>
    )
  
  return(
        <div>
          <Header header={header}/>
          <h3>
            No Feedback recieved!
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
     <Statistics goodClicks={goodClicks} badClicks={badClicks} neutralClicks={neutralClicks} totalClicks={allClicks.length} scoreCard={scoreCard} />    
    </div>  
  )
  
}

export default App;
