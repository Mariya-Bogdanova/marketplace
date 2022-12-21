import React, { useState } from "react";
import styles from "./search.module.scss";

function Search() {
  const [valueSearch, setValueSearch] = useState("");

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValueSearch(e.target.value);
  }

  return (
    <>
      <div className={styles.searchBox}>
        <input
          value={valueSearch}
          type="text"
          placeholder="Я ищу..."
          className={styles.search_input}
          onChange={changeHandler}
        />
      </div>
    </>
  );
}

export default Search;
