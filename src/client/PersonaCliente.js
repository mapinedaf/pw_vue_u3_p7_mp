import axios from "axios";

const obtenerPorId = async (id) => {
    //http://localhost:8080/matricula/v1.1/personas/4
    const data = axios.get(`http://localhost:8080/matricula/v1.1/personas/${id}`).then(r => r.data)
    console.log(data);
    return data;
}

const insertar = async (body) => {
    axios.post(`http://localhost:8080/matricula/v1.1/personas`, body).then(r => r.data);
}
const actualizar = async (id,body) => {
    axios.put(`http://localhost:8080/matricula/v1.1/personas/${id}`, body).then(r => r.data);
}
const actualizarParcial = async (id,body) => {
    axios.patch(`http://localhost:8080/matricula/v1.1/personas/${id}`, body).then(r => r.data);
}
const eliminar = async (id) => {
    axios.delete(`http://localhost:8080/matricula/v1.1/personas/${id}`).then(r => r.data);
}

export const obtenerPorIdFachada = async (id) => {
    return await obtenerPorId(id);
}

export const insertarFachada = async (body) =>{
    return await insertar(body);
}

export const actualizarFachada = async (id,body) =>{
    return await actualizar(id,body);
}

export const actualizarParcialFachada = async (id,body) =>{
    return await actualizarParcial(id,body);
}

export const eliminarFachada = async (id) =>{
    return await eliminar(id);
}