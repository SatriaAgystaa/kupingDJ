export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    beforeMount(el, binding) {
      el.clickOutsideEvent = (event: Event) => {
        // Daftar semua trigger yang harus di-ignore
        const triggers = [
          '[aria-label="Shopping Cart"]',
          '[aria-label="Notifications"]',
          '[aria-label="User Profile"]',
          '[aria-label="Filter"]'
        ];
        
        // Cek apakah yang diklik adalah salah satu trigger atau anaknya
        const isTriggerClicked = triggers.some(selector => {
          const trigger = document.querySelector(selector);
          return trigger && (event.target === trigger || trigger.contains(event.target as Node));
        });
        
        if (isTriggerClicked) return;
        
        // Jika klik di luar, jalankan fungsi
        if (!(el === event.target || el.contains(event.target as Node))) {
          binding.value(event);
        }
      };
      document.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
      document.removeEventListener('click', el.clickOutsideEvent);
    }
  });
});