

const Formulario = ({ submit }) => {
 
    return (
        <div className="form-container">
            <form className="inputs" onSubmit={(e) => submit(e)} >
                <input  type="text" placeholder="Ingresa un nombre" name="nombre" required></input>
                <input   type="text" placeholder="Ingresa un correo " required></input>
                <button>Agregar</button>
            </form>

        </div>
    )
}

export default Formulario