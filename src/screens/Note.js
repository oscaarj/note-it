import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { RootContext } from '../RootContext'

const NoteWrapper = styled.div`
  margin: 30px 0px;
  padding: 0 15px;
`

const NoteId = styled.span`
  align-items: center;
  color: #ccc;
  display: flex;
  text-transform: uppercase;
`

const NoteText = styled.p`
  font-size: 18px;
`

const NoteDelete = styled.button`
  appearance: none;
  border: 0;
  cursor: pointer;
`

const Note = ({ history }) => {
  const { deleteNote, selectedNote, notes } = useContext(RootContext)

  const handleDeleteNote = id => {
    deleteNote(id)
    history.push('/')
  }

  const note = notes.filter(note => note.id === selectedNote)[0]

  return (
    <NoteWrapper>
      <NoteId>
        {note.id} <NoteDelete onClick={() => handleDeleteNote(note.id)}>🗑️</NoteDelete>
      </NoteId>
      <NoteText>{note.note}</NoteText>
    </NoteWrapper>
  )
}

export default withRouter(Note)
