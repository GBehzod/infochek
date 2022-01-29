<template>
  <section class="why">
    <div class="container">
      <div class="why_wrapper">
        <img 
          class="why_wrapper-img"
          src="https://thumb.tildacdn.com/tild3530-6539-4232-b736-663331383065/-/resize/297x/-/format/webp/girl.jpg" 
          alt=""
        >

        <div class="why_wrapper-text">
          <p class="why_wrapper-text--title">
            Почему именно InfoChek?
          </p>

          <div class="why_wrapper-text-cards">
            <div class="why_wrapper-text-cards-card"
              v-for="(card, index) in cards"
              :key="index"
            >
              <i class="why_wrapper-text-cards-card--icon bx bxs-star"></i>
              <p class="why_wrapper-text-cards-card--title">
                {{card.title}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Why-sections",
    data() {
      return {
        cards: [
          {
            title: 'Собственное производство в Санкт-Петербурге'
          },
          {
            title: 'Срок изготовления от 2 до 14 дней'
          },
          {
            title: 'Более 9 лет успешной работы на рынке рекламы на чеках'
          },
          {
            title: 'Размещение рекламы в Федеральных и Региональных торговых сетях'
          },
          {
            title: 'Более 120 000 точек размещения рекламы в более чем 1000 городах России и СНГ'
          },
          {
            title: 'Свыше 3 000 успешных рекламных кампаний'
          }
        ]
      }
    }
  }
</script>