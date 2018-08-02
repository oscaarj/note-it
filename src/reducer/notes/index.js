import { CREATE_NOTE } from '../actions'

const initialState = {
  notes: []
}

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload)
      }

    default:
      return state
  }
}
