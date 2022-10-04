const Listado =  ({ listado }) => {
    return(
        <div>
            <h2>Listado de colaboradores</h2>
            <div className="listado">
                <ul>
                    {
                        listado.map((colaborador) => {
                            return (
                                <li key={colaborador.id}>{ colaborador.nombre } || { colaborador.correo } </li>
                            )
                        }

                        )
                    }
                </ul>
            </div>
        </div>
    )
}

export default Listado