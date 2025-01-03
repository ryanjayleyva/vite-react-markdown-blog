import styles from "../Header/header.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import ThemeSwitcher from "../theming/ThemeSwitcher";

const Header = ({ home }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <b>
          <NavLink to="/"> {home} </NavLink>
        </b>

        <div>
          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  home: PropTypes.string.isRequired,
};

export default Header;
