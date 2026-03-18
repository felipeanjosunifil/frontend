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
import api from '@/api'

const router = useRouter()

function onItemClick() {
    router.push('/about')
}

const produtos = ref([])

api.get('/produtos')
.then((response) => {
    console.log(response.data)
    produtos.value = response.data
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('executou o método GET /produtos')
})

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