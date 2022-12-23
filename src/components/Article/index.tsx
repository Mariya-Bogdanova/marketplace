import styles from "./article.module.scss";
import { IArticle } from "../../models/IArticle";

interface IArtikleProps {
  article: IArticle;
}

function Article({
  article: {
    image,
    title,
    price,
    description,
    category,
    id,
    rating: { rate, count },
  },
}: IArtikleProps) {
  return (
    <>
      <div className={styles.article}>
        <div className={styles.imgBox}>
          <img src={image} alt="фото" />
        </div>
        <div className={styles.infoBox}>
          <div className={styles.priceBox}>
            <div>{price} ₽ </div>
            <div className={styles.oldPrice}>{(price * 2.2).toFixed(2)}</div>
          </div>
          <div>{title}</div>
        </div>
      </div>
    </>
  );
}

export default Article;
