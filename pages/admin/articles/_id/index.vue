<template>
  <div class="admin-journal">
    <div class="admin-journal__header">
      <div class="admin-journal__map">
        <nuxt-link exact to="/admin/articles">Žurnallar </nuxt-link>
        <span>/</span>
        <nuxt-link :to="`/admin/articles/${$route.params.id}`">Makalalar </nuxt-link>
      </div>
      <div class="admin-journal__button">
        <button @click="$router.push(`/admin/articles/${$route.params.id}/0`)">+ Täze Makala</button>
      </div>
    </div>
    <div class="admin-journal__body">
      <div class="admin-journal__body-table">
        <table>
          <thead>
            <tr>
              <td>№</td>
              <td>Awtoryň ady</td>
              <td>Makalanyň ady</td>
              <td>PDF</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in journals" :key="item.uuid">
              <td>{{ index + 1 }}</td>
              <td>{{ item.authorName?.map((item) => item.name).join(', ') }}</td>
              <td>{{ item.title }}</td>
              <td><img @click="openPdf(item.path, false)" style="width: 20px; cursor: pointer" src="@/assets/icons/eye.png" alt="" /></td>
              <td class="table__image">
                <img @click="$router.push(`/admin/articles/${$route.params.id}/${item.uuid}`)" src="@/assets/img/edit.png" alt="" />
              </td>
              <td class="table__image"><img @click="deleteJournal(item.uuid, false)" src="@/assets/img/trash.png" alt="" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import openPdf from '@/mixins/openPdf'
  export default {
    layout: 'admin',
    mixins: [openPdf],
    middleware: ['auth-admin'],
    data() {
      return {
        journals: []
      }
    },

    async mounted() {
      await this.fetchJournal()
    },

    methods: {
      async fetchJournal() {
        try {
          const { data, status } = (await this.$axios.post('admin/get-articles', { uuid: this.$route.params.id })).data
          if (status) {
            this.journals = data
          }
        } catch (error) {
          console.log(error)
        }
      },

      async deleteJournal(uuid, type) {
        try {
          const { data, status } = await this.$axios.post('admin/delete', {
            UUID: uuid,
            status: type
          })
          if (status) {
            await this.fetchJournal()
          }
        } catch (error) {
          console.log(error)
        }
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
      justify-content: space-between;
      position: sticky;
      background: var(--white);
      top: 0;
      padding: 10px;
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
      background: var(--primary);
      border-radius: 6px;
      button {
        color: var(--white);
        background: transparent;
      }
    }
    &__body {
      margin-top: 20px;
      height: 100%;
      &-table {
        height: 90%;
        overflow: overlay;

        table {
          width: 100%;
          thead {
            background: var(--primary);
            position: sticky;
            top: 0px;
            tr {
              td {
                padding: 15px;
                text-align: center;
                color: var(--white);
              }
            }
          }
          tbody {
            background: #f4f4f4;
            height: 50%;
            tr {
              td {
                padding: 10px;
                text-align: center;
                cursor: pointer;
              }
            }
          }
        }
      }
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
    background: var(--primary);
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
</style>
