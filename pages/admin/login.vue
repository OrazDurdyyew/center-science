<template>
  <div class="admin-login">
    <div class="admin-login__wrapper">
      <div class="admin-login__body">
        <div class="admin-login__body--title">
          <h2>ЦЕНТЕР НАУКИ</h2>
        </div>
        <form class="admin-login__body--form" @submit.enter.prevent="logIn">
          <div class="admin-login__body--logo">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
          <div class="admin-login__body--input">
            <div class="row">
              <div class="col-12">
                <text-filed
                  label="Имя пользователя"
                  :value="userData.name"
                  :error="!userData.name && error"
                  @updateValue="(val) => (userData.name = val)"
                ></text-filed>
              </div>
              <div class="col-12">
                <text-filed
                  label="Пароль"
                  :type="isPass ? 'text' : 'password'"
                  :appendIcon="isPass ? 'eye_close.png' : 'eye.png'"
                  :value="userData.password"
                  :error="!userData.password && error"
                  @updateValue="(val) => (userData.password = val)"
                  @clickAppend="isPass = !isPass"
                ></text-filed>
              </div>
              <div class="col-12" style="margin-top: 30px">
                <button class="login__btn">Вход</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'empty',
    data() {
      return {
        error: false,
        isPass: false,
        userData: {
          name: '',
          password: ''
        }
      }
    },
    methods: {
      async logIn() {
        if (!this.userData.name || !this.userData.password) {
          this.error = false
          setTimeout(() => {
            this.error = true
          }, 0)
        } else {
          try {
            const { data, status } = await this.$auth.loginWith('local', {
              data: {
                login: this.userData.name,
                password: this.userData.password
              }
            })
            if (status) {
              localStorage?.setItem('Authorization', data.data.token)
              this.$cookie.set('Authorization', data.data.token)
              this.$router.push('/admin')
            } else {
              alert(data.message)
            }
          } catch (err) {
            console.log(err)
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-login {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background: var(--background);
    &__wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow-y: auto;
    }
    &__body {
      width: 420px;

      &--title {
        font-weight: 600;
        font-size: 40px;
        line-height: 48px;
        text-align: center;
        color: var(--blue-dark);
        margin-bottom: 30px;
      }
      &--form {
        background: var(--white);
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 10px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      &--logo {
        width: 75px;
        height: auto;

        img {
          width: 100%;
          height: 100%;
        }
      }
      &--input {
        width: 100%;
      }
      &--img {
        width: 100%;
        height: 32.3px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow-y: auto;
      }
    }
  }

  .login__btn {
    width: 100%;
    padding: 10px;
    background: var(--blue-dark);
    color: var(--white);
    font-size: 14px;
  }
</style>
