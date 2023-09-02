<template>
  <HeaderCom></HeaderCom>
  <router-view></router-view>
  <FooterCom></FooterCom>
</template>

<script setup>
import HeaderCom from "../components/layouts/header.vue";
import FooterCom from "../components/layouts/footer.vue";
</script>
