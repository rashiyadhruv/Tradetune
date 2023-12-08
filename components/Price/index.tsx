import Link from "next/link";
import cn from "classnames";
import styles from "./Price.module.sass";
import Field from "@/components/Field";

type PriceProps = {
  title: any;
  price?: string;
  value?: any;
  setValue?: any;
  placeholder?: any;
  crypterFee?: string;
  percent?: string;
  totalReceive?: string;
  onClick?: () => void;
  buttonText: string;
  content: any;
};

const Price = ({
  title,
  price,
  value,
  setValue,
  placeholder,
  crypterFee,
  percent,
  totalReceive,
  onClick,
  buttonText,
  content,
}: PriceProps) => (
  <div className={styles.price}>
    <div className={styles.body}>
      <div className={styles.title}>{title}</div>
      <div className={styles.wrap}>
        {price ? (
          <div className={styles.flex}>
            <div className={cn("h3", styles.price)}>{price}</div>
            <div className={cn("h3", styles.currency)}>ETH</div>
          </div>
        ) : (
          <div className={styles.box}>
            <Field
              className={styles.field}
              inputClassName={styles.input}
              placeholder={placeholder || "0.00"}
              value={value}
              onChange={(e: any) => setValue(e.target.value)}
              large
              required
            />
            <div className={cn("h3", styles.currency)}>ETH</div>
          </div>
        )}
        {crypterFee && (
          <div className={styles.line}>
            <div className={styles.label}>Tradetune fee</div>
            <div className={styles.value}>{crypterFee}</div>
          </div>
        )}
        {totalReceive && (
          <div className={styles.line}>
            <div className={styles.label}>Total receive</div>
            <div className={styles.percent}>{percent}</div>
            <div className={styles.value}>{totalReceive}</div>
          </div>
        )}
      </div>
      {onClick ? (
        <button
          className={cn("button-large button-wide", styles.button)}
          onClick={onClick}
        >
          {buttonText}
        </button>
      ) : (
        <Link href="/congrats">
          <a className={cn("button-large button-wide", styles.button)}>
            {buttonText}
          </a>
        </Link>
      )}
    </div>
    <div className={styles.content}>{content}</div>
  </div>
);

export default Price;
