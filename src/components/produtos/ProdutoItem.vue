<template>
    <div class="produto-item">
        <div style="width: 70%;">
            <div style="height: 70%;">
                <text class="nome"> {{ produto.nome }} </text>
                <text class="descricao-produto"> {{ produto.descricao }} </text>
            </div>
            <div style="height: 30%;">
                <text class="preco"> R$ {{ produto.preco }} </text>
            </div>
        </div>
        <div style="width: 30%;">
            <img :src="produto.imgSrc" :alt="produto.descricao">
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    produto: {
        nome: String,
        descricao: String,
        preco: Number,
        imgSrc: String
    }
})


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

img {
    width: 8vw;
    height: 10vh;
}
</style>