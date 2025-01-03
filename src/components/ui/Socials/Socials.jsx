import styles from "../Socials/socials.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import InstagramIcon from "../icons/InstagramIcon";

const Socials = ({ cta }) => {
  return (
    <div className={styles.socials}>
      <p>{cta}</p>

      <div className={styles.links}>
        <NavLink
          className={styles.githubIcon}
          to="https://github.com/ryanjayleyva/"
          aria-label="Go to RJ Leyva's GitHub Profile"
          target="_blank"
        >
          <GithubIcon />
        </NavLink>

        <NavLink
          className={styles.linkedinIcon}
          to="https://linkedin.com/"
          aria-label="Go to RJ Leyva's LinkedIn Profile"
          target="_blank"
        >
          <LinkedinIcon />
        </NavLink>

        <NavLink
          className={styles.instagramIcon}
          to="https://instagram.com/slammedwigo"
          aria-label="Go to RJ Leyva's Instagram Profile"
          target="_blank"
        >
          <InstagramIcon />
        </NavLink>
      </div>
    </div>
  );
};

Socials.propTypes = {
  cta: PropTypes.string.isRequired,
};

export default Socials;
