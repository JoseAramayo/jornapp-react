
import * as utils from '../utils/utils';
import * as constants from '../utils/constants';
import Button from './Button';
function ContainerTable(props) {
    const { horaEntrada, horaSalida, metodo, setMetodo } = props;

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
                <hr />
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
                <div className="containerDivs">
                    <div className="containerButtons">
                        <Button className="btnCalcular" onClick={() => { utils.calcular(metodo, horaEntrada, horaSalida) }}>
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