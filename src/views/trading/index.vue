<template>
  <div class="trading">
    <div class="container">
      <div class="trading_wrapper">
        <div class="v-card">
          <p class="v-card-heading ">
            Наши торговые сети
          </p>

          <p class="v-card-subtitle v-text-center"> 
            Торговые сети, где Вы можете разместить свою полноцветную рекламу на чеках
          </p>
        </div>

        <div class="trading_wrapper-cards">
          <div class="trading_wrapper-cards-card"
            v-for="(card, index) in tradingCards"
            :key="index"
          >
            <img 
              class="trading_wrapper-cards-card--img"
              :src="card.img" 
              alt="#"
            >

            <p class="trading_wrapper-cards-card--title">
              Реклама на чеках в магазины {{card.title}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Trading",
    data() {
      return {
        tradingCards: [
          {
            img: 'https://www.afisha.uz/ui/catalog/2013/08/0075625.jpeg',
            title: 'Macro'
          },
          {
            img: 'http://zametki.uz/pictures/korz.png',
            title: 'Korzinka'
          },
          {
            img: 'https://www.afisha.uz/ui/catalog/2017/04/0622319.jpeg',
            title: "Asia"
          },
          {
            img: 'https://pictures.telegram-store.com/channels/havasuz/telegram_logo.jpg',
            title: 'Havas'
          }
        ]
      }
    },
    methods: {

    }
  }
</script>