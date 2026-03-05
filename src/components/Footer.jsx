function Footer(){
    return(
            <footer>
        <div className="column">
            <p><b>Desarrollado por:</b></p>
            <address>José Aramayo</address>
        </div>
        <hr/>
        <div className="column">
            <p><b>Versión:</b></p>
            <p><span id="spanAppVersion">AppVersion</span></p>
        </div>
        <hr/>
        <div className="column">
            <p><b>JornApp:</b></p>
            <p>Agilizá el cálculo de tus horas.</p>
        </div>
    </footer>
    )
}

export default Footer;