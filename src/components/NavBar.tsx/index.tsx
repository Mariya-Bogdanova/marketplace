import { Link } from "react-router-dom";
import styles from "./navbar.module.scss";

function NavBar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/">Адреса</Link>
        <Link to="/">Войти</Link>
        <Link to="/">Корзина</Link>
      </nav>
    </>
  );
}

export default NavBar;
