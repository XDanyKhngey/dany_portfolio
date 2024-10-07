<template>
    <div class="container d-flex justify-content-between align-items-center">
        <div class="logo">
            <h2 class="m-0">Dany Khgney</h2>
        </div>
        <div class="navbar">
            <ul id="nav_list" class="d-flex justify-content-between">
                <li><a href="#">Home</a></li>
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
            <ul class="d-flex justify-content-between">
                <li><button>Dark Mode</button></li>
                <li><button v-on:click="toggleLocale()">Language</button></li>
            </ul>
        </div>
    </div>
    <hr>
</template>

<script>
export default {
  methods: {
    toggleLocale() {
      this.$i18n.locale = this.$i18n.locale === 'kh' ? 'en' : 'kh';
    }
  }
};
</script>