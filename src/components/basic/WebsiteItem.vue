<script lang="ts" setup>
defineOptions({
  name: "WebsiteItem",
});

defineProps<{
  item: Omit<WebsiteItem, "sortId">;
}>();
</script>

<template>
  <a :href="item.url" target="_blank" class="website-item">
    <div class="website-item__info">
      <div
        class="website-item__logo"
        :style="{
          backgroundColor: item.color || (item.icon ? undefined : '#bcbcbc'),
        }"
      >
        <img
          v-if="item.icon"
          class="site-logo"
          :src="item.icon"
          :alt="item.title"
        />
        <span v-else class="site-default-logo">{{
          item.title.slice(0, 1)
        }}</span>
      </div>
      <div class="title">{{ item.title }}</div>
    </div>

    <div class="website-item__info">
      <div class="description">
        {{ item.description || `网站链接: ${item.url}` }}
      </div>
    </div>
  </a>
</template>

<style lang="scss" scoped>
$text-line-height: 1.4rem;

.website-item {
  background-color: #f8dea9;
  .dark-mode & {
    background-color: #404040;
  }
  padding: 0.7rem;
  border-radius: var(--regular-border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: calc(
    $text-line-height + var(--super-mini-gap) + $text-line-height * 2
  );
  cursor: pointer;
  transition: all 0.2s ease;

  @media (any-hover: hover) {
    &:hover {
      background-color: #ffdd98;
      .dark-mode & {
        background-color: #454545;
      }
    }
  }

  &:active {
    border: 1px solid var(--secondary-text-color);
    box-shadow: inset 0px 0px 0.3rem 0px rgba(0, 0, 0, 0.3);
    transform: scale(0.99);
  }

  &__info {
    display: flex;
    align-items: center;
    overflow: hidden;
    margin-right: 0.4rem;
    .title {
      // 文本最多一行
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: $text-line-height;
    }
    .description {
      font-size: var(--small-font-size);
      color: var(--secondary-text-color);
      // 文本最多两行
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: $text-line-height;
      height: $text-line-height * 2;
      margin-top: var(--super-mini-gap);
    }
  }

  &__logo {
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 100%;
    position: relative;
    margin-right: 0.4rem;
    display: flex;
    align-items: center;
    .site-logo {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100%;
    }
    .site-default-logo {
      font-size: 2rem;
      color: #ffffff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
