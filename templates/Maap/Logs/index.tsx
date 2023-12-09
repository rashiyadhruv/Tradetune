import { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Logs.module.sass";
import Tabs from "@/components/Tabs";
import Form from "@/components/Form";
import Log from "./Log";

import { maap } from "@/mocks/maap";

type LogsProps = {};

const Logs = ({}: LogsProps) => {
  const [finallogs, setFinallogs] = useState(maap);
  useEffect(() => {
    let data = localStorage.getItem("MAAP_LOGS");
    console.log("asdasdad", data);
    if (data) {
      setFinallogs(JSON.parse(data));
    }
  }, []);
  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.title}> M.A.A.P. logs</div>

        <div className={styles.head}>
          <div className={styles.caption}>#</div>
          <div className={styles.caption}>Token</div>
          <div className={styles.caption}>Volume</div>
          <div className={styles.caption}>TimeStamp</div>
          <div className={styles.caption}>Speculated effect</div>
        </div>
        <div className={styles.artists}>
          {finallogs.map((log, index) => (
            <Log item={log} key={index} index={index} />
          ))}
        </div>
        <svg width="0" height="0" style={{ display: "block" }}>
          <clipPath id="polygonNumber" clipPathUnits="objectBoundingBox">
            <path d="M.396.076C.46.041.54.041.604.076l.242.129A.19.19 0 0 1 .95.371v.258a.19.19 0 0 1-.104.166L.604.924C.54.959.46.959.396.924L.154.795A.19.19 0 0 1 .05.629V.371A.19.19 0 0 1 .154.205L.396.076z" />
          </clipPath>
        </svg>
      </div>
    </div>
  );
};

export default Logs;
