import { defineStore } from "pinia"

export const useCommon = defineStore("common", {
  state: () => {
    return {
      counter: false,
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'LightingCommon',
        storage: localStorage,
      }
    ],
  }
})
