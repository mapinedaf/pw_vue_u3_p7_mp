<template>
  <div class="stats" >
  <div class="containerStats">
    <h2>Vidas</h2>
    <ul>
      <li class="badge" v-for="vida in vidas" :key="vida">
        <img
        src ="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"
        alt=""
        />
      </li>
    </ul>
  </div>
  <div class="containerStats">
    <h2>score</h2>
    <ul>
      <li class="badge" v-for="i in score" :key="i">
        <img :src="listaBadges[i]" alt="." />
      </li>
    </ul>
  </div>
</div>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {},

  props: {
    listaBadges: {
      type: Array,
      required: true,
    },
    score: {
      type: Number,
      requiredd: true,
    },
    vidas: {
      type: Number,
      requiredd: true,
    },
  },
  computed: {},
};
</script>
  
  <style>
img {
  height: auto;
  width: 6vw;
  font-size:10vw;
}

.badge {
  overflow: hidden;
  display: inline;
}
.containerStats{
  display:inline;
  margin-left: 20vw;
}
.stats{
  display:flex;
  align-items: center;
}
</style>