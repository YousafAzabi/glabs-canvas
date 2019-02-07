let nextNoteId = 0
export const addNote = (text, page = 'ONE') => ({
  type: 'ADD_NOTE',
  id: nextNoteId++,
  text,
  page
})

export const deleteNote = id => ({
  type: 'DELETE_NOTE',
  id
})

export const moveNote = (id, page) => ({
  type: 'MOVE_NOTE',
  id,
  page
})

export const moveUp = (id, page) => ({
  type: 'MOVE_UP',
  id,
  page
})

export const moveDown = (id, page) => ({
  type: 'MOVE_DOWN',
  id,
  page
})

export const setSelectedPage = page => ({
  type: 'CHOOSE_PAGE',
  page
})

export const dragDrop = ({oldIndex, newIndex}) => ({ 
  type: 'SORT_ITEM',
  oldIndex,
  newIndex
})

export const PageNumbers = {
  ONE: 'ONE',
  TWO: 'TWO',
  THREE: 'THREE',
  FOUR: 'FOUR',
  FIVE: 'FIVE',
  SIX: "SIX"
}
