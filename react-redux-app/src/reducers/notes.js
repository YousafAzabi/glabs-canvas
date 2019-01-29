const notes = (state = [], action) => {
  let obj = state
  switch (action.type) {
    case 'ADD_NOTE':
      obj = [
        ...state,
        { id: action.id, text: action.text, page: action.page }
      ]
      break
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
      break
    case 'MOVE_UP':
      let previousInd, currentInd, counter = 0;
      state.forEach( note => {
        if (note.page === action.page) {
          if (note.id === action.id & counter++ !== 0) {
            currentInd = state.indexOf(note);
            obj = [
              ...state.slice(0, previousInd),
              state[currentInd],
              state[previousInd],
              ...state.slice(++currentInd)
            ]
          }
          previousInd = state.indexOf(note)
        }
      })
      break
    default:
      obj = state
  }
  return obj
}

export default notes
