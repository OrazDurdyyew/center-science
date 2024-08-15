<script setup lang="ts"></script>

<template>
  <div class="archive">
    <div class="archive__container">
      <div class="archive__body">
        <div class="archive__breadcrumb">
          <div class="breadcrumb__wrapper">
            <nuxt-link class="menu__link" to="/">ГЛАВНАЯ</nuxt-link>
            <nuxt-link class="menu__link" to="/archive">АРХИВ</nuxt-link>
          </div>
        </div>
        <div class="archive__box">
          <div class="archive__wrapper">
            <div class="archive__box-title">2024</div>
            <div class="archive__box-file">
              <div class="archive__box-item" v-for="item in 22" :key="item">
                <div class="archive__box-img">
                  <img
                    src="https://wsemiruch.online/_nuxt/img/journal__ru.2eb3943.webp"
                    alt=""
                  />
                </div>
                <div class="archive__box-name">Выпуск №33, Том 1</div>
              </div>
            </div>
          </div>
          <div class="archive__wrapper">
            <div class="archive__box-title">2023</div>
            <div class="archive__box-file">
              <div class="archive__box-item" v-for="item in 12" :key="item">
                <div class="archive__box-img">
                  <img
                    src="https://wsemiruch.online/_nuxt/img/journal__ru.2eb3943.webp"
                    alt=""
                  />
                </div>
                <div class="archive__box-name">Выпуск №33, Том 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.archive {
  &__breadcrumb {
    margin: 10px 0;
    padding: 10px;
  }
  &__box {
  }
  &__wrapper {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  &__box-title {
    color: #064fa2;
    font-size: 36px;
    font-weight: 400;
    margin-bottom: 20px;
    padding: 10px;
  }

  &__box-file {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    padding: 0 10px;
  }

  &__box-item {
    cursor: pointer;
  }

  &__box-img {
    width: 150px;
    img {
      height: 100%;
      width: 100%;
    }
  }

  &__box-name {
    color: #064fa2;
    font-size: 16px;
    max-width: 150px;
    padding: 10px 0;
    text-align: center;
    white-space: pre-wrap;
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
