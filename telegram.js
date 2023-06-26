const client = window.Telegram.WebApp;

const closeWindows = () => {
    client.close();
}

const button = document.getElementById("onClose");
button.addEventListener("click", closeWindows);