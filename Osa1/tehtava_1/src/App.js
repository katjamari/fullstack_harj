import React from 'react'


const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>
      Header: {props.otsikko}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)

  return (
    <div>
      <p>
      Content: {props.part}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
 
  return (
    <div>
      <p>
      Number of exercises: {props.pisteet}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

 
  return (
    <div>
      <h1>{course.name}</h1>
      <Header otsikko={course.name} />
      
      
      <Content part ={course.parts[0].name} /> 
      <Content part ={course.parts[1].name} />
      <Content part ={course.parts[2].name} />

      <Total pisteet ={course.parts[0].exercises + course.parts[1].exercises+ course.parts[2].exercises} /> 
    


    

      
    </div>
  )
}

export default App