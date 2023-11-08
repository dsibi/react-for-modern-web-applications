function Footer() {
  return (
    <footer className="page-footer orange darken-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://www.omdbapi.com/"
          >
            Made with The Open Movie Database
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
