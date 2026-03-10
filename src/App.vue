<script setup>
import MeuComponente from './components/MeuComponente.vue';
import { ref } from 'vue';

const valorMaximo = ref(5)
const exibirAviso = ref(false)

function onValorMaximo(atingiu){
  exibirAviso.value = atingiu

//  if(atingiu) {
//    exibirAviso.value = true
//  }

}

</script>
<template>
  <h2 v-show="exibirAviso"> O valor máximo foi atingido </h2>
  <MeuComponente :valor-maximo="valorMaximo" @atingiu-valor-maximo="onValorMaximo">
  </MeuComponente>
</template>

<style scoped>
</style>