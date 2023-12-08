import { useRef, useState } from "react";
import cn from "classnames";
import styles from "./SettingsPage.module.sass";
import Layout from "@/components/Layout";
import Icon from "@/components/Icon";
import Upload from "./Upload";
import Information from "./Information";
import Wallet from "./Wallet";
import Notification from "./Notification";

const SettingsPage = () => {
    const scrollToRefProfile = useRef<any>(null);
    const scrollToRefWallet = useRef<any>(null);
    const scrollToRefNotification = useRef<any>(null);
    const [active, setActive] = useState<any>(scrollToRefProfile);

    const menu = [
        {
            title: "Profile",
            anchor: scrollToRefProfile,
        },
        {
            title: "Wallet",
            anchor: scrollToRefWallet,
        },
        {
            title: "Notification",
            anchor: scrollToRefNotification,
        },
    ];

    const handleClick = (anchor: any) => {
        anchor.current.scrollIntoView({
            behavior: "smooth",
        });
        setActive(anchor);
    };

    return (
        <Layout layoutNoOverflow footerHide>
            <div className={styles.row}>
                <div className={styles.col}>
                    <div className={styles.wrap}>
                        <div className={styles.head}>
                            <div className={cn("h1", styles.title)}>
                                Settings
                            </div>
                            <button
                                className={cn("button-large", styles.button)}
                            >
                                <span>Save</span>
                                <Icon name="check" />
                            </button>
                        </div>
                        <div className={styles.menu}>
                            {menu.map((link, index) => (
                                <button
                                    className={cn("h4", styles.link, {
                                        [styles.active]: link.anchor === active,
                                    })}
                                    key={index}
                                    onClick={() => handleClick(link.anchor)}
                                >
                                    {link.title}
                                    <Icon name="arrow-right" />
                                </button>
                            ))}
                        </div>
                        <Upload />
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.section}>
                        <div
                            className={styles.anchor}
                            ref={scrollToRefProfile}
                        ></div>
                        <div className={styles.label}>information</div>
                        <Information />
                    </div>
                    <div className={styles.section} id="wallet">
                        <div
                            className={styles.anchor}
                            ref={scrollToRefWallet}
                        ></div>
                        <div className={styles.label}>wallet</div>
                        <Wallet />
                    </div>
                    <div className={styles.section}>
                        <div
                            className={styles.anchor}
                            ref={scrollToRefNotification}
                        ></div>
                        <div className={styles.label}>notification</div>
                        <Notification />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SettingsPage;
