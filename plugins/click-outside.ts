// plugins/click-outside.ts
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', {
    beforeMount(el, binding) {
      el.clickOutsideEvent = (event: Event) => {
        // Daftar semua trigger yang harus di-ignore (termasuk mobile)
        const triggers = [
          '[aria-label="User Profile"]', // Ini akan mencakup desktop dan mobile
          '[aria-label="Shopping Cart"]',
          '[aria-label="Notifications"]',
          '[aria-label="Filter"]'
        ];
        
        // Cek semua kemungkinan trigger
        const isTriggerClicked = triggers.some(selector => {
          const elements = document.querySelectorAll(selector);
          return Array.from(elements).some(trigger => {
            return trigger === event.target || 
                   trigger.contains(event.target as Node) ||
                   // Tambahan untuk handle kasus mobile
                   (event.target instanceof HTMLElement && 
                    event.target.closest(selector) === trigger);
          });
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