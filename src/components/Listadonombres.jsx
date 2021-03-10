import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre,setNombre] = useState('')
    const  [listaNombres, setListaNombres] = useState([])
    const [modoEdicion, setModoEdicion] = useState(false)
    const [id,setId] = useState('')
    const [error, setError] = useState(null)

    const addNombre = (e) => {
        e.preventDefault()
        if(!nombre.trim()){
            setError('El campo nombre esta vacio')
            return
        }
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListaNombres([...listaNombres, nuevoNombre])
        setNombre('')
        setError(null)
    }
    const deleteNombre = (id) => {
        const newArray = listaNombres.filter( item => item.id !== id)
        setListaNombres(newArray)

    }
    const edit = (item) => {
        setModoEdicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editNombre = (e)=> {
        e.preventDefault()
        const nuevoArray = listaNombres.map(item => item.id === id ? {id:id,tituloNombre:nombre}: item)
        setListaNombres(nuevoArray)
    }


    return (
        <div className='container'>
            <h1>APLICACION CRUD BASICA</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listaNombres.map( item => 
                                <li key="{item.id}" className="list-group-item">{item.tituloNombre}
                                    <button 
                                    className="btn btn-danger float-right ml-2"
                                    onClick={ () => {deleteNombre(item.id)}}
                                    >
                                        Borrar</button>
                                    
                                    <button 
                                    className="btn btn-info float-right"
                                    onClick={ () => {edit(item)}}
                                    >
                                        Editar</button>
                                </li>
                                
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para anhadir nombres</h2>
                    <form onSubmit={modoEdicion ? editNombre : addNombre}  className="form-group">
                        
                        <input 
                        onChange={(e)=>{setNombre(e.target.value)}} 
                        className="form-control mb-3" 
                        type="text" 
                        placeholder="introduce el nombre"
                        value={nombre}
                        />
                        
                        <input 
                        className="btn btn-info btn-block" 
                        type="submit" 
                        value={modoEdicion ? 'EDITAR NOMBRE' : 'REGISTRAR NOMBRE'}
                        />

                    </form>
                    {
                        error != null ? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Listadonombres