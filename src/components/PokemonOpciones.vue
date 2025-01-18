<template>
  <div class="opcionesContenedor">
    <ul>
      <li @click="seleccionado()" v-for="pokemon in arregloPoke" :key="pokemon.id">{{pokemon.name}}</li> 

    </ul>
  </div>
</template>

<script>
export default {
  props:{
    arregloPoke:{
      type:Array,
      required:true
    }
  },
  methods:{
    seleccionado(){
      console.log("Hizo click")
    }
  }

}
</script>

<style>

ul{
  list-style-type: none;
}

li{

  width: 20vw;
  border:1px solid black;
  border-radius: 5px;
  cursor:pointer;
  
}

li:hover{
  background: rgba(0,0,0,0.2);
}

.opcionesContenedor{
  display:flex;
  justify-content: center;
}

</style>