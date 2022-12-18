import { FC } from 'react';

import classes from './styles.module.css';
import About from './components/About';
import Avatar from './components/Avatar';
import Skills from './components/Skills';

const Overview: FC = () => {
  return (
    <section className={classes.wrapper}>
      <Avatar />
      <About />
      <Skills />
    </section>
  );
};

export default Overview;
