import React, { Fragment } from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    props.addUser(data);
    // e.target.restet();
  };

  return(
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre: </label>
        <input 
          type="text" 
          name="name"
          {...register('name',{required:true})}
        ></input>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <label>Telefono: </label>
        <input 
          type="text" 
          name="tel"
          {...register('tel',{required:true})}
        ></input>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <label>Nota: </label>
        <input 
          type="text" 
          name="note"
          {...register('note',{required:true})}
        ></input>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <label>Direccion: </label>
        <input 
          type="text" 
          name="direction"
          {...register('direction',{required:true})}
        ></input>
        <span className="text-danger">
          {errors?.name?.message}
        </span>
        <button>AddUser</button>
      </form>
    </Fragment>
  );
};

export default AddUserForm;