import React from 'react'

const AddNote = ({page, children, onSubmit}) => {
  let input

  return (
    <div id='input-form'>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            alert('Please enter text in the input field!')
            return
          }
          onSubmit(input.value, page)
          input.value = ''
        }}
      >
        <input ref={node => (input = node)} placeholder="Notes..."/>
        <button type="submit">Post Note</button>
      </form>
    </div>
  )
}

export default AddNote
