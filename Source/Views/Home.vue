
<script lang="ts" setup>
import { NSpace, NH1, NCarousel, NCarouselItem } from "naive-ui"
</script>

<template>
  <n-space class="margin">
    <n-h1>心电社区</n-h1>
    <n-carousel autoplay class="ppt">
      <n-carousel-item>
      <img class="carousel-img" src="//static.light.xhhzs.cn/public/poster.jpeg" />
      </n-carousel-item>
      <n-carousel-item>
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg" />
      </n-carousel-item>
      <n-carousel-item>
      <img class="carousel-img" src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg" />
      </n-carousel-item>
    </n-carousel>
    
  </n-space>
</template>

<style lang="less" scoped>
.carousel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.ppt {
  border-radius: 18px;
}
</style>





