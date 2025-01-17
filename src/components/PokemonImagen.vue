<template>
  <div class="pokemonContainer">
    <img v-show = !mostrarPokemon
      :src=imagenFuente
      alt="No se pudo cargar la imagen "
      class="ocultar"
    />
    <img v-show = mostrarPokemon
     :src=imagenFuente
      alt="No se pudo cargar la imagen "
    />
  </div>
</template>

<script>
export default {

  props:{
    pokemonId:{
      type:Number,
      requiredd:true
    },

    mostrarPokemon:{
      type: Boolean,
      required:true
    }
  },
  computed: {

    /*
    imagenFuente(){
      return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/"+this.pokemonId+".svg";
    }*/
    imagenFuente(){
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    }


  },
};
</script>

<style>
.ocultar {
  filter: brightness(0);
}

img {
  height: 30vh;
  width: auto;
  position: absolute;
  right: 60%;
  left: 40%;
}

.pokemonContainer {
  height: 40vh;
}
</style>