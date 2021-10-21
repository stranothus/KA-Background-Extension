//var file = document.getElementById("file-image");

var input = document.getElementById("text-image");


function updateImage(value) {
    chrome.storage.sync.remove("KA-background-image");
    chrome.storage.sync.set({"KA-background-image" : value});
}


/*file.addEventListener("input", function() {
    updateImage(String(file.files[0]));
});*/

input.addEventListener("input", function() {
    updateImage(input.value);
});