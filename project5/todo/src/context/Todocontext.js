import { useContext, createContext } from "react";

export const TodoContext = createContext(
{    todos : [
        {
            id: 1,
            message: "todo msg",
            completed: false,
        }
    ],
    addTodo : (todo) => { },
    toggleComplete : (id) => { },
    deleteTodo : (id) => { },
    editTodo : (id, todo) => { },}
)

export const TodoProvider = TodoContext.Provider

export function useTodoContext() {
    return useContext(TodoContext)
}