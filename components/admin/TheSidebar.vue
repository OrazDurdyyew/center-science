<template>
  <div class="admin-sidebar">
    <div class="admin-sidebar__logo">
      <img src="@/assets/img/logo.webp" alt="" />
    </div>
    <div class="admin-sidebar__menu">
      <div class="admin-sidebar__menu-items">
        <nuxt-link exact to="/admin" class="admin-sidebar__menu-item">Žurnallar</nuxt-link>
        <nuxt-link to="/admin/articles" class="admin-sidebar__menu-item">Makalalar</nuxt-link>
        <nuxt-link to="/admin/last-article" class="admin-sidebar__menu-item">Häzirki goýberiliş</nuxt-link>
      </div>
    </div>
    <div @click="logOut" class="admin-sidebar__logout">
      <img src="@/assets/img/logout.png" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      logOut() {
        this.$cookie.remove('Authorization')
        localStorage?.removeItem('Authorization')
        this.$router.push('/admin/login')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 10px;
    &__logo {
      padding-top: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      img {
        width: 100px;
        height: 100px;
      }
    }
    &__menu {
      flex: 1 1 auto;
      margin-top: 20px;
      &-items {
        width: 100%;
      }
      &-item {
        display: block;
        border-bottom: 0.5px dashed rgba(0, 0, 0, 0.13);
        font-weight: 500;
        font-size: 18px;
        line-height: 21px;
        text-transform: capitalize;
        color: #333333;
        padding: 13px;
        border-radius: 2px;
        text-align: center;
        cursor: pointer;
        transition: 0.3s ease;
        &:hover {
          background-color: var(--primary);
          color: var(--white);
          border-color: none;
        }
      }
    }
    &__logout {
      display: flex;
      justify-content: flex-end;
      width: 100%;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .nuxt-link-exact-active,
  .nuxt-link-active {
    background-color: var(--primary);
    color: var(--white);
    border-color: none;
  }
</style>
