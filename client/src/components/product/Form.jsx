import React from "react";
export default function Form({onSubmit,onChange,cancelEdit,stateEdit,form}) {
  return (
    <div className="card shadow-lg p-3">
        <div className="card-header p-1 py-2">Agregar producto</div>
        <form action="" onSubmit={(e) => onSubmit(e, form.id)} method="POST">
      <div className="form-group">
        <label htmlFor="">Producto: </label>
        <input
          name="producto"
          onChange={(e) => onChange(e)}
          type="text"
          className="form-control"
          value={form.producto}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Descripcion: </label>
        <textarea
          name="descripcion"
          onChange={(e) => onChange(e)}
          className="form-control"
          value={form.descripcion}
        ></textarea>
      </div>
      <div className="form-group">
        <label htmlFor="">Stock: </label>
        <input
          name="stock"
          type="number"
          onChange={(e) => onChange(e)}
          className="form-control"
          value={form.stock}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Producto: </label>
        <input
          name="precio"
          step=".01"
          onChange={(e) => onChange(e)}
          type="number"
          className="form-control"
          value={form.precio}
        />
      </div>
      {stateEdit === false ? (
        <button className="btn btn-success btn-sm" type="submit">
          Guardar
        </button>
      ) : (
        <>
          <button className="btn btn-secondary btn-sm mr-2" type="submit">
            Edit
          </button>
          <button
            onClick={() => {
              cancelEdit();
            }}
            className="btn btn-outline-danger btn-sm"
          >
            Cancelar
          </button>
        </>
      )}
    </form>
    </div>
  );
}
