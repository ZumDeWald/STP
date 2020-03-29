import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return(
    <header className={css(styles.header)}>
      <div className={css(styles.imgContainer)}>
        <img className={css(styles.img)} src="/img/logo_white.png" alt="Stacy Thompson Logo" />
      </div>
    </header>
  )
};

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: 300,
    marginBottom: 30,
    backgroundColor: '#000',
    backgroundImage: ' url("/img/nb/nb4_lg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '50% center',
    transitionDuration: '200ms',
  },
  imgContainer: {
    position: 'absolute',
    width: '100vw',
    bottom: '0',
    left: '0',
    backgroundImage: 'linear-gradient(transparent 20%, #222)'
  },
  img: {
    width: '15em',
  }
});

export default Header;
