
function Paciente({paciente, setPaciente, eliminarPaciente}) {

    const {nombre, propietario, email, alta, sintomas, id} = paciente; 
    const handleEliminar = () => {
        const respuesta = confirm("Desea eliminar el paciente: ", nombre, " ? ");

        if(respuesta){
            eliminarPaciente(id);
        }
    }

  return (
    <div className="mx-5 mb-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {' '}
            <span className="font-normal normal-case first-line:"> {nombre} </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {' '}
            <span className="font-normal normal-case first-line:"> {propietario} </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {' '}
            <span className="font-normal normal-case first-line:"> {email} </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: {' '}
            <span className="font-normal normal-case first-line:"> {alta} </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">
        Sintomas: {' '}
            <span className="font-normal normal-case first-line:"> {sintomas} </span>
        </p>
        <div className='flex justify-between mt-10'>
            <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg' onClick={ () => setPaciente(paciente) }>
                Editar
            </button>
            <button className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg' onClick={handleEliminar}>
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default Paciente