import { FC } from 'react';

import classes from './styles.module.css';

const About: FC = () => {
  return (
    <section className={classes.wrapper}>
      <div className={classes.content}>
        <h1 className={classes.header}>Hi there!</h1>
        <p className={classes.paragraph}>
          I have been working as a JavaScript developer since January 2018. I
          dealt with different projects: big and small, monolith and
          microservices, backend or frontend.
        </p>
        <p className={classes.paragraph}>
          I started my journey with Angular 4, but in less than a year (about 8
          months) I switched to Vue.js. After 1.5-2 years I was interested in
          React.js and Node.js. So, from that moment to this day my current
          stack is React.js / Node.js (Nest.js) / TypeScript.
        </p>
        <p className={classes.paragraph}>
          My native language is russian. English level is intermediate. I
          usually work in multinational teams, so this is not a problem for me.
        </p>
      </div>
    </section>
  );
};

export default About;
