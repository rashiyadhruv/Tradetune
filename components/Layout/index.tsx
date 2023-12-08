import { useEffect } from "react";
import { useRouter } from "next/router";
import { enablePageScroll, clearQueueScrollLocks } from "scroll-lock";
import Head from "next/head";
import cn from "classnames";
import styles from "./Layout.module.sass";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type LayoutProps = {
  layoutNoOverflow?: boolean;
  classHeader?: string;
  headerHide?: boolean;
  noRegistration?: boolean;
  lightHeader?: any;
  emptyHeader?: boolean;
  footerHide?: boolean;
  background?: string;
  children: React.ReactNode;
};

const Layout = ({
  layoutNoOverflow,
  classHeader,
  noRegistration,
  headerHide,
  lightHeader,
  emptyHeader,
  footerHide,
  background,
  children,
}: LayoutProps) => {
  const { pathname } = useRouter();

  useEffect(() => {
    clearQueueScrollLocks();
    enablePageScroll();
  }, [pathname]);

  return (
    <>
      <Head>
        <title>Tradetune </title>
      </Head>
      <div
        className={cn(styles.layout, {
          [styles.noOverflow]: layoutNoOverflow,
        })}
        style={{ backgroundColor: background }}
      >
        {!headerHide && (
          <Header
            className={classHeader}
            noRegistration={noRegistration}
            light={lightHeader}
            empty={emptyHeader}
          />
        )}
        <div className={styles.inner}>{children}</div>
        {!footerHide && <Footer />}
      </div>
    </>
  );
};

export default Layout;
