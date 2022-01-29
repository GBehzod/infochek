<template>
  <footer class="footer">
    <div class="footer_head">
      <p class="footer_head-title">
        © Infochek.com
      </p>

      <ul class="footer_head-links">
        <li class="footer_head-links-list"
          v-for="(link, index) in links"
          :key="index"
        >
          <a 
            class="footer_head-links-list-link"
            :href="link.href"
          >
            <i 
              class='bx'
              :class="link.icon"
            ></i>
          </a>
        </li>
      </ul>
    </div>

    <div class="footer_body">
      <p class="footer_body-title">
        Узбекистан, г.Ташкент, Чиланзарский р-н, улица Гавхар 125
      </p>
      <p class="footer_body-subtitle">
        infochekoffer@gmail.com
      </p>
    </div>
  </footer>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        links: [
          {
            href: '#',
            icon: 'bxl-facebook'
          },
          {
            href: '#',
            icon: 'bxl-vk'
          },
          {
            href: '#',
            icon: 'bxl-youtube'
          },
          {
            href: '#',
            icon: 'bxl-instagram'
          },
        ]
      }
    } 
  }
</script>