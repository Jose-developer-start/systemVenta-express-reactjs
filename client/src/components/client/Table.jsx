import React from "react";

export default function Table({data,editClient,deleteClient}) {
  return (
    <table className="table table-responsive-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>DUI</th>
          <th>Fecha nacimiento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((cliente, index) => (
          <tr key={index}>
            <td>{cliente.id}</td>
            <td>{cliente.nombre}</td>
            <td>{cliente.apellido}</td>
            <td>{cliente.dui}</td>
            <td>{cliente.fecha_nacimiento}</td>
            <td>
              <div className="row">
                <button
                  onClick={() => editClient(cliente.id)}
                  className="btn btn-outline-info btn-sm mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteClient(cliente.id)}
                  className="btn btn-danger btn-sm"
                >
                  Eliminar
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
