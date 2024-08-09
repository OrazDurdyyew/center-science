<template>
  <div class="file-upload">
    <div class="file-upload__title">File</div>
    <div class="file-upload__input">
      <div v-if="progress" class="file-upload__input-progress">{{ progress }} %</div>
      <div class="file-upload__input-icon">
        <input @change="change" accept=".pdf" class="file-upload__input-input" type="file" />
        <div class="file-upload__input-placeholder">{{ fileName }}</div>
        <img src="@/assets/icons/file.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        file: null,
        fileName: 'Faýl saýlaň',
        progress: null,
        publicationFile: null
      }
    },
    methods: {
      change(event) {
        this.fileName = event.target.files[0].name
        this.addNewFile(event.target.files[0])
        //   this.$emit('fileUploaded', event.target.files[0])
      },
      async addNewFile(file) {
        const formData = new FormData()
        formData.append('file', file)
        const config = {
          onUploadProgress: (progressEvent) => {
            this.progress = Math.round((progressEvent.loaded * 100) / progressEvent.total)
          }
        }
        try {
          const { data, status } = await this.$axios.post('admin/file', formData, config)
          if (!status) return
          this.$emit('file', data.data)
        } catch (error) {
          console.log(error)
        }
      },
      openPdf() {}
    }
  }
</script>

<style lang="scss" scoped>
  .file-upload {
    &__title {
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.135px;
      margin-bottom: 4px;
      color: var(--text);
    }

    &__input {
      display: flex;
      align-items: center;
      position: relative;
      background: var(--input);
      padding: 12px 10px;
      border-radius: 4px;
      &-placeholder {
        position: absolute;
        left: 0;
        top: 2px;
      }
      &-input {
        position: absolute;
        top: -12px;
        width: 100%;
        height: 43px;
        opacity: 0;
        z-index: 1;
      }
      &-preview {
        margin-right: 10px;
        cursor: pointer;
        img {
          height: 20px;
        }
      }
      &-icon {
        display: flex;
        justify-content: flex-end;
        position: relative;
        flex: 1 1 auto;
        margin-right: 10px;
        cursor: pointer;
        img {
          height: 20px;
        }
      }
    }
  }
</style>
