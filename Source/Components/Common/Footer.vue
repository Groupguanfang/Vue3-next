<script setup lang="ts">
import { onMounted, ref, computed, watchEffect } from "vue"
import { useOsTheme, useThemeVars, NElement, NSpace, NIcon } from "naive-ui"
import { useRoute } from "vue-router"
import {
  Home20Filled,
  Home20Regular,
  Iot20Filled,
  Iot20Regular,
  PersonCircle20Filled,
  PersonCircle20Regular
} from "@vicons/fluent"
const route = useRoute()
const theme = useThemeVars()
</script>

<template>
  <n-space id="footer" justify="space-around" :style="{ borderTop: '1px solid ' + theme.borderColor, background: theme.bodyColor }">
    <n-icon :size="30">
      <Home20Filled v-if="route.path === '/'" />
      <Home20Regular v-else />
    </n-icon>
    <n-icon :size="30">
      <Iot20Filled v-if="route.path === '/discover'" />
      <Iot20Regular v-else />
    </n-icon>
    <n-icon :size="30">
      <PersonCircle20Filled v-if="route.path === '/user'" />
      <PersonCircle20Regular v-else />
    </n-icon>
  </n-space>
</template>

<style lang="less" scoped>
#footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 10px;
  left: 0;
}
@media (prefers-color-scheme: dark) {
  #footer {
    color: #fff;
  }
}
</style>



