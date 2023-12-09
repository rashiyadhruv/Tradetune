import Link from "next/link";
import styles from "./Log.module.sass";
import Image from "@/components/Image";

type LogProps = {
  item: any;
  index: number;
};

const Log = ({ item, index }: LogProps) => {
  return (
    <a className={styles.item}>
      <div className={styles.number}>
        <div className={styles.inner}>{index + 1}</div>
      </div>
      <div className={styles.artist}>
        <div className={styles.avatar}>
          <Image
            src={item.avatar}
            layout="fill"
            objectFit="cover"
            alt="Avatar"
          />
        </div>
        <div className={styles.details}>
          <div className={styles.name}>{item.token}</div>
          <div className={styles.sale}>
            Tokens invested <span>{item.amount}</span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.price}>{item.amount}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.crypto}>{item.profit}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.price}>{item.timestamp}</div>
      </div>
    </a>
  );
};

export default Log;
