import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Header from './Header.js';
import Section from './Section.js';

function App() {
  return (
    <div className={css(styles.body)}>
      <Header />
      <Section title='Gallery' />
      <Section title='Session Info' />
      <Section title='About' />
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: "#222",
    color: "#fff",
    width: '100vw',
    height: '100vh',
    transitionDuration: '300ms',
    overflow: 'hidden',
  }
});

export default App;
