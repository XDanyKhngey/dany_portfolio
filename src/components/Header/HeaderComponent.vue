<template>
  <div id="nav_container">
    <div class="container d-flex justify-content-between align-items-center">
      <div class="logo">
        <h2 class="m-0">
          <a style="color: var(--bs-pink); text-decoration: none" href="/">{{
            $t("dany_khgney")
          }}</a>
        </h2>
      </div>
      <div class="navbar">
        <ul id="nav_list" class="d-flex justify-content-between p-0">
          <li>
            <RouterLink to="/" activeClass="active_link">{{
              $t("home")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/education" activeClass="active_link">{{
              $t("education")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/skill" activeClass="active_link">{{
              $t("skill")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/experience" activeClass="active_link">{{
              $t("experience")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/profile" activeClass="active_link">{{
              $t("profile")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/family" activeClass="active_link">{{
              $t("family")
            }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" activeClass="active_link">{{
              $t("contact")
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <div class="setting">
        <ul class="d-flex justify-content-between align-items-center p-0">
          <li>
            <img
              style="cursor: pointer"
              @click="toggleLocale()"
              width="32px"
              :src="locale_img_src"
              alt="locales"
            />
          </li>
          <li style="padding: 5px 20px">
            <a target="_blank" href="https://github.com/XDanyKhngey/dany_portfolio">
              <img src="/img/github.png" width="32px" alt="Link to Github">
            </a>
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
  background-color: rgba(0, 0, 0, 0.7);
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
  font-weight: bolder;
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
      location.reload();
    },

    updateLocaleImage() {
      // Update image based on the current locale
      this.locale_img_src =
        this.$i18n.locale === "kh" ? this.en_img : this.kh_img;
    },
  },
};
</script>
