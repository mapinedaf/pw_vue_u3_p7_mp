<template>
    <div >
      <div class="Contenedor-Form">
        <h1>Formulario Persona</h1>
  
        <p type="Id">
          <input type="text" id="id" name="id" v-model="id" />
        </p>
        <p type="Nombre">
          <input type="text" id="nombre" name="nombre" v-model="nombre" />
        </p>
        <p type="Apellido">
          <input type="text" id="apellido" name="apellido" v-model="apellido" />
        </p>
        <p type="Fecha de Nacimiento ">
          <input
            type="text"
            id="fechaNacimiento"
            name="fechaNacimiento"
            v-model="fechaNacimiento"
          />
        </p>
        <div class="botones">
        <button @click="buscar()">Consultar</button>
        <button @click="guardar()">Guardar</button>
        <button @click="actualizar()">Actualizar</button>
        <button @click="actualizarParcial()">Actualizar Parcial</button>
        <button @click="eliminar()">Eliminar</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { obtenerPorIdFachada, insertarFachada, actualizarFachada, actualizarParcialFachada, eliminarFachada } from "@/client/PersonaCliente";
  export default {
    data() {
      return {
        id: 0,
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
      };
    },
    mounted() {
      obtenerPorIdFachada(6);
    },
      methods:{
      async buscar(){
        const data= await obtenerPorIdFachada(this.id);
        this.nombre = data.nombre;
        this.apellido = data.apellido;
        this.fechaNacimiento = data.fechaNacimiento;
        alert("Persona encontrada exitosamente");
      },
      async guardar(){
        const bodyPersona = {
          nombre: this.nombre,
          apellido: this.apellido,
        };  
        await insertarFachada(bodyPersona);
        alert(`Persona insertada exitosamente:
        - Nombre: ${this.nombre}
        - Apellido ${this.apellido}
        - Fecha de Nacimiento ${this.fechaNacimiento}`);
      },
      async actualizar() {
        const bodyPersona = {
          nombre: this.nombre,
          apellido: this.apellido,
          fechaNacimiento: this.fechaNacimiento,
        };
        await actualizarFachada(this.id, bodyPersona);
        alert("Persona actualizada exitosamente");
      },
      async actualizarParcial() {
        const bodyPersona = {};
        if (this.nombre) bodyPersona.nombre = this.nombre;
      
  
        await actualizarParcialFachada(this.id, bodyPersona);
        alert("Persona actualizada exitosamente");
      },
      async eliminar() {
        await eliminarFachada(this.id);
        alert("Persona eliminada exitosamente");
        this.id = null;
        this.nombre = "";
        this.apellido = "";
        this.fechaNacimiento = "";
      },
    },
  };
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