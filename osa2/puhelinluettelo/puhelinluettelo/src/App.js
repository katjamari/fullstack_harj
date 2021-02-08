import React, { useState } from 'react'
import Note from './components/Note'



const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)




const App = (props) => {

  //const [ persons, setPersons] = useState([]) 

  const [persons, setPersons] = useState([
    { content: 'Arto Hellas', number: '040-123456' },
    { content: 'Ada Lovelace', number: '39-44-5323523' },
    { content: 'Dan Abramov', number: '12-43-234345' },
    { content: 'Mary Poppendieck', number: '39-23-6423122' }
  ])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState('')

  const notesToShow = showAll
    ? persons.filter(note => note.contens ===showAll)
   : persons
  //const notesToShow = persons.filter(note => note.contents===showAll.toLowerCase())
  
  const addNote = (event) => {

     let personNames = persons.map((persons) => persons.content)
    if (personNames.includes(newName) ===true ) {
      alert(`${newName} is already added to phonebook`)
    }
    else{

      
    event.preventDefault()
    const noteObject = {
      content: newName,
      number:newNumber
 
    }
    console.log(noteObject)



 setPersons(persons.concat(noteObject))
    setNewName('')
    setNewNumber('')

    }
   
  }
  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value) 
    
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
    
    
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value)
    
    
  }

 

  return (
    <div>
      <h1>Phonebook</h1>
    
      <form onSubmit={addNote}>

      filter
        <input
          type="text"
          filter="filter"
          value={showAll}
          onChange={handleFilterChange}
        />

      <h1>Add a new</h1>
       <div></div>
        name
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleNoteChange}
        />
      <div></div>
        number
        <input
          type="numeric"
          number="number"
          value={newNumber}
          onChange={handleNumberChange}
        />
        <Button handleClick={()=>handleNoteChange}text="add"/>
    
  
       
        <h1>Numbers</h1>
        {notesToShow.map(note => 
            <Note key={note.content} note={note} />
        )}
     
      </form>  
    
    </div>
    
  )
}

export default App