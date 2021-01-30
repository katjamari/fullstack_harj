import React, { useState } from 'react'




const History = (props) => {
  if (props.all === 0) {
    return (
      <div>
       No feed back given
      </div>
    )
  }
  return (
    <div>
      
    </div>
  )
}


const Button = (props) => (
  <button onClick={props.handleClick}>

    {props.text}

  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.text} {props.value}</p>



    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
    

      
      </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [all, setAll] = useState(0);
  const [positive, setPositive] = useState(0);

  



  return (
    <div>
      <h1>Give feedback</h1>


      <Button handleClick ={()=>{setGood(good+1); setAll(all+1);setPositive(positive + 1);setAverage(average + 1)}}text="Good"/>
      <Button handleClick ={()=>{setBad(bad+1); setAll(all+1);setAverage(average + -1)}}text="Bad"/>
      <Button handleClick ={()=>{setNeutral(neutral+1); setAll(all+1);setAverage(average + 0)}}text="Neutral"/>

   
  
  

      <h1>Statistics</h1>
      <History all={all} />


      <StatisticLine text="good" value ={good}></StatisticLine>
      <StatisticLine text="bad" value ={bad}></StatisticLine>
      <StatisticLine text="neutral" value ={neutral}></StatisticLine>
      <StatisticLine text="average" value ={average/all}></StatisticLine>
      <StatisticLine text="all" value ={all}></StatisticLine>
      <StatisticLine text="positive" value ={100 / all * positive} ></StatisticLine>


    

    </div>
  )
}

export default App