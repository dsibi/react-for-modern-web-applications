import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo right">
          Logo
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
