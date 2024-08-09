<template>
  <div class="journal-banner">
    <div class="journal-banner__wrapper">
      <img :src="require(`@/assets/img/banner__${computedLocale}.webp`)" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      computedLocale() {
        return this.$i18n.locale
      }
    }
  }
</script>

<style lang="scss" scoped>
  .journal-banner {
    margin-bottom: 10px;
    width: 100%;
    &__wrapper {
      margin: 5px 0;
      position: relative;
      padding-top: 25%;

      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>
