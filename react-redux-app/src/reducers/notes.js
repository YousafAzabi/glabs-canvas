const notes = (state = [], action) => {
  let obj
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          page: action.page
        }
      ]
    case 'DELETE_NOTE':
      state.forEach( note => {
        if (note.id === action.id) {
          const ind = state.indexOf(note)
          obj = [
            ...state.slice(0, ind),
            ...state.slice(ind+1)
          ]
        }
      })
      return obj
    case 'MOVE_NOTE':
      state.forEach( note => {
        if (note.id === action.id) {
          const ind = state.indexOf(note)
          obj = [
            ...state.slice(0, ind),
            { id: note.id, text: note.text, page: action.page },
            ...state.slice(ind+1)
          ]
        }
      })
      return obj
    default:
      return state
  }
}

export default notes
