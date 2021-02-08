import React from 'react'

const Note = ({ note }) => {
  return (
    <li>{note.content}   {note.number}</li>
    
  )
}

export default Note