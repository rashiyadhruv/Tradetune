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
          <div className={styles.name}>{item.volume}</div>
          <div className={styles.sale}>
            Action : <span>{item.buysell}</span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.price}>{item.volume}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.price}>{item.speculatedEffect}</div>
      </div>
    </a>
  );
};

export default Log;
