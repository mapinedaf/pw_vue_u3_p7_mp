<template>
  <div v-if="pokemonObjeto">
    <h2>Adivina el Pokemon de la imagen</h2>
    <PokemonImagen
      ref = "miHijo"
      :pokemonId="pokemonObjeto.id"
      :mostrarPokemon="pokemonShow"
    ></PokemonImagen>
    <PokemonOpciones
     v-show="showOpciones"
     @seleccion="validarRespuesta($event)" 
     :arregloPoke="pokemonArr"/>
  </div>
</template>

<script>
import {
  consultarPokemonsFachada,
  obtenerAleatorioFachada,
} from "@/client/PokemonClient.js";

import PokemonOpciones from "@/components/PokemonOpciones.vue";
import PokemonImagen from "@/components/PokemonImagen.vue";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted() {
    console.log("Se monto en la pagina");
    this.cargarJuego();
  },
  beforeCreate(){
    console.log("Antes de crear")
  },
  created(){
    console.log("created")
  },
  beforeMount(){
    console.log('beforeMount')
  },
  updated(){
    console.log('updated')
  },
  beforeUpdate(){
    console.log("before update")
  }
  ,
  computed() {},
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
      showOpciones:true,
    };
  },
  methods: {
    validarRespuesta(objetoEnviado){
      console.log("Llego el evento al padre")
      console.log(objetoEnviado.identificador)
      if(objetoEnviado.identificador === this.pokemonObjeto.id){
        console.log("Eligio el pokemon correcto")
        this.pokemonShow= objetoEnviado.valor2;
        this.showOpciones = false;
      }else{
        console.error("Error........")
        this.pokemonShow= !objetoEnviado.valor2;
        this.showOpciones = true;
      }

      const valorHijo = this.$refs.miHijo.pokemonId
      console.log(`valor obtenido por refs ${valorHijo}`)
      console.log(this.$refs.miHijo.propiedadPrueba
      )
      this.$refs.miHijo.metodoPrueba()
    }
    ,
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, 3);
      console.log(`Este es el aleatorio: ${valorAleatorio}`)
      const pokemoncorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemoncorrecto;
    },
  },
};
</script>

<style>
</style>