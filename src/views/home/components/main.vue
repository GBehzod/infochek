<template>
  <main class="main">
    <div class="container">
      <div class="main_heading heading">
        <h1 class="main_heading-title">
          InfoChek
        </h1>
        <p class="main_heading-subtitle">
          реклама на чеках
        </p>
      </div>
      <h1 class="main_title title">
        Преимущества рекламы на чеках
      </h1>

      <div class="main_cards">
        <div class="main_cards-card"
          v-for="(card, index) in cards"
          :key="index"
        >
          <div class="main_cards-card-head">
            <i 
              class="main_cards-card-head--icon"
              :class="card.icon"
            ></i>

            <p class="main_cards-card-head--title">
              {{card.title}}
            </p>
          </div>
          <div class="main_cards-card-body">
            <p class="main_cards-card-body--title">
              {{card.subtitle}}
            </p>
          </div>
        </div>
      </div>

      <button class="main_button v-button"
        @click="gotoRouter"
      >
        Узнать больше 
      </button>
    </div>
  </main>
</template>

<script>
  export default {
    name: "Home-main" ,
    data() {
      return {
        cards: [
          {
            icon: "bx bx-target-lock",
            title: "100% целевые контакты",
            subtitle: "Только та аудитория, которой нужна ваша продукция или услуги"
          },
          {
            icon: "bx bxs-user-check",
            title: "100% контакт с клиентом",
            subtitle: "По закону при совершении покупки продавец обязан выдать чек"
          },
          {
            icon: "el-icon-location-outline",
            title: "Геотаргетинг",
            subtitle: "Возможность выбрать конкретную торговую точку в конкретном городе"
          },
          {
            icon: "bx bx-palette",
            title: "Полноцветная печать",
            subtitle: "Яркие краски радуют глаз и привлекают внимание"
          },
          {
            icon: "bx bxs-star",
            title: "Быстрая отдача",
            subtitle: "Скорость размещения информации — от 100 000 контактов в день"
          },
          {
            icon: "bx bx-calendar",
            title: "Долгий период хранения",
            subtitle: "Многие покупатели привыкли хранить чеки до полугода после покупки"
          },
          {
            icon: "bx bx-infinite",
            title: "Неограниченный срок",
            subtitle: "Неделя, месяц, квартал, год — срок ограничен только количеством рекламных модулей"
          },
          {
            icon: "el-icon-star-off",
            title: "Качественная печать",
            subtitle: "Собственное производство, европейское сырье"
          }
        ]
      }
    },
    methods: {
      gotoRouter() {
        this.$router.push({name: 'about'})
      }
    }
  }
</script>