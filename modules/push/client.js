import axios from "axios";

export function active() {
  if ("serviceWorker" in navigator) {
    alert("serviceWorker: active");
  } else {
    alert("serviceWorker: false");
  }
}

export const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

export const configSw = () => {
  self.addEventListener("push", (event) => {
    const data = event.data.json();
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon,
    });
  });
};

export const subscribe = async (publicKey) => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/firebase-messaging-sw.js");
      console.log("Service Worker registrado:", registration);
      
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log("Permiso de notificaciones concedido");
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(publicKey),
        });

        return subscription;
      } else {
        console.error("Permiso de notificaciones denegado");
      }
    } catch (error) {
      console.error("Error al registrar Service Worker o suscribirse a notificaciones:", error);
    }
  }
};

export const send = async (url, message) => {
  try {
    const payload = JSON.stringify(message);
    const subscription = await subscribe();

    const response = await axios.post(`${url}/send-notification`, { payload, subscription });
    const { data } = response;

    console.log(data);
    return data;
  } catch (error) {
    console.error('Error al enviar la notificación:', error.message);
    throw error; 
  }
};
