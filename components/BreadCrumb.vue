<template>
  <div class="breadcrumb">
    <div class="breadcrumb__wrapper">
      <nuxt-link exact v-for="(item, index) in pages" :key="index" class="breadcrumb__item" :to="item.path">{{ item?.name }}</nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pages: {
        type: Array,
        default: () => []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .breadcrumb {
    padding: 10px;
    margin: 10px 0;
    &__wrapper {
      display: flex;
      align-items: center;
    }
    &__item {
      position: relative;
      margin-right: 15px;
      font-style: italic;
      &:hover {
        color: var(--hover);
      }
      //   border-bottom: 1px solid var(--primary);
      &:not(:last-child):after {
        content: '/';
        position: absolute;
        right: -10px;
      }
    }
  }

  //   .nuxt-link-active {
  //     color: var(--hover);
  //   }
</style>
