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
                <div class="archive__box-names">
                  <p style="margin-top: 20px; font-size: 24px">
                    <b>Выпуск №33</b>
                  </p>
                  <br />
                  <br />
                  <br />
                  <p><i>Том 1</i></p>
                </div>
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
                <div class="archive__box-names">
                  <p style="margin-top: 20px; font-size: 24px">
                    <b>Выпуск №33</b>
                  </p>
                  <br />
                  <br />
                  <br />
                  <p><i>Том 1</i></p>
                </div>
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    // display: flex;
    // flex-wrap: wrap;
    gap: 40px;
    padding: 0 10px;
  }

  &__box-item {
    display: flex;
    background: var(--primary);
    max-width: 90%;
    margin-top: 50px;
  }

  &__box-img {
    width: 150px;
    img {
      margin-top: -20px;
      height: 100%;
      width: 100%;
    }
  }

  &__box-names {
    p {
      color: var(--black);
      font-size: 20px;
      margin: 0px 20px;
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
</style>
