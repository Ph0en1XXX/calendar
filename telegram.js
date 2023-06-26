const client = window.Telegram.WebApp;

const closeWindows = () => {
    console.log(client);
    client.sendData("gsdfgdfsgdffdgfgdgfd");
    // client.postEvent('message', '123');
}

const button = document.getElementById("onClose");
button.addEventListener("click", closeWindows);