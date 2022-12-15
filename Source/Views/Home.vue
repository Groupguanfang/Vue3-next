<script lang="ts" setup>
import {
  NSpace,
  NH1,
  NCarousel,
  NCarouselItem,
  NText,
  NGrid,
  NGi,
} from "naive-ui"
import Footer from "@/Components/Common/Footer.vue"
</script>

<template>
  <n-space class="margin container">
    <n-space vertical :size="0">
      <Footer />
      <n-text depth="3">
        {{ new Date().getMonth() }}月{{ new Date().getDate() }}日
      </n-text>
      <n-h1 style="margin-top: 0; margin-bottom: 0">心电社区</n-h1>
    </n-space>
    <n-carousel autoplay class="ppt">
      <img
        class="carousel-img"
        src="//static.light.xhhzs.cn/public/poster.jpeg"
      />
      <img
        class="carousel-img"
        src="//naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
      />
      <img
        class="carousel-img"
        src="//naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
      />
    </n-carousel>

    <n-grid :x-gap="35" class="App" :cols="4">
      <n-gi>
        <n-space :size="0" justify="center">
          <img src="//static.light.xhhzs.cn/public/bili.png" />
          <n-text>腕上B站</n-text>
        </n-space>
      </n-gi>
      <n-gi>
        <n-space :size="0" justify="center">
          <img src="//static.light.xhhzs.cn/public/novel.png" />
          <n-text>腕上小说</n-text>
        </n-space>
      </n-gi>
      <n-gi>
        <n-space :size="0" justify="center">
          <img src="//static.light.xhhzs.cn/public/news.png" />
          <n-text>腕上资讯</n-text>
        </n-space>
      </n-gi>
      <n-gi>
        <n-space :size="0" justify="center">
          <img src="//static.light.xhhzs.cn/public/netease.jpeg" />
          <n-text>腕上音乐</n-text>
        </n-space>
      </n-gi>
    </n-grid>
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
.App img {
  border-radius: 18px;
  width: 100%;
}
</style>
