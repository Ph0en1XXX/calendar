const client = window.Telegram.WebApp;

const closeWindows = () => {
    client.sendData("123");
}

const button = document.getElementById("onClose");
button.addEventListener("click", closeWindows);