function obtenerAleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

const obtenerArregloNumerico = () =>{
    const arreglo =[];
    for( let i =0; i<4; i++){
        arreglo.push(obtenerAleatorio(1,600));
    }
    return arreglo;
}

const obtenerArregloPokemon = async (arregloNum)=>{

    const obj1= await consumirAPI(arregloNum[0]);
    const obj2=await consumirAPI(arregloNum[1]);
    const obj3=await consumirAPI(arregloNum[2]);
    const obj4=await consumirAPI(arregloNum[3]);
    return [obj1,obj2,obj3,obj4];
}

const consumirAPI = async (id) =>{

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then( r=> r.json())

    return data;
}

const consultarPokemons = async () =>{
    return await obtenerArregloPokemon(obtenerArregloNumerico());
}


/*Fachadas de metodos */
export const consultarPokemonsFachada = async () =>{
    return await consultarPokemons();
}

export function obtenerAleatorioFachada(min,max){
    return obtenerAleatorio(min,max);
}
//Solo para exportar 1 solo metodo 
//export default consultarPokemonsFachada;





















