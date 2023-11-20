// import styles from "./Footer.module.css";

export default function Footer({}) {
  // return <div className={styles.footer}>Footer Component</div>;
  return (
    <footer className="page-footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://www.themealdb.com/"
            target="_blank"
          >
            Made with TheMealDB
          </a>
        </div>
      </div>
    </footer>
  );
}
