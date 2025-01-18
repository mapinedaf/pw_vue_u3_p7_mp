<template>
  <div v-if="pokemonObjeto">
    <h2>Adivina el Pokemon de la imagen</h2>
    <PokemonImagen
      :pokemonId="pokemonObjeto.id"
      :mostrarPokemon="pokemonShow"
    ></PokemonImagen>
    <PokemonOpciones :arregloPoke="pokemonArr" />
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
  computed() {},
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
    };
  },
  methods: {
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