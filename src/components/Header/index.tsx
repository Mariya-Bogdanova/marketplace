import Title from "../Title.tsx";
import Search from "../Search.tsx";
import NavBar from "../NavBar.tsx";
import styles from "./header.module.scss";

function Header() {
  return (
    <>
      <header className={styles.header}>
        <Title />
        <Search />
        <NavBar />
      </header>
    </>
  );
}

export default Header;
