import styles from "./Details.module.sass";

type DetailsProps = {
    collection: string;
    price: string;
    reserve: string;
};

const Details = ({ collection, price, reserve }: DetailsProps) => (
    <div className={styles.details}>
        <div className={styles.item}>
            <div className={styles.category}>Collection</div>
            <div className={styles.value}>{collection}</div>
        </div>
        <div className={styles.item}>
            <div className={styles.category}>Buy now</div>
            <div className={styles.value}>{price}</div>
        </div>
        <div className={styles.item}>
            <div className={styles.category}>Reserve</div>
            <div className={styles.value}>{reserve}</div>
        </div>
    </div>
);

export default Details;
