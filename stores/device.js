export const useDeviceStore = defineStore('device', () => {
  const device = useDevice();
  const isMobile = computed(() => device.isMobile);
  const isTablet = computed(() => device.isTablet);
  const isDesktop = computed(() => device.isDesktop);

  return {
    device,
    isMobile,
    isTablet,
    isDesktop,
  };
});