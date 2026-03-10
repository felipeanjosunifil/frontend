<template>
    <Header></Header>
    <div class="tela-inicial">
        <h2> Tela inicial - Produtos </h2>
        <div class="produtos">
            <ProdutoItem class="produto-item" v-for="i in 5" :produto="produto"></ProdutoItem>
        </div>
        <RouterLink to="/about"> Ir para página sobre </RouterLink>
    </div>
</template>
<script setup>
import Header from '@/components/Header.vue';
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