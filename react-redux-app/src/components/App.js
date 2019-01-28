import React from 'react'
import Footer from './Footer'
import FilterAddTodo from '../containers/FilterAddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <FilterAddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
