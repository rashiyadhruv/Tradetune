import { useState } from "react";
import cn from "classnames";
import styles from "./Logs.module.sass";
import Tabs from "@/components/Tabs";
import Form from "@/components/Form";
import Log from "./Log";
import { useEffect } from "react";
// import { Stoploss } from "@/mocks/stoploss";
// import { highlights } from "@/mocks/highlights";
type LogsProps = {
  type: string;
};

const Logs = ({ type }: LogsProps) => {
  const [finallogs, setFinallogs] = useState([
    {
      id: 1,
      token: "ETH",
      change: "0.5532621688493791%",
      time: "1 min",
      fromto: "7:32:10 AM - 7:31:10 AM",
    },
  ]);
  const [Stoploss, setStoploss] = useState([
    {
      id: 1,
      token: "AVAX",
      soldat: 32.51968191,
      amount: "50%",
      time: "7:42:34 AM - 7:41:34 AM",
    },
  ]);
  useEffect(() => {
    const data = localStorage.getItem("highlights");
    const stoploss = localStorage.getItem("stoploss");
    if (data) {
      let d = JSON.parse(data);
      //check for duplicate entried and delete them
      let unique = d.filter(
        (
          (set) => (f) =>
            !set.has(f.change) && set.add(f.change)
        )(new Set())
      );
      setFinallogs(unique);
    }
    if (stoploss) {
      let d = JSON.parse(stoploss);
      //check for duplicate entried and delete them
      let unique = d.filter(
        (
          (set) => (f) =>
            !set.has(f.soldat) && set.add(f.soldat)
        )(new Set())
      );
      setStoploss(unique);
    }
  }, []);

  const logs = type === "stoploss" ? Stoploss : finallogs;

  return (
    <div className={styles.row}>
      <div className={styles.col}>
        <div className={styles.title}>
          {type === "stoploss" ? "Stop Loss logs" : "Highlights"}
        </div>

        <div className={styles.artists}>
          {logs.map((log, index) => (
            <Log item={log} key={index} index={index} type={type} />
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
