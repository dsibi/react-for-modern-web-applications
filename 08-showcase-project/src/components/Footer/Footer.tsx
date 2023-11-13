function Footer() {
  return (
    <footer className="page-footer teal lighten-2">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://fortniteapi.io/"
            target="_blank"
          >
            Made with FortniteApi.io
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
