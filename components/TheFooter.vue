<template>
  <footer class="footer">
    <div class="footer__wrapper __container">
      <div class="footer__wrapper-items">
        <div class="footer__wrapper-item">
          <h2>Научное издательство «Всемирный ученый»</h2>
          <h2>Международный научный журнал «Всемирный ученый»</h2>
          <h2>Ул. Козлова 2, Минск. 220034, Беларусь</h2>
          <h2>Электронная почта: <span style="text-decoration: underline">redactor@wsemiruch.online</span></h2>
        </div>
      </div>
      <div class="footer__wrapper-item">
        <div class="footer-menu__items">
          <nuxt-link exact :to="localePath('/')" class="footer-menu__item">{{ $t('menu.main') }}</nuxt-link>
          <nuxt-link :to="localePath('/about')" class="footer-menu__item"> {{ $t('menu.about') }}</nuxt-link>
          <nuxt-link :to="localePath('/current')" class="footer-menu__item">{{ $t('menu.current') }}</nuxt-link>
          <nuxt-link :to="localePath('/archive')" class="footer-menu__item">{{ $t('menu.archive') }}</nuxt-link>
        </div>
      </div>
      <div class="footer__wrapper-item">
        <div class="footer-menu__items">
          <nuxt-link exact :to="localePath('/')" class="footer-menu__item">Правило для авторов</nuxt-link>
          <nuxt-link :to="localePath('/')" class="footer-menu__item"> Рецензирование</nuxt-link>
          <nuxt-link :to="localePath('/rules-authors')" class="footer-menu__item">Этика публикаций</nuxt-link>
          <nuxt-link :to="localePath('/')" class="footer-menu__item">Оплата</nuxt-link>
          <nuxt-link :to="localePath('/')" class="footer-menu__item">Контакты</nuxt-link>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-items __container">
        <div class="footer__bottom-item">
          <h2>Публичная оферта</h2>
          <h2>Политика конфиденциальности</h2>
        </div>
        <div class="footer__bottom-item">© 2023 Все права защищены.</div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .footer {
    background-color: var(--primary);
    color: var(--white);
    &__wrapper {
      display: flex;
      justify-content: space-between;
      padding-top: 60px;
      padding-bottom: 10px;

      @media (max-width: 700px) {
        flex-direction: column;
      }
      &-item {
        h2 {
          margin-bottom: 15px;
        }
      }
    }
    &-menu {
      &__items {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
      }
      &__item {
        flex: 1 0 auto;
        font-size: 15px;
        line-height: 18px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 500;
        margin-bottom: 10px;
        color: #fff;
        font-family: 'PT Sans', sans-serif;
        transition: 0.3s ease;
        border-bottom: 1px solid transparent;
        &:hover {
          border-color: #fff;
        }
      }
    }
    &__bottom {
      border-top: 1px solid #fff;
      padding: 5px;
      &-items {
        display: flex;
        align-items: center;
        gap: 40px;
      }
      &-item {
        h2 {
          margin-bottom: 5px;
        }
      }
    }
  }
</style>
