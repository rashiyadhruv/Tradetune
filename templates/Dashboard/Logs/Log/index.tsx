import Link from "next/link";
import styles from "./Log.module.sass";
import Image from "@/components/Image";
import { type } from "os";

type LogProps = {
  item: any;
  index: number;
  type: string;
};

const Log = ({ item, index, type }: LogProps) => {
  return (
    <a className={styles.item}>
      <div className={styles.number}>
        <div className={styles.inner}>{index + 1}</div>
      </div>
      <div className={styles.artist}>
        <div className={styles.details}>
          {type == "stoploss" ? (
            <>
              <div className={styles.text}>
                Sold{" "}
                <span>
                  {item.amount}
                  {item.token}
                </span>{" "}
                at <span>{item.soldat}</span> on <span>{item.time}</span>{" "}
              </div>
            </>
          ) : (
            <div className={styles.text}>
              Price of <span>{item.token}</span> changed by{" "}
              <span>{item.change}</span> in <span>{item.time}</span> in between{" "}
              <span>{item.fromto}</span>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default Log;
