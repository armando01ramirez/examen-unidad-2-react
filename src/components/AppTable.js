import React, { Fragment } from "react";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const TableUsers = (props) => {
  return (
    <Fragment>
      <div ref={ref}>
        <table class="table" id="table-to-xls">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Telefono</th>
              <th>Nota</th>
              <th>Direccion</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {props.users.length > 0 ? (
              props.users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.tel}</td>
                  <td>{user.note}</td>
                  <td>{user.direction}</td>
                  <td>
                    <button
                      className="button muted-button"
                      onClick={() => {
                        props.editRow(user);
                      }}
                    >
                      Editar
                    </button>
                    <button
                      className="button muted-button"
                      onClick={() => {
                        props.deleteUser(user.id);
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>NO USERS</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <table>
        <tr>
          <td>
            <h2>Export Excel</h2>
          </td>
          <td>
            <h2>Export PDF</h2>
          </td>
        </tr>
        <tr>
          <td>
            <ReactHTMLTableToExcel
              id="table-to-xls" //id se le coloca a la tabla
              className="btn btn-success" //es el nombre del boton
              table="table-to-xls" //nombre de la tabla y es igual al del id
              filename="tablexls" //nombre del archivo
              sheet="tablexls" //nombre de la hoja
              //nombre del boton
              buttonText="Download as XLS"
            />
          </td>
          <td>
            <Pdf targetRef={ref} filename="usuarios.pdf">
              {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
          </td>
        </tr>
      </table>
    </Fragment>
  );
};

export default TableUsers;
