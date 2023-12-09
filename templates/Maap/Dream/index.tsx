import cn from "classnames";
import styles from "./Dream.module.sass";
import Image from "@/components/Image";

type DreamProps = {};

const Dream = ({}: DreamProps) => {
  return (
    <div className={styles.dream}>
      <div className={styles.wrap}>
        <div className={styles.details}>
          <div className={styles.item}>
            <div className={styles.avatar}>
              <Image
                src="/images/artists/artist-1.jpg"
                layout="fill"
                objectFit="cover"
                alt="Avatar"
              />
            </div>
            @randomdash
          </div>
          <div className={styles.item}>
            <div className={styles.image}>
              <Image
                src="/images/escape.jpg"
                layout="fill"
                objectFit="cover"
                alt="Avatar"
              />
            </div>
            Escape
          </div>
        </div>
        <div className={cn("h2", styles.title)}>
          How MAAP helps you as a trader ?
        </div>
        <div className={styles.line}>
          <div className={styles.box}>
            <div className={cn("h4", styles.price)}>
              It tracks the whales in the crypto trading market and predicts how
              their movement will affect the prizes of that token and other
              tokens in the market , giving you an edge.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.preview}>
        <Image
          src="/images/balls.jpg"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          alt="Avatar"
        />
      </div>
    </div>
  );
};

export default Dream;
