<template>
  <el-carousel :interval="6000" arrow="always" style="height: 100vh">
    <el-carousel-item>
      <div class="carousel-wrapper">
        <img src="https://smartcheck.com.ua/ru/assets/images/saas-img/smart-check-banner.jpg" alt="">
        <div class="carousel-wrapper-text">
          <p class="carousel-wrapper-text-title">
            ЭКСКЛЮЗИВНО
          </p>

          <p class="carousel-wrapper-text-subtitle">
            Вы знаете, кому в руки попадет ваша реклама.
          </p>
        </div>
      </div>
    </el-carousel-item>

    <el-carousel-item>
      <div class="carousel-wrapper">
        <img src="http://promoatlas.ru/wp-content/uploads/2015/06/check_ad-1024x479.png" alt="">
        <div class="carousel-wrapper-text">
          <p class="carousel-wrapper-text-title">
            ДОСТУПНО
          </p>

          <p class="carousel-wrapper-text-subtitle">
            От 0,09 ₽ за 1 контакт
          </p>
        </div>
      </div>
    </el-carousel-item>

    <el-carousel-item>
      <div class="carousel-wrapper">
        <img src="http://l-chek.ru/assets/images/catalog/reklama-na-chekovoj-lente.jpg" alt="">
        <div class="carousel-wrapper-text">
          <p class="carousel-wrapper-text-title">
            МАСШТАБНО
          </p>

          <p class="carousel-wrapper-text-subtitle">
            Не менее 100 000 контактов в день
          </p>
        </div>
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {

  }
</script>

<style lang="scss">
  .el-carousel__item {

    .carousel-wrapper {
      position: relative;
      width: 100%;
      height: inherit;

      img {
        width: 100% !important;
        height: 100vh !important;
      }

      &-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        &-title {
          margin-bottom: 0;
          font-size: 3rem;
          color: #12208E;
          text-align: center;
          font-weight: bold;
          letter-spacing: 0.5px;
        }

        &-subtitle {
          margin-bottom: 0;
          color: #000;
          font-size: 2rem;
          text-align: center;
          font-weight: 500;
        }
      }
    }
  }

  .el-carousel__container {
    height: 100vh !important;

  }
</style>