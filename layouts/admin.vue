<template>
  <div class="admin">
    <div class="admin__sidebar">
      <TheSidebar />
    </div>
    <div class="admin__wrapper">
      <Nuxt />
    </div>
  </div>
</template>

<script>
  import TheSidebar from '@/components/admin/TheSidebar.vue'
  export default {
    components: {
      TheSidebar
    }
  }
</script>

<style lang="scss" scoped>
  .admin {
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #e7e7e7;
    display: flex;
    &__sidebar {
      margin: 10px;
      width: 250px;
      background: var(--white);
      box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.05);
      border-radius: 6px;
    }
    &__wrapper {
      background: var(--white);
      margin: 10px 10px 10px 0;
      border-radius: 6px;
      width: calc(100% - 250px);
    }
  }
</style>
