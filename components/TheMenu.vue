<template>
  <div class="journal-menu">
    <div :class="['journal-menu__wrapper', { active: isActive }]">
      <div class="journal-menu__items">
        <nuxt-link exact :to="localePath('/')" class="journal-menu__item">{{ $t('menu.main') }}</nuxt-link>
        <nuxt-link :to="localePath('/about')" class="journal-menu__item"> {{ $t('menu.about') }}</nuxt-link>
        <nuxt-link :to="localePath('/current')" class="journal-menu__item">{{ $t('menu.current') }}</nuxt-link>
        <nuxt-link :to="localePath('/archive')" class="journal-menu__item">{{ $t('menu.archive') }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['isActive'])
    },
    watch: {
      $route(to, from) {
        this.$store.dispatch('closeMenu')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .journal-menu {
    &__wrapper {
      background: #0452aa;
      @media (max-width: 700px) {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100vh;
        z-index: 2;
        transition: 0.3s ease;
        &.active {
          left: 0;
        }
      }
    }
    &__items {
      display: flex;
      align-items: center;
      padding: 14px 0;
      @media (max-width: 700px) {
        flex-direction: column;
        width: 100%;
        align-items: flex-start;
      }
    }
    &__item {
      flex: 1 0 auto;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      color: #fff;
      font-family: 'PT Sans', sans-serif;
      transition: 0.3s ease;
      @media (max-width: 700px) {
        border-bottom: 1px solid #fff;
        margin-left: 10px;
        padding: 10px;
      }
      &:not(:last-child) {
        border-right: 1px solid #fff;
        @media (max-width: 700px) {
          border-right: none;
        }
      }
      &:hover {
        transition: 0.3s ease;
        color: var(--hover);
      }
      &.nuxt-link-active {
        color: var(--hover);
      }
    }
  }
</style>
