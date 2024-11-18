import webpush from "web-push";

export default class serviceWorker {
  static active() {
    if ("serviceWorker" in navigator) {
      alert("serviceWorker: active");
    } else {
      alert("serviceWorker: false");
    }
  }

  init() {
    webpush.setVapidDetails(mailto, publicKey, privateKey);
  }

  async sendNotification(subscription, payload) {
    const response = await webpush.sendNotification(subscription, payload);
    return response;
  }
}
