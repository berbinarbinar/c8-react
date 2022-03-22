import { useState } from 'react';

const TodoForm = (props) => {
  const { addTodo } = props;
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (event) => {
    console.log(userInput);
    // biar prevent default behavior dari event ketika disubmit dia pasti akan reload pages, maka dari itu kita perlu masukin event.preventDefault biar apa? biar dia gak ngereload
    event.preventDefault();

    // addTodonya
    addTodo(userInput);

    // buat reset si form field
    setUserInput('');
  };

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  return (
    <div style={{ alignItems: 'center' }}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='todo'
          placeholder='tambah todo'
          value={userInput}
          onChange={handleChange}
        />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
