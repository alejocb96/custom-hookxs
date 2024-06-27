import {useReducer, useEffect} from 'react';
import {TodoReducer} from '../08-UseReduce/TodoReducer';





const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

}

export const UseTodo = () => {
  

    const [todos, dispatch] = useReducer(TodoReducer, [], init);

    useEffect(() => {
      
    localStorage.setItem('todos', JSON.stringify( todos ))  // || [] esta negacion la usariamos por si el json viene//
      
    }, [todos]);

    const pendingsCount = (id) => {
        dispatch({
            type: '[TODO toggle todo]',
            payload: id,
        });
    }  


    const todosCount = (todo) => {
      let action = {
        type: '[TODO] count todo',
        payload: todo,
      }
      dispatch(action);
    }

    const handleNewTodo = (todo) => {
      let  action = {
          type: '[TODO] add todo',
          payload: todo,
      }
      dispatch(action);
    }
    
    const handleDeleteTodo = (id) => {
      dispatch({
          type: '[TODO] Remove todo',
          payload: id,
      })
    }

    const handleToggleTodo = (id) => {
      dispatch({
          type: '[TODO toggle todo]',
          payload: id,
      })
    }
  
  

    return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingsCount: todos.filter(todo => !todo.done).length,
    }
}
