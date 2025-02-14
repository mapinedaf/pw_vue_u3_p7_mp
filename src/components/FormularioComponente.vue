<template>
  <div class ="Contenedor-Form">
        <h1>Formuario persona</h1>

        <h3>Nombre:</h3>
        <input>
        <h3>Apellido:</h3>
        <input>
        <h3>Fecha de Nacimiento:</h3>
        <input type="date">
        <br>
        <br>
        <button>Ingresar</button>
    </div>
</template>

<script>

import {obtenerPorIdFachada} from "../client/PersonaCliente"

export default {
    mounted:{
        
    }

}
</script>

    <style>

        .Contenedor-Form{
            border: .5vh black solid;
            padding: 20px;
            width: fit-content;
            margin-left: 37vw;
            margin-right: 63wv;
            background-color: cornflowerblue;
        }
        input{
            background-color: transparent;
            border-left: 0px;
            border-right:0px;
            border-top: 0px;
            border-bottom: .5vh black solid;
        }
        button{
            border: .2vh black solid;
        }

    </style>