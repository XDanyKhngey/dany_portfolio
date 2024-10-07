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
        Hi, I AM<br />
        <span style="color: var(--bs-pink); font-weight: bold"
          >KHGNEY DANY</span
        >
      </h1>
      <h4 class="typing-effect text-center mt-4">
        WEB DEVELOPER / GOVERMENT OFFICER
      </h4>
      <a
        target="_blank"
        href="/cv.pdf"
        class="mt-5 btn btn-secondary"
        id="download_cv_btn"
        >DOWNLOAD CV</a
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
  mounted() {
    // Text for typing animation
    const h1Text = "Hi, I AM";
    const h1SpanText = "KHGNEY DANY";
    const h4Text = "WEB DEVELOPER / GOVERNMENT OFFICER";

    // Get elements
    const h1Element = document.querySelector("h1");
    const h1SpanElement = h1Element.querySelector("span");
    const h4Element = document.querySelector("h4");

    let h1TypedText = ""; // For storing typed h1 text
    let h4TypedText = ""; // For storing typed h4 text
    let h1Index = 0; // Start index for h1 typing
    let h4Index = 0; // Start index for h4 typing
    let spanTyped = false; // Flag to check if span text has been typed

    // Typing speed (in ms)
    const typingSpeed = 100;
    const loopDelay = 500; // Delay before starting the typing again

    // Typing effect for h1 (including the span)
    function typeH1() {
      if (h1Index < h1Text.length) {
        h1TypedText += h1Text[h1Index];
        h1Element.innerHTML = `${h1TypedText}<br /><span style="color: var(--bs-pink); font-weight: bold">${h1SpanElement.innerHTML}</span>`;
        h1Index++;
      } else if (!spanTyped) {
        h1SpanElement.textContent +=
          h1SpanText[h1SpanElement.textContent.length];
        if (h1SpanElement.textContent === h1SpanText) {
          spanTyped = true;
        }
      }
    }

    // Typing effect for h4 (starts typing at the same time as h1)
    function typeH4() {
      if (h4Index < h4Text.length) {
        h4TypedText += h4Text[h4Index];
        h4Element.textContent = h4TypedText;
        h4Index++;
      }
    }

    function resetTyping() {
      // Reset both h1 and h4 text and variables
      h1TypedText = "";
      h4TypedText = "";
      h1Index = 0;
      h4Index = 0;
      spanTyped = false;
      h1Element.innerHTML = `${h1Text}<br /><span style="color: var(--bs-pink); font-weight: bold"></span>`;
      h4Element.textContent = "";
      startTyping();
    }

    function startTyping() {
      // Type both h1 and h4 at the same time
      const typingInterval = setInterval(() => {
        typeH1();
        typeH4();

        // When both texts are fully typed, reset after delay
        if (
          h1SpanElement.textContent === h1SpanText &&
          h4Element.textContent === h4Text
        ) {
          clearInterval(typingInterval);
          setTimeout(resetTyping, loopDelay); // Wait before restarting
        }
      }, typingSpeed);
    }

    startTyping(); // Start the typing animation
  },
};
</script>
