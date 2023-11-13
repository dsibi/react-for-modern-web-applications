function Header() {
  return (
    <nav className="teal lighten-2">
      <div className="nav-wrapper">
        <a
          href="https://dsibi.githubc.io/react-for-modern-web-applications/"
          className="brand-logo"
        >
          React Shop
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="" target="_blank">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
