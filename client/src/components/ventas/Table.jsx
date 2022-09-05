import React from "react";

export default function Table({ventas,delVenta}) {
    return (
        <table className="table table-responsive-sm">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Cliente</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Fecha venta</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {ventas.map((venta, index) => (
                    <tr key={index}>
                        <td>{venta.id}</td>
                        <td>{venta.nombre + " " + venta.apellido}</td>
                        <td>{venta.producto}</td>
                        <td>{venta.cantidad}</td>
                        <td>{venta.fecha_venta}</td>
                        <td>
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => delVenta(venta.id)}
                            >
                                Eliminar
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
