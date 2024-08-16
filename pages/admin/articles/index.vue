<template>
  <div class="admin-journal">
    <div class="admin-journal__header">
      <div class="admin-journal__map">
        <nuxt-link to="/admin/articles">Žurnallar</nuxt-link>
      </div>
      <div class="admin-journal__dropdown">
        <drop-down
          :items="journals"
          :selectedItem="selectedJournal"
          @selectItem="selectListener"
        ></drop-down>
      </div>
    </div>
    <div class="admin-journal__body">
      <div class="admin-journal__body-table">
        <table>
          <thead>
            <tr>
              <td>№</td>
              <td>Senesi</td>
              <td>Žurnalyň ady</td>
              <td>PDF</td>
              <!-- <td></td>
              <td></td> -->
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in journals"
              @click="$router.push(`/admin/articles/${item.uuid}`)"
              :key="item.uuid"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ new Date(item.dateFormat).toLocaleDateString() }}</td>
              <td>{{ item.content }}</td>
              <td>
                <img
                  @click.stop="openPdf(item.bigPath, true)"
                  style="width: 20px; cursor: pointer"
                  src="@/assets/icons/eye.png"
                  alt=""
                />
              </td>
              <!-- <td class="table__image"><img @click="$router.push(`/admin/${item.uuid}`)" src="@/assets/img/edit.png" alt="" /></td>
              <td class="table__image"><img @click="deleteJournal(item.uuid, true)" src="@/assets/img/trash.png" alt="" /></td> -->
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import openPdf from "@/mixins/openPdf";
import DropDown from "@/components/admin/DropDown.vue";
export default {
  layout: "admin",
  mixins: [openPdf],
  components: { DropDown },
  data() {
    return {
      journals: [],
      selectedJournal: null,
    };
  },

  async mounted() {
    await this.fetchJournal();
  },

  methods: {
    async fetchJournal() {
      try {
        const { data, status } = (
          await this.$axios.post("admin/get-all", { page: 1, limit: 500 })
        ).data;
        if (status) {
          this.journals = data.data.filter(
            (item) => (item.name = item.dateFormat)
          );
        }
      } catch (error) {
        console.log(error);
      }
    },

    async deleteJournal(uuid, type) {
      try {
        const { data, status } = await this.$axios.post("admin/delete", {
          UUID: uuid,
          status: type,
        });
        if (status) {
          await this.fetchJournal();
        }
      } catch (error) {
        console.log(error);
      }
    },
    selectListener(item) {
      this.selectedJournal = item.dateFormat;
    },
    openPdf(pdf) {
      const link = document.createElement("a");
      link.href = this.baseURL + pdf;
      link.setAttribute("target", "_blank");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
};
</script>

<style lang="scss" scoped>
.admin-journal {
  padding: 0px 10px 10px 10px;
  overflow: hidden;
  height: 100%;
  &__header {
    display: flex;
    position: sticky;
    justify-content: space-between;
    background: var(--white);
    top: 0;
    padding: 10px;
  }
  &__title {
    padding: 10px;
    font-weight: 600;
    font-size: 18px;
    line-height: 149.5%;
  }
  &__map {
    padding: 10px;
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 2px;
  }
  &__dropdown {
    width: 150px;
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
    height: 100%;
    &-table {
      height: 90%;
      overflow: overlay;

      table {
        width: 100%;
        thead {
          background: var(--blue-dark);
          // position: sticky;
          // top: 0px;

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
</style>
