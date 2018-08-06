import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Note from './Note'

const mapStateToProps = state => {
  const note = state.notes.selectedNote
  return { note }
}

import { deleteNote } from '../../reducer/actions'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ deleteNote }, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Note)
