import { useContext, useEffect } from "react";
import styles from "./Alert.module.css";
import { ShopContext } from "../../context";

function Alert() {
  const { alertName: name = "", closeAlert } = useContext(ShopContext);

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
