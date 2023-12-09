import Arrow from "@/components/Arrow";
import styles from "./FormModal.module.sass";
import Logo from "@/components/Logo";
import Information from "./Information";
import { useState, useContext } from "react";
import cn from "classnames";
import ToolContext from "context/toolContext";
type FormModalProps = {
  onSuccess: any;
};

const FormModal = ({ onSuccess }: FormModalProps) => {
  const [email, setEmail] = useState("");
  const {
    snipeFund,
    setSnipeFund,
    snipeProfit,
    setSnipeProfit,
    snipeChain,
    setSnipeChain,
  } = useContext(ToolContext);

  const handleClick = () => {
    if (snipeFund !== null && snipeProfit !== null && snipeChain !== null) {
      console.log(snipeFund, snipeProfit, snipeChain);
      alert("Sniping started");
      onSuccess();
    } else {
      alert("Please fill all the fields");
    }
  };

  return (
    <div className={styles.row}>
      <div
        className={styles.col}
        style={{
          backgroundColor: "#BCE6EC",
        }}
      >
        <Logo className={styles.logo} />
        <div className={styles.line}>
          <h1 className={cn("h1", styles.title)}>Configure Sniping</h1>
          <Arrow className={styles.arrow} color="#F7FBFA" />
        </div>
        <div className={styles.info}></div>
      </div>
      <div className={styles.col}>
        <div className={styles.section}>
          <Information />
        </div>
        <div
          className={cn("button-white", styles.button)}
          onClick={() => {
            handleClick();
          }}
        >
          Start Sniping
        </div>
      </div>
    </div>
  );
};

export default FormModal;
