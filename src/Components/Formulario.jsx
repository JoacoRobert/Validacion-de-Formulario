import React, { useState } from 'react';

const Formulario = () => {

const [nombre,setNombre]=useState("")
const [email,setEmail]=useState("")
const [direccion,setDireccion]=useState("")
const [mostrarErrores,setMostrarErrores]=useState(false)

const [nombreValido,setNombreValido]=useState(false)
const [emailValido,setEmailValido]=useState(false)
const [direccionValido,setDireccionValido]=useState(false)

let mensaje=""

const nombreUpdate=(evento)=>{
//evento.preventDefault()
let valor=evento.target.value
setNombre(valor)
setNombreValido(valor.length>3)
if (valor.length>3) {
    setNombreValido(true)
}else{
    mensaje="Usted tiene que ingresar mas de tres letras"
}
}

const emailUpdate=(evento)=>{
//evento.preventDefault()
let valor=evento.target.value
setEmail(valor)
setEmailValido(valor.length>6)
}

const direccionUpdate=(evento)=>{
evento.preventDefault()
let valor=evento.target.value
setDireccion(valor)
setDireccionValido(valor.length>8)
}

const enviarDatos=(evento)=>{
evento.preventDefault()
if(!nombreValido || !emailValido || !direccionValido){
    setMostrarErrores(true)
}

}
    return(
        <div>
            <div className='row my-5 justify-content-md-center'>
                <div className='col-md-5'>
                    <form>
                        <div className='form-group'>
                            <label htmlFor="">Nombre</label>
                            <input type="text" className='form-control' onChange={nombreUpdate} value={nombre} />
                            {(mostrarErrores && !nombreValido) && <small className='text-danger'>{mensaje}</small>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Email</label>
                            <input type="email" className='form-control' onChange={emailUpdate} value={email} />
                            {(mostrarErrores && !emailValido) && <small className='text-danger'>Email no valido</small>}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="">Direccion</label>
                            <input type="text" className='form-control' onChange={direccionUpdate} value={direccion} />
                            {(mostrarErrores && !direccionValido) && <small className='text-danger'>Direccion no valido</small>}
                        </div>
                        <button type='submit' className='btn btn-primary' onClick={enviarDatos}>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Formulario }