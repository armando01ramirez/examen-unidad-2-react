import React,{Fragment} from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser
  });

  setValue("name", props.currentUser.name);
  setValue("tel", props.currentUser.tel);
  setValue("note", props.currentUser.note);
  setValue("direction", props.currentUser.direction);

  const onSubmit = (data, e) => {
    console.log(data)
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
    // e.target.reset();
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Nombre: </label>
        <input
          type="text"
          name="name"
          {...register('name',{required:true})}
        ></input>
        <span className="text-danger">{errors?.name?.message}</span>
        <label>Telefono: </label>
        <input
          type="text"
          name="tel"
          {...register('tel',{required:true})}
        ></input>
        <span className="text-danger">{errors?.name?.message}</span>
        <label>Nota: </label>
        <input
          type="text"
          name="note"
          {...register('note',{required:true})}
        ></input>
        <span className="text-danger">{errors?.name?.message}</span>
        <label>Direccion: </label>
        <input
          type="text"
          name="direction"
          {...register('direction',{required:true})}
        ></input>
        <div>
          <span className="text-danger">{errors?.name?.message}</span>
        </div>
        <button>Editar</button>
      </form>
    </Fragment>
  );
};

export default EditUserForm;