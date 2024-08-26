<script setup lang="ts"></script>

<template>
  <div class="about-journal">
    <div class="about-journal__container">
      <div class="about-journal__body">
        <div class="about-journal__breadcrumb">
          <div class="breadcrumb__wrapper">
            <nuxt-link class="menu__link" to="/">ГЛАВНАЯ</nuxt-link>
            <nuxt-link class="menu__link" to="/journal">О ЖУРНАЛЕ </nuxt-link>
          </div>
        </div>
        <div class="about-journal__title">
          <h2>О ЖУРНАЛЕ</h2>
        </div>
        <div class="about-journal__box">
          <p style="margin-bottom: 20px">
            Журнал «Центр науки» приглашает научное сообщество, преподавателей
            вузов, молодых ученых и аспирантов познакомиться с уникальными
            результатами теоретических и прикладных исследований. Мы публикуем
            оригинальные научные статьи и обзоры на русском и английском языках,
            охватывая широкий спектр дисциплин:
          </p>
          <ul>
            <li>Физика</li>
            <li>Математика</li>
            <li>Культурология</li>
            <li>Химия</li>
            <li>Биология</li>
            <li>Техника и технология</li>
            <li>Сельское хозяйство</li>
            <li>История</li>
            <li>Экономика и управление</li>
            <li>Философия</li>
            <li>Филология</li>
            <li>Юриспруденция</li>
            <li>Педагогика</li>
            <li>Медицина</li>
            <li>Фармацевтика</li>
            <li>Ветеринария</li>
            <li>Искусствоведение</li>
            <li>Искусствоведение</li>
            <li>Социология</li>
            <li>Политология</li>
            <li>Геология и геодезия</li>
            <li>География</li>
            <li>Экология</li>
            <li>Архитектура</li>
          </ul>
          <p style="margin-top: 20px"><b>Периодичность:</b> Ежемесячный</p>
          <h3 style="margin-top: 20px"></h3>
          <p>
            <b>Политика свободного доступа: </b>
            Этот журнал предоставляет непосредственный открытый доступ к своему
            контенту, исходя из следующего принципа: свободный открытый доступ к
            результатам исследований способствует увеличению глобального обмена
            знаниями.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-journal {
  &__breadcrumb {
    margin: 10px 0;
    padding: 10px;
  }

  &__title {
    background: #e6e6e6;
    padding: 10px;
    h3 {
      font-size: 14px;
    }
  }

  &__box {
    margin-top: 20px;
    padding: 20px;
    p {
      font-size: 16px;
      line-height: 140%;
      margin-bottom: 10px;
      color: var(--text);
    }
  }

  ul {
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr;
    padding: 0 40px;
    li {
      font-size: 16px;
      line-height: 100%;
      margin-bottom: 5px;
      list-style: disc;
    }
  }
  h3 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
  }
}
.breadcrumb {
  &__wrapper {
    display: flex;
    align-items: center;
  }
}
.menu {
  &__link {
    font-style: italic;
    margin-right: 15px;
    position: relative;
    &:first-child {
      &::after {
        content: "/";
        position: absolute;
        right: -10px;
      }
    }
    &:last-child {
      color: #b2b2b2;
    }
  }
}
</style>
