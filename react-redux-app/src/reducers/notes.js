const notes = (state = [], action) => {

  let obj = state
  let previousInd, currentInd, nextInd, counter = 0;

  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        { id: action.id, text: action.text, page: action.page }
      ]

    case 'DELETE_NOTE':
      currentInd = state.indexOf(state.filter( e => e.id === action.id)[0])
      return [
        ...state.slice(0, currentInd),
        ...state.slice(++currentInd)
      ]

    case 'MOVE_NOTE':
      const note = state.filter( e => e.id === action.id)[0]
      currentInd = state.indexOf(note)
      return [
        ...state.slice(0, currentInd),
        { id: note.id, text: note.text, page: action.page },
        ...state.slice(++currentInd)
      ]

    case 'MOVE_UP':
      state.forEach( note => {
        if (note.page === action.page) {
          if (note.id === action.id & counter++ !== 0) {
            currentInd = state.indexOf(note);
            obj = [
              ...state.slice(0, previousInd),
              state[currentInd],
              ...state.slice(++previousInd, currentInd),
              state[--previousInd],
              ...state.slice(++currentInd)
            ]
          }
          previousInd = state.indexOf(note)
        }
      })
      return obj

    case 'MOVE_DOWN':
      state.forEach( note => {
        if (note.page === action.page && counter !== 0) {
          nextInd = state.indexOf(note)
          obj = [
            ...state.slice(0, currentInd),
            state[nextInd],
            ...state.slice(++currentInd, nextInd),
            state[--currentInd],
            ...state.slice(++nextInd)
          ]
          counter = 0
        }
        if (note.id === action.id ) {
          currentInd = state.indexOf(note)
          counter++
        }
      })
      return obj

    default:
      return state
  }
}

export default notes
