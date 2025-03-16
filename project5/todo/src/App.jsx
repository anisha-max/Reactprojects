import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from '../../../project5/todo/src/context/Todocontext'
import TodoItem from '../../../project5/todo/src/components/TodoItem'
import TodoForm from '../../../project5/todo/src/components/TodoForm'

function App() {

  const [todos, setTodo] = useState([])

  const deleteTodo = (id) => { 
    setTodo((prev) =>prev.filter((todo)=> (todo.id !== id)
  ))
  }

  const addTodo = (todo) => {
    setTodo((prev) => [...prev, { id: Date.now(), ...todo }]);
  }

   const editTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const toggleComplete= (id) =>{
    setTodo((prev) =>prev.map((prevTodo)=> (prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed} : prevTodo )
  ))
  }


  useEffect(() => {
    try {
      const storedTodos = localStorage.getItem("todos");
      if (storedTodos) {
        setTodo(JSON.parse(storedTodos));
      } else {
        setTodo([]); // Ensure it's an empty array if there's no data
      }
    } catch (error) {
      console.error("Error parsing todos from localStorage:", error);
      setTodo([]); // Reset to empty if parsing fails
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  


  return (
    <TodoProvider value={{todos, addTodo, editTodo, deleteTodo, toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
              <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                  <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                  <div className="mb-4">
                      <TodoForm />
                  </div>
                  <div className="flex flex-wrap gap-y-3">
                      {todos.map((todo) => (
                        <div key={todo.id}
                        className='w-full'
                        >
                          <TodoItem todo={todo} />
                        </div>
                      ))}
                  </div>
              </div>
          </div>
  </TodoProvider>
  )
}

export default App
