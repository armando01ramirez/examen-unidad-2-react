import React, { useState } from "react";
import TableUsers from "./components/AppTable";
import AddUserForm from "./components/AppAddUserForm";
import EditUserForm from "./components/AppEditUserForm";
import { v4 as uudiv4 } from "uuid";

function App() {

  
  const userData = [
    {
      id: 01,
      name: "tania",
      tel: "2391234455",
      note: "tareas",
      direction: "Avenida cuahutemoc",
    },
    {
      id: 02,
      name: "jose",
      tel: "2390381199",
      note: "cocina",
      direction: "juarez",
    },
    {
      id: 03,
      name: "ignacio",
      tel: "2391320978",
      note: "limpieza",
      direction: "Calle hidalgo",
    },
    {
      id: 04,
      name: "Rocio",
      tel: "2390987632",
      note: "cocina",
      direction: "5 sur",
    },
    {
      id: 05,
      name: "rogelio",
      tel: "2391185749",
      note: "Entregar pendientes",
      direction: "la rotonda",
    },
  ];
  const [users, setUsers] = useState(userData);

  const addUser = (user) => {
    user.id = uudiv4();
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id != id));
  };

  const [bandera, setBandera] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    tel: "",
    note: "",
    direction: "",
  });

  const editRow = (user) => {
    setBandera(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      tel: user.tel,
      note: user.note,
      direction: user.direction,
    });
  };

  const updateUser = (id, updateUser) => {
    setBandera(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };

  return (
    <div className="container">
      <h1>Examen Unidad 2 REACT DESARROLLO DE SISTEMAS</h1>
      <div className="flex-row">
        <div className="flex-large">
          {bandera ? (
            <div>
              <h2>Editar informacion</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Agregar usuario</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>Ver usuarios</h2>
          <TableUsers users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );

  const ref = React.createRef();

function App() {
  return (
    <div className="container">
      <h1>Ejemplo exportar datos en React</h1>
      <hr/>
      <table class="table" id="table-to-xls">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
      </tbody>
    </table>

    <div ref={ref}>
      <h2>Saludos</h2>
      
    </div>
    
    <table>
        <tr>
          <td><h2>Exportar a  Excel</h2></td>
          <td><h2>Exportar a PDF</h2></td>
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
            buttonText="Download as XLS"/>  
            </td>
          <td>
          <Pdf targetRef={ref} filename="code-example.pdf">
            {({ toPdf }) => <button className="btn btn-primary" onClick={toPdf}>Descargar en Pdf</button>}
            </Pdf>

          </td>
        </tr>

      </table>

    </div>
  );
}


}
export default App;


