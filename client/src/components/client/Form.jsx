import React from "react";

export default function Form({onSubmit,onChange,cancelEdit,stateEdit,form}) {
  return (
    <div className="card shadow-lg p-3">
        <div className="card-header p-1 py-2">Agregar cliente</div>
        <form action="" onSubmit={(e) => onSubmit(e, form.id)} method="POST">
      <div className="form-group">
        <label htmlFor="">Nombre: </label>
        <input
          name="nombre"
          onChange={(e) => onChange(e)}
          type="text"
          className="form-control"
          value={form.nombre}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Apellido: </label>
        <input
          name="apellido"
          onChange={(e) => onChange(e)}
          className="form-control"
          value={form.apellido}
        ></input>
      </div>
      <div className="form-group">
        <label htmlFor="">DUI: </label>
        <input
          name="dui"
          type="text"
          onChange={(e) => onChange(e)}
          className="form-control"
          value={form.dui}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Fecha nacimiento: </label>
        <input
          name="fecha_nacimiento"
          onChange={(e) => onChange(e)}
          type="date"
          className="form-control"
          value={form.fecha_nacimiento}
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
