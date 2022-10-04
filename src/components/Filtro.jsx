const Filtro = ({ filtro }) => {
    return (
        
            <form className="filtro" onSubmit={(e) => filtro(e)}>
                <input type="text" placeholder="Buscar"></input>
                <button>Buscar</button>
            </form>

        
    )
}

export default Filtro