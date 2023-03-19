//register globally in mainjs
createApp(App)
  .directive("click-outside", {
    mounted(el, binding) {
      el.__ClickOutsideHandler___ = (event) => {
        if (!(el === event.target || el.contains(event.target))) {
          binding.value(event);
        }
      };
      document.body.addEventListener("click", __ClickOutsideHandler___);
    },
    unmounted(el) {
      document.body.removeEventListener("click", __ClickOutsideHandler___);
    },
  })
  .mount("#app");

//another example
import ClickOutsideDirective from "ClickOutsideDirective";
createApp(App).directive("click-outside", ClickOutsideDirective).mount("#app");
