<template>
  <div class="journal-about">
    <bread-crumb :pages="breadCrumb"></bread-crumb>
    <div class="journal-about__description">
      <h2>ВАРИАНТЫ ОПЛАТЫ:</h2>
      <p>Реквизиты направляются автору только после утверждения статьи в печать</p>
      <br />
      <p>Возможные способы оплаты</p>
      <div class="payment__images">
        <div class="payment__image">
          <img src="@/assets/img/payment1.png" alt="" />
        </div>
        <div class="payment__image">
          <img src="@/assets/img/payment2.png" alt="" />
        </div>

        <div class="payment__image">
          <img src="@/assets/img/sberbank.png" alt="" />
        </div>
        <div class="payment__image">
          <img src="@/assets/img/qiwi.png" alt="" />
        </div>
      </div>
      <p>Необходимые реквизиты высылаются по личной почте в ответе письма.</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        breadCrumb: [
          {
            name: this.$t('menu.main'),
            path: '/'
          },
          {
            name: 'Оплата',
            path: '/payment'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .journal-about {
    &__header {
      padding: 10px;
      background: #e6e6e6;
    }
  }
  .journal-about__description {
    padding: 20px;
    margin-top: 20px;
    h2 {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 10px;
      text-align: center;
    }
    h3 {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 10px;
    }

    h4 {
      font-size: 18px;
      font-weight: 600;
      margin-top: 30px;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
      line-height: 140%;
      margin-bottom: 10px;
      text-indent: 15px;
      text-align: justify;
    }
    ul {
      padding: 0 40px;
      li {
        line-height: 160%;
        font-size: 18px;
        margin-bottom: 20px;
        text-indent: 1.5em;
        position: relative;
        &::before {
          content: '';
          position: absolute;
          top: 9px;
          left: 11px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background-color: #666;
        }
      }
    }
  }

  .table__anketa {
    width: 100%;
    border: 1px solid #000;
    border-spacing: 5px;
    margin-bottom: 40px;
    thead {
      tr {
        th {
          text-align: left;
          padding: 10px;
          border: 1px solid #000;
          font-size: 15px;
        }
      }
    }
    tbody {
      tr {
        td {
          text-align: left;
          padding: 10px;
          border: 1px solid #000;
          font-size: 15px;
        }
      }
    }
  }

  .payment__images {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
    margin: 20px 0;
  }
  .payment__image {
    border: 1px solid #333;
    border-radius: 8px;
    padding: 10px;
    img {
      height: 100px;
      width: 500px;
      object-fit: contain;
    }
  }
</style>
