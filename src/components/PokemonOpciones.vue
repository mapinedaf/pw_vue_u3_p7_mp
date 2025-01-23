<template>
  <div class="opcionesContenedor">
    <ul>
      <li class ="liOP" @click="seleccionado(pokemon.id)" v-for="pokemon in arregloPoke" :key="pokemon.id">{{pokemon.name}}</li> 

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
    seleccionado(id){
      console.log(id);
      const objetoEnviado = {
        identificador:id,
        valor2:true
      }
      this.$emit('seleccion',objetoEnviado)
    }
  }

}
</script>

<style>

ul{
  list-style-type: none;
}

.liOP{

  width: 20vw;
  border:1px solid black;
  border-radius: 5px;
  cursor:pointer;
  
}

.liOP:hover{
  background: rgba(0,0,0,0.2);
}

.opcionesContenedor{
  display:flex;
  justify-content: center;
}

</style>