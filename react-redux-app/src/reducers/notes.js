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
      if (action.page === null) { //check if form rejected with cancel
        return state
      }
      const noteToMove = state.filter( e => e.id === action.id)[0]
      currentInd = state.indexOf(noteToMove)
      return [
        ...state.slice(0, currentInd),
        { id: noteToMove.id, text: noteToMove.text, page: action.page.toUpperCase() },
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

    case 'DRAG_DROP':
      const filtered = state.filter(note => note.page === action.page)
      currentInd = state.indexOf(filtered[action.oldIndex])
      nextInd = state.indexOf(filtered[action.newIndex])
      return arrayMove(state, currentInd, nextInd)

    case 'EDIT_NOTE':
      if (action.text === null) {
        return state
      }
      const noteToEdit = state.filter( e => e.id === action.id)[0]
      currentInd = state.indexOf(noteToEdit)
      return [
        ...state.slice(0, currentInd),
        { id: noteToEdit.id, text: action.text, page: noteToEdit.page },
        ...state.slice(++currentInd)
      ]

    default:
      return state
  }
}

export default notes
