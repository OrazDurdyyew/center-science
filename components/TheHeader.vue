<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="header-box">
      <div class="header__container">
        <div class="header__body">
          <div class="header__logo">
            <img src="@/assets/img/oblozka.png" alt="" />
          </div>
          <div class="header__title">
            <div class="header__title-h1">
              <h1>ЦЕНТР НАУКИ</h1>
            </div>
            <div class="header__title-p">
              <p style="margin-bottom: 5px">НАУКА, ВЕДУЩАЯ К ПРОГРЕССУ</p>
            </div>
            <a href="redactor@center-nauki.ru">redactor@center-nauki.ru</a>
          </div>
          <div class="header__score">
            <div class="citescore">
              <button>
                <p style="font-size: 14px">ISSN 2361-568O</p>
              </button>
            </div>
            <div class="factor">
              <button>
                <p style="font-size: 14px; text-align: center">
                  Международный
                  <br />
                  научный журнал
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__navigation">
      <div class="header__navigation-wrapper __container">
        <nav class="header__menu">
          <ul class="menu__item">
            <li class="menu__list">
              <nuxt-link exact class="menu__link" to="/">
                <p class="menu__link-item">Главная</p>
              </nuxt-link>
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__link" to="/journal">
                <p class="menu__link-item">О Журнале</p>
              </nuxt-link>
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__link" to="/latest-number">
                <p class="menu__link-item">Свежий Номер</p>
              </nuxt-link>
            </li>
            <li class="menu__list">
              <nuxt-link class="menu__link" to="/archive">
                <p class="menu__link-item">Архив</p>
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <nav class="header__reviewing">
          <ul class="reviewing__item">
            <li class="reviewing__list">
              <nuxt-link class="reviewing__link" to="/rule-authors">
                <div class="menu-main-link">
                  <p class="menu__link-item">Правило для авторов</p>
                  <img
                    class="menu__link-arrow"
                    src="../assets/icons/arrow-bottom.svg"
                    alt=""
                  />
                </div>
                <div class="menu__accordion">
                  <ul class="menu__accordion-item">
                    <li class="menu__accordion-list">
                      <nuxt-link class="menu__acardion-link" to="/reviewing"
                        >Рецензирование</nuxt-link
                      >
                    </li>
                    <li class="menu__accordion-list">
                      <nuxt-link class="menu__acardion-link" to="/page"
                        >Этика публикаций</nuxt-link
                      >
                    </li>
                    <li class="menu__accordion-list">
                      <nuxt-link class="menu__acardion-link" to="/"
                        >Оплата</nuxt-link
                      >
                    </li>
                  </ul>
                </div>
              </nuxt-link>
            </li>
            <li class="reviewing__list">
              <nuxt-link class="reviewing__link" to="/contact">
                <p class="menu__link-item">Контакт</p>
              </nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.header {
  position: relative;
  margin-top: 50px;

  &__body {
    display: flex;
    align-items: center;
    height: 170px;
  }
  &__logo {
    img {
      width: 150px;
      height: 200px;
      position: relative;
      top: -25px;
    }
  }
  &__title {
    margin-left: 40px;
    z-index: 50;
    color: var(--white);
    flex: 1 1 0%;
    max-width: 100%;
    min-width: 0px;
    padding: 0.8rem;
    &-h1 {
      display: flex;

      h1 {
        position: relative;
        cursor: pointer;
        border-bottom: 2px solid transparent;
        font-size: 32px;
        margin-bottom: 10px;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          height: 2px;
          width: 0;
          background: var(--white);
          transition: 0.3s ease;
        }
        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
    }
    &-p {
      display: flex;
      p {
        font-size: 15px;
        position: relative;
        display: flex;
        border-bottom: 2px solid transparent;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          background: var(--white);
          height: 2px;
          width: 0;
          transition: 0.3s ease;
        }
        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
    }
  }

  &__score {
    display: flex;
    align-items: center;
  }

  &__categories {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__navigation {
    border-bottom: 1px solid var(--black);
    &-wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
.header-box {
  width: 100%;
  height: 170px;
  background-color: var(--black);
}

.citescore {
  button {
    background: none;
    color: var(--white);
    padding: 0 16px;
    p {
      text-align: start;
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
}
.factor {
  position: relative;
  button {
    background: none;
    color: var(--white);
    padding: 0px 16px 0px 16px;
    &::before {
      content: "";
      position: absolute;
      top: -20px;
      right: 140px;
      height: 60px;
      width: 0.5px;
      background: var(--white);
    }
    p {
      text-align: start;
      font-size: 24px;
      margin-bottom: 10px;
    }
  }
}
.menu {
  &__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:last-child {
      border-right: 1px solid rgb(220, 220, 220);
    }
  }
  &__list {
    position: relative;
    margin: 21px 40px;
    border-bottom: 2px solid transparent;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      background: var(--border-bottom);
      height: 2px;
      transition: 0.3s ease;
    }
    &:hover {
      &.menu__list:before {
        width: 100%;
      }
    }
  }
  &__link {
    font-size: 16px;
  }
  &__accordion {
    display: none;
    transition: 0.3s ease;
  }

  // &__link {
  //   font-size: 16px;
  //   position: relative;
  //   &-item {
  //     &:before {
  //       content: "";
  //       position: absolute;
  //       bottom: -2px;
  //       width: 0;
  //       background: var(--border-bottom);
  //       height: 2px;
  //       transition: 0.3s ease;
  //     }
  //     &:hover {
  //       &::before {
  //         width: 100%;
  //       }
  //     }
  //   }
  //   &.nuxt-link-active {
  //     .menu__link-item:before {
  //       width: 100%;
  //     }
  //   }
  // }
}
.reviewing {
  &__item {
    display: flex;
    align-items: center;
    &:last-child {
      border-right: 1px solid rgb(220, 220, 220);
      border-left: 1px solid rgb(220, 220, 220);
    }
  }
  &__list {
    position: relative;
    margin: 21px 40px;
    border-bottom: 2px solid transparent;
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      width: 0;
      background: var(--border-bottom);
      height: 2px;
      transition: 0.3s ease;
    }

    &:hover {
      &.reviewing__list:before {
        width: 100%;
      }
    }
  }

  &__link {
    font-size: 16px;
  }
}
.border {
  position: absolute;
  top: 276px;
  border-bottom: 1px solid;
  width: 100%;
}
.menu-main-link {
  display: flex;
  align-items: center;
  gap: 3px;
}

.reviewing__list {
  &:hover {
    .menu {
      &__accordion {
        display: flex;
        position: absolute;
        background: var(--white);
        border: 1px solid #c7c3c3;
        width: 100%;
        transition: 0.3s ease;
      }
      &__accordion-item {
        display: flex;
        padding: 10px;
        flex-direction: column;
        gap: 10px;
      }
      &__accordion-list {
        position: relative;
        padding: 6.4px 9.6px;
        border-bottom: 2px solid transparent;
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          width: 0;
          background: var(--border-bottom);
          height: 2px;
          transition: 0.3s ease;
        }

        &:hover {
          &::before {
            width: 100%;
          }
        }
      }
      &__accordion-link {
      }
    }
    .menu__link-arrow {
      transform: rotate(180deg);
    }
  }
}
</style>
