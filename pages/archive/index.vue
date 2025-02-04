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
          <div v-for="(archive, index) in archives" :key="index" class="archive__wrapper">
            <div class="archive__box-title">{{ archive.year }}</div>
            <div class="archive__box-file">
              <div class="archive__box-item" v-for="(magazine, index) in archive.magazines" :key="index"
                @click="goTo(magazine)">
                <div class="archive__box-img">
                  <img src="@/assets/img/oblozka.png" />
                </div>
                <div class="archive__box-names">
                  <p>
                    {{ magazine.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      archives: [],
    };
  },
  async mounted() {
    await this.fetchJournal();
  },
  methods: {
    async fetchJournal() {
      try {
        const { data, status } = (await this.$axios.post("admin/get-archive"))
          .data;
        if (status) {
          this.archives = data;
        }
      } catch (error) {
        console.log(error);
      }
    },

    goTo(magazine) {
      this.$router.push(`/archive/${magazine.uuid}`);
    },
  },
};
</script>

<style scoped lang="scss">
.archive {
  &__breadcrumb {
    margin: 10px 0;
    padding: 10px;
  }

  &__box {}

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
    gap: 40px;
    padding: 0 10px;

    @media screen and (max-width: 923px) {
      gap: 10px;
    }

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  &__box-item {
    display: flex;
    position: relative;
    background: var(--primary);
    height: 200px;
    max-width: 90%;
    margin-top: 50px;

    @media screen and (max-width: 923px) {
      max-width: 100%;
    }
  }

  &__relatiw {}

  &__box-img {
    width: 150px;

    img {
      position: absolute;
      top: 0;
      left: 0;
      margin-top: -20px;
      height: 200px;
      width: 150px;
    }
  }

  &__box-names {
    flex: 1 1;

    p {
      color: var(--black);
      font-size: 24px;
      padding: 0 10px;
      margin-top: 20px;
      margin-bottom: 30px;
      font-size: 24px;
      font-weight: bold;

      @media screen and (max-width: 425px) {
        font-size: 16px !important;
      }
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
