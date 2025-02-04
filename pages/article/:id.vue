<template>
    <div class="articles__item __container">
        <div class="articles__border">
            <div class="articles__border-wrapper">
                <div class="articles__border-color"></div>
            </div>
        </div>
        <div class="articles__item-title">
            <p>{{ article.title }}</p>
        </div>
        <div class="articles__item-authors">
            <p v-for="(elem, index) in article.authorName" :key="index">{{ elem.name }}</p>
        </div>
        <div class="articles__item-file">
            <img src="@/assets/icons/pdf.png" alt="" />
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
</template>

<script>

import openPdf from '@/mixins/openPdf'

export default {
    mixins: [openPdf],
    data() {
        return {
            article: {
                authorName: [],
                desc: '',
                downloadCount: 0,
                page: '',
                path: '',
                title: '',
                firstPage: '',
                lastPage: '',
                dateFormat: '',
                content: '',
                issue: ''
            }
        }
    },
    head() {
        return {
            meta: [
                { name: 'citation_title', content: this.article.title },
                { name: 'citation_author', content: this.article.authorName?.map(elem => elem.name).join(' ') },
                { name: 'citation_publication_date', content: this.dateConvert(this.article.dateFormat) },
                { name: 'citation_journal_title', content: 'ЦЕНТР НАУКИ' },
                { name: 'citation_volume', content: '1' },
                { name: 'citation_issue', content: this.article.issue },
                { name: 'citation_firstpage', content: this.article.firstPage },
                { name: 'citation_lastpage', content: this.article.lastPage },
                { name: 'citation_pdf_url', content: `https://center-nauki.ru${this.article.path}` },

            ],
        }
    },

    async mounted() {
        await this.fetchOneItem()
    },
    methods: {
        async fetchOneItem() {
            try {
                const { data, status } = (await this.$axios.post('admin/get-article-by-id', { uuid: this.$route.params.id })).data
                if (status) {
                    this.article.authorName = data.authorName
                    this.article.desc = data.desc
                    this.article.downloadCount = data.downloadCount
                    this.article.page = data.page
                    this.article.path = data.path
                    this.article.title = data.title
                    this.article.dateFormat = data.dateFormat
                    this.article.content = data.content

                    const [firstPart, secondPart] = data.page?.split('-')
                    const [firstText, secondText] = data.content?.split('№')
                    this.article.issue = secondText

                    this.article.firstPage = firstPart || ''
                    this.article.lastPage = secondPart || ''


                }
            } catch (error) {
                console.log(error)
            }
        },
        dateConvert(dateString) {
            const [year, month, day] = dateString?.split('-') || '';
            return `${day}/${month}/${year}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.articles {


    &__item {
        position: relative;
        margin-bottom: 10px;
        padding: 10px 10px 20px;

        @media screen and (max-width: 768px) {
            margin-left: 20px;
        }
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
                content: '';
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

        @media screen and (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
        }

        p {
            margin-right: 15px;
            color: var(--text);
            position: relative;

            &::before {
                content: '';
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
            content: '';
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