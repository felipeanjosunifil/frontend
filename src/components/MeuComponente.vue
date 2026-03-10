<template>
    <div>
        <h1> {{ titulo }} </h1>

        <p> {{ contador }} </p>

        <p v-if="contador < 10"> O contador é menor que 10 </p>
        <!-- condição if que verifica se contador é menor que 10 -->
        <p v-else> O contador é igual ou maior que 10 </p>

        <input type="text" v-model="textoUsuario">

        <p> {{ textoUsuario }} </p>

        <button @click="onButtonClick">Aumentar contador</button> <!-- Escuta evento de clique do botão -->

        <div :class="estiloContador" @mouseenter="onMouseEnter" @mouseleave="onMouseOut">
            <!-- estilo diâmico @mouseenter escuta evento de mouse em cima da div @mouseleave quando mouse sai-->
            <p v-for="i in contador"> {{ i }} </p> <!-- laço for para parágrafo -->
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const titulo = ref('Meu componente Vue.')
const contador = ref(0)
const estiloContador = ref('contador')
const textoUsuario = ref('insira seu texto aqui')

const props = defineProps({
    valorMaximo: Number
})

const emit = defineEmits(['atingiuValorMaximo'])

function onButtonClick() {

    console.log(textoUsuario.value)
    
    if(contador.value < props.valorMaximo) {
        contador.value++
    }

    if(contador.value == props.valorMaximo) {
        emit('atingiuValorMaximo', true)
    }

    if (contador.value > 10) {
        estiloContador.value = 'contador-vermelho'
    }
}

function onMouseEnter() {
    estiloContador.value = 'contador-verde'
}


function onMouseOut() {
    estiloContador.value = 'contador'
}

</script>

<style>
.contador {
    background-color: aqua;
}

.contador-vermelho {
    background-color: red;
}

.contador-verde {
    background-color: green;
}
</style>