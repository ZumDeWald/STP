import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Section = ({ title, fromTop, setSectionOpen}) => {

  const [display, setDisplay] = useState('closed');

  const handleDisplayChange = () => {
    display === 'closed' ? setDisplay('open') : setDisplay('closed');
    display === 'closed' ? setSectionOpen(title) :  setSectionOpen('none');
  };

  return(
    <section className={css(styles.section, styles[display])} onClick={handleDisplayChange} style={{ top: `${display === 'open' ? '150px' : fromTop}`,  zIndex:`${display === 'open' ? 5 : 2}` }}>
      <h3 className={css(styles.heading)} >{title}</h3>
    </section>
  )
};

const styles = StyleSheet.create({
  section: {
    position: 'absolute',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
    background: '#252525',
    color: '#999',
    border: '1px solid #333',
    borderRadius: 8,
    transitionDuration: '350ms',
    zIndex: 2,
  },
  closed: {
    width: '90vw',
    height: 50,
  },
  open: {
    width: '100vw',
    height: '75vh',
  },
  heading: {
    position: 'absolute',
    top: 10,
    left: 10,
    flexShrink: 0,
    padding: 0,
    margin: '0 0 0 10px',
    transitionDuration: '350ms',
  },
})

export default Section;
