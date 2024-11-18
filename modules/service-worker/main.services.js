import webpush from "web-push";

export default class serviceWorker {
  // Client service
  static active() {
    if ("serviceWorker" in navigator) {
      alert("serviceWorker: active");
    } else {
      alert("serviceWorker: false");
    }
  }

  // Server service
  init() {
    webpush.setVapidDetails(mailto, publicKey, privateKey);
  }

  // Server service
  async sendNotification(subscription, payload) {
    const response = await webpush.sendNotification(subscription, payload);
    return response;
  }
}
