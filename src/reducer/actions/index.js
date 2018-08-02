export const CREATE_NOTE = 'CREATE_NOTE'

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note
  }
}
