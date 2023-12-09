import { useContext, useEffect, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import Link from "next/link";
import cn from "classnames";
import styles from "./Header.module.sass";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Modal from "@/components/Modal";
import ConnectWallet from "@/components/ConnectWallet";
import Menu from "./Menu";
import ToolContext from "context/toolContext";
import { resultSearch } from "@/mocks/resultSearch";

const menu = [
  {
    title: "Snipe",
    url: "/snipe",
  },
  {
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    title: "M.A.A.P.",
    url: "/maap",
  },
];

type HeaderProps = {
  className?: string;
  noRegistration?: boolean;
  light?: boolean;
  empty?: boolean;
};

const Header = ({ className, noRegistration, light, empty }: HeaderProps) => {
  const [visibleProfile, setVisibleProfile] = useState<boolean>(false);
  const [connect, setConnect] = useState<boolean>(false);
  const [registration, setRegistration] = useState<boolean>(false);
  useHotkeys("esc", () => setVisibleProfile(false));

  const { connectWallet, checkIfWalletIsConnect, currentAccount } =
    useContext(ToolContext);
  useEffect(() => {
    let result = checkIfWalletIsConnect();
    if (result) {
      setRegistration(true);
    }
  });
  const handleClick = () => {
    setConnect(false);
    setRegistration(true);
  };

  return (
    <>
      <header
        className={cn(
          styles.header,
          {
            [styles.profileOpen]: visibleProfile,
            [styles.light]: visibleProfile || light,
            [styles.empty]: empty,
            [styles.noRegistration]: noRegistration,
          },
          className
        )}
      >
        <>
          <div className={styles.col}>
            <Logo className={styles.logo} light={visibleProfile || light} />
          </div>
          <div className={styles.col}>
            <div className={styles.navigation}>
              {menu.map((link, index) => (
                <Link href={link.url} key={index}>
                  <a className={styles.link}>{link.title}</a>
                </Link>
              ))}
            </div>

            <button
              className={cn(
                "button-stroke button-medium",
                styles.button,
                styles.connect
              )}
              onClick={() => (registration ? " " : setConnect(true))}
            >
              {registration
                ? currentAccount.toString().slice(0, 6) +
                  "..." +
                  currentAccount.toString().slice(-4)
                : "connect wallet"}
            </button>
            <Link href="/notification">
              <a className={cn(styles.notification, styles.active)}>
                <Icon name="flash" />
              </a>
            </Link>
            <Menu classBurger={styles.burger} resultSearch={resultSearch} />
          </div>
        </>
      </header>

      <Modal
        className={styles.modal}
        closeClassName={styles.close}
        visible={connect}
        onClose={() => setConnect(false)}
      >
        <ConnectWallet
          onClickLogo={() => setConnect(false)}
          onContinue={handleClick}
        />
      </Modal>
    </>
  );
};

export default Header;
