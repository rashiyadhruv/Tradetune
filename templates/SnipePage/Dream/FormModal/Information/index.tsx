import { useState, useContext } from "react";
import styles from "./Information.module.sass";
import Field from "@/components/Field";
import ToolContext from "context/toolContext";
type InformationProps = {};

const Information = ({}: InformationProps) => {
  const {
    snipeFund,
    setSnipeFund,
    snipeProfit,
    setSnipeProfit,
    snipeChain,
    setSnipeChain,
  } = useContext(ToolContext);

  return (
    <div className={styles.information}>
      <div className={styles.fieldset}>
        <Field
          className={styles.field}
          label="Value of tokens to be invested ( write value in terms of ETH )"
          value={snipeFund}
          placeholder="0.1"
          onChange={(e: any) => setSnipeFund(e.target.value)}
          required
        />
        <Field
          className={styles.field}
          label="% of profit desired ( write in multiple of 10 )"
          placeholder="1000"
          value={snipeProfit}
          onChange={(e: any) => setSnipeProfit(e.target.value)}
          required
        />
        <Field
          className={styles.field}
          label="Chain"
          placeholder="Chain"
          value={snipeChain}
          onChange={(e: any) => setSnipeChain(e.target.value)}
          required
        />
      </div>
    </div>
  );
};

export default Information;
