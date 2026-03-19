<template>
    <Header></Header>
    <div class="tela-inicial">
        <RouterLink to="/about"> Ir para tela sobre </RouterLink>
        <h2> Tela inicial - Produtos </h2>
        <div class="produtos" v-if="produtos.length > 0">
            <ProdutoItem @click="onItemClick" class="produto-item" v-for="p in produtos" :produto="p"></ProdutoItem>
        </div>
        <div v-else>
            <h3> Nenhum produto cadastrado </h3>
        </div>
    </div>
</template>
<script setup>
import ProdutoItem from '@/components/produtos/ProdutoItem.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue'
import api from '@/api';

const produtos = ref([])

api.get('/produtos')
.then((response) => {
    produtos.value = response.data

})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log('GET /produtos foi executado')
})

const router = useRouter()

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