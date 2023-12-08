import styles from "./LayoutCreate.module.sass";

type LayoutCreateProps = {
  left: React.ReactNode;
  children: React.ReactNode;
};

const LayoutCreate = ({ left, children }: LayoutCreateProps) => (
  <div className={styles.col}>
    {/* <div className={styles.col}>
            <div className={styles.wrap}>{left}</div>
        </div> */}
    {children}
  </div>
);

export default LayoutCreate;
