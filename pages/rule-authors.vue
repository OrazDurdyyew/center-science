<script setup lang="ts"></script>

<template>
  <div class="rule-authors">
    <div class="rule-authors__container">
      <div class="rule-authors__body">
        <div class="rule-authors__breadcrumb">
          <div class="breadcrumb__wrapper">
            <nuxt-link class="menu__link" to="/">ГЛАВНАЯ</nuxt-link>
            <nuxt-link class="menu__link" to="/rule-authors"
              >Правило для авторов</nuxt-link
            >
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
            <a href=" https://teacode.com/online/udc/"
              >https://teacode.com/online/udc/</a
            >
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Информация об авторах: </span>
            </strong>
            <span
              >строчными буквами ученая степень, ученое звание, должность. На
              следующей строке полное наименование организации и в скобках
              страна и город.
            </span>
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Заголовок (название) статьи: </span>
            </strong>
            <span
              >ниже через один интервал заголовок статьи прописными буквами,
              шрифт – полужирный, Times New Roman 14, интервал – полуторный,
              выравнивание по центру.</span
            >
          </p>
          <p style="margin-bottom: 40px">
            <strong>
              <span>Аннотация и ключевые слова: </span>
            </strong>
            <span
              >через отступ в один интервал пишется аннотация и ключевые слова,
              шрифт – курсив, Times New Roman 12, интервал – полуторный,
              выравнивание по ширине.</span
            >
          </p>
          <p>
            <strong>
              <span style="color: red">Приложение 1. </span>
            </strong>
            <span>Образец оформления статьи</span>
          </p>
          <div class="description__box">
            <p>
              <strong>
                <span>УДК 627.7</span>
              </strong>
            </p>
            <p style="text-align: center">
              <strong>
                <span>Иванов Р.Р.</span>
              </strong>
              <br />
              <span
                >канд. экон. наук, доцент кафедры экономики и финансов <br />
                Пермский национальный исследовательский политехнический
                университет <br />
                (г. Пермь, Россия)</span
              >
              <br />
              <br />
              <strong> <span>Петров А.А. </span> <br /> </strong>
              <span
                >канд. экон. наук, доцент кафедры экономики и финансов <br />
                Пермский национальный исследовательский политехнический
                университет <br />
                (г. Пермь, Россия)</span
              >
              <br />
              <br />
              <strong>
                <span
                  >ЭКОНОМЕТРИЧЕСКИЙ АНАЛИЗ ВЛИЯНИЯ КОЛИЧЕСТВА <br />
                  ЛЕГКОВЫХ АВТОМОБИЛЕЙ НА ЗАГРЯЗНЕНИЕ АТМОСФЕРНОГО ВОЗДУХА</span
                >
              </strong>
            </p>
            <p style="margin-bottom: 40px">
              <strong>
                <em>
                  <span>Аннотация: </span>
                </em>
              </strong>
              <em>
                <span>
                  в работе построена математическая модель, характеризующая
                  зависимость загрязнения атмосферного воздуха от количества
                  легковых автомобилей. Представлен корреляционный и
                  регрессионный анализ. При помощи эконометрических инструментов
                  спрогнозированы тренды развития фактора в модели, на основании
                  чего осуществлен прогноз загрязнения атмосферного
                  воздуха.</span
                >
              </em>
            </p>
            <p style="margin-bottom: 40px">
              <strong>
                <em>
                  <span>Ключевые слова: </span>
                </em>
              </strong>
              <em>
                <span
                  >загрязнение, атмосферный воздух, легковые автомобили,
                  эконометрический анализ, прогнозирование.</span
                >
              </em>
            </p>
            <p style="margin-bottom: 40px">
              <span
                >В начале ХХI века происходило значительное и резкое увеличение
                мирового промышленного производства. В связи с этим
                правительства многих государств озаботились вопросом обеспечения
                своих стран энергетическими ресурсами. Поскольку мировые запасы
                угля велики и доступны, по сравнению с прочими углеводородами,
                на уголь начали обращать все большее и большее внимание.
                Угольная промышленность играет значительную роль в
                топливно-энергетическом комплексе России. Она обеспечивает
                население, энергетику, металлургию и ряд других отраслей [1, с.
                18].</span
              >
            </p>
            <p>
              <strong>
                <span>Таблица 1 </span>
              </strong>
              <span
                >– Коэффициенты корреляции между объемом выбросов загрязняющих
                веществ в атмосферный воздух (y) и факторами (xi)</span
              >
            </p>
            <table>
              <thead>
                <tr>
                  <th>Фактор</th>
                  <th>Характер исследования</th>
                  <th>Коэффициент корреляции</th>
                  <th>Сила связи</th>
                  <th>Характер связи</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Количество легковых автомобилей (х1)</td>
                  <td>Временной</td>
                  <td>-0,61</td>
                  <td>Существенная</td>
                  <td>Обратная</td>
                </tr>
                <tr>
                  <td>ВВП (х2)</td>
                  <td>Временной</td>
                  <td>-0,60</td>
                  <td>Существенная</td>
                  <td>Обратная</td>
                </tr>
                <tr>
                  <td>Численность населения (х3)</td>
                  <td>Временной</td>
                  <td>-0,10</td>
                  <td>Слабая</td>
                  <td>Прямая</td>
                </tr>
                <tr>
                  <td>Среднедушевой доход населения (х4)</td>
                  <td>Временной</td>
                  <td>-0,52</td>
                  <td>Существенная</td>
                  <td>Обратная</td>
                </tr>
              </tbody>
            </table>
            <p style="text-align: center; margin-bottom: 20px">
              <strong>
                <span>Список литературы:</span>
              </strong>
            </p>
            <p style="letter-spacing: 1px; line-height: 160%">
              <span>
                1. Плакиткина Л.С. Анализ развития угольной промышленности в
                оснвых странах мира // Горная промышленность. 2011. №2 (96). С.
                18-22.
              </span>
              <br />
              <span>
                2. Ревазов А.М., Бурчаков В.А. Актуальные проблемы развития
                угольной промышленности России // Горный
                информационно-аналитический <br />
                бюллетень. 2011. № 5. С. 302-305.
              </span>
              <br />
              <span>
                3. Единая межведомственная информационно-статистическая система,
                официальный сайт [Электронный ресурс]. URL: http://fedstat.ru/
                (дата <br />
                обращения: 31.05.14).
              </span>
              <br />
              <span>
                4. Федеральная служба государственной статистики Российской
                Федерации [Электронный ресурс]. URL: http://www.gks.ru/ (дата
                обращения: <br />
                31.05.14).
              </span>
            </p>
            <p style="text-align: center">
              <strong>
                <span>Ivanov R.R.</span>
                <br />
              </strong>
              <span
                >Associate Professor of the Department of Economics and Finance
                <br />
                Perm National Research Polytechnic University <br />
                (Perm, Russia)</span
              >
              <br />
              <br />
              <strong> <span>Petrov A.A.</span> </strong><br />
              <span
                >Associate Professor of the Department of Economics and Finance
                <br />
                Perm National Research Polytechnic University <br />
                (Perm, Russia)</span
              >
              <br />
              <br />
              <strong>
                <span
                  >ECONOMETRIC ANALYSIS OF THE INFLUENCE <br />
                  OF THE NUMBER OF PASSENGER CARS <br />
                  ON ATMOSPHERIC AIR POLLUTION</span
                >
              </strong>
            </p>
            <p style="margin-bottom: 40px">
              <strong>
                <em>
                  <span>Abstract: </span>
                </em>
              </strong>
              <em>
                <span>
                  the paper builds a mathematical model that characterizes the
                  dependence of atmospheric air pollution on the number of cars.
                  Correlation and regression analysis is presented. With the
                  help of econometric tools, the trends in the development of
                  the factor in the model were predicted, on the basis of which
                  the forecast of atmospheric air pollution was carried
                  out.</span
                >
              </em>
            </p>
            <p style="margin-bottom: 40px">
              <strong>
                <em>
                  <span>Keywords: </span>
                </em>
              </strong>
              <em>
                <span
                  >pollution, atmospheric air, cars, econometric analysis,
                  forecasting.</span
                >
              </em>
            </p>
            <p>
              <strong>
                <span style="color: red">Приложение 2. </span>
              </strong>
              <em><span>Анкета автора</span></em>
            </p>
            <p style="text-align: center">
              <strong>
                <span>АНКЕТА АВТОРА</span>
              </strong>
            </p>
            <table>
              <thead>
                <tr>
                  <th>Анкета авторов</th>
                  <th>Автор 1</th>
                  <th>Автор 2</th>
                  <th>Автор 3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Фамилия, имя, отчество автора (полностью)</td>
                  <td>Иванов Роман Романович</td>
                  <td>Петров Алексей Алексеевич</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Город</td>
                  <td>Пермь, Россия</td>
                  <td>Пермь, Россия</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Место работы или учебы (полностью)</td>
                  <td>Пермский Политех</td>
                  <td>Пермский Политех</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Должность или курс с указанием кафедры или подразделения
                  </td>
                  <td>доцент кафедры экономики и финансов</td>
                  <td>доцент кафедры экономики и финансов</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Ученая степень, ученое звание (при наличии)</td>
                  <td>канд. экон. наук</td>
                  <td>канд. экон. наук</td>
                  <td></td>
                </tr>
                <tr>
                  <td>E-mail</td>
                  <td>example@mail.ru</td>
                  <td>example@mail.ru</td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    Необходим ли сертификат и справка для автора? (да/нет)
                  </td>
                  <td>да</td>
                  <td>да</td>
                  <td></td>
                </tr>
                <tr>
                  <td>Название статьи</td>
                  <td colspan="3">
                    Эконометрический анализ влияния количества легковых
                    автомобилей на загрязнение атмосферного воздуха
                  </td>
                </tr>
                <tr>
                  <td>Раздел (секция) публикации</td>
                  <td colspan="3">Экономика</td>
                </tr>
                <tr>
                  <td>Формат публикации (Журнал / Конференция)</td>
                  <td colspan="3">Журнал</td>
                </tr>
                <tr>
                  <td>Количество страниц</td>
                  <td colspan="3">3 страницы</td>
                </tr>
              </tbody>
            </table>
            <p>
              <strong>
                <span>Анкета автора</span>
              </strong>
              <span
                >подлежит обязательному заполнению и направляется вместе со
                статьей по электронной почте. Направляя анкету и материалы для
                публикации,
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
