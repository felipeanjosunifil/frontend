<template>
    <Header></Header>
    <div class="tela-inicial">
        <RouterLink to="/about"> Ir para tela sobre </RouterLink>
        <h2> Tela inicial - Produtos </h2>
        <div class="produtos">
            <ProdutoItem @click="onItemClick" class="produto-item" v-for="p in produtos" :produto="p"></ProdutoItem>
        </div>
    </div>
</template>
<script setup>
import ProdutoItem from '@/components/produtos/ProdutoItem.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function onItemClick() {
    router.push('/about')
}

const produtos = ref([
    {
        "id": 1,
        "nome": "Camiseta",
        "descricao": "Camiseta preta de algodão",
        "preco": 149.99,
        "imgSrc": "camiseta preta.webp"
    },
    {
        "id": 2,
        "nome": "Bone",
        "descricao": "Boné estiloso",
        "preco": 80.99,
        "imgSrc": "bone.jpeg"
    },
    {
        "id": 3,
        "nome": "Tenis",
        "descricao": "Tenis confortável",
        "preco": 220.99,
        "imgSrc": "tenis.jpg"
    },
    {
        "id": 4,
        "nome": "Placa de vídeo",
        "descricao": "Nvidia RTX5090",
        "preco": 50000.99,
        "imgSrc": "rtx5090.jpeg"
    }
])


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