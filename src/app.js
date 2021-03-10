const express = require("express")
const request = require("request")
const path = require("path")
const hbs = require("hbs")
const forecast = require("forecast")
const geocode = require("geocode")

const app = express()
const port = process.env.PORT || 8080

//Define paths
const srcPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials")

//Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialsPath)

//Setup static directory to serve
app.use(express.static(srcPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Matan Vinkler"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Matan Vinkler"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        help_msg: "This page has no help actually. What do you expect from a student? To provide you an help page? Have you ever though to donate your body parts while you're alive? So don't donate your brain because it's a shame for whoever that will get it."
    })
})

app.get("/weather", (req, res) => {
    if (!req.query.addr) {
        res.render("not-found", {
            title: "You must provide a search term.",
        })
        return
    }

    
})

app.get("/help/*", (req, res) => {
    res.render("not-found", {
        title: "Help article not found",
    })
})

app.get("*", (req, res) => {
    res.render("not-found", {
        title: "Page not found",
    })
})

app.listen(port, () => {
    console.log("The server is up on port " + port + ".")
})