<template>
    <Header></Header>
    <div class="tela-inicial">
        <h2> Tela inicial - Produtos </h2>
        <div class="produtos">
            <ProdutoItem class="produto-item" v-for="p in produtos" :produto="p"></ProdutoItem>
        </div>
        <RouterLink to="/about"> Ir para página sobre </RouterLink>
    </div>
</template>
<script setup>
import Header from '@/components/Header.vue';
import ProdutoItem from '@/components/produtos/ProdutoItem.vue';

const produtos = [
    {
    "nome": "Camiseta",
    "descricao": "Camiseta preta de algodão",
    "preco": 149.99,
    "imgSrc": "camiseta preta.webp"
},
{
    "nome": "Bone",
    "descricao": "Bné estiloso",
    "preco": 80.99,
    "imgSrc": "bone.jpeg"
},
{
    "nome": "Tenis",
    "descricao": "Tenis confortável",
    "preco": 220.99,
    "imgSrc": "tenis.jpg"
},
{
    "nome": "Placa de vídeo",
    "descricao": "Nvidia RTX5090",
    "preco": 50000.99,
    "imgSrc": "rtx5090.jpeg"
}
]

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