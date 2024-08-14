<template>
  <div class="home">
    <div class="home__container">
      <div class="home__body">
        <div class="home-journal">
          <div class="home-journal__about">
            <div class="about-journal__title">About the journal</div>
            <div class="about-journal__subtitle">
              <p class="text" style="margin-bottom: 27px">
                <span style="font-style: italic"
                  >The Journal of Hazardous Materials</span
                >
                is an international forum that advances world class research by
                publishing articles in the areas of Environmental Science and
                Engineering. We publish full-length research papers, review
                articles, and perspectives that improve our understanding of the
                hazards and …
              </p>
              <p class="description">View full aims & scope</p>
            </div>
          </div>
          <div class="home-journal__results">
            <div class="results-journal__item">
              <div class="results-journal__item-body">
                <div class="item-body__title">
                  <span>$4470</span>
                  <img src="" alt="" />
                </div>
                <p>Article publishing charge for open access</p>
              </div>
            </div>
            <div class="results-journal__item">
              <div class="results-journal__item-body">
                <div class="item-body__title">
                  <span>5 days</span>
                </div>
                <p>Time to first decision</p>
              </div>
            </div>
            <div class="results-journal__item">
              <div class="results-journal__item-body">
                <div class="item-body__title">
                  <span>32 days</span>
                </div>
                <p>Review time</p>
              </div>
            </div>
            <div class="results-journal__item">
              <div class="results-journal__item-body">
                <div class="item-body__title">
                  <span>79 days</span>
                </div>
                <p>Submission to acceptance</p>
              </div>
            </div>
          </div>
        </div>
        <div class="home-articles">
          <div class="home-articles__body">
            <div class="home-articles__title">
              Публикация журнала состоит из нескольких простых шагов:
            </div>
            <div class="home-articles__box">
              <div class="home-articles__item">
                <span class="articles-info">
                  <span class="articles-info__first">Research article</span>
                  <span class="articles-info__last">
                    <span class="articles-info__border"></span>
                    Abstract only
                  </span>
                </span>
                <p>
                  Оформите тест статьи в соответствии с требованиями журнала.
                  Требования к оформлению и Образец статьи можно посмотреть в
                  разделе «Правило для авторов» Файл статьи должен быть в
                  формате .doc или .docx (формат Microsoft Word).
                </p>
              </div>
              <div class="home-articles__item">
                <span class="articles-info">
                  <span class="articles-info__first">Research article</span>
                  <span class="articles-info__last">
                    <span class="articles-info__border"></span>
                    Abstract only
                  </span>
                </span>
                <p>
                  Отправьте статью в редакцию. Статью можно отправить по
                  электронной почте на email: redactor@wsemiruch.online журнала.
                  Регистрация на сайте журнала не требуется.
                </p>
              </div>
              <div class="home-articles__item">
                <span class="articles-info">
                  <span class="articles-info__first">Research article</span>
                  <span class="articles-info__last">
                    <span class="articles-info__border"></span>
                    Abstract only
                  </span>
                </span>
                <p>
                  Дождитесь результата проверки статьи. Как правило, первичная
                  проверка осуществляется в течение одного дня. Если в статье
                  имеются недочеты или ошибки - мы сообщим Вам об этом по email.
                  Мелкие технические ошибки и недочеты издательство исправит
                  самостоятельно.
                </p>
              </div>
              <div class="home-articles__item">
                <span class="articles-info">
                  <span class="articles-info__first">Research article</span>
                  <span class="articles-info__last">
                    <span class="articles-info__border"></span>
                    Abstract only
                  </span>
                </span>
                <p>
                  После принятия статьи внесите оплату и отправьте скриншот
                  подтверждения оплаты. Публикация осуществляется на платной
                  основе:200 руб. за каждую страницу. Оплата производится на
                  сайте журнала - ссылка на оплату.
                </p>
              </div>
              <div class="home-articles__item">
                <span class="articles-info">
                  <span class="articles-info__first">Research article</span>
                  <span class="articles-info__last">
                    <span class="articles-info__border"></span>
                    Abstract only
                  </span>
                </span>
                <p>
                  Получите сертификат о публикации. После оплаты публикации Вы
                  получите документы о публикации. Сертификат представляют собой
                  цветной документ формата А4, имеют печать и подпись Главного
                  редактора журнала.
                </p>
              </div>
              <div class="home-articles__item">
                <span class="articles-info">
                  <span class="articles-info__first">Research article</span>
                  <span class="articles-info__last">
                    <span class="articles-info__border"></span>
                    Abstract only
                  </span>
                </span>
                <p>
                  Получите электронный журнал. Рассылка журнала происходит в
                  течение 1 - 2 дней после окончания приема статей в выпуск. На
                  сайте журнала. Вы можете скачать последний выпуск журнала в
                  разделе свежий номер.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
    justify-content: center;
  }
}
.about-journal {
  &__title {
    font-size: 24px;
    margin-bottom: 16px;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 14px;
    p {
      line-height: 170%;
    }
  }
}
.results-journal {
  &__item {
    width: 250px;
    flex: 1 1 0%;
  }

  &__item-body {
    border-left: 1px solid var(--black);
    padding-left: 16px;
    margin-top: 24px;
    &:first-child {
      padding-right: 16px;
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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-top: 1px solid var(--black);
    padding: 24px 0px 26px 0px;
    gap: 30px;
    border-bottom: 1px solid #dcdcdc;
  }

  &__item {
    width: 350px;
    flex: 1 1 0%;
    p {
      margin-top: 7px;
      font-size: 24px;
      line-height: 140%;
    }
  }
}
.articles-info {
  &__first {
    font-size: 14px;
    color: var(--text);
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
