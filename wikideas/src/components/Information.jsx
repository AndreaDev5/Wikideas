import React from "react";
import "../css/Informacion.css";

const Information = ({ busq }) => {
  return (
    <>
      {busq ? (
        <table>
          <tbody>
            <tr className="head">
              <th>Articulo</th>

              <th>Descripcion</th>

              <th>Palabras clave</th>
            </tr>
            <tr>
              <td>El sindrome del impostor</td>

              <td>
                sensación de inseguridad relacionada con los logros laborales.
                Puede que te sientas como un impostor porque no crees merecer tu
                trabajo.
              </td>

              <td>Sindrome - Impostor - Trabajo</td>
            </tr>
            <tr>
              <td>El sindrome de estocolmo</td>

              <td>
                fenómeno paradójico en el cual la víctima desarrolla un vínculo
                positivo hacia su captor como respuesta al trauma del cautiverio
              </td>

              <td>Sindrome - Secuestro</td>
            </tr>
            <tr>
              <td>El sindrome de Asia</td>

              <td>
                se trata de una extremadamente poco frecuente reacción
                autoinmune o inflamatoria, atribuida a una sustancia extraña al
                organismo.
              </td>

              <td>Sindrome - Enfermedad - Autoinmune</td>
            </tr>
          </tbody>
        </table>
      ) : (
        false
      )}
    </>
  );
};

export default Information;
