import { useState, useEffect } from "react";
import Article from "../../components/Article";
import axios from "axios";
import styles from "./catalog.module.scss";

function Catalog() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    async function getCatalog() {
      const response = await axios("https://fakestoreapi.com/products");
      setCatalog(response.data);
    }
    getCatalog();
  }, []);
  console.log(111, catalog);

  return (
    <div className={styles.catalogList}>
      {catalog.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
}

export default Catalog;
