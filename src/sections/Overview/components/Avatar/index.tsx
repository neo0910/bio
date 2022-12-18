import { FC } from 'react';

import classes from './styles.module.css';

const imageURL =
  'https://media.licdn.com/dms/image/C5603AQHmlvQsjDebXA/profile-displayphoto-shrink_400_400/0/1575453180883?e=1677110400&v=beta&t=xdklv9bmiXbAkRUY_S69gq8l4xXKoLoHv1mgh7Y-vvs';

const Avatar: FC = () => {
  return (
    <section className={classes.wrapper}>
      <img className={classes.image} src={imageURL} alt="avatar" />
      <p className={classes.name}>Denis Kalenik</p>
    </section>
  );
};

export default Avatar;
