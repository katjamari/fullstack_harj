
import './App.css';
import React from 'react'


const Header = (props) => <h1>{props.course}</h1> 

const Total = (props) => <p>Total of {props.count} exercises</p>

const Part = (props) => <p>{props.part} {props.exercises}</p>

const Course = props => (
  <div>
  <p><h1>{props.name}</h1></p>
  <>
    <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
    <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
    <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
  </>

    <Total count={props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} />

    
  </div>
)



const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
       <Course 
          name = {course.name}
          parts={course.parts}
          Total = {Total.count}
      
        
          
      /> 
    
     
    </div>
  )
}


export default App