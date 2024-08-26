<script setup lang="ts"></script>

<template>
  <div class="contact">
    <div class="contact__container">
      <div class="contact__body">
        <h1 class="contact__title">Редакционная деятельность</h1>
        <div class="contact__menu">
          <ul class="menu__item">
            <li class="menu__list">
              Главный редактор: Зеновьева Валентина Олеговна
            </li>
            <li class="menu__list">Отвественный секретарь: У.Р.Сидоров</li>
            <li class="menu__list">Верстка: А.Иванченко</li>
          </ul>
        </div>
        <h1 class="contact__title">Контактная информация</h1>
        <div class="contact__subtitles">
          <p>Международный научный журнал «Центр науки»</p>
          <p>Ул. Довженко 6, Москва, 119590, Россия.</p>
          <p>
            Электронная почта:
            <a href="redactor@center-nauki.ru">redactor@center-nauki.ru</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact {
  margin-top: 30px;
  &__title {
    width: 400px;
    font-size: 24px;
    font-weight: 600;
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
  }
  &__subtitles {
    padding: 20px 20px 20px 10px;
    p {
      margin-bottom: 5px;
      font-size: 16px;
      a {
        cursor: pointer;
      }
    }
  }
}
.menu {
  &__item {
    padding: 20px;
  }

  &__list {
    list-style: disc;
    font-size: 16px;
    margin-bottom: 5px;
  }
}
</style>
