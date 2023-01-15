
const Form = ({ handleSubmit, name, setName, mail, setMail }) => {
    return (
        <form className="d-flex flex-column" onSubmit={handleSubmit}>

            <label className="mt-5 mb-1">Nombre del Colaborador</label>
            <input
                className="inputname  mb-3"
                type="text"
                placeholder='Ingresar Nombre Colaborador'
                onChange={(e) => setName(e.target.value)}
                value={name} />


            <label className="mb-1">Correo del Colaborador</label>
            <input
                className="mb-2 "
                type="text" placeholder='Ingresar Correo del Colaborador'
                onChange={(e) => setMail(e.target.value)}
                value={mail} />

            <button
                className='btn btn-primary mt-3 '
                type="submit">Agregar Colaborador
            </button>
        </form>

    );
};

export default Form;