import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Main from './Main'

const mapStateToProps = state => {
  const notes = state.notes

  return { notes }
}

import { createNote } from '../../reducer/actions'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ createNote }, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
