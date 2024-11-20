// import webpush from "web-push";

// Client service
// export function active() {
//   if ("serviceWorker" in navigator) {
//     alert("serviceWorker: active");
//   } else {
//     alert("serviceWorker: false");
//   }
// }

// Client service
// export const urlBase64ToUint8Array = (base64String) => {
//   const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//   const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);
//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// };

// // Server service
// export const init = (publicKey, privateKey) => {
//   webpush.setVapidDetails(
//     "mailto:example@yourdomain.org",
//     publicKey,
//     privateKey
//   );
// };

// // Server service
// export const sendNotification = async (subscription, payload) => {
//   try {
//     const response = await webpush.sendNotification(subscription, payload);
//     return response;
//   } catch (error) {
//     console.error("sendNotification:", error.message);
//     return {
//       error: true,
//       description_error: error.message,
//     };
//   }
// };

export const sum = () => {
  return 1 + 2;
};
