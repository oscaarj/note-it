export const CREATE_NOTE = 'CREATE_NOTE'
export const SET_NOTE = 'SET_NOTE'

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}

export function setNote(note) {
  return {
    type: SET_NOTE,
    payload: note
  }
}
