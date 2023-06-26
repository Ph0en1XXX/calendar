const client = window.Telegram.WebApp;

const closeWindows = () => {
    console.log(client);
    client.sendData({ text: "123" });
}

const button = document.getElementById("onClose");
button.addEventListener("click", closeWindows);