import * as constants from "../utils/constants";
import { calcular, reiniciar, imprimir, guardar, excel } from "../utils/utils";
import Button from "./Button";
import TableRow from "./TableRow";
function ContainerTable(props) {
  const { JORNAL } = constants;
  const { diurno, nocturno, nocturnoFerDom, diurnoFerDom } = JORNAL;
  const { metodo, resultados } = props;
  const { diasNormales, feriaDomingos } = resultados;

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
            <TableRow
              classNameTd={"centrarTexto"}
              childrenA={"Jornal Diurno"}
              childrenB={`Gs. ${diurno}`}
              classNameSpan={"bgColorCustom"}
              childrenC={diasNormales?.totalDiurnas ?? "--"}
              childrenD={diasNormales?.cobrarDiurnas ?? "--"}
            />
            <TableRow
              classNameTd={"centrarTexto"}
              childrenA={"Jornal Nocturno"}
              childrenB={`Gs. ${nocturno}`}
              classNameSpan={"bgColorCustom"}
              childrenC={diasNormales?.totalNocturnas ?? "--"}
              childrenD={diasNormales?.cobrarNocturnas ?? "--"}
            />
            <TableRow
              classNameTd={"centrarTexto"}
              childrenA={"Diurnas Fer/Dom"}
              childrenB={`Gs. ${diurnoFerDom}`}
              classNameSpan={"bgColorCustom"}
              childrenC={feriaDomingos?.totalDiurnas ?? "--"}
              childrenD={feriaDomingos?.cobrarDiurnas ?? "--"}
            />
            <TableRow
              classNameTd={"centrarTexto"}
              childrenA={"Nocturnas Fer/Dom"}
              childrenB={`Gs. ${nocturnoFerDom}`}
              classNameSpan={"bgColorCustom"}
              childrenC={feriaDomingos?.totalNocturnas ?? "--"}
              childrenD={feriaDomingos?.cobrarNocturnas ?? "--"}
            />
          </tbody>
        </table>
        <hr />
        <table className="tableReference">
          <thead>
            <tr>
              <th>Días Libres</th>
              <th>Total Horas</th>
              <th>% IPS</th>
              <th>Total bruto</th>
              <th>Total neto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="centrarTexto">
                <span className="bgColorCustom">--</span>
              </td>
              <td className="centrarTexto">
                <span className="bgColorCustom">--</span>
              </td>
              <td className="centrarTexto">
                <span className="bgColorCustom">-- </span>
              </td>
              <td className="centrarTexto">
                <span className="bgColorCustom">--</span>
              </td>
              <td className="centrarTexto">
                <span className="bgColorCustom">--</span>
              </td>
            </tr>
          </tbody>
        </table>
        <hr />
        <div className="containerDivs">
          <div className="containerButtons">
            <Button
              className="btnCalcular"
              form="formHoras"
              type="submit"
              onSubmit={(e) => calcular(e, metodo)}
            >
              <img
                src="/icons/calculator.svg"
                alt="Calcular"
                className="inverted-icon"
              />
            </Button>
            <Button className="btnRefresh" onClick={reiniciar}>
              <img
                src="/icons/refresh-ccw.svg"
                alt="Calcular"
                className="inverted-icon"
              />
            </Button>
            <Button className="btnPrint" onClick={imprimir}>
              <img
                src="/icons/file-text.svg"
                alt="Pdf"
                className="inverted-icon"
              />
            </Button>
            <Button className="btnSave" onClick={guardar}>
              <img
                src="/icons/save.svg"
                alt="Guardar"
                className="inverted-icon"
              />
            </Button>
            <Button className="btnExport" onClick={excel}>
              <img
                src="/icons/sheet.svg"
                alt="Excel"
                className="inverted-icon"
              />
            </Button>
          </div>
          <hr />
          <div className="containerImport">
            <p>
              <b>Importar horas:</b>
            </p>
            <input type="file" id="importarJson" accept=".json" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContainerTable;
