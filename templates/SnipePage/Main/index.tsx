import cn from "classnames";
import styles from "./Main.module.sass";
import Arrow from "@/components/Arrow";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type MainProps = {};

const Main = ({}: MainProps) => (
  <>
    <div className={styles.row}>
      <div className={styles.col}>
        <h1 className={cn("hero", styles.title)}>What is Snipe ?</h1>
        <Arrow className={styles.arrow} />
      </div>
      <div className={styles.col}>
        <div className={styles.content}>
          Snipe is your smart companion in the decentralized finance world,
          specifically designed for liquidity pools. It swiftly spots
          opportunities in these pools, ensuring your trades are timed perfectly
          to take advantage of price imbalances.
        </div>
      </div>
    </div>
  </>
);

export default Main;
