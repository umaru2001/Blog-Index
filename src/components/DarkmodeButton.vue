<script setup>
import { defineProps, ref, computed, watch } from 'vue';

const props = defineProps({
  darkmode: {
    type: Boolean,
    default: false
  }
});

const isDarkMode = ref(props.darkmode);
// 初始化时读取浏览器设置的主题模式
const prefersDarkMode = window?.matchMedia('(prefers-color-scheme: dark)');
isDarkMode.value = prefersDarkMode.matches;
if (prefersDarkMode.matches) {
  document.body.classList.add('dark-mode');
} else {
  document.body.classList.remove('dark-mode');
}

const darkModeText = computed(() => {
  return isDarkMode.value ? 'Dark Mode' : 'Light Mode';
});

watch(isDarkMode, (value) => {
  if (value) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});

// 监听浏览器主题模式变化
prefersDarkMode?.addEventListener('change', (event) => {
  isDarkMode.value = event.matches;
});
</script>

<template>
  <div class="right-item">
      <span class="darkmode-switch-text">{{ darkModeText }}</span>
      <label class="switch">
        <input id="darkModeToggle" v-model="isDarkMode" type="checkbox">
        <span class="slider round"></span>
      </label>
    </div>
</template>

<style lang="scss" scoped>
.right-item {
  position: absolute;
  left: 1rem;
  top: 1rem;
  display: flex;
  align-items: center;
  z-index: 100;
}

.dark-mode .slider:before {
  background-color: #404040;
}

.darkmode-switch-text {
  font-size: 1.8rem;
  white-space: nowrap;
  font-weight: bold;
  margin-right: 1rem;
}

.switch {
  position: relative;
  display: inline-block;
  width: 63px;
  height: 32px;
  flex-shrink: 0;
}

.switch input[type="checkbox"] {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #8F82BC;
  transition: 0.4s;
  border-radius: 32px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 22px;
  left: 5px;
  bottom: 5px;
  background-color: #F8D090;
  transition: 0.4s;
  border-radius: 50%;
}

.dark-mode .slider:before {
  background-color: #404040;
}

input:checked + .slider {
  background-color: #F8D090;
}

input:checked + .slider:before {
  transform: translateX(31px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>