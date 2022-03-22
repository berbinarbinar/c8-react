import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import dataTodo from '../data/todo.json';

export default function Todos() {
  const [todo, setTodo] = useState(dataTodo);

  const addTodo = (userInput) => {
    let copy = [...todo];
    copy = [...copy, { id: todo.length + 1, task: userInput, complete: false }];
    setTodo(copy);
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>List todos</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todo.map((e, index) => {
          return (
            <li
              onClick={() => console.log(e.id)}
              className={e.complete ? 'strike' : ''}
              key={index}
            >
              {e.task}{' '}
            </li>
          );
        })}
      </ul>
    </>
  );
}
