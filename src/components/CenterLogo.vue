<script lang="ts" setup>
import GLOBAL_CONFIG from "@/config";
import { randomNum } from "@/utils";
import { onMounted, ref } from "vue";
import LocalLogo from "@/assets/logo.svg";
import { useHead } from "@unhead/vue";

defineOptions({
  name: "CenterLogo",
});

defineProps<{
  drawerVisible: boolean;
  touchable: boolean;
}>();

const emit = defineEmits<{
  backgroundLoaded: [];
}>();

const bgLoaded = ref<boolean>(false);
const slogan = ref<string>("");

if (GLOBAL_CONFIG.LOGO_URL) {
  useHead({
    link: [
      {
        rel: "preload",
        href: GLOBAL_CONFIG.LOGO_URL,
        as: "image",
      },
    ],
  });
}

/**
 * 加载背景图片
 */
function loadBackground() {
  var img = new Image();
  img.src = GLOBAL_CONFIG.BACKGROUND_IMG_URL;
  img.addEventListener("load", () => {
    bgLoaded.value = true;
    emit("backgroundLoaded");
  });
}

/**
 * 前往我的博客
 */
function goToBlog() {
  window.location.href = GLOBAL_CONFIG.BLOG_URL;
}

function randomSlogan() {
  const slogans = GLOBAL_CONFIG.SLOGANS;
  slogan.value = slogans[randomNum(0, slogans.length - 1)];
}

onMounted(() => {
  randomSlogan();
  loadBackground();
});
</script>

<template>
  <div
    :class="['logo-area', { 'is-blur': drawerVisible }]"
    :style="{ background: `url(${$config.BACKGROUND_IMG_URL})` }"
  >
    <div :class="['img-shadow', { 'img-shadow-show': bgLoaded }]"></div>
    <div class="inner" style="cursor: pointer" @click="goToBlog">
      <img
        :class="['main-logo', { 'main-logo-top': touchable }]"
        :src="GLOBAL_CONFIG.LOGO_URL || LocalLogo"
      />
      <div :class="['hello', { hello_bottom: touchable }]">
        <div>{{ slogan }}</div>
        <div class="hello_bottom_text">点击访问博客 {{ $config.BLOG_NAME }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.logo-area {
  background-size: cover !important;
  color: #8F82BC;
  background-position: center !important;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 100%;
  animation: logoEnter 1.2s;
  animation-fill-mode: forwards;
  transition: all 0.8s;
  &.is-blur {
    filter: blur(5px);
  }
  .img-shadow {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: radial-gradient(circle, transparent 20%, #f8dea9 20%, #f8dea9 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #f8dea9 20%, #f8dea9 80%, transparent 80%, transparent) 50px 50px, linear-gradient(#FAEBD7 8px, transparent 8px) 0 -4px, linear-gradient(90deg, #FAEBD7 8px, transparent 8px) -4px 0;
    background-color: #f8dea9;
    background-size: 100px 100px, 100px 100px, 50px 50px, 50px 50px;
    .dark-mode & {
      background: radial-gradient(circle, transparent 20%, #1f2122 20%, #1f2122 80%, transparent 80%, transparent), radial-gradient(circle, transparent 20%, #1f2122 20%, #1f2122 80%, transparent 80%, transparent) 50px 50px, linear-gradient(#333333 8px, transparent 8px) 0 -4px, linear-gradient(90deg, #333333 8px, transparent 8px) -4px 0;
      background-color: #1f2122;
    }
    overflow: hidden;
    transition: background-color 0.5s;
    border-radius: 100%;
    animation: shadowEnter 1.2s;
    animation-fill-mode: forwards;
  }
  .img-shadow-show {
    background: rgba(0, 0, 0, 0.5);
    .dark-mode & {
      background: rgba(0, 0, 0, 0.8);
    }
  }
  .inner {
    position: relative;
    .main-logo {
      height: 7rem;
      border-radius: 50%;
      position: absolute;
      transform: translate(-50%, -50%);
      transition: all 1s;
      top: 0;
    }
    .main-logo-top {
      top: -3.2rem;
    }
    .hello {
      color: #ffffff;
      width: 18.75rem;
      text-align: center;
      position: absolute;
      transform: translate(-50%, -50%);
      font-size: 1.5rem;
      opacity: 0;
      top: 100px;
      transition: all 1s;
    }
    .hello_bottom {
      opacity: 1;
      top: 3.5rem;
      .hello_bottom_text {
        font-size: var(--regular-font-size);
        margin-top: 0.5rem;
        padding-top: 0.5rem;
        border-top: 1px solid #fff;
      }
    }
  }
}
</style>
