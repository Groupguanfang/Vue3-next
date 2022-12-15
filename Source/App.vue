<script setup lang="ts">
import { computed } from "vue"
import { NConfigProvider, useOsTheme, darkTheme } from "naive-ui"
import ThemeConfig from "../Config/ThemeConfig"

const osThemeRef = useOsTheme()
const theme = computed(() => (osThemeRef.value === "dark" ? darkTheme : null))
</script>

<template>
  <n-config-provider :theme="theme" :theme-overrides="ThemeConfig">
    <router-view v-slot="{ Component }">
      <transition appear mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </n-config-provider>
</template>
