<script setup>
import Header from './components/Header.vue';
import MeuComponente from './components/MeuComponente.vue';
import { ref } from 'vue';

const valorMaximo = ref(12)
const valorMaximoAtingido = ref(false)

function onValorMaximo(atingiuValorMaximo) {
  if(atingiuValorMaximo) {
    valorMaximoAtingido.value = true
  }
}

</script>
<template>
  <Header></Header>
</template>

<style scoped>
</style>