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
        <h1 className={cn("hero", styles.title)}>What is M.A.A.P. ?</h1>
        <Arrow className={styles.arrow} />
      </div>
      <div className={styles.col}>
        <div className={styles.content}>
          Movement Analysis And Prediction (M.A.A.P.) is a tool that helps you
          to analyze the movement of the whales in the market and predict the
          the effect of their movement on the price of the token.
        </div>
      </div>
    </div>
  </>
);

export default Main;
