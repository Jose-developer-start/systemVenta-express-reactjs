import React from "react";

export default function Form({onChange,onSubmit,clientes,productos}) {
    return (
        <div className="card p-3 shadow-lg">
            <form action="" method="POST" onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="">Cliente</label>
                    <select
                        className="form-control"
                        onChange={(e) => onChange(e)}
                        name="cliente_id"
                        id=""
                    >
                        <option value="" required>
                            Seleccionar cliente
                        </option>
                        {clientes.map((cliente, index) => (
                            <option key={index} value={cliente.id} required>
                                {cliente.nombre + " " + cliente.apellido}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Producto</label>
                    <select
                        className="form-control"
                        onChange={(e) => onChange(e)}
                        name="producto_id"
                        id=""
                    >
                        <option value="" required>
                            Seleccionar producto
                        </option>
                        {productos.map((producto, index) => (
                            <option key={index} value={producto.id} required>
                                {producto.producto}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="">Cantidad</label>
                    <input
                        type="number"
                        name="cantidad"
                        onChange={(e) => onChange(e)}
                        step={0}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="">Fecha de venta</label>
                    <input
                        type="date"
                        onChange={(e) => onChange(e)}
                        name="fecha_venta"
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn btn-outline-success btn-sm">
                    Registrar
                </button>
            </form>
        </div>
    );
}
