import { useState } from 'react';
import dataTodo from '../data/todo.json';
export default function Todos() {
  const [todo, setTodo] = useState(dataTodo);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>List todos</h1>
      <ul>
        {todo.map((e) => {
          return <li key={e.id}>{e.task} </li>;
        })}
      </ul>
    </>
  );
}
