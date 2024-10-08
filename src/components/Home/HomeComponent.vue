<script setup>
import HeaderComponent from "../Header/HeaderComponent.vue";
</script>

<template>
  <div id="bg_cover">
    <HeaderComponent></HeaderComponent>
    <div
      class="d-flex justify-content-center align-items-center"
      style="height: calc(100vh - 100px); flex-direction: column"
    >
      <h1 class="text-center">
        {{ h1TypedText }}<br />
        <br />
        <span style="color: var(--bs-pink); font-weight: bold">{{
          h1SpanTypedText
        }}</span>
      </h1>
      <h4 class="text-center mt-5">{{ h4TypedText }}</h4>
      <a
        target="_blank"
        href="/cv.pdf"
        class="mt-5 btn btn-secondary"
        id="download_cv_btn"
        >{{ $t("download_cv").toUpperCase() }}</a
      >
    </div>
  </div>
</template>
<style>
h1,
h4 {
  color: white;
}
#bg_cover {
  position: relative; /* Set the position to relative to position the pseudo-element */
  width: 100%;
  height: calc(100vh);
  background-image: url("/img/bgbook.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

#bg_cover::before {
  content: ""; /* Required for pseudo-elements */
  position: absolute; /* Position it absolutely within the parent */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3); /* Black with 50% opacity */
  backdrop-filter: blur(8px); /* Adjust the blur radius as needed */
  z-index: 1; /* Ensure it's above the background image */
}

#bg_cover > * {
  position: relative; /* Ensure child elements appear above the overlay */
  z-index: 2; /* Keep content above the pseudo-element */
}

#download_cv_btn {
  padding: 10px 30px;
  font-weight: bold;
  background-color: var(--bs-pink);
}

.typing-effect {
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid;
  animation: blink-caret 0.75s step-end infinite;
}

/* Blinking cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: white;
  }
}
</style>

<script>
export default {
  data() {
    return {
      h1TypedText: "", // Stores typed h1 text
      h1SpanTypedText: "", // Stores typed span text
      h4TypedText: "", // Stores typed h4 text
      h1Index: 0, // Index for typing the h1 text
      h1SpanIndex: 0, // Index for typing the h1 span text
      h4Index: 0, // Index for typing the h4 text
      typingSpeed: 100, // Typing speed in ms
      loopDelay: 3000, // Delay before restarting the animation
      typingInterval: null, // To store the interval ID
    };
  },
  mounted() {
    this.startTyping(); // Start the typing animation when mounted
  },
  methods: {
    resetTyping() {
      // Reset both h1 and h4 texts and indices
      this.h1TypedText = "";
      this.h1SpanTypedText = "";
      this.h4TypedText = "";
      this.h1Index = 0;
      this.h1SpanIndex = 0;
      this.h4Index = 0;
      this.startTyping(); // Restart the typing after reset
    },
    typeH1() {
      const h1Text = this.$t("hi_i_am").toUpperCase();
      if (this.h1Index < h1Text.length) {
        this.h1TypedText += h1Text[this.h1Index];
        this.h1Index++;
      }
    },
    typeH1Span() {
      const h1SpanText = this.$t("dany_khgney").toUpperCase();
      if (this.h1SpanIndex < h1SpanText.length) {
        this.h1SpanTypedText += h1SpanText[this.h1SpanIndex];
        this.h1SpanIndex++;
      }
    },
    typeH4() {
      const h4Text = `${this.$t("web_dev").toUpperCase()} / ${this.$t(
        "government_officer"
      ).toUpperCase()}`;
      if (this.h4Index < h4Text.length) {
        this.h4TypedText += h4Text[this.h4Index];
        this.h4Index++;
      }
    },
    startTyping() {
      this.typingInterval = setInterval(() => {
        this.typeH1();
        if (this.h1Index === this.$t("hi_i_am").toUpperCase().length) {
          this.typeH1Span();
        }
        this.typeH4();
        if (
          this.h1SpanTypedText === this.$t("dany_khgney").toUpperCase() &&
          this.h4TypedText ===
            `${this.$t("web_dev").toUpperCase()} / ${this.$t(
              "government_officer"
            ).toUpperCase()}`
        ) {
          clearInterval(this.typingInterval);
          setTimeout(this.resetTyping, this.loopDelay); // Restart after delay
        }
      }, this.typingSpeed);
    },
  },
};
</script>
