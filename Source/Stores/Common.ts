import { defineStore } from "pinia"

export const useCommon = defineStore("common", {
  state: () => {
    return {
      counter: false,
    }
  },
})
