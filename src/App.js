import React from 'react';
import './App.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <Text />
      </>
    )
  }
}

function Word({ title }) {
  const splittedTitle = title.split(' ')

  return (
    <ol>
      {
        splittedTitle.map((e, index) => (
          <li key={index} onClick={() => console.log(index)}>{e}</li>
        ))
      }
    </ol>
  )
}

function Text({ title }) {
  if (!title) return <h1>tidak ada title</h1>
  return (
    <Word title={title} />
  )
}

function Title({ title, lorem, dolor }) {
  return (
    <>
      <Text title={title} />
      <h2>{lorem}</h2>
      <h3>{dolor}</h3>
    </>
  );
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Header />
        <Title
          title='Hello world!!'
          lorem='ipsum'
          dolor='sit amet'
          yaudah='iya deh'
        />
      </header>
    </div>
  );
}

export default App;
