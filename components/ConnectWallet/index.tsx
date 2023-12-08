import { useContext, useState } from "react";
import cn from "classnames";
import styles from "./ConnectWallet.module.sass";
import Logo from "@/components/Logo";
import Arrow from "@/components/Arrow";
import Icon from "@/components/Icon";
import ChooseWallet from "./ChooseWallet";
import ScanToConnect from "./ScanToConnect";
import Message from "./Message";
import ToolContext from "context/toolContext";
type ConnectWalletProps = {
  onClickLogo?: any;
  onContinue?: any;
};

const ConnectWallet = ({ onClickLogo, onContinue }: ConnectWalletProps) => {
  const [cookies, setCookies] = useState<boolean>(false);
  const [scan, setScan] = useState<boolean>(false);
  const [message, setMessage] = useState<boolean>(false);

  const { connectWallet } = useContext(ToolContext);

  return (
    <div className={styles.row}>
      <div
        className={styles.col}
        style={{
          backgroundColor:
            (scan && "#B9A9FB") || (message && "#DBFF73") || "#BCE6EC",
        }}
      >
        <Logo className={styles.logo} onClick={onClickLogo} />
        <div className={styles.line}>
          <h1 className={cn("h1", styles.title)}>Connect wallet.</h1>
          <Arrow className={styles.arrow} color="#F7FBFA" />
        </div>
        <div className={styles.info}>
          {message
            ? "Sign the message in your wallet to continue"
            : "Choose how you want to connect. There are several wallet providers."}
        </div>
      </div>
      <div className={styles.col}>
        {message ? (
          <>
            <button
              className={cn("button-circle", styles.back)}
              onClick={() => setMessage(false)}
            >
              <Icon name="arrow-left" />
            </button>
            <Message onContinue={onContinue} />
          </>
        ) : scan ? (
          <></>
        ) : (
          <ChooseWallet
            onScan={() => setScan(true)}
            onClickWallet={() => {
              setMessage(true);
              connectWallet();
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ConnectWallet;
