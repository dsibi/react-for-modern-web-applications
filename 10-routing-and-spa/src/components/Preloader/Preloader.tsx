// import styles from "./Preloader.module.css";

export default function Preloader({}) {
  // return <div className={styles.preloader}>Preloader Component</div>;
  return (
    <div className="progress">
      <div className="indeterminate teal lighten-2"></div>
    </div>
  );
}
