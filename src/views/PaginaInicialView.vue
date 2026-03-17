<template>
    <Header></Header>
    <div class="tela-inicial">
        <h2> Tela inicial - Produtos </h2>
        <RouterLink to="/about"> Ir para página sobre </RouterLink>
        <div class="produtos">
            <ProdutoItem class="produto-item" v-for="p in produtos" :produto="p" @click="onItemClick"></ProdutoItem>
        </div>
    </div>
</template>
<script setup>
import ProdutoItem from '@/components/produtos/ProdutoItem.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import api from '@/api'

const router = useRouter()
const produtos = ref([])

api.get('/produtos').then((response) => {
    console.log('Sucesso!')
    console.log(response.data)
    produtos.value = response.data
})
    .catch((error) => {
        console.log('Erro!')
        console.log(error)
    })
    .finally(() => {
        console.log('Executou!')
    })

function onItemClick() {
    router.push('/about')
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