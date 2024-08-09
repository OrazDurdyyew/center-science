<template>
  <header class="header">
    <div class="header__wrapper __container">
      <div class="header__title">
        ВСЕМИРНЫЙ УЧЕНЫЙ <br />
        WORLD SCIENTIST
      </div>

      <div class="header__languages">
        <div style="display: flex; flex-direction: column; padding-right: 50px">
          <span>ISSN 2712-083D</span>
        </div>
        <!-- <span
          v-for="(lang, index) in $i18n.locales"
          :key="index"
          @click="setLocale(lang.code)"
          class="header__languages-item"
          :class="{ active: lang.code === $i18n.locale }"
          >{{ lang.lang }}</span
        > -->
      </div>
      <div @click="$store.dispatch('toggleMenu')" class="burger-toggle" :class="{ 'is-active': isActive }">
        <span class="burger-toggle__line"></span>
        <span class="burger-toggle__line"></span>
        <span class="burger-toggle__line"></span>
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data() {
      return {}
    },
    computed: {
      ...mapGetters(['isActive'])
    },
    methods: {
      setLocale(lang) {
        if (this.$i18n.locale !== lang) {
          this.$i18n.setLocale(lang)
        }
        this.showLang = !this.showLang
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    background: var(--primary);
    margin-bottom: 10px;
    color: #fff;

    &__wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 8px 25px;
    }
    &__title {
      white-space: nowrap;
      margin-top: 5px;
      line-height: 16px;
      font-size: 12px;
      text-transform: uppercase;
      @media (max-width: 700px) {
        display: none;
      }
    }
    &__menu {
      flex: 1 1 auto;
      margin-left: 25px;
      &-items {
        display: flex;
        align-items: center;
      }
      &-item {
        margin-left: 15px;
        font-weight: 500;
        font-size: 14px;
        line-height: 24px;
        cursor: pointer;
        user-select: none;
        transition: 0.3s ease;
        &:hover {
          color: var(--hover);
        }
        &._active {
          color: var(--hover);
        }
      }
    }
    &__languages {
      &-item {
        cursor: pointer;
        font-size: 15px;
        font-style: normal;
        font-weight: 800;
        transition: 0.3s ease;
        position: relative;
        margin-left: 10px;

        &:hover {
          color: #666;
        }
        &:not(:last-child)::after {
          position: absolute;
          right: -8px;
          content: '|';
          color: #fff;
          font-weight: 600;
        }
        &.active {
          color: #666;
        }
      }
      &-arrow {
        color: #fff;
        font-weight: 800;
        text-align: center;
      }
    }
  }

  .burger-toggle {
    z-index: 3;
    flex-direction: column;
    justify-content: space-between;
    width: 20px;
    height: 15px;
    cursor: pointer;
    position: relative;

    display: none;
    @media (max-width: 700px) {
      display: flex;
    }
  }

  .burger-toggle__line {
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: transform 0.3s ease;
  }

  .burger-toggle.is-active .burger-toggle__line:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }

  .burger-toggle.is-active .burger-toggle__line:nth-child(2) {
    opacity: 0;
  }

  .burger-toggle.is-active .burger-toggle__line:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }
</style>
