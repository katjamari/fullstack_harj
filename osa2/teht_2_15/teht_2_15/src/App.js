
import noteService from './services/notes'
import React, { useState,useEffect  } from 'react'
import Note from './components/Note'
import axios from 'axios'


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const App = (props) => {
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

 

  const [persons, setPersons] = useState([])
 //   { content: 'Arto Hellas', number: '040-123456' },
  //  { content: 'Ada Lovelace', number: '39-44-5323523' },
  //  { content: 'Dan Abramov', number: '12-43-234345' },
   // { content: 'Mary Poppendieck', number: '39-23-6423122' }
  //])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [showAll, setShowAll] = useState('')
  const [id, setId] = useState('')
 

  const notesToShow = persons.filter(persons => persons.contents===showAll.toLowerCase())
 


  function addNote(event) {
    let personNames = persons.map((persons) => persons.content)
    if (personNames.includes(newName) === true) {
      alert(`${newName} is already added to phonebook`)
    }
    else {


      event.preventDefault()
      const noteObject = {
        content: newName,
        number: newNumber
      }
      console.log(noteObject)
      //synkronoidaan palvelimelle//
      axios
        .post('http://localhost:3001/persons', noteObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
        })

  
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

  //function handleChange(event){
   // setQuery(event.target.value)
    // console.log(query)
 // }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setShowAll(event.target.value)
    
  }

  const deleteItem = (id) => {
    const note = persons.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }
  
    noteService
      .update(id, changedNote).then(returnedNote => {
        setPersons(persons.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setPersons(persons.filter(n => n.id !== id))
      })
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
        <div></div>
        <label for="delete-by-name">Delete </label>
    <input name="delete-by-name" value={id}
    onChange={deleteItem} />
    <Button handleClick={()=>handleNoteChange}text="delete"/>
    <br></br>
       
        <h1>Numbers</h1>
        {notesToShow.map(note => 
            <Note key={note.content} note={note} />
   
            )
        
        
        }
       
     
      </form>  
    
    </div>
    
  )
}

export default App