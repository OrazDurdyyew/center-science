<script setup lang="ts"></script>

<template>
  <div class="header">
    <div class="header-box">
      <div class="header__container">
        <div class="header__body">
          <div class="header__logo">
            <img
              src="https://ars.els-cdn.com/content/image/X03043894.jpg"
              alt=""
            />
          </div>
          <div class="header__title">
            <h1>Journal of Hazardous Materials</h1>
            <p>Supports open access</p>
          </div>
          <div class="header__score">
            <div class="citescore">
              <button>
                <p>25.4</p>
                <p style="font-size: 14px">CiteScore</p>
              </button>
            </div>
            <div class="factor">
              <button>
                <p>12.2</p>
                <p style="font-size: 14px">Impact Factor</p>
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
                <p class="menu__link-item">Правило для авторов</p>
              </nuxt-link>
            </li>
            <li class="reviewing__list">
              <nuxt-link class="reviewing__link" to="/reviewing">
                <p class="menu__link-item">Рецензирование</p>
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
          width: 450px;
        }
      }
    }
    p {
      font-size: 15px;
      position: relative;
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
          width: 150px;
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
    padding: 0px 16px 0px 48px;
    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 129px;
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
    margin: 21px 40px;
  }
  &__link {
    font-size: 16px;
    position: relative;
    &-item {
      &:before {
        content: "";
        position: absolute;
        bottom: -2px;
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
    &.nuxt-link-active {
      .menu__link-item:before {
        width: 100%;
      }
    }
  }
}
.reviewing {
  &__item {
    display: flex;
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
</style>
