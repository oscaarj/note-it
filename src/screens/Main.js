import React from 'react'
import styled from 'styled-components'
import NoteForm from '../components/NoteForm'
import breakpoints from '../styles/breakpoints'

const EditArea = styled.div`
  @media (max-width: ${breakpoints.medium}) {
    padding: 0 20px;
  }
`

const Main = () => (
  <EditArea>
    <NoteForm />
  </EditArea>
)

export default Main
