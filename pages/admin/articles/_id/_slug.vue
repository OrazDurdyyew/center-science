<template>
  <div class="admin-journal">
    <div class="admin-journal__header">
      <div class="admin-journal__map">
        <nuxt-link exact to="/admin/articles">Žurnallar </nuxt-link>
        <span>/</span>
        <nuxt-link exact :to="`/admin/articles/${$route.params.id}`">Makalalar </nuxt-link>
        <span>/</span>
        <nuxt-link v-if="$route.params.slug == 0" :to="`/admin/articles/${$route.params.id}/0`">Täze makala </nuxt-link>
        <nuxt-link v-else :to="`/admin/articles/${$route.params.id}/${$route.params.slug}`">{{ main.title }} </nuxt-link>
      </div>
    </div>
    <div class="admin-journal__body">
      <div class="row mb-5">
        <div class="col-10">
          <text-filed :value="author" @updateValue="(val) => (author = val)" type="text" label="Автор"></text-filed>
        </div>
        <div class="col-2 flex flex-y-end"><button @click="addAuthor" class="send__btn">Сохранить</button></div>
        <div class="col-12">
          <div class="autor__body">
            <div v-for="(item, index) in main.authorName" :key="index" class="autor__body-item">
              <div class="autor__body-name">{{ item.name }}</div>
              <div @click="deleteAuthor(index)" class="autor__body-delete">
                <svg width="25" height="25" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" fill="#FF6363" />
                  <path
                    d="M21.0466 10.4867C19.9733 10.38 18.8999 10.3 17.8199 10.24V10.2333L17.6733 9.36666C17.5733 8.75333 17.4266 7.83333 15.8666 7.83333H14.1199C12.5666 7.83333 12.4199 8.71333 12.3133 9.35999L12.1733 10.2133C11.5533 10.2533 10.9333 10.2933 10.3133 10.3533L8.95328 10.4867C8.67328 10.5133 8.47328 10.76 8.49994 11.0333C8.52661 11.3067 8.76661 11.5067 9.04661 11.48L10.4066 11.3467C13.8999 11 17.4199 11.1333 20.9533 11.4867C20.9733 11.4867 20.9866 11.4867 21.0066 11.4867C21.2599 11.4867 21.4799 11.2933 21.5066 11.0333C21.5266 10.76 21.3266 10.5133 21.0466 10.4867Z"
                    fill="white"
                  />
                  <path
                    d="M19.82 12.4267C19.66 12.26 19.44 12.1667 19.2134 12.1667H10.7867C10.56 12.1667 10.3334 12.26 10.18 12.4267C10.0267 12.5933 9.94004 12.82 9.95337 13.0533L10.3667 19.8933C10.44 20.9067 10.5334 22.1733 12.86 22.1733H17.14C19.4667 22.1733 19.56 20.9133 19.6334 19.8933L20.0467 13.06C20.06 12.82 19.9734 12.5933 19.82 12.4267ZM16.1067 18.8333H13.8867C13.6134 18.8333 13.3867 18.6067 13.3867 18.3333C13.3867 18.06 13.6134 17.8333 13.8867 17.8333H16.1067C16.38 17.8333 16.6067 18.06 16.6067 18.3333C16.6067 18.6067 16.38 18.8333 16.1067 18.8333ZM16.6667 16.1667H13.3334C13.06 16.1667 12.8334 15.94 12.8334 15.6667C12.8334 15.3933 13.06 15.1667 13.3334 15.1667H16.6667C16.94 15.1667 17.1667 15.3933 17.1667 15.6667C17.1667 15.94 16.94 16.1667 16.6667 16.1667Z"
                    fill="white"
                  />
                  <rect x="0.5" y="0.5" width="29" height="29" rx="3.5" stroke="#FF6363" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12">
          <text-filed :value="main.title" @updateValue="(val) => (main.title = val)" label="Title"></text-filed>
        </div>
        <div class="col-12">
          <text-filed :value="main.desc" @updateValue="(val) => (main.desc = val)" type="text" label="Text"></text-filed>
        </div>
        <div class="col-10">
          <file-upload @file="(file) => (main.path = file)"></file-upload>
        </div>
        <div v-if="main.path" class="col-2 flex flex-y-center">
          <span @click="openPdf(main.path, false)" class="journal__pdf">PDF</span>
        </div>
        <div class="col-4">
          <text-filed :value="main.page" @updateValue="(val) => (main.page = val)" type="text" label="Страница"></text-filed>
        </div>
        <div class="col-12">
          <div class="dvider"></div>
        </div>
        <div class="col-12 flex flex-x-end mr-5">
          <button @click="addJournal" class="send__btn">Сохранить</button>
          <button @click="$router.go(-1)" class="reset__btn">Отменить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import openPdf from '@/mixins/openPdf'
  import FileUpload from '@/components/admin/FileUpload.vue'

  export default {
    layout: 'admin',
    mixins: [openPdf],
    middleware: ['auth-admin'],
    components: {
      FileUpload
    },
    data() {
      return {
        author: '',
        main: {
          mgId: this.$route.params.id,
          authorName: [],
          page: '',
          path: null,
          desc: '',
          title: ''
        }
      }
    },
    async mounted() {
      if (this.$route.params.slug != 0) {
        await this.fetchOneItem()
      }
    },
    methods: {
      async addJournal() {
        try {
          const { data, status } = await this.$axios.post('admin/create-article', this.main)
          if (status) {
            this.$router.go(-1)
          }
        } catch (error) {
          console.log(error)
        }
      },
      async fetchOneItem() {
        try {
          const { data, status } = (await this.$axios.post('admin/get-article', { UUID: this.$route.params.slug, mgId: this.$route.params.id })).data
          if (status) {
            Object.keys(this.main).forEach((key) => {
              this.main[key] = data[key]
            })
            this.main.uuid = data.uuid
            data.authorName ? (this.main.authorName = data.authorName) : (this.main.authorName = [])
          }
        } catch (error) {
          console.log(error)
        }
      },
      addAuthor() {
        this.main.authorName.push({ name: this.author })
        this.author = ''
      },
      deleteAuthor(index) {
        this.main.authorName.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-journal {
    padding: 0px 10px 10px 10px;
    overflow: hidden;
    height: 100%;
    &__header {
      display: flex;
      position: sticky;
      background: var(--white);
      top: 0;
      padding: 10px;
    }
    &__title {
      padding: 10px;
      font-weight: 600;
      font-size: 24px;
      line-height: 149.5%;
    }
    &__map {
      padding: 10px;
      font-style: italic;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 2px;
    }
    &__button {
      padding: 10px;
      background: var(--blue-dark);
      border-radius: 6px;
      button {
        color: var(--white);
        background: transparent;
      }
    }
    &__body {
      margin-top: 20px;
      height: 75%;
      overflow: overlay;
    }
  }

  .table__image {
    cursor: pointer;
    img {
      width: 20px;
      height: 20px;
    }
  }

  .admin-journal::-webkit-scrollbar-track {
    background: transparent;
    height: 2px;
  }
  .admin-journal__body-table::-webkit-scrollbar-thumb {
    background: var(--blue-dark);
    border-radius: 10px;
    height: 2px;
  }

  .admin-journal__body-table::-webkit-scrollbar {
    width: 6px;
    background-color: #c1c1c1c1;
    height: 4px;
  }
  .admin-journal__body-table::-webkit-scrollbar-corner {
    visibility: hidden;
    opacity: 0px;
  }

  .col__title {
    font-weight: 600;
    font-size: 18px;
    line-height: 149.5%;
  }
  .dvider {
    height: 2px;
    width: 100%;
    border-bottom: 1px solid #eeeff2;
  }

  .checkbox {
    width: 25px;
    height: 25px;
  }

  .checkbox__title {
    margin-right: 5px;
    font-size: 18px;
    font-weight: 600;
  }

  .autor__body {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    &-item {
      //   border: 1px solid var(--primary);
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
    &-name {
      background: var(--input);
      padding: 8px;
      border-radius: 4px;
      margin-right: 10px;
    }
    &-delete {
      cursor: pointer;
    }
  }
</style>
