import axios from "axios";

const obtenerPorId =(id) =>{
    //100.26.140.9:8080/matricula/v1.1/personas/6
    const data = axios.get(`localhost:8080/matricula/v1.1/personas/${id}`)
                      .then(p => p.data);
                      
                      console.log(data)
                      return data;
}

export const obtenerPorIdFachada = async(id) =>{
    return await obtenerPorId(id);
}