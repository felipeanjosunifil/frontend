<template>
    <div class="produto-item">
        <div style="width: 70%;">
            <div style="height: 70%;">
                <text class="nome"> {{ produto.nome }} </text>
                <text class="descricao-produto"> {{ produto.descricao }} </text>
            </div>
            <div style="height: 30%;">
                <text :class="validarPreco()"> R$ {{ produto.preco }} </text>
            </div>
        </div>
        <div style="width: 30%;">
            <img :src="produto.imgSrc" :alt="produto.descricao">
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const estiloValor = ref('preco')

const props = defineProps({
    produto: {
        nome: String,
        descricao: String,
        preco: Number,
        imgSrc: String
    }
})


function validarPreco() {
    if (props.produto.preco > 10000.00) {
        return 'preco-caro'
    } else {
        return 'preco'
    }

}

</script>
<style>
.produto-item {
    display: flex;
    background-color: #81b29a;
    width: 30vw;
    height: 15vh;
    border-radius: 10px;
    padding: 15px;
}

.nome {
    font-size: 18px;
    font-weight: bold;
}

.descricao-produto {
    margin-top: 0.7em;
    font-size: 14px;
    color: grey;
    display: block;
}

.preco {
    font-size: 24px;
    color: grey;
    display: block;
}

.preco-caro {
    font-size: 24px;
    color: red;
    display: block;
}

img {
    width: 8vw;
    height: 10vh;
}
</style>