import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['baseURL'])
  },
  methods: {
    async openPdf(pdf, uuid, type) {
      const link = document.createElement('a')
      link.href = this.baseURL + pdf
      link.setAttribute('target', '_blank')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      if (uuid) {
        try {
          const { data, status } = await this.$axios.post(`admin/update-download`, { UUID: uuid, status: type })
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
