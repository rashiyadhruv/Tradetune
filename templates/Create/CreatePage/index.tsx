import Link from "next/link";
import cn from "classnames";
import styles from "./CreatePage.module.sass";
import Layout from "@/components/Layout";
import LayoutCreate from "@/components/LayoutCreate";
import Arrow from "@/components/Arrow";
import Icon from "@/components/Icon";
import { useContext, useState } from "react";
import ToolContext from "context/toolContext";

const CreatPage = () => {
  const { currentAccount } = useContext(ToolContext);

  const [bots, setBots] = useState([
    {
      id: 1,
      type: "snipping",
      name: "Snipping bot",
      description: "discription ...",
      useraddress: currentAccount,
      DeployedTime: "2021-09-01 12:00:00",
      profits: "0.0001 ETH",
    },
    {
      id: 2,
      type: "trading",
      name: "Trading bot",
      description: "discription ...",
      useraddress: currentAccount,
      DeployedTime: "2021-09-01 12:00:00",
      profits: "0.00008 ETH",
    },
    {
      id: 3,
      type: "xyz",
      name: "XYZ bot",
      description: "discription ...",
      useraddress: currentAccount,
      DeployedTime: "2021-09-01 12:00:00",
      profits: "0.00005 ETH",
    },
    {
      id: 3,
      type: "xyz",
      name: "XYZ bot",
      description: "discription ...",
      useraddress: currentAccount,
      DeployedTime: "2021-09-01 12:00:00",
      profits: "0.00005 ETH",
    },
    {
      id: 3,
      type: "xyz",
      name: "XYZ bot",
      description: "discription ...",
      useraddress: currentAccount,
      DeployedTime: "2021-09-01 12:00:00",
      profits: "0.00005 ETH",
    },
  ]);

  return (
    <Layout layoutNoOverflow noRegistration>
      <LayoutCreate
        left={
          <>
            <div className={cn("h1", styles.title)}>
              Create on <br></br>Tradetune.
            </div>
            <Arrow className={styles.arrow} />
            <div className={styles.content}>
              We are laying the groundwork for web3 — the next generation of the
              internet full of limitless possibilities. Join the millions of
              creators, collectors, and curators who are on this journey with
              you.
            </div>
          </>
        }
      >
        <div className={styles.head}>
          <div className={styles.subtitle}>Create Bots</div>
          <div className={styles.counter}>3</div>
        </div>
        <div className={styles.row}>
          <Link href="/create/step-1">
            <a className={styles.add}>
              <div className={styles.plus}></div>
              <div className={styles.info}>Snipping bot</div>
              <div className={styles.text}>discription ...</div>
            </a>
          </Link>
          <Link href="/create/step-1">
            <a className={styles.add}>
              <div className={styles.plus}></div>
              <div className={styles.info}>Trading bot</div>
              <div className={styles.text}>discription ...</div>
            </a>
          </Link>
          <Link href="/create/step-1">
            <a className={styles.add}>
              <div className={styles.plus}></div>
              <div className={styles.info}>XYZ bot</div>
              <div className={styles.text}>discription ...</div>
            </a>
          </Link>
        </div>
        <div className={styles.list}>
          <div className={styles.head}>
            <div className={styles.subtitle}>Deployed Bots</div>
            <div className={styles.counter}>{bots.length}</div>
          </div>
          {bots.map((x) => (
            <div className={styles.item} key={x.id}>
              <div className={styles.preview}>
                <Icon name="picture" />
              </div>
              <div className={styles.lines}>
                <div className={styles.text}>{x.name}</div>
                <div className={styles.text}>{x.DeployedTime}</div>
                <div className={styles.text}>{x.profits}</div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.foot}>
          <Link href="/article">
            <a className={styles.link}>Learn about Collection on Tradetune</a>
          </Link>
        </div>
      </LayoutCreate>
    </Layout>
  );
};

export default CreatPage;
