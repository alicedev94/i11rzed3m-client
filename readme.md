## Ejemplo de Uso del Endpoint para Enviar Notificaciones 

```javascript
<template>
  <div>
    <h1>CLIENT IN VUE</h1>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { send } from 'i11rzed3m';

const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const server = import.meta.env.VITE_SERVER; // http://localhost:3000

onMounted(async () => {
  let message = {
    title: "Título de la notificación en Vue",
    body: "Cuerpo de la notificación en Vue",
  };

  try {
    const response = await send(server, message, publicKey);
    console.log('Notificación enviada:', response);
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
  }
});
</script>

```javascript

## Configuración del Service Worker

Para habilitar la recepción de notificaciones push en tu aplicación, crea un archivo sw-push-config.js en la carpeta public con el siguiente contenido:


```javascript
self.addEventListener("push", (event) => {
  const data = event.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: data.icon,
  });
});
