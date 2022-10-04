
import './App.css';
import { useState } from 'react'
import Formulario from './components/Formulario.jsx'
import Filtro from './components/Filtro.jsx'
import Listado from './components/Listado.jsx'
import BaseColaboradores from './Datos.js'

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores)

  const capturaInput = (e) => {
    e.preventDefault()
    
    if(!e.target[0].value || !e.target[1].value) return 

    const nuevoColaborador = {
      id: colaboradores.length + 1,
      nombre: e.target[0].value,
      correo: e.target[1].value,
    }

    const colaboradoresAct = [...colaboradores, nuevoColaborador]


  setColaboradores(colaboradoresAct)

  e.target[0].value = ""
  e.target[1].value = ""
}

const capturaFiltro = (e) => {
  e.preventDefault()
  
  if(!e.target[0].value) return
  
  const listaFiltrada = colaboradores.filter((colaborador)=> {
    return colaborador.nombre.toLowerCase().includes(e.target[0].value)})
  setColaboradores(listaFiltrada)
  e.target[0].value = ""
  
}

  return (
    <div className="App">
      <main className="container">
        <h1>Desafio #3 - Base de datos de colaboradores</h1>
        <div className="form-container">
          <Formulario submit = { capturaInput } ></Formulario>
          <Filtro filtro = {capturaFiltro }></Filtro>
        </div>
        <Listado listado={colaboradores}></Listado>
        
      </main>
    </div>
  );
}

export default App;
