import cn from "classnames";
import styles from "./Toggle.module.sass";

type ToggleProps = {
    className?: string;
    value: any;
    onChange: any;
};

const Toggle = ({ className, value, onChange }: ToggleProps) => (
    <label className={cn(styles.toggle, className)}>
        <input
            className={styles.input}
            type="checkbox"
            value={value}
            onChange={onChange}
            checked={value}
        />
        <span className={styles.inner}></span>
    </label>
);

export default Toggle;
