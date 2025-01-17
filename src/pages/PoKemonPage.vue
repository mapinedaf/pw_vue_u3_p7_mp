<template>
  <h2>Adivina el Pokemon de la imagen</h2>
  <PokemonImagen :pokemonId="70" :mostrarPokemon="false"></PokemonImagen>
  <PokemonOpciones/>
</template>

<script>
import PokemonOpciones from "@/components/PokemonOpciones.vue";
import PokemonImagen from "@/components/PokemonImagen.vue";
export default {
    components:{
        PokemonImagen,
        PokemonOpciones
    }
   ,
    methods:{

    }
};
</script>

<style>
</style>