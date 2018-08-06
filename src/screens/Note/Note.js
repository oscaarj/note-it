import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components'

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

class Note extends Component {
  deleteNote = id => {
    this.props.actions.deleteNote(id)
    this.props.history.push('/')
  }

  render() {
    const { note } = this.props

    return (
      <NoteWrapper>
        <NoteId>
          {note.id} <NoteDelete onClick={() => this.deleteNote(note.id)}>🗑️</NoteDelete>
        </NoteId>
        <NoteText>{note.note}</NoteText>
      </NoteWrapper>
    )
  }
}

export default withRouter(Note)
