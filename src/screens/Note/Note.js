import React from 'react'
import styled from 'styled-components'

const NoteWrapper = styled.div`
  margin: 30px 0px;
  padding: 0 15px;
`

const NoteId = styled.span`
  color: #ccc;
  display: block;
  text-transform: uppercase;
`

const NoteText = styled.p`
  font-size: 18px;
`

const Note = ({ note }) => (
  <NoteWrapper>
    <NoteId>{note.id}</NoteId>
    <NoteText>{note.note}</NoteText>
  </NoteWrapper>
)

export default Note
