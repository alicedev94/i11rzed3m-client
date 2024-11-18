export default class serviceWorker {
    static active () {
        if("serviceWorker" in navigator) {
            alert("serviceWorker: active");
        } else {
            alert("serviceWorker: false");
        }
    }
}