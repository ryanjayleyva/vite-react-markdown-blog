import styles from "../Hero/hero.module.css";
import PropTypes from "prop-types";
import Socials from "../Socials/Socials";

const Hero = ({ author, about }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.author}>{author}</h1>

      <h2 className={styles.about}>{about}</h2>

      <Socials cta="Stay Connected" />
    </div>
  );
};

Hero.propTypes = {
  author: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

export default Hero;
