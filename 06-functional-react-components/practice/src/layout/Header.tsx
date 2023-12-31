function Header() {
  return (
    <nav className="#ef6c00 orange darken-3">
      <div className="nav-wrapper">
        <a
          href="https://dsibi.githubc.io/react-for-modern-web-applications/"
          className="brand-logo"
        >
          React Movies
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="https://github.com/dsibi/react-for-modern-web-applications/tree/gh-pages">
              Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
