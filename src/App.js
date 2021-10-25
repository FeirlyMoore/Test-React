import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PrBlock2 from './pr-block-2.jsx';

function ReactApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

class Hello extends React.Component{
  constructor(props){
    super()
    this.name = props.name
  }
  render(){
    return (
      <div>
        <h1>Hello, world!</h1>  
        <p>Ебала с дивами - явление крайне занимательное.</p>
      <div>
        <h2>Бубаба</h2>
        <p>Ебала с дивами - явление крайне занимательное.</p>
        <p>Ебала с дивами - явление крайне занимательное.</p>
        <p>Ебала с дивами - явление крайне занимательное.</p>
      </div>
      <section>
        <h2>Абоба</h2>
        <p>Ебала с дивами - явление крайне занимательное.</p>
        <p>Ебала с дивами - явление крайне занимательное.</p>
        <p>Ебала с дивами - явление крайне занимательное.</p>
        <p>Ебала с дивами - явление крайне занимательное.</p>
        <p>Ебала с дивами - явление крайне занимательное.</p>
        <p>Ебала с дивами - явление крайне занимательное.</p>
      </section>
      </div>
      )
  }
}

class Header extends React.Component {
  render(){
    return (
      <header className="main-header main-header--style">
      <div className="main-header__wrapper">
      </div>
      <nav className="main-nav main-nav--opened">
        <ul className="nav-list nav-list--style nav-list-index">
          <li className="nav-list__item nav-list__item-index nav-list__item--current"> аооао</li>
          <li className="nav-list__item"> ваыва</li>
          <li className="nav-list__item"> ываыва</li>
        </ul>
      </nav>
      </header>
    )
  }
}

// export default Hello;

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  }
];

function App() {
  const greeting = "greeting";
  const displayAction = false;
  return(
    <div className="container">
    <ReactApp/>
      <h1 id={greeting}>Hello, World</h1>
      {displayAction && <p>I am writing JSX</p>}
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
      <Hello />
      <Header/>
    </div>
  )
}

export default App;

// {/*<!DOCTYPE Liky> */}

// export default App;
