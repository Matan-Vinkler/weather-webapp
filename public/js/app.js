const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")
const current = document.querySelector("#current")

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    fetch("/weather?addr=" + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }
        })
    })
})

current.addEventListener("click", (e) => {
    e.preventDefault()

    navigator.geolocation.getCurrentPosition((pos) => {
        var lat = pos.coords.latitude
        var long = pos.coords.longitude

        messageOne.textContent = "Loading..."
        messageTwo.textContent = ""

        fetch(`/weather/current?lat=${lat}&long=${long}`).then((response) => {
            response.json().then((data) => {
                if(data.error) {
                    messageOne.textContent = data.error
                }
                else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
            })
        })
    })
})