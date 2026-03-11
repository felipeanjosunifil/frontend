<script setup>
import MeuComponente from './components/MeuComponente.vue';
import { ref } from 'vue';

const valorMaximo = ref(8)
const mostrarAviso = ref(false)

function onAtingiuValorMaximo(atingiu) {
//  if (atingiu) {
//    mostrarAviso.value = true
//  }
  
  mostrarAviso.value = atingiu
}

</script>
<template>
  <h2 v-show="mostrarAviso"> O valor máximo foi atingido </h2>
  <MeuComponente :valor-maximo="valorMaximo" @atingiu-valor-maximo="onAtingiuValorMaximo"></MeuComponente>
</template>

<style scoped>
</style>