"use client"
import AddTodo from "./components/AddTodo";
import ToudoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { useState } from "react";
import { Todo } from "../types";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [filter, setFilter] = useState('all')

  const addTodo = (text: string) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  // 删除todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  // 切换todo状态
  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
  }))
}

const getFilteredTodos = () => {
  switch (filter) {
    case "completed":
      return todos.filter(todo => todo.completed)
    case "active":
      return todos.filter(todo => !todo.completed)
    default:
      return todos
  }
}
  return (
    <div>
      <h1>标题</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
      <ToudoFilter setFilter={setFilter} />
    </div>
  );
}

