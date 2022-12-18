import { FC } from 'react';

import { skills } from './constants';
import classes from './styles.module.css';

const Skills: FC = () => {
  return (
    <section className={classes.wrapper}>
      {skills.map((skill) => (
        <span className={classes.skill} key={skill}>
          {skill}
        </span>
      ))}
    </section>
  );
};

export default Skills;
