import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
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

const activeClassName = 'active'

const NoteListLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: red;
  }

  color: ${colors.grey};
  cursor: pointer;
  display: block;
  font-size: 16px;
  overflow: hidden;
  padding: 15px;
  transition: 0.2s ease;
  text-decoration: none;

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
              <NoteListLink to={el.id} onClick={() => this.handleClick(el)}>
                {truncate(el.note, 20)}
              </NoteListLink>
            </li>
          ))}
        </NoteList>
      </StyledSidebar>
    )
  }
}

export default Sidebar
