import React, {useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre,setNombre] = useState('')
    const  [listaNombres, setListaNombres] = useState([])

    const addNombre = (e) => {
        e.preventDefault()
        const nuevoNombre = {
            id:uniqid(),
            tituloNombre:nombre
        }
        setListaNombres([...listaNombres, nuevoNombre])
        setNombre('')
    }

    const deleteNombre = (id) => {
        const newArray = listaNombres.filter( item => item.id !== id)
        setListaNombres(newArray)

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
                                    className="btn btn-danger float-right"
                                    onClick={ () => deleteNombre(item.id)}
                                    >
                                        Borrar</button>
                                </li>
                                
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para anhadir nombres</h2>
                    <form onSubmit={(e)=>addNombre(e)}  className="form-group">
                        
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
                        value="Registrar nombre"
                        />

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Listadonombres