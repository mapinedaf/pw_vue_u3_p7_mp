<template>
  <div class="pokemonContainer">
    <img class="pokeImg ocultar" v-show = !mostrarPokemon
      :src=imagenFuente
      alt="No se pudo cargar la imagen "
    />
    <img class="pokeImg" v-show = mostrarPokemon
     :src=imagenFuente
      alt="No se pudo cargar la imagen "
    />
  </div>
</template>

<script>
export default {
  data(){
    return {
      propiedadPrueba:"Esta propiedad es de pueba"
    }
  },
  methods:{
    metodoPrueba(){
      console.log("Metodo ejecutado desde el padre")
    }
  },

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

.pokeImg {
  height: 30vh;
  width: auto;
  position: absolute;
  right: 45%;
  left: 40%;
}

.pokemonContainer {
  height: 40vh;
}
</style>