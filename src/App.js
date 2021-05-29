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
}

export default App;
