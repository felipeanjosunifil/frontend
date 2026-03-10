<template>
    <div class="tela-inicial">
        <h2> Tela inicial - Produtos </h2>
        <div class="produtos">
            <ProdutoItem class="produto-item" v-for="i in 10" :produto="produto"></ProdutoItem>
        </div>

    </div>
</template>
<script setup>
import ProdutoItem from '@/components/produtos/ProdutoItem.vue';

const produto = {
    "nome": "Camiseta",
    "descricao": "Camiseta preta de algodão",
    "preco": 149.99,
    "imgSrc": "@/assets/bone.jpeg"
}

</script>
<style>

.tela-inicial {
    display: grid;
    place-items: center; 
    height: 100vh;
}

.produto-item {
    margin: 20px;
}

</style>