import React from 'react'
import { connect } from 'react-redux'
import Note from './Note'

const mapStateToProps = state => {
  const note = state.notes.selectedNote
  return { note }
}

export default connect(mapStateToProps)(Note)
