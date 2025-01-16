<template>
  <h2>Adivina el Pokemon de la imagen</h2>
  <PokemonImagen></PokemonImagen>
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
};
</script>

<style>
</style>