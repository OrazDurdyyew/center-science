<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__body">
        <div class="footer__menu">
          <div class="menu__item">
            <p>Международный научный журнал «Центр науки»</p>
            <p>Ул. Довженко 6, Москва, 119590, Россия.</p>
            <p>
              Электронная почта:
              <a href="http:redactor@center-nauki.ru"></a>
              redactor@center-nauki.ru
            </p>
          </div>
          <ul class="menu__item">
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/">Главная</nuxt-link>
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/journal"
                >О Журнале</nuxt-link
              >
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/latest-number"
                >Свежий Номер</nuxt-link
              >
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/archive">Архив</nuxt-link>
            </li>
          </ul>
          <ul class="menu__item">
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/rule-authors"
                >Правило для авторов</nuxt-link
              >
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/reviewing">
                Рецензирование</nuxt-link
              >
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/"
                >Этика публикаций</nuxt-link
              >
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/">Оплата</nuxt-link>
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__item-link" to="/">Контакты</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="footer__copyright">
          <div class="footer__copyright-item">
            <p>Публичная оферта</p>
            <p>Политика конфиденциальности</p>
          </div>
          <div class="footer__copyright-item-border">
            © 2024 Все права защищены.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  margin-top: 32px;
  background: var(--primary);
  &__copyright {
    display: flex;
    padding: 40px 0px;
  }
  &__menu {
    padding-top: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      margin-bottom: 10px;
    }
  }
  &__copyright-item {
    padding-right: 1.8rem;

    p {
      font-size: 16px;
      color: var(--text);
      &:first-child {
        margin-bottom: 7px;
      }
    }
  }
  &__copyright-item-border {
    font-size: 16px;
    color: var(--text);
    padding-left: 1.8rem;
    border-left: 1px solid #dcdcdc;
  }
}
.menu {
  &__item {
    p {
      font-size: 16px;
      color: var(--text);
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        background: var(--border-bottom);
        transition: 0.3s ease;
        width: 0;
        height: 2px;
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }
  &__list {
    margin-bottom: 10px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      background: var(--border-bottom);
      transition: 0.3s ease;
      width: 0;
      height: 2px;
    }
    &:hover {
      &::before {
        width: 100%;
      }
    }
  }

  &__item-link {
  }
}
</style>
