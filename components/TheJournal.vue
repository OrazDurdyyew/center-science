<template>
  <div class="journal">
    <div class="journal__wrapper">
      <div class="journal__description">
        <div class="journal__description-image">
          <img :src="require(`@/assets/img/journal__${computedLocale}.webp`)" alt="" />
        </div>
        <div class="journal__description-text">
          <p class="journal__description-title">Научное издательство</p>
          <p class="journal__description-title">«Всемирный ученый»</p>
          <p class="journal__description-title">Международный научный журнал</p>
          <p class="journal__description-title">«Всемирный ученый»</p>
          <p class="journal__description-title">ISSN 2712-083D</p>
          <p class="journal__description-title">КиберЛенинка №37102-01</p>
          <p class="journal__description-title">Google Scholar</p>

          <p class="journal__description-description">
            Организационный взнос – <span>200 руб/страница</span> <br />
            Сертификат о публикации – <span>бесплатно</span>
          </p>
          <p class="journal__description-title">Email: redactor@wsemiruch.online</p>
        </div>
      </div>
    </div>
    <the-countdown></the-countdown>
  </div>
</template>

<script>
  import openPdf from '@/mixins/openPdf'

  export default {
    mixins: [openPdf],
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    computed: {
      computedLocale() {
        return this.$i18n.locale
      }
    }
  }
</script>

<style lang="scss" scoped>
  .journal {
    background: #f2f2f2;
    padding: 20px 25px;
    overflow: hidden;
    @media (max-width: 550px) {
      padding: 15px;
    }
    &__wrapper {
      padding: 20px;
      display: flex;
      height: 100%;
      @media (max-width: 550px) {
        padding: 0px;
        margin-bottom: 10px;
      }
    }

    &__description {
      display: flex;
      @media (max-width: 550px) {
        display: block;
      }

      &-image {
        flex: 0 0 150px;
        @media (max-width: 700px) {
          flex: 0 0 100px;
        }
        @media (max-width: 550px) {
          position: relative;
          float: left;
          margin-right: 10px;
        }
        img {
          width: 180px;
          @media (max-width: 700px) {
            width: 120px;
          }
          @media (max-width: 550px) {
            width: 100px;
          }
        }
      }
      &-text {
        margin-left: 20px;
        flex: 1 1 auto;
        @media (max-width: 550px) {
          margin-left: 0;
        }
      }
      &-title {
        font-size: 17px;
        color: #333;
        font-weight: 600;
        margin-bottom: 10px;
        @media (max-width: 700px) {
          font-size: 14px;
        }
        @media (max-width: 320px) {
          font-size: 12px;
        }
      }
      &-description {
        font-size: 14px;
        color: #666;
        font-weight: 500;
        line-height: 26px;
        span {
          color: #000;
          font-size: 16px;
          @media (max-width: 320px) {
            font-size: 12px;
          }
        }
        @media (max-width: 700px) {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }

    &__image {
      height: 100%;
      width: 20%;
      margin-right: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &__data {
      display: flex;
      flex-direction: column;
      width: 75%;
      &-text {
        flex: 1 1 auto;
        margin-top: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 14.75px;
        line-height: 22px;
        color: var(--text);
        cursor: pointer;
      }
      &-items {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      &-item {
        font-weight: 600;
        font-size: 18px;
        margin-left: 10px;
        line-height: 22px;
        color: var(--text);
      }
    }
  }

  .journal__pdf {
    background: var(--primary);
    padding: 5px 10px;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    user-select: none;
    color: var(--white);
  }
</style>
