<template>
  <div class="latest-number">
    <div class="latest-number__container">
      <div class="latest-number__body">
        <div class="latest-number__articles">
          <div class="articles__release">
            <div class="articles__release-title">
              <div class="articles__release-text">{{ journal.content }}</div>
              <div class="articles__release-file">
                <p>Скачать выпуск</p>
                <span>
                  <a :href="journal.bigPath">PDF</a>
                </span>
              </div>
            </div>
          </div>
          <div class="articles__publication">
            <p>ПУБЛИКАЦИИ</p>
          </div>
          <div
            class="articles__item"
            v-for="(article, index) in articles"
            :key="index"
          >
            <div class="articles__border">
              <div class="articles__border-wrapper">
                <div class="articles__border-color"></div>
              </div>
            </div>
            <div class="articles__item-title">
              <p>{{ article.title }}</p>
            </div>
            <div class="articles__item-authors">
              <p v-for="(elem, index) in article.authorName" :key="index">
                {{ elem.name }}
              </p>
            </div>
            <div class="articles__item-file">
              <img src="../../assets/icons/pdf.png" alt="" />
              <p>
                <a :href="article.path"> PDF </a>
              </p>
            </div>
            <div class="articles__item-annotation">
              <h4>Аннотация</h4>
              <p>
                {{ article.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import openPdf from "@/mixins/openPdf";

export default {
  mixins: [openPdf],
  data() {
    return {
      journal: {},
      articles: [],
    };
  },
  async fetch() {
    await this.fetchJournal();
  },
  methods: {
    async fetchJournal() {
      try {
        const { data, status } = (
          await this.$axios.post("admin/get", { uuid: this.$route.params.id })
        ).data;
        if (status) {
          this.journal = data;
          await this.fetchArticles(data.uuid);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async fetchArticles(id) {
      try {
        const { data, status } = (
          await this.$axios.post("admin/get-articles", { uuid: id })
        ).data;
        if (status) {
          this.articles = data;
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.latest-number {
  &__breadcrumb {
    margin: 10px 0;
    padding: 10px;
  }

  &__title {
    background: #e6e6e6;
    padding: 10px;
    h3 {
      font-size: 14px;
    }
  }

  &__articles {
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
.articles {
  &__release {
    padding: 20px 10px;
  }

  &__release-title {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  &__release-text {
    font-size: 28px;
    font-style: italic;
    color: var(--text);
  }

  &__release-file {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--text);
    p {
      font-size: 18px;
      font-weight: 400;
      margin-right: 20px;
    }
    span {
      color: #29abe2;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
    }
  }
  &__publication {
    margin-bottom: 40px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #0272b1;
      color: #fff;
      font-size: 17px;
      margin-left: 25px;
      padding: 10px 25px;
      text-transform: uppercase;
      width: 15%;
      transition: 0.3s ease;
      border: 1px solid #0272b1;
      cursor: pointer;
      &:hover {
        transition: 0.3s ease;
        border-color: #eb6500;
        background: var(--white);
        color: var(--black);
      }
    }
  }
  &__item {
    position: relative;
    margin-bottom: 10px;
    padding: 10px 10px 20px;
  }
  &__border {
    position: absolute;
    top: 13px;
    left: -11px;
    width: 12px;
    height: 12px;
    &-wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--black);
    }
    &-color {
      border: 2px solid var(--white);
      background: #eb6500;
      width: 100%;
      height: 100%;
    }
  }
  // &__border-body {
  //   padding: 4px;
  // }
  &__item-title {
    color: var(--black);
    display: flex;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-bottom: 20px;
    -webkit-text-decoration: none;
    text-decoration: none;
    p {
      position: relative;
      &::before {
        content: "";
        position: absolute;
        bottom: 0;
        background: var(--border-bottom);
        width: 0;
        height: 2px;
        transition: 0.3s ease;
      }
      &:hover {
        color: var(--text);
        &::before {
          width: 100%;
        }
      }
    }
  }

  &__item-authors {
    font-size: 16px;
    font-style: italic;
    margin-bottom: 15px;
    display: flex;
    cursor: pointer;
    p {
      margin-right: 15px;
      color: var(--text);
      position: relative;
      &::before {
        content: "";
        width: 0;
        height: 2px;
        position: absolute;
        bottom: 0;
        transition: 0.3s ease;
        background: var(--black);
      }
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }

  &__item-file {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    &::before {
      content: "";
      width: 0;
      height: 2px;
      position: absolute;
      bottom: -5px;
      transition: 0.3s ease;
      background: #eb6500;
    }
    &:hover {
      &::before {
        width: 100px;
      }
    }
    img {
      margin-right: 7px;
    }
    p {
      font-size: 16px;
      font-weight: 600;
      color: #29abe2;
    }
  }

  &__item-data {
    margin-bottom: 5px;
    span {
      color: gray;
      font-size: 15px;
      margin-right: 30px;
      position: relative;
      text-transform: lowercase;
    }
  }

  &__item-annotation {
    margin-bottom: 5px;
    h4 {
      color: #29abe2;
      font-size: 16px;
      margin-bottom: 10px;
    }
    p {
      font-size: 16px;
      color: var(--text);
      line-height: 20px;
      margin-left: 10px;
    }
  }
}
</style>
