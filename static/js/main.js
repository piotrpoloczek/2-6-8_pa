
window.onload = () => {
    const button = document.querySelector('#buttonFilterModal');
    button.addEventListener("click", addEventToModal);
    console.log(window.sessionStorage.getItem("rating_limit"))
}  

function addEventToModal () {
    console.log("fadfa")
    let saveButton = document.querySelector("#save-board");
    saveButton.addEventListener("click", saveToSession)
    
    let closeButton = document.querySelector("#close-modal")
    closeButton.addEventListener("click", )
}

async function saveToSession () {
    console.log("save to session")
    let inputText = document.querySelector("#title-board")
    console.log(inputText.value)
    window.sessionStorage.setItem("rating_limit", inputText.value)
    await apiPost(
        "http://127.0.0.1:5000/api-get",
        {
            "rating_limit": inputText.value
        }
    )
}




async function apiPost (url, payload) {
    let response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(
            payload
        ),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const jsonResponse = await response.json();
    return jsonResponse;
}