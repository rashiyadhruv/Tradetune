import { useState } from "react";
import cn from "classnames";
import styles from "./ChooseWallet.module.sass";
import Icon from "@/components/Icon";
import Image from "@/components/Image";

const tabs = ["Ethereum"];

const wallets = [
  {
    title: "MetaMask",
    image: "/images/meta-mask.svg",
  },
  {
    title: "WalletConnect",
    image: "/images/wallet-connect.svg",
  },
  {
    title: "Coinbase Wallet",
    image: "/images/coin-base.svg",
  },
  {
    title: "MyEtherWallet",
    image: "/images/my-ether-wallet.svg",
  },
];

type ChooseWalletProps = {
  onScan?: () => void;
  onClickWallet?: () => void;
};

const ChooseWallet = ({ onScan, onClickWallet }: ChooseWalletProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={styles.choose}>
      <div className={cn("h3", styles.title)}>Choose the wallet</div>
      <div className={styles.head}>
        <div className={styles.tabs}>
          {tabs.map((item, index) => (
            <button
              className={cn(styles.tab, {
                [styles.active]: activeIndex === index,
              })}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className={styles.wallets}>
        {wallets.map((wallet, index) => (
          <button className={styles.wallet} key={index} onClick={onClickWallet}>
            <span className={styles.inner}>
              <span className={styles.icon}>
                <Image src={wallet.image} width={40} height={40} alt="Wallet" />
              </span>
              {wallet.title} <Icon name="arrow-right" />
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChooseWallet;
