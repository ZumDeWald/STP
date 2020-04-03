import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

import Header from './Header.js';
import Section from './Section.js';

function App() {

  const [sectionOpen, setSectionOpen] = useState('none');

  return (
    <div className={css(styles.body)}>
      <Header sectionOpen={sectionOpen} />
      <Section title='Gallery' fromTop='320px' setSectionOpen={setSectionOpen} />
      <Section title='Session Info' fromTop='385px' setSectionOpen={setSectionOpen} />
      <Section title='About' fromTop='450px' setSectionOpen={setSectionOpen} />
    </div>
  );
};

const styles = StyleSheet.create({
  body: {
    position: 'relative',
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
