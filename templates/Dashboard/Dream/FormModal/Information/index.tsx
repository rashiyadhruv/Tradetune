import { useState, useContext } from "react";
import styles from "./Information.module.sass";
import Field from "@/components/Field";
import ToolContext from "context/toolContext";
type InformationProps = {};

const Information = ({}: InformationProps) => {
  const {
    stoplossPercentLow,
    setStoplossPercentLow,
    stoplossPercentToken,
    setStoplossPercentToken,
  } = useContext(ToolContext);

  return (
    <div className={styles.information}>
      <div className={styles.fieldset}>
        <Field
          className={styles.field}
          label="% of negative change observed in a min to trigger selling"
          placeholder="10%"
          value={stoplossPercentLow}
          onChange={(e: any) => setStoplossPercentLow(e.target.value)}
          required
        />
        <Field
          className={styles.field}
          label="% of tokens to be sold"
          placeholder="50%"
          value={stoplossPercentToken}
          onChange={(e: any) => setStoplossPercentToken(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default Information;
