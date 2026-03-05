
import * as utils from '../utils/utils';
import * as constants from '../utils/constants';
import Button from './Button';
function ContainerTable() {
    return (
        <>
            <div className="containerTable">
                {/* <div className="divGuia">
                    <h4 className="Desplegable" onClick="toggleContenido()" title="Click para más información!">⬇ Click para ver
                        instrucciones
                    </h4>
                    <div className="contenido" id="contenido">
                        <ul>
                            <li><b>Método:</b> Elije un método para cargar tus horas.</li>
                            <li><b>Días libres:</b> No completar casillas.</li>
                            <li><b>Fer/Dom:</b> Feriado/Domingo</li>
                            <li><b>Feriados:</b> Márcalos manualmente.</li>
                            <li><b>Domingos:</b> Se marcan automáticamente.</li>
                            <li><b>PDF:</b> Descarga una “Captura de pantalla”.</li>
                            <li><b>Guarda:</b> Exporta los datos en un archivo con tus horas cargadas.</li>
                            <li><b>Importar:</b> Volverá a cargar tus horas en donde lo dejaste.</li>
                            <li><b>Excel:</b> Exporta un Excel con las horas para compartirlo al supervisor.</li>
                        </ul>
                    </div>
                </div> */}
                {/* <hr /> */}
                <table className="tableReference">
                    <thead>
                        <tr>
                            <th>Concepto</th>
                            <th>Jornal</th>
                            <th>Horas</th>
                            <th>Generado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='centrarTexto '>Jornal Diurno</td>
                            <td className='centrarTexto '>Gs. {constants.JORNAL.diurno}</td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanTotalDiurnas">--</span></td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanCobroDiurnas">--</span></td>
                        </tr>
                        <tr>
                            <td className='centrarTexto'>Jornal Nocturno</td>
                            <td className='centrarTexto'>Gs. {constants.JORNAL.nocturno}</td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanTotalDiurnas">--</span></td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanCobroDiurnas">--</span></td>
                        </tr>
                        <tr>
                            <td className='centrarTexto'>Diurnas Fer/Dom</td>
                            <td className='centrarTexto'>Gs. {constants.JORNAL.diurnoFerDom}</td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanTotalDiurnas">--</span></td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanCobroDiurnas">--</span></td>
                        </tr>
                        <tr>
                            <td className='centrarTexto'>Nocturnas Fer/Dom</td>
                            <td className='centrarTexto'>Gs. {constants.JORNAL.nocturnoFerDom}</td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanTotalDiurnas">--</span></td>
                            <td className='centrarTexto'><span className='bgColorCustom' id="spanCobroDiurnas">--</span></td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                <table className='tableReference'>
                    <thead>
                        <tr>
                            <th>Días Libres</th>
                            <th>% IPS</th>
                            <th>Total bruto</th>
                            <th>Total neto</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='centrarTexto'><span className='bgColorCustom'>--</span></td>
                            <td className='centrarTexto'><span className='bgColorCustom'>-- </span></td>
                            <td className='centrarTexto'><span className='bgColorCustom'>--</span></td>
                            <td className='centrarTexto'><span className='bgColorCustom'>--</span></td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                {/* <div className="referenceTable">
                    <div className="column">
                        <h4>Jornal Diurno</h4>
                        <div className="bgColorCustom"> <span id="spanJornalDiurno">Gs. {constants.JORNAL.diurno}</span></div>

                        <hr className="separador" />

                        <h4>Jornal Nocturno</h4>
                        <div className="bgColorCustom"> <span id="spanJornalNocturno">Gs. {constants.JORNAL.nocturno}</span></div>

                        <hr className="separador" />

                        <h4 title="Diurnas Feriado/Domingo">Diur. Fer/Dom</h4>
                        <div className="bgColorCustom"> <span id="spanDiaFerDom">Gs. {constants.JORNAL.diurnoFerDom}</span> </div>

                        <hr className="separador" />

                        <h4 title="Nocturnas Feriado/Domingo">Noct. Fer/Dom</h4>
                        <div className="bgColorCustom"> <span id="spanNocheFerDom">Gs. {constants.JORNAL.nocturnoFerDom}</span> </div>
                    </div>
                    <hr />
                    <div className="column">
                        <h4>Horas</h4>
                        <div className="bgColorCustom"> <span id="spanTotalDiurnas">--</span></div>

                        <hr className="separador" />

                        <h4>''</h4>
                        <div className="bgColorCustom"> <span id="spanTotalNocturnas">--</span></div>

                        <hr className="separador" />

                        <h4>''</h4>
                        <div className="bgColorCustom"> <span id="spanTotalDFerDom">--</span> </div>

                        <hr className="separador" />

                        <h4>''</h4>
                        <div className="bgColorCustom"> <span id="spanTotalNFerDom">--</span> </div>
                    </div>
                    <hr />
                    <div className="column">
                        <h4>Generado</h4>
                        <div className="bgColorCustom"> <span id="spanCobroDiurnas">--</span> </div>

                        <hr className="separador" />

                        <h4>''</h4>
                        <div className="bgColorCustom"> <span id="spanCobroNocturnas">--</span> </div>

                        <hr className="separador" />

                        <h4>''</h4>
                        <div className="bgColorCustom"> <span id="spanCobroDiaFerDom">--</span> </div>

                        <hr className="separador" />

                        <h4>''</h4>
                        <div className="bgColorCustom"> <span id="spanCobroNocheFerDom">--</span> </div>
                    </div>
                    <hr />
                    <div className="column">
                        <h4>% IPS</h4>
                        <div className="bgColorCustom"> <span id="spanDescIPS">--</span> </div>

                        <hr className="separador" />

                        <h4>Días libres</h4>
                        <div className="bgColorCustom"> <span id="spandiasLibres">--</span> </div>

                        <hr className="separador" />
                        <h4>Total bruto</h4>
                        <div className="bgColorCustom"> <span id="spanTotalBruto">--</span> </div>

                        <hr className="separador" />

                        <h4>Total neto</h4>
                        <div className="bgColorCustom"> <span id="spanTotalNeto">--</span> </div>
                    </div>
                </div> */}
                <div className="containerDivs">
                    <div className="containerButtons">
                        <Button className="btnCalcular" onClick={utils.calcular}>
                            <img src="/icons/calculator.svg" alt="Calcular" /></Button>
                        <Button className="btnRefresh" onClick={utils.reiniciar}>
                            <img src="/icons/refresh-ccw.svg" alt="Calcular" /></Button>
                        <Button className="btnPrint" onClick={utils.imprimir}>
                            <img src="/icons/file-text.svg" alt="Pdf" /></Button>
                        <Button className="btnSave" onClick={utils.guardar}>
                            <img src="/icons/save.svg" alt="Guardar" /></Button>
                        <Button className="btnExport" onClick={utils.Export}>
                            <img src="/icons/sheet.svg" alt="Excel" /></Button>
                    </div>
                    <hr />
                    <div className="containerImport">
                        <p><b>Importar horas:</b></p>
                        <input type="file" id="importarJson" accept=".json" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default ContainerTable;