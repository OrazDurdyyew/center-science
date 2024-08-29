<script setup lang="ts"></script>

<template>
  <div class="latest-number">
    <div class="latest-number__container">
      <div class="latest-number__body">
        <div class="latest-number__breadcrumb">
          <div class="breadcrumb__wrapper">
            <nuxt-link class="menu__link" to="/">ГЛАВНАЯ</nuxt-link>
            <nuxt-link class="menu__link" to="/latest-number"
              >СВЕЖИЙ НОМЕР</nuxt-link
            >
          </div>
        </div>
        <div class="latest-number__articles">
          <div class="articles__release">
            <div class="articles__release-title">
              <div class="articles__release-text">Выпуск №34, Том 1</div>
              <div class="articles__release-file">
                <p>Скачать выпуск</p>
                <span>PDF</span>
              </div>
            </div>
          </div>
          <div class="articles__publication">
            <p>ПУБЛИКАЦИИ</p>
          </div>
          <div class="articles__item" v-for="item in 10" :key="item">
            <div class="articles__border">
              <div class="articles__border-wrapper">
                <div class="articles__border-color"></div>
              </div>
            </div>
            <div class="articles__item-title">
              <p>ГЕНЕТИЧЕСКАЯ ТЕРАПИЯ: ЭТИЧЕСКИЕ И СОЦИАЛЬНЫЕ АСПЕКТЫ</p>
            </div>
            <div class="articles__item-authors">
              <p>Андреева Н.В.</p>
            </div>
            <div class="articles__item-file">
              <img src="../assets/icons/pdf.png" alt="" />
              <p>View PDF</p>
            </div>
            <div class="articles__item-annotation">
              <h4>Аннотация</h4>
              <p>
                Цифровые технологии в последние десятилетия оказали значительное
                влияние на процесс обучения иностранным языкам, что привело к
                трансформации традиционных образовательных подходов и методов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.latest-number {
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

  &__articles {
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
.articles {
  &__release {
    padding: 20px 10px;
  }

  &__release-title {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__release-text {
    font-size: 28px;
    font-style: italic;
    color: var(--text);
  }

  &__release-file {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text);
    p {
      font-size: 18px;
      font-weight: 400;
      margin-right: 20px;
    }
    span {
      color: #29abe2;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
    }
  }
  &__publication {
    margin-bottom: 40px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0272b1;
      color: #fff;
      font-size: 17px;
      margin-left: 25px;
      padding: 10px 25px;
      text-transform: uppercase;
      width: 15%;
      transition: 0.3s ease;
      border: 1px solid #0272b1;

      &:hover {
        transition: 0.3s ease;
        border-color: #eb6500;
        background: var(--white);
        color: var(--black);
      }
    }
  }
  &__item {
    position: relative;
    margin-bottom: 10px;
    padding: 10px 10px 20px;
  }
  &__border {
    position: absolute;

    top: -2px;
    left: -11px;
    width: 12px;
    height: 12px;
    &-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--black);
    }
    &-color {
      border: 2px solid var(--white);
      background: #eb6500;
      width: 100%;
      height: 100%;
    }
  }
  // &__border-body {
  //   padding: 4px;
  // }
  &__item-title {
    color: var(--black);
    display: flex;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 20px;
    -webkit-text-decoration: none;
    text-decoration: none;
    p {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        background: var(--border-bottom);
        width: 0;
        height: 2px;
        transition: 0.3s ease;
      }
      &:hover {
        color: var(--text);
        &::before {
          width: 100%;
        }
      }
    }
  }

  &__item-authors {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;
    p {
      margin-right: 15px;
      color: var(--text);
      position: relative;
      &::before {
        content: "";
        width: 0;
        height: 2px;
        position: absolute;
        bottom: 0;
        transition: 0.3s ease;
        background: var(--black);
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }

  &__item-file {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    &::before {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      bottom: -5px;
      transition: 0.3s ease;
      background: #eb6500;
    }
    &:hover {
      &::before {
        width: 100px;
      }
    }
    img {
      margin-right: 7px;
    }
    p {
      font-size: 16px;
      font-weight: 600;
      color: #29abe2;
    }
  }

  &__item-data {
    margin-bottom: 5px;
    span {
      color: gray;
      font-size: 15px;
      margin-right: 30px;
      position: relative;
      text-transform: lowercase;
    }
  }

  &__item-annotation {
    margin-bottom: 5px;
    h4 {
      color: #29abe2;
      font-size: 16px;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      color: var(--text);
      line-height: 20px;
      margin-left: 10px;
    }
  }
}
</style>
