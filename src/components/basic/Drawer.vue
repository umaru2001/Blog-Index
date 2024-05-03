<script lang="ts" setup>
import { CloseSquareFilled, SketchOutlined } from "@ant-design/icons-vue";
import { ref, toRefs, watch } from "vue";

defineOptions({
  name: "Drawer",
  inheritAttrs: false,
});

const props = defineProps<{
  modelValue: boolean;
}>();

const { modelValue } = toRefs(props);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const drawerIndex = ref(modelValue.value ? 99 : -1);
const timer = ref<NodeJS.Timeout>();

watch(modelValue, (newVal) => {
  if (newVal === false) {
    timer.value = setTimeout(() => {
      drawerIndex.value = -1;
    }, 500);
  } else {
    if (timer.value) {
      clearTimeout(timer.value);
    }
    drawerIndex.value = 99;
  }
});

function onCloseBtnClick() {
  emit("update:modelValue", false);
}

function onDrawerClick(e: Event) {
  if (e.target === e.currentTarget) {
    emit("update:modelValue", false);
  }
}
</script>

<template>
  <teleport to="#app">
    <div
      class="drawer"
      :style="{
        zIndex: drawerIndex,
      }"
      v-bind="$attrs"
      @click="onDrawerClick"
    >
      <div :class="['drawer__inner', { 'is-opened': modelValue }]">
        <close-square-filled
          class="drawer__close-btn"
          @click="onCloseBtnClick"
        />
        <div class="drawer__content">
          <slot></slot>
        </div>
        <div class="drawer__footer">
          <a href="https://github.com/EsunR/Blog-Index" target="_blank">
            UI Powered by <b>EsunR</b>
          </a>
          <span>&nbsp;|&nbsp;</span>
          <a href="https://ntr.best/" target="_blank">
            Links forked from <b>Jitsu</b>
          </a>
        </div>
      </div>
    </div>
  </teleport>
</template>

<style lang="scss" scoped>
.drawer {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;

  &__inner {
    padding: 1rem;
    position: absolute;
    bottom: 0.5rem;
    left: 50%;
    transition: transform ease 0.5s;
    transform: translate(-50%, calc(100% + 0.5rem));
    z-index: 100;
    background-color: #F8D090;
    .dark-mode & {
      background-color: #333333;
    }
    width: calc(100vw - 1rem);
    box-sizing: border-box;
    box-shadow: 0 10px 35px 2px rgba(0, 0, 0, .15), 0 5px 15px rgba(0, 0, 0, .07), 0 2px 5px -5px rgba(0, 0, 0, .1);
    border-radius: var(--regular-border-radius);
    display: flex;
    flex-direction: column;
    overflow: hidden;

    @media screen and (min-width: 768px) {
      width: 90vw;
      bottom: 3rem;
      transform: translate(-50%, calc(100% + 3rem));
    }

    &.is-opened {
      transform: translate(-50%, 0);
      max-height: calc(100vh - 70px);
    }
  }

  &__close-btn {
    position: absolute;
    right: 1rem;
    top: 1.1rem;
    font-size: 1.2rem;
  }

  &__content {
    margin-bottom: var(--super-mini-gap);
  }

  &__footer {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: var(--small-font-size);
    .footer-icon {
      margin-right: 0.3rem;
      font-size: var(--regular-font-size);
    }
  }
}
</style>
