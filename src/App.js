import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from './logo.svg';

function App() {
  return (
    <div className={css(styles.body)}>
      <img src={logo} alt="logo" />
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
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#222",
    color: "#fff",
    width: '100vw',
    height: '100vh',
  }
})

export default App;
