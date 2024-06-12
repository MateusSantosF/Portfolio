export const useGoogleAnalytics = () => {
  const triggerEvent = (
    eventName: string,
    eventParams: { [key: string]: string }
  ) => {
    try {
      window?.gtag("event", eventName, eventParams);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    triggerEvent,
  };
};
