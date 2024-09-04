<template>
  <div class="home">
    <div class="home__container">
      <div class="home__body">
        <div class="home-journal">
          <div class="home-journal__about">
            <div class="about-journal__title">Уважаемые коллеги!</div>
            <div class="about-journal__subtitle">
              <p class="text" style="margin-bottom: 27px">
                Мы рады пригласить Вас к публикации статьи в научном журнале "Центр науки". Журнал имеет международные индексы ISSN 2361-568O, УДК и
                ББК, а также включен в Научную электронную библиотеку (eLibrary.ru). Все статьи, опубликованные в нашем журнале, размещаются и
                индексируются на платформе Google Scholar и доступны в научной библиотеке КиберЛенинка.
              </p>
            </div>
          </div>
          <div class="home-journal__results">
            <div class="results-journal__item">
              <img src="https://wsemiruch.online/_nuxt/img/scholar.c62b589.webp" alt="" />
            </div>
            <div class="results-journal__item">
              <img src="https://wsemiruch.online/_nuxt/img/elibrary.f9ae970.webp" alt="" />
            </div>
            <div class="results-journal__item">
              <img src="https://wsemiruch.online/_nuxt/img/cyberleninka.484ba03.webp" alt="" />
            </div>
            <div class="results-journal__item">
              <img src="https://wsemiruch.online/_nuxt/img/access.fd894fb.webp" alt="" />
            </div>
          </div>
        </div>
        <div class="home-articles">
          <div class="home-articles__body">
            <div class="home-articles__title">Публикация журнала состоит из нескольких простых шагов:</div>
            <div class="home-articles__box">
              <div class="home-articles__item">
                <ol class="articles-info">
                  <li>Оформите тест статьи в соответствии с требованиями журнала (минимум 5 страниц).</li>
                  <li>Отправьте статью в редакцию. Статью можно отправить по электронной почте на email: redactor@center-nauki.ru журнала.</li>
                  <li>После принятия статьи внесите оплату (200 рублей страница) и отправьте скриншот подтверждения оплаты.</li>
                  <li>Получите электронный журнал и сертификаты о публикации.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .home {
    &__body {
    }
  }
  .home-journal {
    padding: 32px 0px 2.7rem 0px;
    &__about {
      background: var(--primary);
      padding: 40px 102px 30px 102px;
      margin-bottom: 2.7rem;
    }
    &__results {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .about-journal {
    &__title {
      font-size: 24px;
      margin-bottom: 16px;
      font-weight: 700;
    }

    &__subtitle {
      p {
        font-size: 20px;
        line-height: 120%;
      }
    }
  }
  .results-journal {
    &__item {
      display: flex;
      align-items: center;
      height: 100px;
      margin-bottom: 10px;
      position: relative;
      width: 280px;
      img {
        left: 0;
        position: absolute;
        width: 100%;
      }
    }
  }

  .item-body {
    p {
      font-size: 14px;
      color: var(--text);
      line-height: 140%;
    }
    &__title {
      margin-bottom: 10px;
      span {
        font-size: 32px;
        color: var(--text);
      }
    }
  }
  .home-articles {
    &__body {
    }

    &__title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    &__box {
      border-top: 1px solid var(--black);
      padding: 24px 0px 26px 0px;
      border-bottom: 1px solid #dcdcdc;
    }

    &__item {
      p {
        margin-top: 7px;
        font-size: 24px;
        line-height: 140%;
      }
    }
  }
  .articles-info {
    li {
      font-size: 20px;
      margin-bottom: 7px;
    }
    &__border {
      border: 1px solid var(--text);
      background: var(--primary);
      display: inline-block;
      border-radius: 0.4rem;
      width: 0.4rem;
      height: 0.4rem;
      margin: 0px 8px;
    }
  }
</style>
