let openRequest = indexedDB.open("myDatabase");
let db;
openRequest.addEventListener("success", () => {
    db = openRequest.result;
});

openRequest.addEventListener("upgradeneeded", () => {
// trigger if the client had no database
//.... perform initialization
db = openRequest.result;
db.createObjectStore("video", {keyPath:"id"});
db.createObjectStore("image", {keyPath:"id"});

});
 openRequest.addEventListener("error", () => {
    console.error("Error", openRequest.error);
 });