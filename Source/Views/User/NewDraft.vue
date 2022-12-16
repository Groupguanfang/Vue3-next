<script setup lang="ts">
import { ref } from "vue"
import { NInput } from "naive-ui"
const title = ref('')
</script>

<template>
  <div class="margin">
    <n-input v-model:value="title" size="large" placeholder="请输入文章标题" />
  </div>
</template>




