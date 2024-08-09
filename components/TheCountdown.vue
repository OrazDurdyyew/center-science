<template>
  <div v-if="days" class="countdown">
    <div class="countdown-item">
      <span class="countdown-label"
        >До оканчания приёма статей осталось:
        <span class="countdown-value">{{ days }} {{ days === 1 ? 'день' : days === 3 ? 'дня' : days === 2 ? 'дня' : 'дней' }} </span></span
      >
    </div>
    <div class="countdown-item" style="font-size: 14px; font-weight: 500">
      <span class="countdown-label">выпуск от {{ countdownDay + 1 }}-ого числа</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        countdownDate: null,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        countdownDay: 0
      }
    },
    mounted() {
      //   Set the countdown date to the next 5th, 15th, or 25th day of the month
      const currentDate = new Date()
      const currentDay = currentDate.getDate()
      let countdownDay
      if (currentDay < 5) {
        this.countdownDay = 6
      } else if (currentDay < 15) {
        this.countdownDay = 16
      } else if (currentDay < 25) {
        this.countdownDay = 26
      } else {
        this.countdownDay = 5
        currentDate.setMonth(currentDate.getMonth() + 1)
      }
      this.countdownDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), this.countdownDay, 0, 0, 0)
      // Update the countdown every second
      setInterval(this.updateCountdown, 1000)
    },
    methods: {
      updateCountdown() {
        const currentDate = new Date()
        const difference = this.countdownDate - currentDate
        this.days = Math.floor(difference / (1000 * 60 * 60 * 24))
        this.hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        this.minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        this.seconds = Math.floor((difference % (1000 * 60)) / 1000)
      }
    }
  }
</script>

<style scoped lang="scss">
  .countdown {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    font-weight: bold;
  }

  .countdown-item {
    display: flex;
    align-items: center;
    line-height: 180%;
    margin: 0 1rem;
    @media (max-width: 700px) {
      margin: 0;
    }
  }

  .countdown-value {
    font-size: 24px;

    margin-left: 5px;
    @media (max-width: 700px) {
      font-size: 20px;
    }
    @media (max-width: 530px) {
      font-size: 18px;
    }
    @media (max-width: 450px) {
      font-size: 16px;
    }
  }

  .countdown-label {
    font-size: 20px;
    @media (max-width: 700px) {
      font-size: 16px;
    }
    @media (max-width: 530px) {
      font-size: 14px;
    }
    @media (max-width: 450px) {
      font-size: 12px;
      text-align: end;
    }
  }
</style>
