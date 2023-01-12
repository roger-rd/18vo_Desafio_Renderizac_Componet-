const Form = ({handleSubmit, name, setName, email, setEmail, errorName, errorEmail}) => {
    
    return ( 
        <>
        <form onSubmit={ handleSubmit }>
            <div className="mb-3">
                <label  className="form-label pt-3">Nombre del Colaborador</label>
                <input 
                type="text" 
                className="form-control" 
                id="nameColaborador" 
                onChange={e => setName(e.target.value)}
                value={name}
                /> 
                {
                errorName ? <span style={{color: 'red'}}>Debes Ingresar tu nombre</span>  : null
                }
            </div>
            <div className="mb-3">
                <label  className="form-label">Correo del Colaborador</label>
                <input 
                type="email"
                className="form-control" 
                id="emailColaborador" 
                onChange={e => setEmail(e.target.value)}
                value={email}
                />
                {
                errorEmail ? <span style={{color: 'red'}}>Debes Ingresar tu Correo</span>  : null
                }
            
            </div>        
            <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
        </form>
        </>
    );
}

export default Form;
