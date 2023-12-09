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
            UserAddress :{" "}
            <span>
              {item.buysell.slice(0, 6)} ... {item.buysell.slice(-5)}
            </span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.price}>{item.volume}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.price}>
          {item.speculatedEffect?.slice(0, 10)}
          {"  "}
          {item.speculatedEffect?.slice(11, -1)}
        </div>
      </div>
      <div className={styles.info}>-</div>
    </a>
  );
};

export default Log;
