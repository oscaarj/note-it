import { CREATE_NOTE, SET_NOTE } from '../actions'

const initialState = {
  notes: [],
  selectedNote: null
}

export default function notes(state = initialState, action) {
  switch (action.type) {
    case CREATE_NOTE:
      return {
        ...state,
        notes: state.notes.concat(action.payload)
      }

    case SET_NOTE:
      return {
        ...state,
        selectedNote: action.payload
      }

    default:
      return state
  }
}
