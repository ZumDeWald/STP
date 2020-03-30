import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Section = ({title}) => {

  const [display, setDisplay] = useState('closed');

  const handleDisplayChange = () => {
    display === 'closed' ? setDisplay('open') : setDisplay('closed');
  }

  return(
    <section className={css(styles.section, styles[display])} onClick={handleDisplayChange}>
      <h3 className={display === 'closed' ? css(styles.heading, styles.headingC) : css(styles.heading, styles.headingO) } >{title}</h3>
    </section>
  )
};

const styles = StyleSheet.create({
  section: {
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    border: '1px solid #333',
    borderRadius: 8,
    transitionDuration: '350ms',
  },
  closed: {
    width: '90vw',
    height: 50,
    background: '#252525',
    color: '#999',
  },
  open: {
    width: '100vw',
    height: '75vh',
    background: '#fff',
    color: '#222',
  },
  heading: {
    flexShrink: 0,
    padding: 0,
    margin: 0,
    transitionDuration: '350ms',
  },
  headingC: {
    transform: 'translate3D(-100px, 10px, 0)'
  },
  headingO: {
    transform: 'translate3D(0, 0, 0)'
  },
})

export default Section;
