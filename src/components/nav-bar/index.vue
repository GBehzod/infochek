<template>
  <nav class="nav ">
    <div class="container">
      <div class="nav-bar v-nav "
        :class=" toggleClass ? 'v-nav-open' : ''"
      >
        <div 
          class="nav-bar_logo"
        >
          <router-link
            class="nav-bar_logo-title"
            to="/"
          >
            InfoChek
          </router-link>

          <i class="el-icon-s-grid nav-bar_logo-icon"
            @click="onToggle"
          ></i>
        </div>

        <ul class="nav-bar_links">
          <li 
            v-for="(link, index) in links" 
            :key="index"
            class="nav-bar_links-list"
          >
            <router-link 
              :to="link.to"
              class="nav-bar_links-list--link"
            >
              {{link.title}}
            </router-link>
          </li>
        </ul>

        <div class="nav-bar_contact">
          <a 
            :href="`tel:+${contact.number}`"
            class="nav-bar_contact-num"
          >
            {{contact.title}}
          </a>
          <p class="nav-bar_contact-title">Ташкетн</p>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import i18n from '../../i18n';
  import { mapGetters } from 'vuex';

  export default {
    name: "NavBar",
    data() {
      return {
        links: [
          {
            to: '/about',
            title: "О рекламе на чеках"
          },
          {
            to: '/trading',
            title: "Торговые сети"
          },
          {
            to: '/franchises',
            title: "Франшизи"
          },
          {
            to: '#',
            title: "Блог"
          },
          {
            to: '#',
            title: "Контакты"
          },
          {
            to: '#',
            title: "Наши клиенты"
          }
        ],
        toggleClass: false,
      }
    },
    methods: {
      setLanguage(lang) {
        i18n.locale = lang
      },
      onToggle() {
        this.toggleClass = !this.toggleClass
      }
    },
    computed: {
      ...mapGetters('about', ['contact'])
    }
  }
</script>
