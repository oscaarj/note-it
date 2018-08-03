import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import styled from 'styled-components'
import { truncate } from '../../utils/helpers'
import { colors, breakpoints } from '../../styles'

const StyledSidebar = styled.div`
  background: ${colors.yellow};
  @media (max-width: ${breakpoints.medium}) {
    grid-column: 1 / -1;
    order: 2;
  }
`

const Title = styled(Link)`
  color: hotpink;
  display: block;
  padding: 0 15px;
  text-decoration: none;
`

const NoNotesMessage = styled.div`
  align-items: center;
  color: dimgray;
  display: flex;
  justify-content: center;

  span {
    font-size: 30px;
    margin-left: 10px;
  }
`

const NoteList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const NoteListButton = styled.button`
  appearance: none;
  background: transparent;
  border: 0;
  color: ${colors.grey};
  cursor: pointer;
  font-size: 16px;
  overflow: hidden;
  padding: 15px;
  text-align: left;
  transition: 0.2s ease;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:hover,
  &:focus {
    background: rgba(255, 255, 255, 0.6);
  }
`

class Sidebar extends Component {
  handleClick = note => {
    this.props.actions.setNote(note)
    this.props.history.push(`/${note.id}`)
  }

  render() {
    return (
      <StyledSidebar>
        <Title to="/">
          <h1>NoteIt</h1>
        </Title>

        {this.props.notes.length === 0 && (
          <NoNotesMessage>
            There are no notes <span>😶</span>
          </NoNotesMessage>
        )}

        <NoteList>
          {this.props.notes.map(el => (
            <li key={el.id}>
              <NoteListButton onClick={() => this.handleClick(el)}>
                {truncate(el.note, 20)}
              </NoteListButton>
            </li>
          ))}
        </NoteList>
      </StyledSidebar>
    )
  }
}

export default withRouter(Sidebar)
