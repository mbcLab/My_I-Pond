"use client";

import style from "@/styles/progress.module.css";
import { dataRef } from "@/utils/firebase";
import { limitToLast, onValue, query } from "firebase/database";
import { useEffect, useState } from "react";

export default function temperature({ state }) {
  const [data, setData] = useState(0);

  const handleDaily = async () => {
    const ref = dataRef();
    const quer = query(ref, limitToLast(1));
    await onValue(quer, (snap) => {
      const obj = Object.values(snap.val());
      setData(obj[0].Temperature);
    });
  };

  useEffect(() => {
    switch (state) {
      case "daily":
        handleDaily();
        break;

      default:
        break;
    }
  }, []);

  return (
    <div className={style.container} style={{}}>
      <div className={style.outer} style={{ "--progress": `${data}%` }}>
        <div className={style.value}>{Math.round(data)}℃</div>
      </div>
    </div>
  );
}
