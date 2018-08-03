import React, { Component } from 'react'
import styled from 'styled-components'
import NoteForm from '../../components/NoteForm'
import breakpoints from '../../styles/breakpoints'

const EditArea = styled.div`
  @media (max-width: ${breakpoints.medium}) {
    padding: 0 20px;
  }
`

class Main extends Component {
  render() {
    return (
      <EditArea>
        <NoteForm />
      </EditArea>
    )
  }
}

export default Main
