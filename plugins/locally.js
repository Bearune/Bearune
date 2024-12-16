export default defineNuxtPlugin(() => {
  return {
    provide: {
      locally: {
        getItem(item) {
          if (import.meta.client) {
            return localStorage.getItem(item);
          } else {
            return undefined;
          }
        },
        setItem(item, value) {
          if (import.meta.client) {
            return localStorage.setItem(item, value);
          }
        },
        clear(item) {
          if (import.meta.client) {
            localStorage.removeItem(item);
          }
        }
      }
    }
  };
});
