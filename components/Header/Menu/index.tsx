import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import cn from "classnames";
import styles from "./Menu.module.sass";
import Modal from "@/components/Modal";
import NavLink from "@/components/NavLink";
import Icon from "@/components/Icon";
import Search from "../Search";

const socials = [
  {
    icon: "instagram-fat",
    url: "https://www.instagram.com/",
  },
  {
    icon: "twitter-fat",
    url: "https://twitter.com",
  },
  {
    icon: "facebook-fat",
    url: "https://www.facebook.com/",
  },
  {
    icon: "linkedin-fat",
    url: "https://www.linkedin.com/company",
  },
];

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
    title: "M.A.A.P",
    url: "/maap",
  },
];

type MenuProps = {
  classBurger?: string;
  resultSearch?: any;
};

const Menu = ({ classBurger, resultSearch }: MenuProps) => {
  const [visibleMenu, setVisibleMenu] = useState<boolean>(false);

  const isTablet = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  return (
    <>
      <button
        className={cn(styles.burger, classBurger)}
        onClick={() => setVisibleMenu(true)}
      ></button>
      <Modal
        className={styles.modal}
        closeClassName={styles.close}
        visible={visibleMenu}
        onClose={() => setVisibleMenu(false)}
      >
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={cn("h1", styles.title)}>Join our community</div>
            <div className={styles.socials}>
              {socials.map((social, index) => (
                <a
                  className={styles.social}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <Icon name={social.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.col}>
            {isTablet && (
              <Search className={styles.search} result={resultSearch} />
            )}
            <div className={styles.menu}>
              {menu.map((link, index) => (
                <NavLink
                  className={cn(styles.link)}
                  activeClassName={styles.active}
                  href={link.url}
                  key={index}
                >
                  {link.title}
                </NavLink>
              ))}
            </div>
            <div className={cn("h4", styles.info)}>Contact Us</div>
            <div className={styles.btns}>
              <a
                className={cn("button", styles.button)}
                href="mailto: rashiyadhruv@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Gmail</span>
                <Icon name="email" />
              </a>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Menu;
