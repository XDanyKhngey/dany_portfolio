<template>
  <div id="nav_container">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <h2 class="m-0">Dany Khgney</h2>
      </div>
      <div class="navbar">
        <ul id="nav_list" class="d-flex justify-content-between p-0">
          <li>
            <RouterLink to="/" activeClass="active_link">{{
              $t("home")
            }}</RouterLink>
          </li>
          <li><a href="#">Education</a></li>
          <li><a href="#">Skill</a></li>
          <li><a href="#">Experience</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Family</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="setting">
        <ul class="d-flex justify-content-between p-0">
          <li>
            <img
              style="cursor: pointer"
              @click="toggleLocale()"
              width="32px"
              :src="locale_img_src"
              alt="locales"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  color: var(--bs-pink);
  font-weight: bolder;
}
#nav_container {
  background-color: rgba(255, 255, 255, 0.3);
}
#nav_list li {
  padding: 30px 10px;
}
#nav_list a {
  text-decoration: none;
  color: white;
}
#nav_list a:hover {
  border-bottom: 2px solid var(--bs-pink);
}
.active_link {
  border-bottom: 2px solid var(--bs-pink);
  color: var(--bs-pink) !important;
}
</style>

<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      locale_img_src: "/img/en.png", // Default image source in public folder
      en_img: "/img/en.png", // Image in public folder
      kh_img: "/img/kh.png", // Image in public folder
    };
  },

  mounted() {
    // Check localStorage for saved locale and set it on page load
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
      this.updateLocaleImage(); // Update image on initial load based on locale
    } else {
      localStorage.setItem("locale", this.$i18n.locale); // Save default locale
      this.updateLocaleImage();
    }
  },

  methods: {
    toggleLocale() {
      // Toggle between 'kh' and 'en' and save to localStorage
      const newLocale = this.$i18n.locale === "kh" ? "en" : "kh";
      this.$i18n.locale = newLocale;
      localStorage.setItem("locale", newLocale); // Save the selected locale
      this.updateLocaleImage(); // Update the image based on locale
    },

    updateLocaleImage() {
      // Update image based on the current locale
      this.locale_img_src =
        this.$i18n.locale === "kh" ? this.en_img : this.kh_img;
    },
  },
};
</script>
