<template>
  <div class="d-dropdown" ref="dropdown">
    <div class="d-dropdown__box">
      <div class="d-dropdown__label">{{ label }}</div>
      <div :class="['d-dropdown__body', { active: active }]">
        <div @click="active = !active" class="d-dropdown__textarea">
          <div class="d-dropdown__text">{{ selectedItem }}</div>
          <div class="d-dropdown__icon">
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_389_79)">
                <path d="M7.41 9.08997L12 13.67L16.59 9.08997L18 10.5L12 16.5L6 10.5L7.41 9.08997Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_389_79"><rect width="24" height="24" fill="white" transform="translate(0 0.5)" /></clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div class="d-dropdown__menu">
          <div v-for="(item, index) in items" :key="index" @click="selectItem(item)" class="d-dropdown__menu-item">
            <div class="d-dropdown__check-item">
              <span class="d-dropdown__menu-name">{{ item.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      items: {
        type: Array,
        default: () => []
      },
      label: {
        type: String,
        default: () => ''
      },
      selectedItem: {
        type: String,
        default: () => ''
      },
      chekable: {
        type: Boolean,
        default: () => false
      }
    },
    data() {
      return {
        active: false,
        dropdown: null
      }
    },
    mounted() {
      document.addEventListener('click', (event) => {
        const isClickInside = this.$refs?.dropdown?.contains(event.target)
        if (!isClickInside) {
          this.active = false
        }
      })
    },
    methods: {
      selectItem(item) {
        if (!this.chekable) {
          this.active = false
        }
        this.$emit('selectItem', item)
      }
    }
  }
</script>

<style scoped>
  .d-dropdown {
    user-select: none;
  }
  .d-dropdown__menu-icon {
  }
  .checkbox {
    pointer-events: none;
  }
  .d-dropdown {
    width: 100%;
  }

  .d-dropdown__box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .d-dropdown__label {
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: #586a84;
    margin-bottom: 6px;
  }

  .d-dropdown__body {
    position: relative;
    padding: 11px 10px;
    background: #f5f5f5;
    border: 1px solid #bcbcbc;
    border-radius: 4px;
  }

  .d-dropdown__body.active {
    border: 1px solid #f5f5f5;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  .d-dropdown__body.active .d-dropdown__menu {
    display: block;
  }

  .d-dropdown__body.active .d-dropdown__icon {
    -webkit-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }

  .d-dropdown__textarea {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .d-dropdown__text {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #586a84;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding-right: 5px;
  }

  .d-dropdown__icon {
    width: 20px;
    height: 20px;
    background-color: transparent;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    cursor: pointer;
    color: #586a84;
  }

  .d-dropdown__menu {
    width: calc(100% + 1px);
    position: absolute;
    top: 100%;
    left: 0px;
    display: none;
    z-index: 30;
    background-color: #f5f5f5;
    color: #586a84;
  }

  .d-dropdown__menu-item {
    width: 100%;
    cursor: pointer;
  }
  .d-dropdown__menu-item:hover {
    background: #089c34ce;
    color: #fff;
  }

  .d-dropdown__check-item {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
    padding: 10px 12px;
  }

  .d-dropdown__menu-name {
    display: block;
    width: 100%;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }

  .d-dropdown__menu-icon {
    display: block;
    width: 100%;
    width: 20px;
    height: 20px;
  }
</style>
