export function active() {
  if ("serviceWorker" in navigator) {
    alert("serviceWorker: active");
  } else {
    alert("serviceWorker: false");
  }
};
