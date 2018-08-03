import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import NoteForm from './NoteForm'

import { createNote } from '../../reducer/actions'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createNote }, dispatch)
})

export default connect(
  null,
  mapDispatchToProps
)(NoteForm)
