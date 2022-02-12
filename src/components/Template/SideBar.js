import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Youming Zhang</h2>
        <p><a href="mailto:youmingzhang19@gmail.com">youmingzhang19@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Youming. I am a programmer and a maker.
        I am a <a href="https://itp.nyu.edu/">NYU ITP</a> graduate, <a href="https://cs.umd.edu/">UMD CS</a> Alumni. Before ITP, I was
        at <a href="https://www.hughes.com/">Hughes </a>
        and <a href="http://arclab.isr.umd.edu/">ARC Lab</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Youming Zhang <Link to="/"></Link></p>
    </section>
  </section>
);

export default SideBar;
