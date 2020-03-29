import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Section = () => {
  return(
    <section className={css(styles.section)}>
    </section>
  )
};

const styles = StyleSheet.create({
  section: {
    width: '90vw',
    height: 50,
    marginBottom: 10,
    background: '#252525',
    border: '1px solid #333',
    borderRadius: 5,
  }
})

export default Section;
