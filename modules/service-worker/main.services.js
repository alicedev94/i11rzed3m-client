import webpush from "web-push";

// const publicKey = process.env.PUBLIC_KEY;
// const privateKey = process.env.PRIVATE_KEY;
// const mailto = process.env.MAILTO;

export default class PushNotificationService {
  // Client service
  static active() {
    if ("serviceWorker" in navigator) {
      alert("serviceWorker: active");
    } else {
      alert("serviceWorker: false");
    }
  }

  // Server service
  init(publicKey, privateKey) {
    webpush.setVapidDetails("mailto:example@yourdomain.org", publicKey, privateKey);
  }

  // Server service
  async sendNotification(subscription, payload) {
    try {
      const response = await webpush.sendNotification(subscription, payload);
      return response;
    } catch (error) {
      console.error("sendNotification:", error.message);
      return {
        error: true,
        description_error: error.message,
      };
    }
  }
}
