function Footer() {
  return (
    <footer>
      <div className="column">
        <p>
          <b>Desarrollador</b>
        </p>
        <address>
          <a href="https://github.com/JoseAramayo">José Aramayo</a>
        </address>
      </div>
      <hr />
      <div className="column">
        <p>
          <b>Versión</b>
        </p>
        <p>
          <span id="spanAppVersion"> {__APP_VERSION__}</span>
        </p>
      </div>
      <hr />
      <div className="column">
        <p>
          <b>JornApp Plus</b>
        </p>
        <p>Calcula tus horas con precisión ;)</p>
      </div>
    </footer>
  );
}

export default Footer;
