import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import dataTodo from '../data/todo.json';

export default function Todos() {
  const [todo, setTodo] = useState(dataTodo);

  const handleComplete = (id) => {
    let mappedTodo = todo.map((t) => {
      return t.id === Number(id) ? { ...t, complete: !t.complete } : { ...t };
    });
    setTodo(mappedTodo);
  };

  const addTodo = (userInput) => {
    let copy = [...todo];
    copy = [...copy, { id: todo.length + 1, task: userInput, complete: false }];
    setTodo(copy);
    // perubahan data pasti di handle dari bagian backend, maka dari itu ini kita hanya coba untuk mock datanya aja
    // fs.writeFileSync('../data/todo.json', copy, 'utf-8');
  };

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>List todos</h1>
      <TodoForm addTodo={addTodo} />
      <ul>
        {todo.map((e, index) => {
          return (
            <li
              onClick={() => handleComplete(e.id)}
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
