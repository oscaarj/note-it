import React, { useState } from 'react'
import { generateId } from './utils/helpers'

export const RootContext = React.createContext()

export default ({ children }) => {
  const [notes, setNotes] = useState([])
  const [selectedNote, setSelectedNote] = useState(null)

  const createNote = note => {
    setNotes(notes => [
      ...notes,
      {
        id: generateId(),
        note,
      },
    ])
  }

  const deleteNote = providedId => {
    setNotes(notes => notes.filter(note => note.id !== providedId))
  }

  const defaultContext = {
    notes,
    createNote,
    selectedNote,
    setSelectedNote,
    deleteNote,
  }

  return <RootContext.Provider value={defaultContext}>{children}</RootContext.Provider>
}
