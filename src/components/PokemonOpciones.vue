<template>
  <div class="opcionesContenedor">
    <ul>
      <li>Opcion 1</li>
      <li>Opcion 2</li>
      <li>Opcion 3</li>
      <li>Opcion 4</li>
 
    </ul>
  </div>
</template>

<script>
export default {

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