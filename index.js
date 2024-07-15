const greeting = document.querySelector("#greeting");

async function get(url) {
    const response = await fetch(url);
    return response.json();
}

async function update(url) {
    const data = await get("http://ip-api.com/json/");
    greeting.innerText = "Hello, " + data.country + "." || "Hello, stranger.";
}

update("http://ip-api.com/json/");