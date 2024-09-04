<script setup lang="ts"></script>

<template>
  <div class="rule-authors">
    <div class="rule-authors__container">
      <div class="rule-authors__body">
        <div class="rule-authors__breadcrumb">
          <div class="breadcrumb__wrapper">
            <nuxt-link class="menu__link" to="/">ГЛАВНАЯ</nuxt-link>
            <nuxt-link class="menu__link" to="/rule-authors">Правило для авторов</nuxt-link>
          </div>
        </div>
        <div class="rule-authors__description">
          <p>
            <strong>
              <span>Образец статьи – </span>
              <span style="text-decoration: underline">СКАЧАТЬ!</span>
            </strong>
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Объем: </span>
            </strong>
            <span>к публикации принимаются статьи объемом</span>
            <strong>
              <span>не менее 5-х страниц.</span>
            </strong>
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Язык публикаций: </span>
            </strong>
            <span>РУССКИЙ и АНГЛИЙСКИЙ.</span>
          </p>
          <p>
            <strong>
              <span>Формат: </span>
            </strong>
            <span>статьи должны быть выполнены в текстовом редакторе </span>
            <strong>
              <span>Microsoft Word.</span>
            </strong>
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Размер страницы – А4, </span>
            </strong>
            <span>ориентация листа – книжная, </span>
            <strong>
              <span>поля страницы – 2 см со всех сторон. </span>
            </strong>
            <span>Страницы не нумеруются.</span>
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>УДК: </span>
            </strong>
            <span>присваивается индекс УДК, строчные буквы, </span>
            <strong>
              <span>шрифт – Times New Roman 14, </span>
            </strong>
            <span>интервал – </span>
            <strong>
              <span>полуторный, </span>
            </strong>
            <span>выравнивание по левому краю.</span>
            <br />
            <br />
            <strong>
              <span>УДК можно посмотреть на сайте: </span>
            </strong>
            <a href=" https://teacode.com/online/udc/">https://teacode.com/online/udc/</a>
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Информация об авторах: </span>
            </strong>
            <span
              >строчными буквами ученая степень, ученое звание, должность. На следующей строке полное наименование организации и в скобках страна и
              город.
            </span>
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Заголовок (название) статьи: </span>
            </strong>
            <span
              >ниже через один интервал заголовок статьи прописными буквами, шрифт – полужирный, Times New Roman 14, интервал – полуторный,
              выравнивание по центру.</span
            >
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Аннотация и ключевые слова: </span>
            </strong>
            <span
              >через отступ в один интервал пишется аннотация и ключевые слова, шрифт – курсив, Times New Roman 12, интервал – полуторный,
              выравнивание по ширине.</span
            >
          </p>

          <div class="description__box">
            <p>
              <strong>
                <span>Анкета автора</span>
              </strong>
              <span
                >подлежит обязательному заполнению и направляется вместе со статьей по электронной почте. Направляя анкету и материалы для публикации,
              </span>
              <strong>
                <span>Вы соглашаетесь с Правилами публикации </span>
              </strong>
              <span>статей.</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .rule-authors {
    &__breadcrumb {
      margin: 10px 0;
      padding: 10px;
    }

    &__description {
      p {
        font-size: 18px;
        line-height: 140%;
        margin-bottom: 10px;
        text-indent: 10px;
      }
      strong {
        font-size: 18px;
        line-height: 140%;
        margin-bottom: 10px;
        text-indent: 10px;
      }
      a {
        color: rgb(0, 152, 157);
        font-size: 18px;
        line-height: 140%;
        margin-bottom: 10px;
        text-indent: 10px;
      }
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
          content: '/';
          position: absolute;
          right: -10px;
        }
      }
      &:last-child {
        color: #b2b2b2;
      }
    }
  }
  .description {
    &__box {
      padding: 40px 0;
      table {
        border: 1px solid #000;
        border-spacing: 5px;
        width: 100%;
        margin-bottom: 40px;
        th,
        td {
          border: 1px solid #000;
          font-size: 15px;
          padding: 10px;
          text-align: left;
        }
      }
    }
  }
</style>
