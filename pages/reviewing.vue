<script setup lang="ts"></script>

<template>
  <div class="reviewing">
    <div class="reviewing__container">
      <div class="reviewing__body">
        <div class="reviewing__breadcrumb">
          <div class="breadcrumb__wrapper">
            <nuxt-link class="menu__link" to="/">ГЛАВНАЯ</nuxt-link>
            <nuxt-link class="menu__link" to="/reviewing"
              >Рецензирование</nuxt-link
            >
          </div>
        </div>
        <div class="reviewing__description">
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Процедура рецензирования представляет собой важный этап оценки
              научных статей, целью которого является обеспечение точности и
              достоверности представленных материалов, а также, при
              необходимости, приведение их в соответствие с установленными
              стандартами конкретной научной области или науки в целом.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Настоящий регламент рецензирования рукописей, поданных для
              публикации, определяет порядок их рассмотрения. Все научные
              статьи, поступающие в редакцию, проходят обязательное анонимное
              рецензирование.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Рецензирование осуществляется членами редакционного совета и
              редакционной коллегии, а также приглашёнными рецензентами &ndash;
              ведущими специалистами с необходимым опытом научной работы в
              соответствующей области. Главный редактор, заместитель главного
              редактора или ответственный секретарь принимают окончательное
              решение о назначении рецензента для экспертной оценки
              статьи.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Ключевая задача рецензентов, как и всего процесса рецензирования,
              заключается не только в проведении экспертной оценки качества
              работы, но и в содействии его улучшению.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Рецензия должна содержать объективный, аргументированный и
              всесторонний анализ научных и методических достоинств и
              недостатков статьи. Процесс рецензирования должен проходить в
              условиях конфиденциальности. Рецензенты уведомляются о том, что
              предоставленные им рукописи являются интеллектуальной
              собственностью авторов и не подлежат разглашению. Нарушение
              конфиденциальности допускается только в случае обнаружения
              рецензентом недостоверности или фальсификации материалов,
              изложенных в статье.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >При оценке статьи рецензент учитывает следующие аспекты:</span
            >
          </p>
          <ul type="disc" style="margin-bottom: 0cm">
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >соответствие тематике научно-практической конференции или
                журнала;</span
              >
            </li>
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >научную новизну и значимость представленных результатов;</span
              >
            </li>
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >корректность использования результатов других авторов;</span
              >
            </li>
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >точность ссылок;</span
              >
            </li>
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >качество изложения и оформления.</span
              >
            </li>
          </ul>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >По итогам рецензирования рецензент выносит рекомендации
              относительно дальнейшей судьбы статьи, обосновывая каждое свое
              решение:</span
            >
          </p>
          <ul type="disc" style="margin-bottom: 0cm">
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >статья рекомендуется к публикации в представленном виде;</span
              >
            </li>
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >статья может быть рекомендована к публикации после устранения
                указанных недостатков;</span
              >
            </li>
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >статья требует дополнительного рецензирования другим
                специалистом;</span
              >
            </li>
            <li
              style="
                margin-top: 0cm;
                margin-right: 0cm;
                margin-bottom: 8pt;
                margin-left: 0cm;
                font-size: 11pt;
                font-family: 'Calibri', sans-serif;
                text-align: justify;
                line-height: normal;
              "
            >
              <span
                style="font-size: 16px; font-family: 'Times New Roman', serif"
                >статья не может быть опубликована.</span
              >
            </li>
          </ul>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Редакция информирует автора о результатах рецензирования по
              электронной почте. В случае необходимости доработки статьи
              редакция направляет автору соответствующие рекомендации. Процесс
              доработки не должен превышать двух месяцев с момента получения
              автором уведомления о необходимости внесения изменений.
              Доработанная статья повторно направляется на рецензирование.
              Статья может быть отправлена на повторное рецензирование как тому
              же рецензенту, который делал критические замечания, так и другому,
              по усмотрению редакции.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Если замечания рецензента носят незначительный характер и требуют
              только редакторских правок, редакция может принять решение о
              публикации статьи при согласии автора. В случае отказа автора от
              доработки статьи он обязан письменно или устно уведомить об этом
              редакцию. Если автор не возвращает доработанную статью в течение
              трёх месяцев со дня отправки рецензии и не сообщает об отказе от
              доработки, редакция снимает статью с учёта.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >В случае возникновения неразрешимых разногласий между автором и
              рецензентами редакционная коллегия вправе направить рукопись на
              дополнительное рецензирование. В конфликтных ситуациях решение
              принимает главный редактор на заседании редакционной
              коллегии.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Решение об отказе в публикации статьи принимается на заседании
              редакционной коллегии на основании рекомендаций рецензентов.
              Статьи, отклоненные решением редакционной коллегии, не подлежат
              повторному рассмотрению. Сообщение об отказе в публикации
              направляется автору по электронной почте.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Наличие положительной рецензии не гарантирует публикацию статьи.
              Окончательное решение о публикации принимает редакционная
              коллегия. В конфликтных ситуациях окончательное решение также
              принимает главный редактор.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
              line-height: normal;
            "
          >
            <span style="font-size: 16px; font-family: 'Times New Roman', serif"
              >Редакция не вступает в обсуждения с авторами по поводу
              отклоненных работ.</span
            >
          </p>
          <p
            style="
              margin-top: 0cm;
              margin-right: 0cm;
              margin-bottom: 8pt;
              margin-left: 0cm;
              font-size: 11pt;
              font-family: 'Calibri', sans-serif;
              text-align: justify;
            "
          >
            &nbsp;
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.reviewing {
  &__breadcrumb {
    margin: 10px 0;
    padding: 10px;
  }

  &__description {
    margin-top: 20px;
    padding: 20px;
    // p {
    //   font-size: 18px;
    //   line-height: 140%;
    //   margin-bottom: 10px;
    //   text-align: justify;
    //   text-indent: 15px;
    // }
    // ul {
    //   padding: 0 40px;

    //   li {
    //     list-style: disc;
    //     font-size: 16px;
    //     line-height: 160%;
    //     margin-bottom: 20px;
    //     position: relative;
    //   }
    // }
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
