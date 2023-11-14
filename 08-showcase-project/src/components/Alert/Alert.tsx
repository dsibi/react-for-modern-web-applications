import { useEffect } from "react";
import styles from "./Alert.module.css";

function Alert({ name = "", closeAlert }:IAlert) {
  useEffect(() => {
    const timerID = setTimeout(closeAlert, 3000);
    return () => {
      clearTimeout(timerID);
    };
  }, [name]);

  return (
    <div className={styles.alert} id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}

export default Alert;
