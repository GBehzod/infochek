<template>
  <section class="partnes">
    <div class="container">
      <div class="partnes_wrapper">
        <div class="partnes_wrapper-head">
          <p class="partnes_wrapper-head-title">
            Наши партнерские сети
          </p>

          <p class="partnes_wrapper-head-subtitle">
            Торговые сети, где Вы можете разместить свою полноцветную рекламу на чеках
          </p>
        </div>

        <div class="partnes_wrapper-carousel">
          <el-carousel height="200px !important" :interval="2000" direction="vertical" :autoplay="true">
            <el-carousel-item>
                <img class="carousel-image" src="@/assets/images/1.png" alt="">
            </el-carousel-item>

            <el-carousel-item>
              <img class="carousel-image" src="@/assets/images/3.png" alt="">
            </el-carousel-item>

            <el-carousel-item>
              <img class="carousel-image" src="@/assets/images/2.png" alt="">
            </el-carousel-item>

            <el-carousel-item>
              <img class="carousel-image" src="@/assets/images/4.jpg" alt="">
            </el-carousel-item>

            <el-carousel-item>
              <img class="carousel-image" src="@/assets/images/5.png" alt="">
            </el-carousel-item>
          </el-carousel>
        </div>

        <div class="partnes_wrapper-foot">
          <p class="partnes_wrapper-foot-title">
            Не нашли интересующую вас сеть?
          </p>

          <p class="partnes_wrapper-foot-subtitle">
            Свяжитесь с нами и мы предоставим полную информацию по регионам и сетям.
          </p>
        </div>

        <button
          class="partnes_wrapper-button v-button"
        >
          Отправить запрос 
        </button>
        
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Home-partnes",
    data() {
      return {

      }
    } 
  }
</script>

