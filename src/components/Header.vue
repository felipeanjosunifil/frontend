<template>
  <header class="header">
    <div class="header-left">
      <img src="/public/shop.png" class="icon" alt="Shop" />
    </div>

    <div class="header-center">
      <h1 class="title">Minha Loja</h1>
    </div>
    <div class="header-right">
      <div class="user-avatar"></div>
    </div>
  </header>
</template>
<script setup>
    
</script>
<style>
  .header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    height: 70px;
    padding: 0 20px;
    background-color: #973f04;
    border-bottom: 1px solid #ddd;
  }

  .header-left {
    justify-self: start;
  }

  .header-center {
    justify-self: center;
  }

  .header-right {
    justify-self: end;
  }

  /* Ícone da esquerda */
  .icon {
    height: 4vh;
    width: 2vw;
  }

  /* Título */
  .title {
    font-size: 20px;
    margin: 0;
  }

  /* Avatar do usuário */
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #ddd;
  }
</style>
