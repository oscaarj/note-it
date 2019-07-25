import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Sidebar from './Sidebar'

const mapStateToProps = state => {
  const notes = state.notes
  return notes
}

import { setNote } from '../../reducer/actions'

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setNote }, dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
