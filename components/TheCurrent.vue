<template>
  <div class="journal-current">
    <div class="journal-current__header">
      <h2>{{ $t('currentIssue') }}</h2>
    </div>
    <div class="journal-current__release">
      <div class="journal-current__release-title">
        <div class="journal-current__release-text">
          <h2>{{ journal.content }}</h2>
        </div>
        <div class="journal-current__release-file">
          <p>{{ $t('downloadIssue') }}</p>
          <span @click="openPdf(journal.bigPath, journal.uuid, true)">PDF</span>
        </div>
      </div>
    </div>
    <div v-if="$route.name !== `index___${$i18n.locale}`" class="journal-current__articles">
      <div class="journal-current__articles-header">
        <p>{{ $t('publications') }}</p>
      </div>
      <div v-for="item in articles" :key="item.uuid" class="journal-current__articles-article">
        <div class="journal-current__articles-title">
          <p>{{ item.title }}</p>
        </div>
        <div class="journal-current__articles-authors">
          <nuxt-link v-for="(elem, index) in item.authorName" :key="index" :to="localePath(`/${elem.name}?id=${elem.uuid}`)"
            >{{ elem.name }}
          </nuxt-link>
        </div>
        <div @click="openPdf(item.path, item.uuid, false)" class="journal-current__articles-file">PDF (RUS)</div>
        <div class="journal-current__articles-datas">
          <span class="pages">{{ item.page }}</span>
          <span class="views">{{ item.downloadCount }}</span>
        </div>
        <div class="journal-current__articles-annotation">
          <h4>Аннотация</h4>
          <p>
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import openPdf from '@/mixins/openPdf'

  export default {
    mixins: [openPdf],
    data() {
      return {
        journal: {},
        articles: []
      }
    },
    async fetch() {
      await this.fetchJournal()
    },
    methods: {
      async fetchJournal() {
        try {
          const { data, status } = (await this.$axios.post('admin/last-mgn', { page: 1, limit: 500 })).data
          if (status) {
            this.journal = data
            await this.fetchArticles(data.uuid)
          }
        } catch (error) {
          console.log(error)
        }
      },
      async fetchArticles(id) {
        try {
          const { data, status } = (await this.$axios.post('admin/get-articles', { uuid: id })).data
          if (status) {
            this.articles = data
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .journal-current {
    margin-top: 10px;
    &__header {
      padding: 10px;
      background: #e6e6e6;
      h2 {
        text-transform: uppercase;
        font-size: 20px;
      }
    }
    &__release {
      padding: 20px 10px;

      &-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        @media (max-width: 700px) {
          flex-direction: column;
          align-items: flex-start;
        }
      }
      &-text {
        font-size: 28px;
        font-style: italic;
        @media (max-width: 700px) {
          margin-bottom: 10px;
        }
      }
      &-file {
        display: flex;
        justify-content: space-between;
        p {
          font-weight: normal;
          font-size: 18px;
          margin-right: 20px;
        }
        span {
          color: #29abe2;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          &:hover {
            color: var(--hover);
            text-decoration: underline;
          }
        }
      }
    }
    &__articles {
      &-header {
        border-bottom: 1px solid #cccccc;
        padding-bottom: 10px;
        p {
          margin-left: 25px;
          padding: 3px 25px;
          background: #666666;
          color: #fff;
          width: 25%;
          line-height: 25px;
          font-size: 17px;
          text-transform: uppercase;
          @media (max-width: 700px) {
            width: 100%;
            margin-left: 0;
          }
        }
      }
      &-article {
        padding: 10px;
        padding-bottom: 20px;
        margin-bottom: 10px;
        border-bottom: 1px solid #cccccc;
      }
      &-title {
        color: #29abe2;
        text-decoration: none;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        margin-bottom: 20px;
        cursor: pointer;
        &:hover {
          color: var(--hover);
        }
      }
      &-authors {
        font-size: 16px;
        font-style: italic;
        margin-bottom: 15px;
        a {
          margin-right: 15px;
          &:hover {
            text-decoration: underline;
          }
        }
      }
      &-file {
        color: #29abe2;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        margin-bottom: 10px;
      }
      &-datas {
        margin-bottom: 5px;
        .pages {
          position: relative;
          color: #808080;
          font-size: 15px;
          margin-right: 30px;
          text-transform: lowercase;
          &:before {
            content: '';
            display: inline-block;
            margin-right: 5px;
            width: 15px;
            height: 15px;
            background: url('@/assets/img/icon_page.svg') 0 0 no-repeat;
            vertical-align: top;
          }
        }
        .views {
          position: relative;
          color: #808080;
          font-size: 15px;
          margin-right: 30px;
          text-transform: lowercase;
          &:before {
            content: '';
            display: inline-block;
            margin-right: 5px;
            width: 20px;
            height: 19px;
            background: url('@/assets/img/icon_eye.svg') 0 0 no-repeat;
            vertical-align: top;
          }
        }
      }
      &-annotation {
        margin-bottom: 5px;
        h4 {
          color: #29abe2;
          font-size: 14px;
          margin-bottom: 10px;
        }
        p {
          margin-left: 10px;
          color: #333;
          line-height: 20px;
        }
      }
    }
  }
</style>
