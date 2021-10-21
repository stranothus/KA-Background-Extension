var backgroundImage = "https://cdn.kastatic.org/images/profile/backgrounds/bg-photon-2.jpg";


window.onload = () => {
    var timer = window.setInterval(() => {
        var backgroundElement = document.getElementsByClassName("user-info");
        if(backgroundElement.length !== 0) {
            window.clearInterval(timer);
            chrome.storage.sync.get("KA-background-image", (object) => {
                backgroundElement[0].style.backgroundImage = "url(" + (typeof object["KA-background-image"] === "string" ? object["KA-background-image"] : backgroundImage) + ")";

                chrome.storage.onChanged.addListener(() => {
                    chrome.storage.sync.get("KA-background-image", (object) => {
                        backgroundElement[0].style.backgroundImage = "url(" + object["KA-background-image"] + ")";
                    });
                });
            });
        }
    }, 1000 / 60);
};