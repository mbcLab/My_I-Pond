"use client";

import style from "@/styles/progress.module.css";
import { dataRef } from "@/utils/firebase";
import { limitToLast, onValue, query } from "firebase/database";
import { useEffect, useState } from "react";

export default function Clarity({ state }) {
  const [data, setData] = useState(0);

  const handleDaily = async () => {
    const ref = dataRef();
    const quer = query(ref, limitToLast(1));
    await onValue(quer, (snap) => {
      const obj = Object.values(snap.val());
      setData(obj[0].Turbinity);
    });
  };

  useEffect(() => {
    switch (state) {
      case "daily":
        handleDaily();
        break;

      case "weekly":
        break;

      case "monthly":
        break;

      default:
        break;
    }
  }, []);

  const progress = (data / 6) * 100;
  return (
    <div className={style.container} style={{}}>
      <div className={style.outer} style={{ "--progress": `${progress}%` }}>
        <div className={style.value}>{data}</div>
      </div>
    </div>
  );
}
