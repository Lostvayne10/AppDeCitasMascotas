import { useState, useEffect} from 'react'
import Error from './Error';

function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if(Object.keys(paciente).length>0){
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  },[paciente]);



  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDACION DE FORMULARIO
    if([nombre, propietario, email, alta, sintomas].includes('')){
      setError(true);
      return;
    }
    setError(false);
   
    const newPaciente = {
      nombre, propietario, email, alta, sintomas
    };
    if(paciente.id){ 
        // editando el paciente
        newPaciente.id = paciente.id;

        const PacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? newPaciente : pacienteState );

        setPacientes(PacientesActualizados);
        setPaciente({});

    }else{
      // creando nuevo registro 

      newPaciente.id = generarId();
      setPacientes([...pacientes, newPaciente]); 

    }
    

    // REINICIAR EL FORMULARIO
    setNombre('');
    setPropietario('');
    setEmail('');
    setAlta('');
    setSintomas('');
    setError('');

  }



  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-center text-3xl">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 mb-10 text-center">
          Añade Pacientes y {' '}
          <span className="font-bold text-indigo-600">Administralos</span>
      </p>
      <form 
            onSubmit={handleSubmit}
            className="bg-white shadow-xl rounded-lg py-10 px-5 mx-5" 
      >
        {error && 
            <Error>Todos Los campos son obligatorios</Error>
        }
        <div className="mb-5">
          <label htmlFor="mascota" 
                  className="block text-gray-700 uppercase font-bold"> 
            Nombre Mascota
          </label>
          <input 
                  id="mascota"
                  type="text" 
                  placeholder="Nombre de la Mascota"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={nombre}
                  onChange={ (e) => setNombre(e.target.value) }
                />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" 
                  className="block text-gray-700 uppercase font-bold"> 
            Nombre Propietario 
          </label>
          <input 
                  id="propietario"
                  type="text" 
                  placeholder="Nombre del Propietario"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={propietario}
                  onChange={ (e) => setPropietario(e.target.value) }
                />
        </div>
        <div className="mb-5">
          <label htmlFor="email" 
                  className="block text-gray-700 uppercase font-bold"> 
            Email
          </label>
          <input 
                  id="email"
                  type="email" 
                  placeholder="Email"
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={email}
                  onChange={ (e) => setEmail(e.target.value) }
                />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" 
                  className="block text-gray-700 uppercase font-bold"> 
            Alta
          </label>
          <input 
                  id="alta"
                  type="date" 
                  className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                  value={alta}
                  onChange={ (e) => setAlta(e.target.value) }
                />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" 
                  className="block text-gray-700 uppercase font-bold"> 
            Sintomas
          </label>
          <textarea 
                    id="sintomas" 
                    placeholder="Sintomas"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
                    value={sintomas}
                    onChange={ (e) => setSintomas(e.target.value) }/>
        </div>
        <input type="submit" 
              className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all mb-3" 
              value={ paciente.id ? "Editar Paciente":"Agregar Paciente"} h/>

      </form>
    </div>
  )
}

export default Formulario