<script setup lang="ts">
import { ref, computed } from "vue"
import { NConfigProvider, useOsTheme, darkTheme } from "naive-ui"
import ThemeConfig from "../Config/ThemeConfig"

const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>
