import React from 'react'

const AddNote = ({page, children, onSubmit}) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          onSubmit(input.value, page)
          if (!input.value.trim()) {
            return
          }
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Post Note</button>
      </form>
    </div>
  )
}

export default AddNote
