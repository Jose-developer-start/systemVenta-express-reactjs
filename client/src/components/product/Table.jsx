import React from "react";

export default function Table({data,editProduct,deleteProduct}) {
  return (
    <table className="table table-responsive-sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Producto</th>
          <th>Descripcion</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((producto, index) => (
          <tr key={index}>
            <td>{producto.id}</td>
            <td>{producto.producto}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.stock}</td>
            <td>{producto.precio}</td>
            <td>
              <div className="row">
                <button
                  onClick={() => editProduct(producto.id)}
                  className="btn btn-outline-info btn-sm mr-2"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteProduct(producto.id)}
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
