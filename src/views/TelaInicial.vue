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
import ProdutoItem from '@/components/produtos/ProdutoItem.vue';

const produtos = [
    {
        "nome": "Camiseta",
        "descricao": "Camiseta preta de algodão",
        "preco": 149.99,
        "imgSrc": "@/assets/camiseta preta.webp"
    },
    {
        "nome": "Bone",
        "descricao": "Um bone maneiro",
        "preco": 149.99,
        "imgSrc": "@/assets/bone.jpeg"
    },
    {
        "nome": "Tenis",
        "descricao": "Um tenis confortável",
        "preco": 149.99,
        "imgSrc": "src/assets/tenis.jpg"
    },
    {
        "nome": "Placa de video",
        "descricao": "NVIDIA RTX5090",
        "preco": 50000.00,
        "imgSrc": "src/assets/rtx5090.jpeg"
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