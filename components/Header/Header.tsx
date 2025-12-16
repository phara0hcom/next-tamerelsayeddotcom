import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <img
          src="/images/Round_logo_250x250.png"
          alt="Logo"
          srcSet="/images/Round_logo_150x150.png 150w, /images/Round_logo_250x250.png 250w"
          sizes="(max-width: 75em) 2vw, (max-width: 37.5em) 2vw, 45px"
          className={styles.logo}
        />
      </div>
      <div className={styles.textBox}>
        <h1 className="heading-primary">
          <span className="heading-primary--main">Tamer</span>
          <span className="heading-primary--main">Elsayed</span>
          <span className="heading-primary--sub">Web-Developer</span>
        </h1>

        <AnchorLink href="#section-about" className="btn btn--white btn--animated">
          About me
        </AnchorLink>
      </div>
    </header>
  );
};

export default Header;
