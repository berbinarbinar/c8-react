import { useState } from 'react';

function User({ users }) {
  console.log(users);
  return (
    <>
      <ul>
        {users.map((e, idx) => {
          return <li key={idx}> {e.name}</li>;
        })}
      </ul>
    </>
  );
}
export function Counter() {
  const dataUpdateUser = [
    {
      id: 0,
      name: 'dudung',
      belajar: 'react',
      hobi: 'makan',
    },
    {
      id: 1,
      name: 'gunawan',
      belajar: 'melawak',
      hobi: 'menikah',
    },
  ];
  const [count, setCount] = useState(3);
  // jadi useState itu, untuk membuat suatu variable, yang dimana kalau misal kita perlu untuk mengupdate value dari variable yang kita buat tadi langsung di reactnya, kita perlu menggunakan useState
  const [user, setUser] = useState([
    {
      id: 0,
      name: 'icanq',
      belajar: 'react',
      hobi: 'makan',
    },
    {
      id: 1,
      name: 'sule',
      belajar: 'melawak',
      hobi: 'menikah',
    },
  ]);
  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => setCount((prevCount) => prevCount - 1);
  const updateCount = (text) => setCount(text);
  return (
    <>
      <h1>counter: {count} </h1>
      <div style={{ display: 'flex' }}>
        <button onClick={() => decrement()}>kurang 1</button>
        <button onClick={() => increment()}>tambah 1</button>
        <button onClick={() => updateCount('jadi ini')}>ubah jadi apa?</button>
      </div>

      <br />
      <User users={user} />
      <button onClick={() => setUser([...user, ...dataUpdateUser])}>
        Update user
      </button>
    </>
  );
}
