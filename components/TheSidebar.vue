<template>
  <div class="journal-sidebar">
    <div class="journal-sidebar__menu">
      <div class="journal-sidebar__menu-items">
        <div @click="$router.push(localePath('/authors-rule'))" class="journal-sidebar__menu-item">Правило для авторов</div>
        <div @click="$router.push(localePath('/peer-review'))" class="journal-sidebar__menu-item">Рецензирование</div>
        <div @click="$router.push(localePath('/publication-ethics'))" class="journal-sidebar__menu-item">Этика публикаций</div>
        <div @click="$router.push(localePath('/payment'))" class="journal-sidebar__menu-item">Оплата</div>
        <div @click="$router.push(localePath('/contacts'))" class="journal-sidebar__menu-item">Редакция журнала и контакты</div>
      </div>
      <div class="journal-sidebar__partners">
        <div class="journal-sidebar__partner">
          <img src="@/assets/img/partners/scholar.webp" alt="" />
        </div>
        <div class="journal-sidebar__partner">
          <img src="@/assets/img/partners/elibrary.webp" alt="" />
        </div>
        <div class="journal-sidebar__partner">
          <img src="@/assets/img/partners/cyberleninka.webp" alt="" />
        </div>
        <div class="journal-sidebar__partner">
          <img src="@/assets/img/partners/access.webp" alt="" />
        </div>
        <div class="journal-sidebar__partner">
          <img src="@/assets/img/partners/anti.webp" alt="" />
        </div>
        <div class="journal-sidebar__partner">
          <img src="@/assets/img/partners/crossref.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .journal-sidebar {
    &__menu {
      &-items {
        margin-bottom: 10px;
      }
      &-item {
        color: #555;
        width: 100%;
        height: 50px;
        background: #e6e6e6;
        cursor: pointer;
        font-size: 18px;
        line-height: 18px;
        padding: 16px 20px 16px 70px;
        margin-bottom: 2px;
        text-decoration: none;
        position: relative;
        transition: 0.3s ease;
        &.active {
          background-color: #d2d2d2;
          transition: 0.3s ease;
          text-decoration: underline;
        }
        &:hover {
          background-color: #d2d2d2;
          transition: 0.3s ease;
          text-decoration: underline;
        }
      }
    }
    &__partners {
      background: #e6e6e6;
      padding: 10px;
    }
    &__partner {
      margin-bottom: 10px;
      width: 100%;
      position: relative;
      padding-top: 25%;
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
    }
  }
</style>
