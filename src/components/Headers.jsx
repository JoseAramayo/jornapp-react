function Headers({titleA, titleB}) {
    return (
        <>
            <div className="divTitulos">
                <div className="container">
                    <h3 title="Feriado/Domingo">Fer/Dom</h3>
                </div>
                <div className="container">
                    <h3>Día</h3>
                </div>
                <div className="container">
                    <h3>Fecha</h3>
                </div>
                <div className="container">
                    <h3>{titleA}</h3>
                </div>
                <div className="container">
                    <h3>{titleB}</h3>
                </div>
            </div>
        </>
    )
}

export default Headers;