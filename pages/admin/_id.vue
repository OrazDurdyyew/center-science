<template>
  <div class="admin-journal">
    <div class="admin-journal__header">
      <div class="admin-journal__title">
        <h2>Žurnal goşamk</h2>
      </div>
    </div>
    <div class="admin-journal__body">
      <div class="row mb-5">
        <div class="col-12">
          <div class="col__title"><h2>Esasy pdf</h2></div>
        </div>
        <div class="col-2">
          <text-filed
            :value="main.dateFormat"
            @updateValue="(val) => (main.dateFormat = val)"
            type="date"
            label="Senesi"
          ></text-filed>
        </div>
        <div class="col-2">
          <text-filed
            :value="main.content"
            @updateValue="(val) => (main.content = val)"
            type="text"
            label="Text"
          ></text-filed>
        </div>
        <div class="col-4">
          <file-upload @file="(file) => (main.bigPath = file)"></file-upload>
        </div>
        <div v-if="main.bigPath" class="col-2 flex flex-y-center">
          <span @click="openPdf(main.bigPath, true)" class="journal__pdf"
            >PDF</span
          >
        </div>
        <div class="col-12">
          <div class="dvider"></div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="col__title"><h2>Содержание</h2></div>
        </div>
        <div class="col-2">
          <text-filed
            :value="main.page"
            @updateValue="(val) => (main.page = val)"
            type="text"
            label="Страница"
          ></text-filed>
        </div>

        <!-- <div class="col-2">
          <text-filed :value="main.authorName" @updateValue="(val) => (main.authorName = val)" type="text" label="Автор"></text-filed>
        </div> -->
        <div class="col-4">
          <file-upload @file="(file) => (main.path = file)"></file-upload>
        </div>
        <div v-if="main.path" class="col-2 flex flex-y-center">
          <span @click="openPdf(main.path, true)" class="journal__pdf"
            >PDF</span
          >
        </div>
        <div class="col-12">
          <div class="dvider"></div>
        </div>
        <div class="col-12 flex flex-x-end mr-5 mb-5">
          <div class="checkbox__title">Publish Status</div>
          <input
            v-model="main.publishStatus"
            class="checkbox"
            type="checkbox"
          />
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
import openPdf from "@/mixins/openPdf";
import FileUpload from "@/components/admin/FileUpload.vue";

export default {
  layout: "admin",
  mixins: [openPdf],
  middleware: ["auth-admin"],
  components: {
    FileUpload,
  },
  data() {
    return {
      main: {
        content: "",
        bigPath: null,
        authorName: "",
        page: "",
        path: null,
        dateFormat: "",
        publishStatus: false,
      },
    };
  },
  async mounted() {
    if (this.$route.params.id != 0) {
      await this.fetchOneItem();
    }
  },
  methods: {
    async addJournal() {
      try {
        const { data, status } = await this.$axios.post(
          "admin/create",
          this.main
        );
        if (status) {
          this.$router.go(-1);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchOneItem() {
      try {
        const { data, status } = (
          await this.$axios.post("admin/get", { uuid: this.$route.params.id })
        ).data;
        if (status) {
          Object.keys(this.main).forEach((key) => {
            this.main[key] = data[key];
          });
          this.main.uuid = data.uuid;
        }
      } catch (error) {
        console.log(error);
      }
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
</style>
