import React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const Header = ({ sectionOpen }) => {
  return(
    <header className={sectionOpen==='none' ? css(styles.header, styles.headerFull) : css(styles.header, styles.headerReduced)}>
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
    marginBottom: 5,
    backgroundColor: '#000',
    backgroundImage: ' url("/img/nb/nb4_lg.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: '50% center',
    transitionDuration: '350ms',
  },
  headerFull: {
    height: 300
  },
  headerReduced: {
    height: 140
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
