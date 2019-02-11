import {arrayMove} from 'react-sortable-hoc' //

const notes = (state = [], action) => {

  let arr = Array.from(state)
  let currentInd, nextInd, counter = 0;

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
      state.filter( e => e.page === action.page)
        .forEach(note => {
          if (note.id === action.id & counter++ !== 0) {
            currentInd = state.indexOf(note);
            arr = arrayMove(state, currentInd, nextInd)
          }
          nextInd = state.indexOf(note)
        })
      return arr

    case 'MOVE_DOWN':
      state.forEach( note => {
        if (note.page === action.page && counter !== 0) {
          nextInd = state.indexOf(note)
            arr = arrayMove(state, currentInd, nextInd)
          counter = 0
        }
        if (note.id === action.id ) {
          currentInd = state.indexOf(note)
          counter++
        }
      })
      return arr

    case 'SORT_ITEM':
      const filtered = state.filter(note => note.page === action.page)
      currentInd = state.indexOf(filtered[action.oldIndex])
      nextInd = state.indexOf(filtered[action.newIndex])
      return arrayMove(state, currentInd, nextInd)

    default:
      return state
  }
}

export default notes
