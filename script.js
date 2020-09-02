function setSearchEngine() {
    let engineInput = document.querySelector("input[name=engine]:checked");

    let actions = {
        "google": "https://www.google.com/",
        "duckduck": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web"
    }

    const keys = Object.keys(actions);
    const values = Object.values(actions);

    let searchTerm = document.getElementById("searchbox");

    //input validation for search text box and search engine selection
    if (searchTerm.value === "" || !engineInput) {
        alert("All fields are required!");
    } else {
        for (let i = 0; i < keys.length; i++) {
            if (keys[i] === engineInput.value) {
                document.getElementsByTagName("form")[0].setAttribute("action", values[i]);
            }
        }
    }
}

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", setSearchEngine);
});